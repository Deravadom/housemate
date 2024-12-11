import { useNavigate } from "react-router-dom";
import DropMenu, { Option } from "./dropdown/DropMenu";
import { useState } from "react";
import Modal from "./modal/Modal";
import CreateItemForm from "./timeline/forms/CreateItemForm";
import { routeName } from "../utils/stringUtils";
import routes from "../routes";

const Header = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const logout = () => {
    localStorage.setItem('housemate-bearer', '')
    navigate(routes.login)
  }

  const goToDashboard = () => navigate(routes.dashboard)

  const options: Option[] = [
    {
      label: "Dashboard",
      onSelect: goToDashboard
    },
    {
      label: "Logout",
      onSelect: logout
    },
  ]
  return (
    <>
      <div className="f1 flex flex-row justify-end bg-moon-gray w-100 h3 mb3">
        <span className="f3 mr-auto self-center">{routeName()}</span>
        <button className="w50 f3-l f2 mh3 w3 h3 br4" onClick={() => setOpen(true)}>+</button>
        <DropMenu options={options} className="w3 h3 br3 mr3 f3"/>
        <Modal open={open} setOpen={setOpen}>
          <CreateItemForm />
        </Modal>
      </div>
    </>
  )
}

export default Header;
