import styled, { css } from 'styled-components'

import { getChipPallete, getSizeStyle } from './helpers'
import type { ChipSize, ChipStatus } from './chip.types'

export const createStyledChip = () => styled.div<{
  $status: ChipStatus
  $size: ChipSize
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
