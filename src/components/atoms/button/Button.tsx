import React from 'react'

import type { ButtonSize, ButtonVariant } from '../../../styles/theme.types'

import { StyledButton } from './button.styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} $size={size} {...rest}>
      {label}
    </StyledButton>
  )
}
