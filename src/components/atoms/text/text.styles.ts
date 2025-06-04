import styled from 'styled-components'

import type {
  Color,
  FontSizeType,
  FontWeightType,
  LineHeightType,
  Pallete,
} from '../../../styles/theme.types'

export type TextAlignType = 'start' | 'end' | 'center' | 'justify'

type StyledProps = {
  $fontSize: FontSizeType
  $fontWeight: FontWeightType
  $lineHeight: LineHeightType
  $textAlign: TextAlignType
  $pallete: Pallete
  $color: Color<Pallete>
}

export const StyledText = styled.span<StyledProps>`
  font-size: ${({ theme, $fontSize }) => theme.typography.fontSize[$fontSize]};
  font-weight: ${({ theme, $fontWeight }) => theme.typography.fontWeight[$fontWeight]};
  line-height: ${({ theme, $lineHeight }) => theme.typography.lineHeight[$lineHeight]};
  text-align: ${({ $textAlign }) => $textAlign};
  color: ${({ theme, $pallete, $color }) => theme.colors[$pallete][$color]};
`
