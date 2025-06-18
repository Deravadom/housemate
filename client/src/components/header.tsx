import { useNavigate } from "react-router";
import DropMenu, { type Option } from "./dropdown/DropMenu";
import { useState, type JSX } from "react";
import Modal from "./modal/Modal";
import CreateItemForm from "./timeline/forms/CreateItemForm";
import CaseWrapper from "./CaseWrapper";
import CreateLeftoverForm from "./leftovers/CreateLeftoverForm";
import { routeName } from "src/utils/stringUtils";
import Row from "./flex/Row";
import { PRIMARY } from "src/utils/colors";

const cases: Record<string, JSX.Element> = {
  ['/timeline']: <CreateItemForm />,
  ['/leftovers']: <CreateLeftoverForm />
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
    navigate('/login')
  }

  const options: Option[] = [
    {
      label: "Dashboard",
      onSelect: () => navigate('/dashboard')
    },
    {
      label: "Timeline",
      onSelect: () => navigate('/timeline')
    },
    {
      label: "Leftovers",
      onSelect: () => navigate('/leftovers')
    },
    {
      label: "Logout",
      onSelect: logout
    },
  ].filter(({ label }) => label !== name)

  const showButton = !!cases[window.location.pathname]

  return (
    <Row className="justify-end w-full gap-4 items-center p-4">
      <span className="lg:text-4xl text-sm">{name}</span>
      {showButton && (
        <button className="bg-red-200" onClick={() => setOpen(true)}>+</button>
      )}
      <DropMenu
        options={options}
        className="w-12 h-12"
        buttonColor={PRIMARY}
        menuClass="bg-tertiary -ml-12 rounded-mg"
        buttonClass="w-12 h-12 rounded hover:bg-tertiary"
      />
      <Modal open={open} setOpen={setOpen}>
        <DynamicCreate />
      </Modal>
    </Row>
  )
}

export default Header;
