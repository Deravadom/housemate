import { useContext, createContext, PropsWithChildren, useState, useMemo } from "react";
import { To, useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  useCurrentUserQuery,
  LoginMutationVariables,
  SignupMutationVariables,
  User,
  useLoginMutation,
  useSignupMutation
} from "src/__generated__/types";

type Login = (data: LoginMutationVariables, to: To) => void
type Signup = (data: SignupMutationVariables, to: To) => void

type AuthType = {
  token: string | null
  login: Login
  signup: Signup
  logout: () => void
  signedIn: boolean
  currentUser?: User | null
}

const AuthContext = createContext<AuthType | null>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [apiLogin] = useLoginMutation()
  const [apiSignup] = useSignupMutation()
  const [token, setToken] = useState(localStorage.getItem("housemate-bearer"))
  const navigate = useNavigate()

  const { data } = useCurrentUserQuery({
    skip: !token
  })

  const currentUser = data?.currentUser as User | null | undefined;

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

  const signedIn = useMemo(() => !!token, [token])

  return (
    <AuthContext.Provider value={{ token, login, signup, logout, signedIn, currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)!
}