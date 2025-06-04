import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { Pallete, ButtonSize, Color } from '../../../styles/theme.types'
import { Spinner } from '../icon/Spinner'
import { StyledButton } from './button.styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Pallete
  color?: Color<Pallete>
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  children?: ReactNode
}

export const Button = ({
  variant = 'primary',
  color,
  size = 'medium',
  fullWidth = false,
  loading = false,
  children = 'Button',
  ...rest
}: ButtonProps) => {
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
