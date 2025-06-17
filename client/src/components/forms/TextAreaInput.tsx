import { type FieldValues } from "react-hook-form"
import { type FormInputProps } from "./FormInput"
import Error from "./Error"
import Label from "./Label"

const TextAreaInput = <T extends FieldValues,>({
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
}: FormInputProps<T>) => {
  return (
    <>
      {label && <Label {...{ label, labelClass }} />}
      <textarea
        {...register(fieldName, { required })}
        aria-invalid={errorField ? "true" : false}
        placeholder={placeholder}
        aria-placeholder={placeholder}
        className={inputClass}
        style={inputStyle}
      />
      {required && (
        <Error {...{ errorField, errorClass, errorMessage }} />
      )}
    </>
  )
}

export default TextAreaInput