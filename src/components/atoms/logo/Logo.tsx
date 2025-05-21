import type { HTMLAttributes } from 'react'

import { StyledLogoWrapper } from './logo.styles'

export type LogoVariant = 'compact' | 'full'

type LogoProps = {
  variant?: LogoVariant
} & HTMLAttributes<HTMLDivElement>

export const Logo = ({ variant = 'compact', ...rest }: LogoProps) => {
  const logoSrc = variant === 'full' ? '/images/fullLogo.png' : '/images/logo.png'

  const altText = `TimeTrove ${variant} logo`

  return (
    <StyledLogoWrapper $variant={variant} {...rest}>
      <img src={logoSrc} alt={altText} />
    </StyledLogoWrapper>
  )
}
