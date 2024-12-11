import { CSSProperties, HTMLInputTypeAttribute } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"
import Error, { ErrorProps } from "./Error"
import Label, { LabelProps } from "./Label"

export type FormInputProps<T extends FieldValues> =
  LabelProps & ErrorProps & {
    fieldName: Path<T>
    inputClass?: string
    inputStyle?: CSSProperties
    required?: boolean
    placeholder?: string
    register: UseFormRegister<T>
    type?: HTMLInputTypeAttribute
  }
const FormInput = <T extends FieldValues,>({
  fieldName,
  label,
  labelClass,
  inputClass,
  inputStyle,
  required,
  placeholder,
  errorField,
  errorMessage = "Required",
  errorClass,
  register,
  type,
  errorSpaceClass
}: FormInputProps<T>) => {
  const valueAsNumber = type === 'number'
  return (
    <>
      {label && <Label {...{ label, labelClass }} />}
      <input
        type={type}
        {...register(fieldName, { required: required, valueAsNumber })}
        aria-invalid={errorField ? "true" : false}
        placeholder={placeholder}
        aria-placeholder={placeholder}
        className={inputClass}
        style={inputStyle}
      />
      {required && (
        <Error {...{ errorField, errorClass, errorMessage, errorSpaceClass }} />
      )}
    </>
  )
}

export default FormInput;