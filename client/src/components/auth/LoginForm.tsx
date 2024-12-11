import React from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"

const LoginForm = () => {
  const defaultValues = {
    email: "test@example.com",
    password: "password"
  }
  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues})
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
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