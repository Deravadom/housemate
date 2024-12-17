import { useQuery } from "@apollo/client"
import { Leftover, LeftoversDocument } from "../../__generated__/graphql"
import LeftoversList from "./LeftoversList"
import HasItems from "../errors/HasItems"

const LeftoversPage = () => {
  const { data } = useQuery(LeftoversDocument)

  return (
    <div className="flex flex-column">
      <HasItems items={data?.leftovers}>
        <LeftoversList leftovers={data?.leftovers! as Leftover[]} />
      </HasItems>
    </div>
  )
}

export default LeftoversPage