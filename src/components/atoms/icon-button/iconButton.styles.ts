import styled, { css } from 'styled-components'
import type { Pallete, Color, IconSize } from '../../../styles/theme.types'
import { getIconButtonVariantStyle } from './helpers'

type ButtonShape = 'circle' | 'square'

type StyledIconButtonProps = {
  $variant: Pallete
  $color?: Color<Pallete>
  $shape: ButtonShape
  $iconSize: IconSize
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
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
