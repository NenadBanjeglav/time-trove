import styled, { keyframes } from 'styled-components'

import { EclipseIcon } from '../../../assets/icons/EclipseIcon'
import type { Pallete, IconSize } from '../../../styles/theme.types'

import { Icon } from './Icon'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const SpinnerWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: ${spin} 1s linear infinite;
`

type SpinnerProps = {
  pallete?: Pallete
  size?: IconSize
}

export const Spinner = ({ pallete = 'primary', size = 'large' }: SpinnerProps) => {
  return (
    <SpinnerWrapper>
      <Icon icon={EclipseIcon} pallete={pallete} iconSize={size} />
    </SpinnerWrapper>
  )
}
