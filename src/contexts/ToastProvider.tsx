import { type ReactNode, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'

import { Toast } from '../components/atoms/toast/Toast'
import type { ToastProps, ToastInput } from '../components/atoms/toast/toast.types'

import { ToastContext } from './ToastContext'
import { ToastContainer } from './toastContext.styles'

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const addToast = useCallback(
    ({ type, title, message, duration = 2000 }: ToastInput) => {
      const id = crypto.randomUUID()

      const onClose = () => removeToast(id)

      setToasts(prev => [
        ...prev,
        {
          id,
          type,
          title,
          message,
          onClose,
        },
      ])

      setTimeout(() => {
        removeToast(id)
      }, duration)
    },
    [removeToast]
  )

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {createPortal(
        <ToastContainer>
          {toasts.map(toast => (
            <Toast key={toast.id} {...toast} />
          ))}
        </ToastContainer>,
        document.body
      )}
    </ToastContext.Provider>
  )
}
