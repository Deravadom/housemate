import { User } from "../../__generated__/graphql"
import useToggle from "../../hooks/useToggle"

type Props = {
  name: string
  users: User[] | null | undefined
}
const HouseholdItem = ({ name, users }: Props) => {
  const [showDetails, toggleShowDetails] = useToggle()

  return (
    <div
      className="flex flex-row justify-between items-center ba b--white mv2 mh2"
      onClick={toggleShowDetails}
    >
      <div className="flex flex-column justify-center w-100">
        <div className="flex flex-row justify-between">
          <span className="f3 ml1">{name}</span>
          <span className="f3 ml1">Members: {users?.length}</span>
        </div>
        {showDetails && (
          <div className="flex flex-column">
            {users?.map(({name, email}) => (
              <div className="flex flex-row">
                {name}
                {email}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HouseholdItem