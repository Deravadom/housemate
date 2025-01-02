import useToggle from '../../hooks/useToggle'
import DropMenu, { Option } from '../dropdown/DropMenu'
import Modal from '../modal/Modal'
import DeleteItemForm from './forms/DeleteItemForm'
import EditItemForm from './forms/EditItemForm'

type FrequencyUnit = 'day' | 'week' | 'month' | 'year'

export type ItemProps = {
  id: string
  title: string
  body?: string | null
  // frequencyUnit: FrequencyUnit
  // frequencyValue: number
  frequency?: string | null
  lastCompletedAt?: Date | null
  dueAt?: Date | null
  color?: string | null
}

const Item = ({
  id,
  title,
  body,
  // frequencyUnit,
  // frequencyValue,
  frequency,
  lastCompletedAt,
  dueAt,
  color
}: ItemProps) => {
  const [showDetails, toggleShowDetails] = useToggle()
  const [trashOpen, toggleTrash] = useToggle()
  const [editOpen, toggleEdit] = useToggle()

  const options: Option[] = [
    { label: "Delete", onSelect: () => toggleTrash() },
    { label: "Edit", onSelect: () => toggleEdit() }
  ]

  return (
    <div 
      className={`flex flex-row justify-between items-center ba b--white bg-${color} mv2 mh2`} 
      onClick={toggleShowDetails}
    >
      <div className={`flex flex-column justify-center`}>
        <span className='f3 ml1'>{title}</span>
        {showDetails && (
          <div>
            {body && <p>{body}</p>}
            {/* <p>{frequencyValue} {frequencyUnit}</p>
          <p>{lastCompletedAt?.toLocaleDateString()}</p> */}
            {frequency && <p>{frequency}</p>}
            {dueAt && <p>{dueAt.toLocaleDateString()}</p>}
          </div>
        )}
      </div>
      <DropMenu options={options} className='mv1 mh1 h2'/>
      <Modal open={trashOpen} setOpen={toggleTrash}>
        <DeleteItemForm id={id} />
      </Modal>
      <Modal open={editOpen} setOpen={toggleEdit}>
        <EditItemForm id={id} />
      </Modal>
    </div>
  )
}

export default Item
