import styled from 'styled-components'

import type { ChipVariant, ChipSize } from './Chip'
import { getSizeStyle, getVariantStyle } from './helpers'

export const StyledChip = styled.div<{
  $variant: ChipVariant
  $size: ChipSize
}>`
  display: inline-flex;
  align-items: center;

  ${({ $variant }) => getVariantStyle($variant)}
  ${({ $size }) => getSizeStyle($size)}
`
