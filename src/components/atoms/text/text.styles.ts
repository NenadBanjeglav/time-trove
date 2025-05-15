import styled from 'styled-components'

import type {
  Color,
  FontSizeType,
  FontWeightType,
  LineHeightType,
  Pallete,
} from '../../../styles/theme.types'

import type { TextAlignType } from './Text'

type StyledProps<T extends Pallete = Pallete> = {
  $fontSize: FontSizeType
  $fontWeight: FontWeightType
  $lineHeight: LineHeightType
  $textAlign: TextAlignType
  $isVisible: boolean
  $pallete: T
  $color: Color<T>
}

export function createStyledText<T extends Pallete>() {
  return styled.span.withConfig({
    shouldForwardProp: prop =>
      ![
        '$fontSize',
        '$fontWeight',
        '$lineHeight',
        '$textAlign',
        '$isVisible',
        '$pallete',
        '$color',
      ].includes(prop),
  })<StyledProps<T>>`
    font-size: ${({ theme, $fontSize }) => theme.typography.fontSize[$fontSize]};
    font-weight: ${({ theme, $fontWeight }) => theme.typography.fontWeight[$fontWeight]};
    line-height: ${({ theme, $lineHeight }) => theme.typography.lineHeight[$lineHeight]};
    text-align: ${({ $textAlign }) => $textAlign};
    display: ${({ $isVisible, as }) => (!$isVisible ? 'none' : as === 'p' ? 'block' : 'inline')};

    ${({ theme, $pallete, $color }) => `color: ${theme.colors[$pallete][$color]};`}
  `
}
