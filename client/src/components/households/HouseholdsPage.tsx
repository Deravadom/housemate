import { useQuery } from "@apollo/client"
import HasItems from "../errors/HasItems"
import HouseholdItem from "./HouseholdItem"
import { HouseholdsDocument, type Household } from "src/__generated__/types"

const HouseholdsPage = () => {
  const { data } = useQuery(HouseholdsDocument)

  const households = data?.households as Household[]

  return (
    <div className="flex flex-column">
      <HasItems items={data?.households}>
        {households?.map(({ name, id, users }) => (
          <HouseholdItem key={name} {...{ name, id, users }} />
        ))}
      </HasItems>
    </div>
  )
}

export default HouseholdsPage