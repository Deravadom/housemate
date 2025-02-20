import { To } from "react-router-dom"
import { useAuth } from "./AuthProvider"
import { SubmitHandler, useForm } from "react-hook-form"
import { MutationSignupArgs } from "../../__generated__/graphql"
import FormInput from "../forms/FormInput"

type Props = {
  to: To
  toggleSignup: () => void
}
const SignupForm = ({ to, toggleSignup }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<MutationSignupArgs>()
  const { signup } = useAuth();

  const onSubmit: SubmitHandler<MutationSignupArgs> = (data) => {
    signup(data, to)
  }

  return (
    <div className="flex flex-column w-100 items-center">
      <div className="f1 flex flex-row justify-center bg-moon-gray w-100 h3 mb3">
        <span className="f3 self-center">Welcome to Housemate</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column ba br3 ph2 pv2 b--white">
        <FormInput
          register={register}
          labelClass="mr-auto"
          label="Email"
          fieldName="email"
          required
          errorField={errors.email}
          inputClass="mb3"
          errorMessage="Email is required"
        />
        <FormInput
          register={register}
          label="Password"
          fieldName="password"
          required
          errorField={errors.password}
          inputClass="mb3"
          errorMessage="Password is required"
        />
        <FormInput
          register={register}
          label="Name"
          fieldName="name"
          inputClass="mb3"
        />
        <input type="submit" value="Sign Up" className="w3 ml-auto" />
      </form>

      <button className="mt2" onClick={toggleSignup}>Log in</button>
    </div>
  )
}

export default SignupForm