import { useNavigate } from "react-router-dom";
import DropMenu, { Option } from "./dropdown/DropMenu";
import { useState } from "react";
import Modal from "./modal/Modal";
import CreateItemForm from "./timeline/forms/CreateItemForm";
import { routeName } from "../utils/stringUtils";

const Header = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const logout = () => {
    localStorage.setItem('housemate-bearer', '')
    navigate("/login")
  }

  const options: Option[] = [
    {
      label: "Logout",
      onSelect: logout
    },
  ]
  return (
    <>
      <div className="f1 flex flex-row justify-end bg-moon-gray w-100 h3">
        <span className="f3 mr-auto">{routeName()}</span>
        <button className="w50 f3-l f5" onClick={() => setOpen(true)}>+</button>
        <DropMenu options={options} />
        <Modal open={open} setOpen={setOpen}>
          <CreateItemForm />
        </Modal>
      </div>
    </>
  )
}

export default Header;
