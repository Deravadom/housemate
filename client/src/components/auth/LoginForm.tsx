import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form"
import { UserLoginDocument, MutationUserLoginArgs } from "../../__generated__/graphql";
import { toast } from "react-toastify";

const defaultValues = {
  email: "test@example.com",
  password: "password"
}

const LoginForm = () => {
  const [login] = useMutation(UserLoginDocument)
  const { register, handleSubmit, formState: { errors } } = useForm<MutationUserLoginArgs>({defaultValues})
  const onSubmit: SubmitHandler<MutationUserLoginArgs> = (data) => {
    console.log(data)
    login({variables: data}).then(res => {
      console.log(res)
      localStorage.setItem('housemate-bearer', res.data?.userLogin?.credentials.accessToken!)
      toast.success('Successfully Logged In!')
    }).catch((e) => {
      toast.error(e)
    })
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