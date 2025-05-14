import { css } from 'styled-components'

import type { ButtonVariant } from './Button'
import { theme } from '../../../styles/theme'

export const getVariantStyle = (variant: ButtonVariant) => {
  const color = theme.colors[variant]
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

  return css`
    background-color: ${color.hue100};
    color: white;
    border: none;

    &:hover {
      background-color: ${color.hue50};
    }

    &:active {
      background-color: ${color.hue200};
    }

    &:disabled {
      background-color: ${neutral.hue50};
      color: ${neutral.hue200};
      cursor: not-allowed;
    }
  `
}
