export type ToastType = 'success' | 'error' | 'warning'

export type ToastProps = {
  id: string
  type: ToastType
  title: string
  message: string
  onClose: () => void
}

export type ToastInput = Omit<ToastProps, 'id' | 'onClose'> & {
  duration?: number
}
