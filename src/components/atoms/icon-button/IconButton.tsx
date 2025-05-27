import type { ButtonHTMLAttributes, FC, SVGProps } from 'react'

import type { Pallete, Color, IconSize } from '../../../styles/theme.types'
import { Icon } from '../icon/Icon'

import { createStyledIconButton } from './iconButton.styles'

type ButtonShape = 'circle' | 'square'

type IconButtonProps<T extends Pallete = 'primary'> = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: FC<SVGProps<SVGSVGElement>>
  iconSize?: IconSize
  variant: T
  color?: Color<T>
  shape?: ButtonShape
}

export const IconButton = <T extends Pallete = 'primary'>({
  icon,
  iconSize = 'small',
  variant = 'primary' as T,
  color,
  shape = 'circle',
  ...rest
}: IconButtonProps<T>) => {
  const StyledIconButton = createStyledIconButton<T>()

  return (
    <StyledIconButton
      $variant={variant}
      $color={color}
      $iconSize={iconSize}
      $shape={shape}
      {...rest}
    >
      <Icon icon={icon} iconSize={iconSize} pallete={variant} color={color} />
    </StyledIconButton>
  )
}
