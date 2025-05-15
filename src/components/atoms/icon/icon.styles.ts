import styled, { css } from 'styled-components'

import type { Color, Pallete } from '../../../styles/theme.types'

type StyledIconProps<T extends Pallete = Pallete> = {
  $size: number | string
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

    ${({ $size }) => css`
      width: ${typeof $size === 'number' ? `${$size}px` : $size};
      height: ${typeof $size === 'number' ? `${$size}px` : $size};
    `}

    ${({ theme, $pallete, $color }) => `color: ${theme.colors[$pallete][$color]};`}
  `
}
