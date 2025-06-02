import { useState } from 'react'

export const useUnsavedChangesModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

  const open = () => setIsOpen(true)

  const requestClose = () => {
    if (hasUnsavedChanges) {
      setConfirmOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  const discard = () => {
    setConfirmOpen(false)
    setIsOpen(false)
    setHasUnsavedChanges(false)
  }

  const cancelClose = () => setConfirmOpen(false)

  const onChange = () => setHasUnsavedChanges(true)

  const reset = () => {
    console.log('[useUnsavedChangesModal] reset called')
    setHasUnsavedChanges(false)
    setIsOpen(false)
    setConfirmOpen(false)
  }

  const safeClose = () => {
    setHasUnsavedChanges(false)
    setConfirmOpen(false)
    setIsOpen(false)
  }

  return {
    isOpen,
    confirmOpen,
    open,
    requestClose,
    discard,
    cancelClose,
    onChange,
    reset,
    safeClose,
  }
}
