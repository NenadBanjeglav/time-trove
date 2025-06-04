import type {
  Color,
  FontSizeType,
  FontWeightType,
  LineHeightType,
  Pallete,
} from '../../../styles/theme.types'

import { StyledText } from './text.styles'

export type TextAlignType = 'start' | 'end' | 'center' | 'justify'

type BaseTextProps = {
  as?: 'span' | 'p'
  fontSize?: FontSizeType
  lineHeight?: LineHeightType
  fontWeight?: FontWeightType
  textAlign?: TextAlignType
  children?: React.ReactNode
  pallete?: Pallete
  color?: Color<Pallete>
}

export const Text = ({
  as = 'p',
  fontSize = 'base',
  fontWeight = 'regular',
  lineHeight = 'base',
  textAlign = 'start',
  children = 'Random Text',
  pallete = 'neutral',
  color = 'hue200',
}: BaseTextProps) => {
  return (
    <StyledText
      as={as}
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $fontWeight={fontWeight}
      $textAlign={textAlign}
      $pallete={pallete}
      $color={color}
    >
      {children}
    </StyledText>
  )
}
