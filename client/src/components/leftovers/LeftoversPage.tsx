import { useQuery } from "@apollo/client"
import LeftoversList from "./LeftoversList"
import HasItems from "../errors/HasItems"
import { LeftoversDocument, type Leftover } from "src/__generated__/types"

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