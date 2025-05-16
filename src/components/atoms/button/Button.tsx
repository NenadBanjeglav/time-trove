import type { Pallete, ButtonSize, Color } from '../../../styles/theme.types'
import { Spinner } from '../icon/Spinner'

import { createStyledButton } from './button.styles'

export type ButtonShape = 'circle' | 'square' | 'regular'

type ButtonProps<T extends Pallete = Pallete> = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: T
  color?: Color<T>
  size?: ButtonSize
  loading?: boolean
  isIconButton?: boolean
  shape?: ButtonShape
  fullWidth?: boolean
  children?: React.ReactNode
}

export const Button = <T extends Pallete = 'primary'>({
  variant = 'primary' as T,
  color,
  size = 'medium',
  loading = false,
  isIconButton = false,
  shape = 'regular',
  fullWidth = false,
  children = 'Button',
  ...rest
}: ButtonProps<T>) => {
  const StyledButton = createStyledButton<T>()
  return (
    <StyledButton
      $variant={variant}
      $color={color}
      $size={size}
      $isIconButton={isIconButton}
      $shape={shape}
      $fullWidth={fullWidth}
      disabled={loading}
      {...rest}
      $loading
    >
      {loading ? <Spinner size="small" pallete={variant} /> : children}
    </StyledButton>
  )
}
