import { FormProvider, useForm, SubmitHandler } from "react-hook-form"
import { useAuth } from "./AuthProvider";
import { To } from "react-router";
import { MutationLoginArgs } from "src/__generated__/types";
import Header from "../header";
import FormInput from "../forms/FormInput";
import Col from 'src/components/flex/Col';
import Row from 'src/components/flex/Row';

const defaultValues = {
  email: "test@example.com",
  password: "password"
}

type Props = {
  to: To,
  toggleSignup: () => void
}
const LoginForm = ({ to, toggleSignup }: Props) => {
  const formMethods = useForm<MutationLoginArgs>({ defaultValues })
  const { handleSubmit } = formMethods
  const { login } = useAuth();

  const onSubmit: SubmitHandler<MutationLoginArgs> = (data) => {
    login(data, to)
  }

  return (
    <FormProvider {...formMethods}>
      <Col className="w-full lg:w-1/3 items-center gap-4 border border-red-200">
        <Header />
        <Row className="text-lg justify-center w-full h3 mb3 items-center">
          <span className="text-center">Welcome to Housemate</span>
        </Row>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center border-3 p-2 w-full">
          <FormInput
            fieldName="email"
            label="Email"
            required
          />
          <FormInput
            fieldName="password"
            label="Password"
            type="password"
            required
          />
          <input type="submit" value="Log In" />
        </form>
        <input type="button" className="mt-2" onClick={toggleSignup} value='Create Account' />
      </Col>
    </FormProvider>
  )
}

export default LoginForm