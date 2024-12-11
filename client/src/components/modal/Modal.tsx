import { createContext, CSSProperties, Dispatch, PropsWithChildren, SetStateAction, useEffect, useRef, useState } from "react"
import useToggle from "../../hooks/useToggle"

const backgroundStyle: CSSProperties = {
  position: "absolute",
  zIndex: 900,
  minHeight: "100%",
  minWidth: "100%",
  backgroundColor: "grey",
  opacity: 0.5,
}

const containerStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid black",
  minWidth: "75%",
  minHeight: "50%",
  zIndex: 901,
  backgroundColor: "white"
}

export const ModalContext = createContext({
  close: () => {}
})

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({
  open,
  setOpen,
  children
}: PropsWithChildren<Props>) => {
  if (!open) {
    return <></>
  }

  const close = () => setOpen(false)

  return (
    <ModalContext.Provider value={{close}}>
      <div style={containerStyle} onClick={e => {
        e.stopPropagation()
      }}>
        {children}
      </div>
      <div style={backgroundStyle} onClick={close} />
    </ModalContext.Provider>
  )
}

export default Modal