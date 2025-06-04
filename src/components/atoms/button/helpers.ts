import { css } from 'styled-components'
import type { Pallete, ThemeType, Color } from '../../../styles/theme.types'

export const getVariantStyle = (theme: ThemeType, variant: Pallete, color?: Color<Pallete>) => {
  const palette = theme.colors[variant]
  const neutral = theme.colors.neutral

  if (variant === 'neutral') {
    return css`
      background-color: ${neutral.hue0};
      color: ${neutral.hue500};
      border: 1px solid ${neutral.hue100};

      &:hover {
        background-color: ${neutral.hue50};
      }

      &:active {
        background-color: ${neutral.hue0};
      }

      &:disabled {
        background-color: ${neutral.hue50};
        color: ${neutral.hue200};
        border: 1px solid ${neutral.hue50};
        cursor: not-allowed;
      }
    `
  }

  const bg = palette[color ?? 'hue100']
  const hover = palette.hue50
  const active = palette.hue200

  return css`
    background-color: ${bg as string};
    color: ${neutral.hue0};
    border: none;

    &:hover {
      background-color: ${hover};
    }

    &:active {
      background-color: ${active};
    }

    &:disabled {
      background-color: ${neutral.hue50};
      color: ${neutral.hue200};
      cursor: not-allowed;
    }
  `
}
