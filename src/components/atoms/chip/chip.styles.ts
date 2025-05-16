import styled, { css } from 'styled-components'
import type { ChipVariant, ChipSize } from './Chip'

//reducing opacity lowest hue is not enough
export const hexToRgba = (hex: string, alpha = 1): string => {
  const raw = hex.replace('#', '')
  const bigint = parseInt(raw, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const variantStyles: Record<ChipVariant, ReturnType<typeof css>> = {
  low: css`
    background-color: ${({ theme }) => hexToRgba(theme.colors.success.hue50, 0.2)};
    color: ${({ theme }) => theme.colors.success.hue200};
  `,
  medium: css`
    background-color: ${({ theme }) => hexToRgba(theme.colors.warning.hue50, 0.2)};
    color: ${({ theme }) => theme.colors.warning.hue200};
  `,
  high: css`
    background-color: ${({ theme }) => hexToRgba(theme.colors.danger.hue50, 0.2)};
    color: ${({ theme }) => theme.colors.danger.hue200};
  `,
  inProgress: css`
    background-color: ${({ theme }) => hexToRgba(theme.colors.warning.hue50, 0.2)};
    color: ${({ theme }) => theme.colors.warning.hue200};
  `,
  done: css`
    background-color: ${({ theme }) => hexToRgba(theme.colors.success.hue50, 0.2)};
    color: ${({ theme }) => theme.colors.success.hue200};
  `,
}

const sizeStyles: Record<ChipSize, ReturnType<typeof css>> = {
  small: css`
    border-radius: ${({ theme }) => `${theme.borderRadius.medium}`};
    padding: ${({ theme }) => `${theme.spacing.xSmall} ${theme.spacing.small}`};
    font-size: ${({ theme }) => theme.typography.fontSize.xSmall};
    line-height: ${({ theme }) => theme.typography.lineHeight.xSmall};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  `,
  large: css`
    border-radius: ${({ theme }) => `${theme.borderRadius.large}`};
    padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  `,
}

export const StyledChip = styled.div<{
  $variant: ChipVariant
  $size: ChipSize
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
`
