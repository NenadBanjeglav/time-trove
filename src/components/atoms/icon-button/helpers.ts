import { css } from 'styled-components'
import type { Pallete, ThemeType, Color } from '../../../styles/theme.types'

export const getIconButtonVariantStyle = (
  theme: ThemeType,
  variant: Pallete,
  color?: Color<Pallete>
) => {
  const palette = theme.colors[variant]
  const neutral = theme.colors.neutral

  const bg = palette[color ?? 'hue100']
  const hover = palette.hue50
  const active = palette.hue200

  const iconDefault = variant === 'neutral' ? neutral.hue0 : palette.hue200
  const iconHover = variant === 'neutral' ? neutral.hue200 : palette.hue0

  return css`
    background-color: ${bg};
    border: none;
    color: ${iconDefault};

    svg {
      color: ${iconDefault};
      transition: color 0.2s ease-in-out;
    }

    &:hover {
      background-color: ${hover};

      svg {
        color: ${iconHover};
      }
    }

    &:active {
      background-color: ${active};
    }

    &:disabled {
      background-color: ${neutral.hue50};
      color: ${neutral.hue200};
      cursor: not-allowed;

      svg {
        color: ${neutral.hue200};
      }
    }
  `
}
