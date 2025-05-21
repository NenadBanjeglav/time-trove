import { css } from 'styled-components'
import { ChipStatus, type ChipSizeEnum } from './chip.types'
import type { Pallete } from '../../../styles/theme.types'

export const getSizeStyle = (size: ChipSizeEnum) => {
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

export const getChipPallete = (status?: ChipStatus): Pallete => {
  switch (status) {
    case ChipStatus.SUCCESS:
      return 'success'
    case ChipStatus.WARNING:
      return 'warning'
    case ChipStatus.DANGER:
      return 'danger'
    default:
      return 'primary'
  }
}
