import type { FontSizeType, FontWeightType, LineHeightType } from '../../../styles/theme.types'
import { StyledHeading } from './heading.styles'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = {
  as?: HeadingLevel
  fontSize?: FontSizeType
  lineHeight?: LineHeightType
  fontWeight?: FontWeightType
  children: React.ReactNode
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({
  as = 'h2',
  fontSize = 'h2',
  lineHeight = 'h2',
  fontWeight = 'bold',
  children,
}) => {
  return (
    <StyledHeading as={as} $fontSize={fontSize} $lineHeight={lineHeight} $fontWeight={fontWeight}>
      {children}
    </StyledHeading>
  )
}
