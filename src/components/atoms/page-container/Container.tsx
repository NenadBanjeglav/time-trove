import type { HTMLAttributes, ReactNode } from 'react'
import { StyledContainer } from './container.styles'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const Container = ({ children, ...rest }: ContainerProps) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>
}
