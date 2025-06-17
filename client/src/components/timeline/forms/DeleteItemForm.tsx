import { useMutation } from "@apollo/client"
import { DeleteTimelineItemDocument } from "src/__generated__/types"

type Props = {
  id: string
}

const DeleteItemForm = ({ id }: Props) => {
  const [deleteItem] = useMutation(DeleteTimelineItemDocument, {
    variables: { id },
    refetchQueries: ["timelineItems"]
  })

  return (
    <div className="flex flex-column mh3 mv3">
      <span className="f3 b self-center">Confirm Delete</span>
      <span className="f4 tc">Are you sure you want to delete this?</span>
      <input type="submit" value="Delete Item" className="mt4 h2 f4" onClick={() => deleteItem()} />
    </div>
  )
}

export default DeleteItemForm