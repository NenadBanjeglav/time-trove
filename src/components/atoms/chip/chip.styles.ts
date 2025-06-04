import styled, { css } from 'styled-components'
import type { ChipSize, ChipStatus } from './chip.types'
import { getChipPallete, getSizeStyle } from './helpers'

type StyledChipProps = {
  $status: ChipStatus
  $size: ChipSize
}

export const StyledChip = styled.div<StyledChipProps>`
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
