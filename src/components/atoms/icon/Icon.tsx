import type { Color, Pallete } from '../../../styles/theme.types'

import { createStyledIcon } from './icon.styles'

type IconProps<T extends Pallete = Pallete> = {
  iconSize?: number | string
  pallete: T
  color: Color<T>
  icon: React.FC<React.SVGProps<SVGSVGElement>>
} & React.HTMLAttributes<HTMLSpanElement>

export const Icon = <T extends Pallete>({
  icon: IconComponent,
  iconSize = 24,
  pallete,
  color,
  ...rest
}: IconProps<T>) => {
  const StyledIcon = createStyledIcon<T>()

  return (
    <StyledIcon $size={iconSize} $pallete={pallete} $color={color} {...rest}>
      <IconComponent width="100%" height="100%" />
    </StyledIcon>
  )
}
