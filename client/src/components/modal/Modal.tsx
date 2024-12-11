import { CSSProperties, Dispatch, PropsWithChildren, SetStateAction, useEffect, useRef, useState } from "react"

const rootStyle: CSSProperties = {
  position: "absolute",
  zIndex: 999,
  minHeight: "100%",
  minWidth: "100%",
  backgroundColor: "grey",
  opacity: 0.4
}

const containerStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid black",
  minWidth: "30%",
  minHeight: "30%"
}

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

  return (
    <div style={rootStyle} onClick={() => setOpen(false)}>
      <div style={containerStyle} onClick={e => {
        e.stopPropagation()
      }}>
        {children}
      </div>
    </div>
  )
}

export default Modal