import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext
} from "react"

export const ModalContext = createContext({
  close: () => { }
})

export const useModal = () => {
  return useContext(ModalContext)
}

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  bgColor?: string
  className?: string
}

const Modal = ({
  open,
  setOpen,
  bgColor = "bg-white",
  className,
  children
}: PropsWithChildren<Props>) => {
  if (!open) {
    return <></>
  }

  const close = () => setOpen(false)

  return (
    <ModalContext.Provider value={{ close }}>
      <div
        className={`z-40 absolute rounded max-h-screen overflow-auto ${bgColor} ${className}`}
        onClick={e => { e.stopPropagation() }}
      >
        {children}
      </div>
      <div
        className="w-full h-full z-30 absolute top-0 left-0"
        onClick={close}
      />
    </ModalContext.Provider>
  )
}

export default Modal