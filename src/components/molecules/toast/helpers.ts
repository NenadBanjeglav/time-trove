import { AlertIcon } from '../../../assets/icons/AlertIcon'
import { FailIcon } from '../../../assets/icons/FailIcon'
import { SuccessIcon } from '../../../assets/icons/SuccessIcon'

import type { ToastType } from './toast.types'

export const iconMap: Record<ToastType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  success: SuccessIcon,
  error: FailIcon,
  warning: AlertIcon,
}

export const palleteMap: Record<ToastType, 'success' | 'danger' | 'warning'> = {
  success: 'success',
  error: 'danger',
  warning: 'warning',
}
