import { PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthProvider"

const AuthedRoute = ({ children }: PropsWithChildren) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}


export default AuthedRoute