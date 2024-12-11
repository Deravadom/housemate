export type LabelProps = {
  label?: string
  labelClass?: string
}

const Label = ({
  label, labelClass
}: LabelProps) => (
  <label className={labelClass}>{label}</label>
)

export default Label