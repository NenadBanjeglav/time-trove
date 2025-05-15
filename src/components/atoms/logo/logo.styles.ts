import styled from 'styled-components'

import FullLogo from '../../../assets/images/fullLogo.png'
import Logo from '../../../assets/images/logo.png'

export const StyledFullLogo = styled.img.attrs(() => ({
  src: FullLogo,
}))`
  width: ${({ width }) => width || '164px'};
  height: ${({ height }) => height || '56px'};
`

export const StyledCompactLogo = styled.img.attrs(() => ({
  src: Logo,
}))`
  width: ${({ width }) => width || '56px'};
  height: ${({ height }) => height || '56px'};
`
