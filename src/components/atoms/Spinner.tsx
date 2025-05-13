import styled, { keyframes } from 'styled-components'

import EclipseIcon from '../../assets/icons/EclipseIcon'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled(EclipseIcon)`
  margin: 4.8rem auto;
  width: 64px;
  height: 64px;
  display: block;
  animation: ${rotate} 1.5s linear infinite;
  color: ${({ theme }) => theme.colors.primary.hue100};
`

export default Spinner
