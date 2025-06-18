import useToggle from "../../hooks/useToggle";
import LoginForm from "./LoginForm";
import { To } from "react-router"
import SignupForm from "./SignupForm";

type Props = {
  to: To
}

const AuthPage = ({ to }: Props) => {
  const [signup, toggleSignup] = useToggle(false)

  if (!signup) {
    return <LoginForm to={to} toggleSignup={toggleSignup} />
  }

  return <SignupForm to={to} toggleSignup={toggleSignup} />
}

export default AuthPage;