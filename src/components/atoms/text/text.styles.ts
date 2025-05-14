import styled from 'styled-components'
import type { FontSizeType, FontWeightType, LineHeightType } from '../../../styles/theme.types'

type StyledProps = {
  $fontSize: FontSizeType
  $fontWeight: FontWeightType
  $lineHeight: LineHeightType
}

export const StyledText = styled.span<StyledProps>`
  font-size: ${({ theme, $fontSize }) => theme.typography.fontSize[$fontSize]};
  font-weight: ${({ theme, $fontWeight }) => theme.typography.fontWeight[$fontWeight]};
  line-height: ${({ theme, $lineHeight }) => theme.typography.lineHeight[$lineHeight]};
`
