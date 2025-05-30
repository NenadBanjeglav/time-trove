import styled from 'styled-components'

import type {
  Color,
  FontSizeType,
  FontWeightType,
  LineHeightType,
  Pallete,
} from '../../../styles/theme.types'

import type { HeadingAlignType } from './Heading'

type StyledProps<T extends Pallete = Pallete> = {
  $fontSize: FontSizeType
  $fontWeight: FontWeightType
  $lineHeight: LineHeightType
  $pallete: T
  $color: Color<T>
  $textAlign: HeadingAlignType
}

export function createStyledHeading<T extends Pallete>() {
  return styled.h1.withConfig({
    shouldForwardProp: prop =>
      !['$fontSize', '$fontWeight', '$lineHeight', '$pallete', '$color'].includes(prop),
  })<StyledProps<T>>`
    font-size: ${({ theme, $fontSize }) => theme.typography.fontSize[$fontSize]};
    font-weight: ${({ theme, $fontWeight }) => theme.typography.fontWeight[$fontWeight]};
    line-height: ${({ theme, $lineHeight }) => theme.typography.lineHeight[$lineHeight]};
    color: ${({ theme, $pallete, $color }) => theme.colors[$pallete][$color] as string};
    margin: 0;
    text-align: ${({ $textAlign }) => $textAlign};

    a {
      all: unset;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      display: inline-block;
    }
  `
}
