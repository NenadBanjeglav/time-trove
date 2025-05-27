import type {
  Color,
  FontSizeType,
  FontWeightType,
  LineHeightType,
  Pallete,
} from '../../../styles/theme.types'

import { createStyledHeading } from './heading.styles'

export type HeadingAlignType = 'start' | 'end' | 'center' | 'justify'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps<T extends Pallete = 'neutral'> = {
  as?: HeadingLevel
  fontSize?: FontSizeType
  lineHeight?: LineHeightType
  fontWeight?: FontWeightType
  pallete?: T
  color?: Color<T>
  children: React.ReactNode
  className?: string
  textAlign?: HeadingAlignType
}

export const Heading = <T extends Pallete = 'neutral'>({
  as = 'h2',
  fontSize = 'h2',
  lineHeight = 'h2',
  fontWeight = 'bold',
  pallete = 'neutral' as T,
  color = 'hue500' as Color<T>,
  children = 'Random Heading',
  textAlign = 'center',
}: HeadingProps<T>) => {
  const StyledHeading = createStyledHeading<T>()
  return (
    <StyledHeading
      as={as}
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $fontWeight={fontWeight}
      $pallete={pallete}
      $color={color}
      $textAlign={textAlign}
    >
      {children}
    </StyledHeading>
  )
}
