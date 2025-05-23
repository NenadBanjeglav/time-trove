import type { FC, SVGProps } from 'react'
import { ChipStatus } from '../../atoms/chip/chip.types'
import { CheckIcon } from '../../../assets/icons/CheckIcon'
import { AlertIcon } from '../../../assets/icons/AlertIcon'
import { FailIcon } from '../../../assets/icons/FailIcon'
import { SuccessIcon } from '../../../assets/icons/SuccessIcon'

export const getDialogIcon = (
  status: ChipStatus = ChipStatus.SUCCESS
): FC<SVGProps<SVGSVGElement>> => {
  switch (status) {
    case ChipStatus.SUCCESS:
      return SuccessIcon
    case ChipStatus.WARNING:
      return AlertIcon
    case ChipStatus.DANGER:
      return FailIcon

    default:
      return CheckIcon
  }
}
