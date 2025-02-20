import { useMutation } from "@apollo/client";
import { useContext, createContext, PropsWithChildren, useState } from "react";
import { To, useNavigate } from "react-router-dom";
import { LoginDocument, LoginMutationVariables, SignupDocument, SignupMutationVariables } from "../../__generated__/graphql";
import { toast } from "react-toastify";

type Login = (data: LoginMutationVariables, to: To) => void
type Signup = (data: SignupMutationVariables, to: To) => void

type AuthType = {
  token: string | null
  login: Login
  signup: Signup
  logout: () => void
}
const AuthContext = createContext<AuthType | null>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [apiLogin] = useMutation(LoginDocument)
  const [apiSignup] = useMutation(SignupDocument)
  const [token, setToken] = useState(localStorage.getItem("housemate-bearer"))
  const navigate = useNavigate()

  const login: Login = (data, to) => {
    apiLogin({ variables: data }).then(res => {
      localStorage.setItem('housemate-bearer', res.data?.login?.token)
      setToken(res.data?.login?.token)
      toast.success('Successfully Logged In!')
      navigate(to)
    }).catch(() => {
      toast.error("Login failed")
    })
  }

  const signup: Signup = (data, to) => {
    apiSignup({ variables: data }).then(res => {
      localStorage.setItem('housemate-bearer', res.data?.signup?.token)
      setToken(res.data?.signup?.token)
      toast.success('Successfully Signed Up!')
      navigate(to)
    }).catch(() => {
      toast.error("Login failed")
    })
  }

  const logout = () => {
    localStorage.removeItem('housemate-bearer')
    setToken('')
  }

  return (
    <AuthContext.Provider value={{ token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)!
}