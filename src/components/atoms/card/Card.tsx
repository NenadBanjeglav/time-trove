import type { HTMLAttributes, ReactNode } from 'react'
import { StyledCard } from './card.styles'
import type { Pallete } from '../../../styles/theme.types'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  borderColor?: Pallete
  borderRadius?: string
  maxWidth?: string
  maxHeight?: string
  minWidth?: string
  minHeight?: string
  width?: string
  height?: string
  padding?: string
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
