import type {
  Color,
  FontSizeType,
  FontWeightType,
  LineHeightType,
  Pallete,
} from '../../../styles/theme.types'

import { createStyledText } from './text.styles'

export type TextAlignType = 'start' | 'end' | 'center' | 'justify'

type BaseTextProps = {
  as?: 'span' | 'p'
  fontSize?: FontSizeType
  lineHeight?: LineHeightType
  fontWeight?: FontWeightType
  textAlign?: TextAlignType
  isVisible?: boolean
  children?: React.ReactNode
}

export const Text = <T extends Pallete = 'neutral'>({
  as = 'p',
  fontSize = 'base',
  fontWeight = 'regular',
  lineHeight = 'base',
  textAlign = 'start',
  isVisible = true,
  children = 'Random Text',
  pallete = 'neutral' as T,
  color = 'hue200' as Color<T>,
}: BaseTextProps & {
  pallete?: T
  color?: Color<T>
}) => {
  const StyledText = createStyledText<T>()

  return (
    <StyledText
      as={as}
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $fontWeight={fontWeight}
      $textAlign={textAlign}
      $isVisible={isVisible}
      $pallete={pallete}
      $color={color}
    >
      {children}
    </StyledText>
  )
}
