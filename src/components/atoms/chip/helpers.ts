import { css } from 'styled-components'

import type { ChipSize, ChipVariant } from './Chip'

export const getVariantStyle = (variant: ChipVariant) => {
  switch (variant) {
    case 'low':
      return css`
        background-color: ${({ theme }) => theme.colors.success.hue0};
        color: ${({ theme }) => theme.colors.success.hue100};
      `
    case 'medium':
    case 'inProgress':
      return css`
        background-color: ${({ theme }) => theme.colors.warning.hue0};
        color: ${({ theme }) => theme.colors.warning.hue100};
      `
    case 'high':
      return css`
        background-color: ${({ theme }) => theme.colors.danger.hue0};
        color: ${({ theme }) => theme.colors.danger.hue100};
      `
    case 'done':
      return css`
        background-color: ${({ theme }) => theme.colors.success.hue0};
        color: ${({ theme }) => theme.colors.success.hue100};
      `
  }
}

export const getSizeStyle = (size: ChipSize) => {
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
