import type {
  Color,
  FontSizeType,
  FontWeightType,
  LineHeightType,
  Pallete,
} from '../../../styles/theme.types'

import { StyledHeading } from './heading.styles'

export type HeadingAlignType = 'start' | 'end' | 'center' | 'justify'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = {
  as?: HeadingLevel
  fontSize?: FontSizeType
  lineHeight?: LineHeightType
  fontWeight?: FontWeightType
  pallete?: Pallete
  color?: Color<Pallete>
  children: React.ReactNode
  className?: string
  textAlign?: HeadingAlignType
}

export const Heading = ({
  as = 'h2',
  fontSize = 'h2',
  lineHeight = 'h2',
  fontWeight = 'bold',
  pallete = 'neutral',
  color = 'hue200',
  children = 'Random Heading',
  textAlign = 'center',
  className,
}: HeadingProps) => {
  return (
    <StyledHeading
      as={as}
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $fontWeight={fontWeight}
      $pallete={pallete}
      $color={color}
      $textAlign={textAlign}
      className={className}
    >
      {children}
    </StyledHeading>
  )
}
