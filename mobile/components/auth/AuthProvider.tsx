import { LoginMutationVariables, SignupMutationVariables, useCurrentUserQuery, useLoginMutation, User, useSignupMutation } from "@/__generated__/types";
import { useRouter } from "expo-router";
import { useContext, createContext, PropsWithChildren, useState, useMemo } from "react";

type To = string
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
  const router = useRouter()

  const { data } = useCurrentUserQuery({
    skip: !token
  })

  const currentUser = data?.currentUser as User | null | undefined;

  const login: Login = (data, to) => {
    apiLogin({ variables: data }).then(res => {
      localStorage.setItem('housemate-bearer', res.data?.login?.token)
      setToken(res.data?.login?.token)
      router.push(to as any)
    }).catch(() => {
      console.error("Login failed")
    })
  }

  const signup: Signup = (data, to) => {
    apiSignup({ variables: data }).then(res => {
      localStorage.setItem('housemate-bearer', res.data?.signup?.token)
      setToken(res.data?.signup?.token)
      router.push(to as any)
    }).catch(() => {
      console.error("Signup failed")
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