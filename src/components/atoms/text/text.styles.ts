import styled from 'styled-components'

import type {
  FontSizeType,
  FontWeightType,
  LineHeightType,
  ThemeType,
} from '../../../styles/theme.types'

import type { TextAlignType } from './Text'

type StyledProps = {
  $fontSize: FontSizeType
  $fontWeight: FontWeightType
  $lineHeight: LineHeightType
  $textAlign: TextAlignType
  $isVisible: boolean
  $pallete: keyof ThemeType['colors']
  $color: string
}

const getThemeColor = (theme: ThemeType, pallete: keyof ThemeType['colors'], color: string) => {
  const palleteColors = theme.colors[pallete] as Record<string, string>
  return palleteColors[color]
}

export const StyledText = styled.span<StyledProps>`
  font-size: ${({ theme, $fontSize }) => theme.typography.fontSize[$fontSize]};
  font-weight: ${({ theme, $fontWeight }) => theme.typography.fontWeight[$fontWeight]};
  line-height: ${({ theme, $lineHeight }) => theme.typography.lineHeight[$lineHeight]};
  text-align: ${({ $textAlign }) => $textAlign};
  color: ${({ theme, $pallete, $color }) => getThemeColor(theme, $pallete, $color)};
`
