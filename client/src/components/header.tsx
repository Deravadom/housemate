import { useNavigate } from "react-router-dom";
import DropMenu, { Option } from "./dropdown/DropMenu";
import { useState } from "react";
import Modal from "./modal/Modal";
import CreateItemForm from "./timeline/forms/CreateItemForm";
import { routeName } from "../utils/stringUtils";
import routes from "../routes";
import CaseWrapper from "./CaseWrapper";
import CreateLeftoverForm from "./leftovers/CreateLeftoverForm";

const cases = {
  [routes.timeline]: <CreateItemForm />,
  [routes.leftovers]: <CreateLeftoverForm />
}

const DynamicCreate = () => {
  const pathname = window.location.pathname;

  return <CaseWrapper expr={pathname} cases={cases} />
}

const Header = () => {
  const name = routeName()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const logout = () => {
    localStorage.setItem('housemate-bearer', '')
    navigate(routes.login)
  }

  const options: Option[] = [
    {
      label: "Dashboard",
      onSelect: () => navigate(routes.dashboard)
    },
    {
      label: "Timeline",
      onSelect: () => navigate(routes.timeline)
    },
    {
      label: "Leftovers",
      onSelect: () => navigate(routes.leftovers)
    },
    {
      label: "Logout",
      onSelect: logout
    },
  ].filter(({ label }) => label !== name)

  const showButton = !!cases[window.location.pathname]

  return (
    <>
      <div className="f1 flex flex-row justify-end bg-moon-gray w-100 mb3">
        <span className="f3 mr-auto ml2 self-center">{name}</span>
        {showButton && (
          <button className="w50 f5-l f4 mh3 mv2 w2 h2 br3" onClick={() => setOpen(true)}>+</button>
        )}
        <DropMenu options={options} className="w2 h2 br3 mr3 f3 mv2" />
        <Modal open={open} setOpen={setOpen}>
          <DynamicCreate />
        </Modal>
      </div>
    </>
  )
}

export default Header;
