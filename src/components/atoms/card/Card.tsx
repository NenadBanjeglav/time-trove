import type { HTMLAttributes, ReactNode } from 'react'
import { StyledCard } from './card.styles'
import type { Pallete } from '../../../styles/theme.types'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  borderColor?: Pallete
  borderRadius?: string
  maxWidth?: string
  maxHeight?: string
  padding?: string
  backgroundColor?: Pallete
}

export const Card = ({
  children,
  borderColor,
  borderRadius,
  maxWidth,
  maxHeight,
  padding,
  backgroundColor,

  ...rest
}: CardProps) => {
  return (
    <StyledCard
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $maxWidth={maxWidth}
      $maxHeight={maxHeight}
      $padding={padding}
      $backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </StyledCard>
  )
}
