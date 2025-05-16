import styled from 'styled-components'
import type { LogoVariant } from './Logo'

export const StyledLogoWrapper = styled.div<{ $variant: LogoVariant }>`
  display: inline-block;
  position: relative;

  width: ${({ $variant }) => ($variant === 'full' ? '164px' : '56px')};
  height: ${({ $variant }) => ($variant === 'full' ? '56px' : '56px')};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }
`
