import React from 'react'

import type { ButtonSize } from '../../../styles/theme.types'

import { StyledButton } from './button.styles'

export const buttonVariants = ['primary', 'success', 'warning', 'danger', 'neutral'] as const
export type ButtonVariant = (typeof buttonVariants)[number]

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: React.ReactNode
  children?: React.ReactNode
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  children,
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} $size={size} {...rest}>
      {label}
      {children}
    </StyledButton>
  )
}
