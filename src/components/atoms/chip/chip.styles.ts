import styled, { css } from 'styled-components'

import type { Pallete } from '../../../styles/theme.types'

import type { ChipSize } from './Chip'
import { getSizeStyle } from './helpers'

export const createStyledChip = <T extends Pallete>() => styled.div<{
  $pallete: T
  $size: ChipSize
}>`
  display: inline-flex;
  align-items: center;
  width: fit-content;

  ${({ theme, $pallete }) => css`
    background-color: ${theme.colors[$pallete].hue0};
    color: ${theme.colors[$pallete].hue200};
  `};

  ${({ $size }) => getSizeStyle($size)}
`
