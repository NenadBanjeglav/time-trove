import styled, { css } from 'styled-components'
import type { ChipVariant, ChipSize } from './Chip'

const variantStyles: Record<ChipVariant, ReturnType<typeof css>> = {
  low: css`
    background-color: ${({ theme }) => theme.colors.success.hue0};
    color: ${({ theme }) => theme.colors.success.hue100};
  `,
  medium: css`
    background-color: ${({ theme }) => theme.colors.warning.hue0};
    color: ${({ theme }) => theme.colors.warning.hue100};
  `,
  high: css`
    background-color: ${({ theme }) => theme.colors.danger.hue0};
    color: ${({ theme }) => theme.colors.danger.hue100};
  `,
  inProgress: css`
    background-color: ${({ theme }) => theme.colors.warning.hue0};
    color: ${({ theme }) => theme.colors.warning.hue100};
  `,
  done: css`
    background-color: ${({ theme }) => theme.colors.success.hue0};
    color: ${({ theme }) => theme.colors.success.hue100};
  `,
}

const sizeStyles: Record<ChipSize, ReturnType<typeof css>> = {
  small: css`
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: ${({ theme }) => `${theme.spacing.xSmall} ${theme.spacing.small}`};
    font-size: ${({ theme }) => theme.typography.fontSize.xSmall};
    line-height: ${({ theme }) => theme.typography.lineHeight.xSmall};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  `,
  large: css`
    border-radius: ${({ theme }) => theme.borderRadius.large};
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

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
`
