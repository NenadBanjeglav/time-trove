import styled, { css } from 'styled-components'
import type { PaletteColorMap } from './Icon'

type StyledIconProps<K extends keyof PaletteColorMap = keyof PaletteColorMap> = {
  $size: number | string
  $pallete: K
  $color: PaletteColorMap[K]
}

export const StyledIcon = styled.span<StyledIconProps>`
  ${({ $size }) => css`
    width: ${typeof $size === 'number' ? `${$size}px` : $size};
    height: ${typeof $size === 'number' ? `${$size}px` : $size};
  `}

  ${({ theme, $pallete, $color }) => css`
    color: ${(theme.colors[$pallete] as any)?.[$color]};

    display: inline-flex;
    align-items: center;
    justify-content: center;
  `}
`
