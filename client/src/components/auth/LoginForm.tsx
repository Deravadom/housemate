import { useForm, SubmitHandler } from "react-hook-form"
import { MutationLoginArgs } from "../../__generated__/graphql";
import { useAuth } from "./AuthProvider";
import { To } from "react-router-dom";

const defaultValues = {
  email: "test@example.com",
  password: "password"
}

type Props = {
  to: To
}
const LoginForm = ({ to }: Props) => {
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
        <input type="submit" value="Log In" className="w3 ml-auto"/>
      </form>
    </div>
  )
}

export default LoginForm