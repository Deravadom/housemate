import { useQuery } from "@apollo/client"
import { Household, HouseholdsDocument } from "../../__generated__/graphql"
import HasItems from "../errors/HasItems"
import HouseholdItem from "./HouseholdItem"

const HouseholdsPage = () => {
  const { data } = useQuery(HouseholdsDocument)

  const households = data?.households as Household[]

  return (
    <div className="flex flex-column">
      <HasItems items={data?.households}>
        {households?.map(({name, id, users}) => (
          <HouseholdItem key={name} {...{name, id, users}} />
        ))}
      </HasItems>
    </div>
  )
}

export default HouseholdsPage