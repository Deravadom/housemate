import type { Leftover } from "src/__generated__/types"

type Props = {
  leftovers: Leftover[]
}
const LeftoversList = ({ leftovers }: Props) => {
  return (
    <div className="flex flex-column">
      {leftovers.map(({ name, id, trashBy }) => (
        <div key={id} className="flex flex-row justify-between">
          <span>{name}</span>
          <span>{new Date(trashBy).toDateString()}</span>
        </div>
      ))}
    </div>
  )
}

export default LeftoversList