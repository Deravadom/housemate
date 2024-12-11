import { SubmitHandler, useForm } from "react-hook-form";
import { CreateTimelineItemDocument, MutationCreateTimelineItemArgs } from "../../__generated__/graphql";
import { useMutation } from "@apollo/client";
import FormInput from "../forms/FormInput";

const defaultValues: Partial<MutationCreateTimelineItemArgs> = {
  color: "blue"
}

const CreateItemForm = () => {
  const [createItem] = useMutation(CreateTimelineItemDocument)
  const { register, handleSubmit, formState: { errors }} = useForm<MutationCreateTimelineItemArgs>({defaultValues})

  const onSubmit:SubmitHandler<MutationCreateTimelineItemArgs> = (data) => {
    createItem({variables: data})
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column w5">
      <FormInput label="Title" fieldName="title" errorField={errors.title} register={register} required/>
      <FormInput label="Body" fieldName="body" errorField={errors.body} register={register}/>
      <FormInput label="Color" fieldName="color" errorField={errors.color} register={register} type="color" />
      <FormInput label="Units" fieldName="frequencyUnit" errorField={errors.frequencyUnit} register={register}/>
      <FormInput label="Value" fieldName="frequencyValue" errorField={errors.frequencyValue} register={register} type="number" />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default CreateItemForm;