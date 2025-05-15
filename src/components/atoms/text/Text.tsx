import type {
  FontSizeType,
  FontWeightType,
  LineHeightType,
  ThemeType,
} from '../../../styles/theme.types'

import { StyledText } from './text.styles'

export type TextAlignType = 'start' | 'end' | 'center' | 'justify'

type BaseProps = {
  as?: 'span' | 'p'
  fontSize?: FontSizeType
  lineHeight?: LineHeightType
  fontWeight?: FontWeightType
  textAlign?: TextAlignType
  isVisible?: boolean
  children: React.ReactNode
}

type NeutralColorProps = {
  pallete?: 'neutral'
  color?: keyof ThemeType['colors']['neutral']
}

type OtherColorProps = {
  pallete?: Exclude<keyof ThemeType['colors'], 'neutral'>
  color?: keyof ThemeType['colors']['primary']
}

type TextProps = BaseProps & (NeutralColorProps | OtherColorProps)

export const Text: React.FC<TextProps> = ({
  as = 'p',
  fontSize = 'base',
  fontWeight = 'regular',
  lineHeight = 'base',
  textAlign = 'start',
  isVisible = false,
  children = 'Random Text',
  pallete = 'neutral',
  color = 'hue200',
}) => {
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
