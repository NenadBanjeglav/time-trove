import styled, { css } from 'styled-components'

import type { ButtonSize, Color, Pallete } from '../../../styles/theme.types'

import type { ButtonShape } from './Button'
import { getVariantStyle } from './helpers'

export function createStyledButton<T extends Pallete>() {
  return styled.button.withConfig({
    shouldForwardProp: prop =>
      !['$variant', '$color', '$size', '$isIconButton', '$shape', '$fullWidth'].includes(prop),
  })<{
    $variant: T
    $color?: Color<T>
    $size: ButtonSize
    $isIconButton: boolean
    $shape: ButtonShape
    $fullWidth: boolean
  }>`
    ${({ theme, $size, $isIconButton, $shape, $fullWidth }) => {
      const sizeConfig = theme.button.sizes[$size]
      const radius = $isIconButton
        ? $shape === 'circle'
          ? '50%'
          : sizeConfig.radius
        : sizeConfig.radius

      return css`
        font-size: ${sizeConfig.fontSize};
        padding: ${$isIconButton ? '0' : sizeConfig.padding};
        height: ${sizeConfig.height};
        min-width: ${$isIconButton ? sizeConfig.height : sizeConfig.minWidth};
        width: ${$fullWidth ? '100%' : $isIconButton ? sizeConfig.height : 'auto'};
        border-radius: ${radius};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.base};
        cursor: pointer;
        transition: background-color 0.15s ease-in-out;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      `
    }}

    ${({ theme, $variant, $color }) => getVariantStyle(theme, $variant, $color)}
  `
}
