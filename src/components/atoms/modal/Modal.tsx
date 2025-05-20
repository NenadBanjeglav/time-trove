import {
  cloneElement,
  createContext,
  useContext,
  useState,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'

import { useOutsideClick } from '../../../hooks/useOutsideClick'

import { Overlay, StyledModal } from './modal.styles'

type ModalContextType = {
  openName: string
  open: (name: string) => void
  close: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) throw new Error('Modal components must be used within Modal')

  return context
}

export const Modal = ({ children }: { children: ReactNode }) => {
  const [openName, setOpenName] = useState<string>('')

  const open = (name: string) => setOpenName(name)
  const close = () => setOpenName('')

  return <ModalContext.Provider value={{ openName, open, close }}>{children}</ModalContext.Provider>
}

type OpenProps = {
  children: ReactElement<{ onClick?: MouseEventHandler }>
  opens: string
}

const Open = ({ children, opens }: OpenProps) => {
  const { open } = useModalContext()
  return cloneElement(children, { onClick: () => open(opens) })
}

const Window = ({
  children,
  name,
}: {
  children: ReactElement<{ onClose?: () => void }>
  name: string
}) => {
  const { openName, close } = useModalContext()

  const ref = useOutsideClick<HTMLDivElement>(close)

  if (name !== openName) return null

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>{cloneElement(children, { onClose: close })}</StyledModal>
    </Overlay>,
    document.body
  )
}

Modal.Open = Open
Modal.Window = Window
