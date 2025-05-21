import styled, { css } from 'styled-components'
import type { ChipSizeEnum, ChipStatus } from './chip.types'
import { getChipPallete, getSizeStyle } from './helpers'

export const createStyledChip = () => styled.div<{
  $status: ChipStatus
  $size: ChipSizeEnum
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
