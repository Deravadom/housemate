import { useNavigate } from "react-router"
import { capitalize } from "../../utils/stringUtils"
const pages = ['/timeline', '/leftovers', '/households']

const DashboardPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-100 justify-around items-center flex-wrap my-2 mx-3">
      {pages.map(page => (
        <button
          className="border flex-nowrap my-2 rounded"
          key={page}
          onClick={() => navigate(page)}
        >
          {capitalize(page)}
        </button>
      ))}
    </div>
  )
}

export default DashboardPage