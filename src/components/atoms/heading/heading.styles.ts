import styled from 'styled-components'

import type {
  FontSizeType,
  FontWeightType,
  LineHeightType,
  Pallete,
  Color,
} from '../../../styles/theme.types'

export type HeadingAlignType = 'start' | 'end' | 'center' | 'justify'

type StyledHeadingProps = {
  $fontSize: FontSizeType
  $fontWeight: FontWeightType
  $lineHeight: LineHeightType
  $pallete: Pallete
  $color: Color<Pallete>
  $textAlign: HeadingAlignType
}

export const StyledHeading = styled.h2<StyledHeadingProps>`
  font-size: ${({ theme, $fontSize }) => theme.typography.fontSize[$fontSize]};
  font-weight: ${({ theme, $fontWeight }) => theme.typography.fontWeight[$fontWeight]};
  line-height: ${({ theme, $lineHeight }) => theme.typography.lineHeight[$lineHeight]};
  color: ${({ theme, $pallete, $color }) => theme.colors[$pallete][$color]};
  text-align: ${({ $textAlign }) => $textAlign};
  margin: 0;

  a {
    all: unset;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
  }
`
