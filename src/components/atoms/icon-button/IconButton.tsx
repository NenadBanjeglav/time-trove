import type { ButtonHTMLAttributes, FC, SVGProps } from 'react'

import type { Pallete, Color, IconSize } from '../../../styles/theme.types'
import { Icon } from '../icon/Icon'

import { StyledIconButton } from './iconButton.styles'

type ButtonShape = 'circle' | 'square'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: FC<SVGProps<SVGSVGElement>>
  iconSize?: IconSize
  variant: Pallete
  color?: Color<Pallete>
  shape?: ButtonShape
}

export const IconButton = ({
  icon,
  iconSize = 'small',
  variant = 'primary',
  color,
  shape = 'circle',
  ...rest
}: IconButtonProps) => {
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
