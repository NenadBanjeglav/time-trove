import type { FontSizeType, FontWeightType, LineHeightType } from '../../../styles/theme.types'
import { StyledText } from './text.styles'

type TextProps = {
  as?: 'span' | 'p'
  fontSize?: FontSizeType
  lineHeight?: LineHeightType
  fontWeight?: FontWeightType
  children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({
  as = 'p',
  fontSize = 'base',
  fontWeight = 'regular',
  lineHeight = 'base',
  children,
}) => {
  return (
    <StyledText as={as} $fontSize={fontSize} $lineHeight={lineHeight} $fontWeight={fontWeight}>
      {children}
    </StyledText>
  )
}
