import { type PropsWithChildren } from "react"
import { useAuth } from "./AuthProvider"
import Header from "../header";
import { Navigate } from "react-router";

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