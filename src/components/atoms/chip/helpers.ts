import { css } from 'styled-components'

import type { Pallete } from '../../../styles/theme.types'
import { StatusEnum, type SizeEnum } from './chip.types'

export const getSizeStyle = (size: SizeEnum) => {
  switch (size) {
    case 'small':
      return css`
        border-radius: ${({ theme }) => theme.borderRadius.medium};
        padding: ${({ theme }) => `${theme.spacing.xSmall} ${theme.spacing.small}`};
        font-size: ${({ theme }) => theme.typography.fontSize.xSmall};
        line-height: ${({ theme }) => theme.typography.lineHeight.xSmall};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
      `
    case 'large':
      return css`
        border-radius: ${({ theme }) => theme.borderRadius.large};
        padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
        line-height: ${({ theme }) => theme.typography.lineHeight.base};
        font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
      `
  }
}

export const getChipPallete = (status?: StatusEnum): Pallete => {
  switch (status) {
    case StatusEnum.SUCCESS:
      return 'success'
    case StatusEnum.WARNING:
      return 'warning'
    case StatusEnum.DANGER:
      return 'danger'
    default:
      return 'success'
  }
}
