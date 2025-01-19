import { useMutation, useQuery } from "@apollo/client"
import { CurrentUserDocument, SetHouseholdDocument, User } from "../../__generated__/graphql"
import useToggle from "../../hooks/useToggle"
import { HomeIcon } from "@radix-ui/react-icons"

type Props = {
  name: string
  users: User[] | null | undefined
  id: string
}
const HouseholdItem = ({ id, name, users }: Props) => {
  const [showDetails, toggleShowDetails] = useToggle()
  const [setHousehold] = useMutation(SetHouseholdDocument, { variables: { id } })
  const { data } = useQuery(CurrentUserDocument)

  return (
    <div
      className="flex flex-row justify-between items-center ba b--white mv2 mh2"
      onClick={toggleShowDetails}
    >
      <div className="flex flex-column justify-center w-100">
        <div className="flex flex-row justify-between mv1 mh1">
          <span className="f3 ml1">{name}</span>
          <span className="f3 ml1">Members: {users?.length}</span>
        </div>
        {showDetails && (
          <div className="flex flex-row justify-between w-100">
            <div className="flex flex-column mv1 mh1">
              {users?.map(({ name, email }) => (
                <div className="flex flex-row mv1 mh1">
                  {name}
                  {email}
                </div>
              ))}
            </div>
            {id !== data?.currentUser?.householdId &&
              <button
                className="f4 mh1 mv1 br3"
                aria-label="Change Household"
                onClick={() => setHousehold()}
              >
                <HomeIcon />
              </button>
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default HouseholdItem