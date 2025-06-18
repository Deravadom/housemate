import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import FormSelect, { FormSelectOption } from "../../forms/FormSelect";
import { MutationCreateTimelineItemArgs, useCreateTimelineItemMutation } from "src/__generated__/types";
import { useModal } from "src/components/modal/Modal";
import FormInput from "src/components/forms/FormInput";
import TextAreaInput from "src/components/forms/TextAreaInput";
import Col from "src/components/flex/Col";

export const UNIT_OPTIONS: FormSelectOption<FieldValues>[] = [
  { value: "days", label: "Day(s)" },
  { value: "weeks", label: "Week(s)" },
  { value: "months", label: "Month(s)" }
]

const defaultValues: Partial<MutationCreateTimelineItemArgs> = {
}

const defaultClass = "text-lg my-2"

const CreateItemForm = () => {
  const [createItem] = useCreateTimelineItemMutation()
  const formMethods = useForm<MutationCreateTimelineItemArgs>({ defaultValues })
  const { register, handleSubmit, formState: { errors } } = formMethods
  const { close } = useModal()

  const onSubmit: SubmitHandler<MutationCreateTimelineItemArgs> = (data) => {
    createItem({
      variables: data,
      refetchQueries: ["timelineItems"],
      onCompleted: close
    })
  }

  const commonProps = {
    register,
    errorClass: "text-red text-lg",
    errorSpaceClass: "mb-2"
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Col className="w-full justify-around">
          <span className="self-center">Create Item</span>
          <FormInput
            placeholder="Title*"
            inputClass={`${defaultClass}`}
            fieldName="title"
            errorField={errors.title}
            {...commonProps}
            required
          />
          <TextAreaInput
            inputClass="my-2"
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
          <input type="submit" value="Submit" className={`mt-3 self-end`} />
        </Col>
      </form>
    </FormProvider>
  )
}

export default CreateItemForm;