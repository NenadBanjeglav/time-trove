import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { Pallete, ButtonSize, Color } from '../../../styles/theme.types'
import { Spinner } from '../icon/Spinner'

import { createStyledButton } from './button.styles'

type ButtonProps<T extends Pallete = 'primary'> = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: T
  color?: Color<T>
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  children?: ReactNode
}

export const Button = <T extends Pallete = 'primary'>({
  variant = 'primary' as T,
  color,
  size = 'medium',
  fullWidth = false,
  loading = false,
  children = 'Button',
  ...rest
}: ButtonProps<T>) => {
  const StyledButton = createStyledButton<T>()

  return (
    <StyledButton
      $variant={variant}
      $color={color}
      $size={size}
      $fullWidth={fullWidth}
      $loading={loading}
      disabled={loading}
      {...rest}
    >
      {loading ? <Spinner size="small" pallete={variant} /> : children}
    </StyledButton>
  )
}
