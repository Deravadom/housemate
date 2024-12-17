import { useMutation } from "@apollo/client"
import { CreateLeftoverDocument, MutationCreateLeftoverArgs } from "../../__generated__/graphql"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react"
import { ModalContext } from "../modal/Modal"
import FormInput from "../forms/FormInput"

const defaultValues: Partial<MutationCreateLeftoverArgs> = {
}

const defaultClass =
  "f3 mv2 lh-copy"

const CreateLeftoverForm = () => {
  const [createLeftover] = useMutation(CreateLeftoverDocument)
  const { register, handleSubmit, formState: { errors}} = useForm<MutationCreateLeftoverArgs>({ defaultValues})
  const { close} = useContext(ModalContext)

  const onSubmit: SubmitHandler<MutationCreateLeftoverArgs> = (data) => {
    createLeftover({
      variables: data,
      refetchQueries: ["leftovers"],
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
      <span className="f2 b self-center">Create Leftover</span>
      <FormInput
        placeholder="Name"
        fieldName="name"
        inputClass={defaultClass}
        errorField={errors.name}
        required
        {...commonProps}
      />
      <FormInput
        label="Trash By"
        labelClass="f3 lh-copy"
        inputClass={defaultClass}
        fieldName="trashBy"
        {...commonProps}
        type="date"
        required
      />
      <input type="submit" value="Submit" className="mt3 f3 self-end" />
    </form>
  )
}

export default CreateLeftoverForm