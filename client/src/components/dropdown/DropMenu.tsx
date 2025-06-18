import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import useToggle from "src/hooks/useToggle"

export type Option = {
  label: string
  onSelect: VoidFunction
}

type Props = {
  options: Option[]
  className?: string
  buttonColor?: string
  buttonClass?: string
  menuClass?: string
}

const DropMenu = ({
  options,
  className,
  buttonColor = "bg-gray-200",
  buttonClass = "p-2 rounded-md hover:bg-gray-300",
  menuClass = "bg-white shadow-lg rounded-md mt-2",
}: Props) => {
  const [open, toggleOpen, setOpen] = useToggle(false)

  return (
    <div className={`cursor-pointer ${className}`}>
      <HamburgerMenuIcon color={buttonColor} className={buttonClass} onClick={toggleOpen} />
      {open && (
        <div className={`absolute z-10 ${menuClass}`}>
          {options.map(({ label, onSelect }, i) => (
            <div
              key={`${label}-${i}`}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
              onClick={() => {
                onSelect()
                setOpen(false)
              }}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropMenu