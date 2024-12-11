import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.setItem('housemate-bearer', '')
    navigate("/login")
  }
  return (
    <div className="f1 flex flex-row justify-between bg-moon-gray w-100">
      <span className="w50">Housemate</span>
      <button className="w3 h2 mh2 f6 self-center" onClick={logout}>Logout</button>
    </div>
  )
}

export default Header;
