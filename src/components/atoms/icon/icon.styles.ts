import styled from 'styled-components'

import type { Color, Pallete, RemString } from '../../../styles/theme.types'

type StyledIconProps<T extends Pallete = Pallete> = {
  $size: RemString
  $pallete: T
  $color: Color<T>
}

export function createStyledIcon<T extends Pallete>() {
  return styled.span.withConfig({
    shouldForwardProp: prop => !['$size', '$pallete', '$color'].includes(prop),
  })<StyledIconProps<T>>`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};

    ${({ theme, $pallete, $color }) => `color: ${theme.colors[$pallete][$color]};`}
  `
}
