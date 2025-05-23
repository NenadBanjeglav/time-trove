import type { HTMLAttributes, ReactNode } from 'react'
import { StyledCard } from './card.styles'
import type { Pallete } from '../../../styles/theme.types'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  borderColor?: Pallete
  borderRadius?: string
  maxWidth?: string
  maxHeight?: string
}

export const Card = ({
  children,
  borderColor,
  borderRadius,
  maxWidth,
  maxHeight,
  ...rest
}: CardProps) => {
  return (
    <StyledCard
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $maxWidth={maxWidth}
      $maxHeight={maxHeight}
      {...rest}
    >
      {children}
    </StyledCard>
  )
}
