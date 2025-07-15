import { LoginMutationVariables, SignupMutationVariables, useCurrentUserQuery, useLoginMutation, User, useSignupMutation } from "@/__generated__/types";
import { useRouter } from "expo-router";
import { useContext, createContext, PropsWithChildren, useState, useMemo, useEffect } from "react";
import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";

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
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    getItemAsync("housemate-bearer").then(setToken)
  }, [])

  const router = useRouter()

  const { data } = useCurrentUserQuery({
    skip: !token
  })

  const currentUser = data?.currentUser as User | null | undefined;

  const login: Login = (data, to) => {
    apiLogin({ variables: data }).then(res => {
      setItemAsync('housemate-bearer', res.data?.login?.token)
      setToken(res.data?.login?.token)
      router.push(to as any)
    }).catch((e) => {
      console.error(e)
      console.error("Login failed")
    })
  }

  const signup: Signup = (data, to) => {
    apiSignup({ variables: data }).then(res => {
      setItemAsync('housemate-bearer', res.data?.signup?.token)
      setToken(res.data?.signup?.token)
      router.push(to as any)
    }).catch(() => {
      console.error("Signup failed")
    })
  }

  const logout = () => {
    deleteItemAsync('housemate-bearer')
    setToken(null)
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