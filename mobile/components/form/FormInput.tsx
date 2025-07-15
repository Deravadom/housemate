import { Controller, FieldValues, Path, RegisterOptions, useController, useFormContext } from "react-hook-form"
import { Text, TextInput, TextInputProps, View } from "react-native"

export type FormInputProps<T extends FieldValues> = Pick<TextInputProps, "autoCapitalize" | "keyboardType"> & {
  containerClass?: string
  labelClass?: string
  label?: string
  fieldName: Path<T>
  inputClass?: string
  placeholder?: string
  secureTextEntry?: boolean
  rules?: RegisterOptions<T>
}
const FormInput = <T extends FieldValues>({
  fieldName,
  label,
  placeholder,
  containerClass,
  labelClass,
  inputClass,
  autoCapitalize,
  keyboardType,
  secureTextEntry,
  rules,
}: FormInputProps<T>) => {
  const { control } = useFormContext<T>()
  const { field: { onChange, onBlur, value, ref }, fieldState } = useController({ name: fieldName, control, rules })

  return (
    <View className={containerClass}>
      <Text className={labelClass}>{label}</Text>
      <TextInput
        className={inputClass}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        ref={ref}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {fieldState.error && <Text className="text-red-500">{fieldState.error.message}</Text>}
    </View>
  )
}

export default FormInput