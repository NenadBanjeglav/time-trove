import type { FC, SVGProps } from 'react'

import { AlertIcon } from '../../../assets/icons/AlertIcon'
import { CheckIcon } from '../../../assets/icons/CheckIcon'
import { FailIcon } from '../../../assets/icons/FailIcon'
import { SuccessIcon } from '../../../assets/icons/SuccessIcon'
import type { Pallete } from '../../../styles/theme.types'

import { DialogVariant } from './confirmDialog.types'

export const getDialogIcon = (
  variant: DialogVariant = DialogVariant.SUCCESS
): FC<SVGProps<SVGSVGElement>> => {
  switch (variant) {
    case DialogVariant.SUCCESS:
      return SuccessIcon
    case DialogVariant.WARNING:
      return AlertIcon
    case DialogVariant.DANGER:
      return FailIcon

    default:
      return CheckIcon
  }
}

export const getDialogVariant = (variant?: DialogVariant): Pallete => {
  switch (variant) {
    case DialogVariant.SUCCESS:
      return 'success'
    case DialogVariant.WARNING:
      return 'warning'
    case DialogVariant.DANGER:
      return 'danger'
    default:
      return 'success'
  }
}
