import styled, { css } from 'styled-components'

import type { Color, IconSize, Pallete } from '../../../styles/theme.types'

import { getIconButtonVariantStyle } from './helpers'

export const createStyledIconButton = <T extends Pallete>() => {
  return styled.button.withConfig({
    shouldForwardProp: prop => !['$variant', '$color', '$shape', '$iconSize'].includes(prop),
  })<{
    $variant: T
    $color?: Color<T>
    $shape: 'circle' | 'square'
    $iconSize: IconSize
  }>`
    ${({ theme, $shape }) => {
      const dimension = $shape === 'circle' ? '40px' : '36px'

      return css`
        width: ${dimension};
        height: ${dimension};
        padding: 0;
        border-radius: ${$shape === 'circle' ? '50%' : theme.borderRadius.medium};
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.15s ease-in-out;
        cursor: pointer;
      `
    }}

    ${({ theme, $variant, $color }) => getIconButtonVariantStyle(theme, $variant, $color)}
  `
}
