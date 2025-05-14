import styled, { css } from 'styled-components'
import type { FontSizeType, FontWeightType, LineHeightType } from '../../../styles/theme.types'

type StyledProps = {
  $fontSize: FontSizeType
  $fontWeight: FontWeightType
  $lineHeight: LineHeightType
}

export const StyledText = styled.span<StyledProps>`
  ${({ theme, $fontSize, $fontWeight, $lineHeight }) => css`
    font-size: ${theme.typography.fontSize[$fontSize]};
    font-weight: ${theme.typography.fontWeight[$fontWeight]};
    line-height: ${theme.typography.lineHeight[$lineHeight]};
  `}
`
