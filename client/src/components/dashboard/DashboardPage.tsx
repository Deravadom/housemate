import { useNavigate } from "react-router-dom"
import routes from "../../routes"
import { capitalize} from "../../utils/stringUtils"

const { timeline, testApi, leftovers } = routes
const pages = [timeline, leftovers, testApi]

const DashboardPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-column h-100 justify-around items-center flex-wrap mv2 mh3">
      {pages.map(page => (
        <button
          className="w5 h3 f4 ba flex-nowrap mv2 tc lh-copy br3"
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