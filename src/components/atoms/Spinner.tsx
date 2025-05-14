import styled, { keyframes } from 'styled-components'
import { EclipseIcon } from '../../assets/icons/EclipseIcon'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled(EclipseIcon)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
  animation: ${rotate} 1.5s linear infinite;
`
