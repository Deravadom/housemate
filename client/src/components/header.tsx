import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CurrentUserDocument } from "../__generated__/graphql";
import DropMenu, { Option } from "./dropdown/DropMenu";

const Header = () => {
  const navigate = useNavigate()
  const { data, loading } = useQuery(CurrentUserDocument)

  const logout = () => {
    localStorage.setItem('housemate-bearer', '')
    navigate("/login")
  }

  const options:Option[] = [
    {
      label: "Logout",
      onSelect: logout
    },
  ]

  const { name, email } = data?.currentUser || {}
  return (
    <div className="f1 flex flex-row justify-end bg-moon-gray w-100 h3">
      {/* <button className="w3 h2 mh2 f6 self-center" onClick={logout}>Logout</button> */}
      {/* <button className="w50 f3-l f5">HM</button> */}
      <DropMenu options={options}/>
    </div>
  )
}

export default Header;
