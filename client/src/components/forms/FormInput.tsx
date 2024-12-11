import { HTMLInputTypeAttribute } from "react"
import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form"

type Props<T extends FieldValues> = {
  label: string
  fieldName: Path<T>
  required?: boolean
  errorField: FieldError | undefined
  errorMessage?: string
  register: UseFormRegister<T>
  type?: HTMLInputTypeAttribute
}
const FormInput = <T extends FieldValues,>({
  label,
  fieldName,
  required,
  errorField,
  errorMessage = "Required",
  register,
  type
}: Props<T>) => {
  const valueAsNumber = type === 'number'
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        {...register(fieldName, { required: required, valueAsNumber })}
        aria-invalid={errorField ? "true" : false}
      />
      {required && errorField?.type === "required" && <p role="alert">{errorMessage}</p>}
    </>
  )
}

export default FormInput;