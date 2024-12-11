import { useContext } from "react"
import { ModalContext } from "../../modal/Modal"
import { useMutation } from "@apollo/client"
import { DeleteTimelineItemDocument } from "../../../__generated__/graphql"

type Props = {
  id: string
}

const DeleteItemForm = ({id}: Props) => {
  const { close } = useContext(ModalContext)
  const [deleteItem] = useMutation(DeleteTimelineItemDocument, {
    variables: { id },
    refetchQueries: ["timelineItems"]
  })

  return (
    <div className="flex flex-column mh3 mv3">
      <span className="f2 b self-center">Confirm Delete</span>
      <span className="f3 tc">Are you sure you want to delete this?</span>
      <input type="submit" value="Delete Item" className="mt5 h3 f3" onClick={() => deleteItem()}/>
    </div>
  )
}

export default DeleteItemForm