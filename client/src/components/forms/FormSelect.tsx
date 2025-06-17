import { type FieldValues } from "react-hook-form";
import { type FormInputProps } from "./FormInput";
import Label from "./Label";
import Error from "./Error"

export type FormSelectOption = {
  label?: string
  value: string
}

type Props<T extends FieldValues,> = FormInputProps<T> & {
  options: FormSelectOption[]
}

const FormSelect = <T extends FieldValues,>({
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
  options
}: Props<T>) => {
  return (
    <>
      {label && <Label {...{ label, labelClass }} />}
      <select
        {...register(fieldName, { required })}
        aria-invalid={errorField ? "true" : false}
        aria-placeholder={placeholder}
        className={inputClass}
        style={inputStyle}
      >
        <option style={{ display: "none" }} value="" selected>{placeholder}</option>
        {options.map(({ value, label: optionLabel }) => (
          <option key={value} value={value}>
            {optionLabel || value}
          </option>
        ))}
      </select>
      {required && (
        <Error {...{ errorField, errorClass, errorMessage }} />
      )}
    </>
  )
}

export default FormSelect