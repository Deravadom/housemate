import { useForm, type SubmitHandler } from "react-hook-form"
import { useAuth } from "./AuthProvider";
import { type To } from "react-router";
import type { MutationLoginArgs } from "src/__generated__/types";

const defaultValues = {
  email: "test@example.com",
  password: "password"
}

type Props = {
  to: To,
  toggleSignup: () => void
}
const LoginForm = ({ to, toggleSignup }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<MutationLoginArgs>({ defaultValues })
  const { login } = useAuth();

  const onSubmit: SubmitHandler<MutationLoginArgs> = (data) => {
    login(data, to)
  }

  return (
    <div className="flex flex-column w-100 items-center">
      <div className="f1 flex flex-row justify-center bg-moon-gray w-100 h3 mb3">
        <span className="f3 self-center">Welcome to Housemate</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column ba br3 ph2 pv2 b--white">
        <label className="mr-auto">Email</label>
        <input
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
          className="mb3"
        />
        {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
        <label>Password</label>
        <input
          {...register("password", { required: true })}
          aria-invalid={errors.password ? "true" : "false"}
          className="mb3"
        />
        {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
        <input type="submit" value="Log In" className="w3 ml-auto bg-red" />
      </form>

      <button className="mt2" onClick={toggleSignup}>Create Account</button>
    </div>
  )
}

export default LoginForm