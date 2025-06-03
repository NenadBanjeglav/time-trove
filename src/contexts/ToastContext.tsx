import { createContext } from 'react'

import type { ToastInput } from '../components/molecules/toast/toast.types'

type ToastContextType = {
  addToast: (toast: ToastInput) => void
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined)
