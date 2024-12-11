import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.setItem('housemate-bearer', '')
    navigate("/login")
  }
  return (
    <div className="f1 flex flex-row justify-center bg-moon-gray w-100">
      <span className="w50">Housemate TEST API</span>
      <button className="w3 f5 mv1 mh1" onClick={logout}>Logout</button>
    </div>
  )
}

export default Header;
