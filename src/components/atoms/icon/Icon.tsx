import type { FC, SVGProps, HTMLAttributes } from 'react'
import { useTheme } from 'styled-components'

import type { Color, IconSize, Pallete } from '../../../styles/theme.types'
import { StyledIcon } from './icon.styles'

type IconProps = {
  iconSize?: IconSize
  pallete?: Pallete
  color?: Color<Pallete>
  icon: FC<SVGProps<SVGSVGElement>>
} & HTMLAttributes<HTMLSpanElement>

export const Icon = ({
  icon: IconComponent,
  iconSize = 'small',
  pallete = 'primary',
  color,
  ...rest
}: IconProps) => {
  const theme = useTheme()
  const resolvedSize = theme.iconSize[iconSize]
  const resolvedColor = (color ?? 'hue200') as Color<Pallete>

  return (
    <StyledIcon $size={resolvedSize} $pallete={pallete} $color={resolvedColor} {...rest}>
      <IconComponent width="100%" height="100%" />
    </StyledIcon>
  )
}
