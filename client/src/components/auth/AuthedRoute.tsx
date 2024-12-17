import { PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthProvider"
import Header from "../header";

const AuthedRoute = ({ children }: PropsWithChildren) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />
  }

  return <>
    <Header />
    {children}
  </>
}


export default AuthedRoute