import type { HTMLAttributes, ReactNode } from 'react'
import { StyledCard } from './card.styles'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const Card = ({
  children,

  ...rest
}: CardProps) => {
  return <StyledCard {...rest}>{children}</StyledCard>
}
