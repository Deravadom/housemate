import { useMutation, useQuery } from "@apollo/client"
import { EditTimelineItemDocument, MutationCreateTimelineItemArgs, MutationEditTimelineItemArgs, TimelineItem, TimelineItemDocument } from "../../../__generated__/graphql"
import { objectWithoutKeys } from "../../../utils/objectUtils"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react"
import { ModalContext } from "../../modal/Modal"
import FormInput from "../../forms/FormInput"
import TextAreaInput from "../../forms/TextAreaInput"

const defaultClass = 
  "f3 mv2 lh-copy"

type Props = {
  id: string
}

type ContentProps = Props & {
  item: TimelineItem
}

const EditItemFormContent = ({id, item}: ContentProps) => {
  const [editIem] = useMutation(EditTimelineItemDocument, { refetchQueries: [
    { query: TimelineItemDocument, variables: { id }}
  ]})
  const { close } = useContext(ModalContext) 

  const defaultValues: Partial<MutationCreateTimelineItemArgs> = objectWithoutKeys(item, "__typename")
  const { register, handleSubmit, formState: { errors } } = useForm<MutationEditTimelineItemArgs>({ defaultValues })

  const onSubmit: SubmitHandler<MutationEditTimelineItemArgs> = (data) => {
    editIem({ variables: data, onCompleted: close})
  }

  const commonProps = {
    register,
    errorClass: "red f6 tr nt2 mb2",
    errorSpaceClass: "mb2"
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column w5 mv2 mh3 justify-around">
      <span className="f2 b self-center">Edit Item</span>
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
        placeholder="Units"
        inputClass={`${defaultClass}`}
        fieldName="frequencyUnit"
        errorField={errors.frequencyUnit}
        {...commonProps}
      />
      <FormInput
        placeholder="Value"
        inputClass={`${defaultClass}`}
        fieldName="frequencyValue"
        errorField={errors.frequencyValue}
        {...commonProps}
        type="number"
      />
      <input type="submit" value="Submit" className={`mt3 f3 self-end`} />
    </form>
  )
}

const EditItemForm = ({id}: Props) => {
  const { data } = useQuery(TimelineItemDocument, { variables: { id }})
  
  if(!data?.timelineItem) return <></>

  return <EditItemFormContent id={id} item={data.timelineItem as TimelineItem} />
}

export default EditItemForm