import { type CSSProperties, type HTMLInputTypeAttribute, type InputHTMLAttributes } from "react"
import { type FieldValues, type Path, type UseFormRegister } from "react-hook-form"
import Error, { type ErrorProps } from "./Error"
import Label, { type LabelProps } from "./Label"
import { useMinDate } from "../../utils/dateUtils"

type MinValue = InputHTMLAttributes<HTMLInputTypeAttribute>["min"]
const useMin = (min: MinValue, type: HTMLInputTypeAttribute | undefined) => {
  const today = useMinDate()

  if (!type) return undefined
  if (min) return min

  switch (type) {
    case "date": {
      return today
    }
  }
}

export type FormInputProps<T extends FieldValues> =
  LabelProps & ErrorProps & {
    fieldName: Path<T>
    inputClass?: string
    inputStyle?: CSSProperties
    required?: boolean
    placeholder?: string
    register: UseFormRegister<T>
    type?: HTMLInputTypeAttribute
    min?: MinValue
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
  min,
  errorSpaceClass
}: FormInputProps<T>) => {
  const valueAsNumber = type === 'number'
  const minValue = useMin(min, type)

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
        min={minValue}
      />
      {required && (
        <Error {...{ errorField, errorClass, errorMessage, errorSpaceClass }} />
      )}
    </>
  )
}

export default FormInput;