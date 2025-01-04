import { SubmitHandler, useForm } from "react-hook-form";
import { CreateTimelineItemDocument, FrequencyEnum, MutationCreateTimelineItemArgs } from "../../../__generated__/graphql";
import { useMutation } from "@apollo/client";
import FormInput from "../../forms/FormInput";
import TextAreaInput from "../../forms/TextAreaInput";
import { useContext } from "react";
import { ModalContext } from "../../modal/Modal";
import FormSelect, { FormSelectOption } from "../../forms/FormSelect";

export const UNIT_OPTIONS: FormSelectOption[] = [
  { value: "days", label: "Day(s)"},
  { value: "weeks", label: "Week(s)"},
  { value: "months", label: "Month(s)"}
]

const defaultValues: Partial<MutationCreateTimelineItemArgs> = {
}

const defaultClass = 
  "f3 mv2 lh-copy"

const CreateItemForm = () => {
  const [createItem] = useMutation(CreateTimelineItemDocument)
  const { register, handleSubmit, formState: { errors } } = useForm<MutationCreateTimelineItemArgs>({ defaultValues })
  const { close } = useContext(ModalContext) 

  const onSubmit: SubmitHandler<MutationCreateTimelineItemArgs> = (data) => {
    createItem({ 
      variables: data, 
      refetchQueries: ["timelineItems"], 
      onCompleted: close
    })
  }

  const commonProps = {
    register,
    errorClass: "red f6 tr nt2 mb2",
    errorSpaceClass: "mb2"
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column w5 mv2 mh3 justify-around">
      <span className="f3 b self-center">Create Item</span>
      <FormInput
        placeholder="Title*"
        inputClass={`${defaultClass}`}
        fieldName="title"
        errorField={errors.title}
        {...commonProps}
        required
      />
      <TextAreaInput
        inputClass="mv2 h3 f3"
        placeholder="Body"
        fieldName="body"
        errorField={errors.body}
        {...commonProps}
      />
      <FormInput
        placeholder="Value*"
        inputClass={`${defaultClass}`}
        fieldName="frequencyValue"
        errorField={errors.frequencyValue}
        {...commonProps}
        type="number"
        required
      />
      <FormSelect
        placeholder="Units*"
        inputClass={`${defaultClass}`}
        fieldName="frequencyUnit"
        type="select"
        options={UNIT_OPTIONS}
        errorField={errors.frequencyUnit}
        {...commonProps}
        required
        />
      <input type="submit" value="Submit" className={`mt3 f3 self-end`} />
    </form>
  )
}

export default CreateItemForm;