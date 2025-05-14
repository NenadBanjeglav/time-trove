import type { theme } from '../../../styles/theme'
import { StyledIcon } from './icon.styles'

export type PaletteKeys = 'neutral' | 'primary' | 'danger' | 'warning' | 'success'

export type PaletteColorMap = {
  neutral: keyof typeof theme.colors.neutral
  primary: keyof typeof theme.colors.primary
  success: keyof typeof theme.colors.success
}

type IconProps = {
  as: React.ElementType
  size?: number | string
  pallete?: keyof PaletteColorMap
  color: PaletteColorMap[keyof PaletteColorMap]
}

export const Icon: React.FC<IconProps> = ({
  as,
  size = 20,
  pallete = 'neutral',
  color = 'hue500',
}) => {
  return <StyledIcon as={as} $size={size} $pallete={pallete} $color={color} />
}
