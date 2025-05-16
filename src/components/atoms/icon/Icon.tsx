import type { FC, SVGProps, HTMLAttributes } from 'react'
import { useTheme } from 'styled-components'

import type { Color, IconSize, Pallete } from '../../../styles/theme.types'

import { createStyledIcon } from './icon.styles'

type IconProps<T extends Pallete = Pallete> = {
  iconSize?: IconSize
  pallete: T
  color?: Color<T>
  icon: FC<SVGProps<SVGSVGElement>>
} & HTMLAttributes<HTMLSpanElement>

export const Icon = <T extends Pallete>({
  icon: IconComponent,
  iconSize = 'small',
  pallete,
  color,
  ...rest
}: IconProps<T>) => {
  const theme = useTheme()
  const resolvedSize = theme.iconSize[iconSize]

  const resolvedColor = (color ?? 'hue200') as Color<T>

  const StyledIcon = createStyledIcon<T>()

  return (
    <StyledIcon $size={resolvedSize} $pallete={pallete} $color={resolvedColor} {...rest}>
      <IconComponent width="100%" height="100%" />
    </StyledIcon>
  )
}
