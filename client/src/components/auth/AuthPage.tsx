import LoginForm from "./LoginForm";
import {To} from "react-router-dom"

type Props = {
  to: To
}

const AuthPage = ({to}:Props) => {
  return (
    <LoginForm to={to}/>
  )
}

export default AuthPage;