import styled, { css } from 'styled-components'

import { getChipPallete, getSizeStyle } from './helpers'
import type { SizeEnum, StatusEnum } from './chip.types'

export const createStyledChip = () => styled.div<{
  $status: StatusEnum
  $size: SizeEnum
}>`
  display: inline-flex;
  align-items: center;
  width: fit-content;

  ${({ theme, $status }) => {
    const palette = getChipPallete($status)
    return css`
      background-color: ${theme.colors[palette].hue0};
      color: ${theme.colors[palette].hue200};
    `
  }}

  ${({ $size }) => getSizeStyle($size)}
`
