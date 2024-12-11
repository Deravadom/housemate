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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column w5">
      <label>Email</label>
      <input
        {...register("email", { required: true })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
      <label>Password</label>
      <input
        {...register("password", { required: true })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
      <input type="submit" value="Log In" />
    </form>
  )
}

export default LoginForm