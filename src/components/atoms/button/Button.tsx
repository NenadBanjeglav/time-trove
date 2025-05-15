import React from 'react'

import type { ButtonSize, Pallete } from '../../../styles/theme.types'
import { Spinner } from '../icon/Spinner'

import { StyledButton } from './button.styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Pallete
  size?: ButtonSize
  icon?: React.ReactNode
  loading?: boolean
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  children = 'Button',
  ...rest
}) => {
  return (
    <StyledButton $variant={variant} $size={size} disabled={loading} {...rest}>
      {loading ? <Spinner size="small" /> : children}
    </StyledButton>
  )
}
