import type { HTMLAttributes, ReactNode } from 'react'

import { StyledPageWrapper } from './pageWrapper.styles'

type PageWrapperProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  dynamicHeightOffset?: number
}

export const PageWrapper = ({ children, dynamicHeightOffset, ...rest }: PageWrapperProps) => {
  return (
    <StyledPageWrapper $heightOffset={dynamicHeightOffset} {...rest}>
      {children}
    </StyledPageWrapper>
  )
}
