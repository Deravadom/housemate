import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CurrentUserDocument } from "../__generated__/graphql";
import DropMenu, { Option } from "./dropdown/DropMenu";
import { CSSProperties, useState } from "react";
import Modal from "./modal/Modal";

const Header = () => {
  const navigate = useNavigate()
  const { data, loading } = useQuery(CurrentUserDocument)
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

  const { name, email } = data?.currentUser || {}
  return (
    <>
      <div className="f1 flex flex-row justify-end bg-moon-gray w-100 h3">
        {/* <button className="w3 h2 mh2 f6 self-center" onClick={logout}>Logout</button> */}
        <button className="w50 f3-l f5" onClick={() => setOpen(true)}>+</button>
        <DropMenu options={options} />
        <Modal open={open} setOpen={setOpen}>
          Foo bar
        </Modal>
      </div>
    </>
  )
}

export default Header;
