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
}

const DropMenu = ({
  options
}: Props) => {
  return (
      <Root>
        <Trigger asChild>
          <button aria-label="Main Menu">
            <HamburgerMenuIcon />
          </button>
        </Trigger>

        <Portal>
          <Content sideOffset={5} className="bg-white ba b--gray">
            {options.map(({ label, onSelect }, i) => (
              <Item key={`${label}-${i}`} onClick={onSelect}>{label}</Item>
            ))}
          </Content>
        </Portal>
      </Root>
  )
}

export default DropMenu