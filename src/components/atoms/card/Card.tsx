import type { HTMLAttributes, ReactNode } from 'react'

import type { Padding, Pallete, RemSizeType } from '../../../styles/theme.types'

import { StyledCard } from './card.styles'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  borderColor?: Pallete
  borderRadius?: RemSizeType
  maxWidth?: RemSizeType
  maxHeight?: RemSizeType
  minWidth?: RemSizeType
  minHeight?: RemSizeType
  width?: RemSizeType
  height?: RemSizeType
  padding?: Padding
  backgroundColor?: Pallete
}

export const Card = ({
  children,
  borderColor,
  borderRadius,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  padding,
  backgroundColor,
  width,
  height,
  ...rest
}: CardProps) => {
  return (
    <StyledCard
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $maxWidth={maxWidth}
      $maxHeight={maxHeight}
      $minWidth={minWidth}
      $minHeight={minHeight}
      $padding={padding}
      $backgroundColor={backgroundColor}
      $width={width}
      $height={height}
      {...rest}
    >
      {children}
    </StyledCard>
  )
}
