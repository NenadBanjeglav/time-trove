import styled, { css } from 'styled-components'

import type { ButtonSize, Color, Pallete } from '../../../styles/theme.types'

import { getVariantStyle } from './helpers'

export function createStyledButton<T extends Pallete>() {
  return styled.button.withConfig({
    shouldForwardProp: prop =>
      !['$variant', '$color', '$size', '$fullWidth', '$loading'].includes(prop),
  })<{
    $variant: T
    $color?: Color<T>
    $size: ButtonSize
    $fullWidth: boolean
    $loading: boolean
  }>`
    ${({ theme, $size, $fullWidth, $loading }) => {
      const sizeConfig = theme.button.sizes[$size]

      return css`
        font-size: ${sizeConfig.fontSize};
        padding: ${sizeConfig.padding};
        height: ${sizeConfig.height};
        min-width: ${sizeConfig.minWidth};
        width: ${$fullWidth ? '100%' : 'auto'};
        border-radius: ${sizeConfig.radius};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.base};
        cursor: ${$loading ? 'not-allowed' : 'pointer'};
        opacity: ${$loading ? 0.75 : 1};
        transition: background-color 0.15s ease-in-out;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        pointer-events: ${$loading ? 'none' : 'auto'};
      `
    }}

    ${({ theme, $variant, $color }) => getVariantStyle(theme, $variant, $color)}
  `
}
