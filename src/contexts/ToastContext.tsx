import { AnimatePresence } from 'motion/react'
import { type ReactNode, useState, useCallback, createContext } from 'react'
import { createPortal } from 'react-dom'

import { Toast } from '../components/molecules/toast/Toast'
import type { ToastInput, ToastProps } from '../components/molecules/toast/toast.types'
import { EXIT_ANIMATION_MS, TOAST_DISPLAY_MS } from '../constants/toastTimers'

import { ToastContainer } from './toastContext.styles'

type ToastContextType = {
  addToast: (toast: ToastInput) => void
}
export const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const addToast = useCallback(
    ({ type, title, message, duration = TOAST_DISPLAY_MS }: ToastInput) => {
      const id = crypto.randomUUID()
      const onClose = () => removeToast(id)

      setToasts(prev => {
        const next = prev.length >= 3 ? prev.slice(1) : prev
        return [
          ...next,
          {
            id,
            type,
            title,
            message,
            onClose,
          },
        ]
      })

      setTimeout(() => {
        removeToast(id)
      }, duration + EXIT_ANIMATION_MS)
    },
    [removeToast]
  )

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {createPortal(
        <ToastContainer>
          <AnimatePresence>
            {toasts.map(toast => (
              <Toast key={toast.id} {...toast} />
            ))}
          </AnimatePresence>
        </ToastContainer>,
        document.body
      )}
    </ToastContext.Provider>
  )
}
