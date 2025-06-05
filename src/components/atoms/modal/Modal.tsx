import { AnimatePresence } from 'motion/react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import { useOutsideClick } from '../../../hooks/useOutsideClick'

import { Overlay, StyledModal } from './modal.styles'
import { modalVariants, overlayVariants } from './modal.variants'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  zIndex?: number
}

export const Modal = ({ isOpen, onClose, children, zIndex }: ModalProps) => {
  const ref = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen) onClose()
  })

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <Overlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ zIndex: zIndex ?? 1000 }}
        >
          <StyledModal
            ref={ref}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ zIndex: (zIndex ?? 1000) + 1 }}
          >
            {children}
          </StyledModal>
        </Overlay>
      )}
    </AnimatePresence>,
    document.body
  )
}
