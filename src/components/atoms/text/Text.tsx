import type { FontSizeType, FontWeightType, LineHeightType } from '../../../styles/theme.types'

import { StyledText } from './text.styles'

type TextProps = {
  as?: 'span' | 'p'
  fontSize?: FontSizeType
  lineHeight?: LineHeightType
  fontWeight?: FontWeightType
  children: React.ReactNode
  textAlign?: string
}

export const Text: React.FC<TextProps> = ({
  as = 'p',
  fontSize = 'base',
  fontWeight = 'regular',
  lineHeight = 'base',
  children = 'Random text',
  textAlign = 'left',
}) => {
  return (
    <StyledText
      as={as}
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $fontWeight={fontWeight}
      $textAlign={textAlign}
    >
      {children}
    </StyledText>
  )
}
