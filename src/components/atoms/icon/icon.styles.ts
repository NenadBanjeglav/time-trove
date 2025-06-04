import styled from 'styled-components'
import type { Color, Pallete, RemSizeType } from '../../../styles/theme.types'

type StyledIconProps = {
  $size: RemSizeType
  $pallete: Pallete
  $color: Color<Pallete>
}

export const StyledIcon = styled.span<StyledIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  color: ${({ theme, $pallete, $color }) => theme.colors[$pallete][$color]};
`
