import {
  Root,
  Trigger,
  Portal,
  Content,
  Item
} from "@radix-ui/react-dropdown-menu"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export type Option = {
  label: string
  onSelect: VoidFunction
}

type Props = {
  options: Option[]
  className?: string
}

const DropMenu = ({
  options,
  className
}: Props) => {
  return (
    <Root>
      <Trigger asChild>
        <button aria-label="Main Menu" className={className}>
          <HamburgerMenuIcon />
        </button>
      </Trigger>

      <Portal>
        <Content sideOffset={5} className="bg-white ba b--gray min-h-100">
          {options.map(({ label, onSelect }, i) => (
            <Item
              key={`${label}-${i}`}
              onClick={onSelect}
              className="mv2 h2 w4 self-center tc b--grey ba mh2 flex items-center justify-center"
            >
              {label}
            </Item>
          ))}
        </Content>
      </Portal>
    </Root>
  )
}

export default DropMenu