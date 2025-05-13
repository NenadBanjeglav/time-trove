import { css } from 'styled-components'

import { theme } from '../../../styles/theme'
import type { ButtonSize, ButtonVariant } from '../../../styles/theme.types'

export const getVariantStyle = (variant: ButtonVariant) => {
  const color = theme.colors[variant]

  if (variant === 'neutral') {
    return css`
      background-color: ${theme.colors.neutral.hue0};
      color: ${theme.colors.neutral.hue500};
      border: 1px solid ${theme.colors.neutral.hue100};

      &:hover {
        background-color: ${theme.colors.neutral.hue50};
      }

      &:active {
        background-color: ${theme.colors.neutral.hue0};
      }

      &:disabled {
        background-color: ${theme.colors.neutral.hue50};
        color: ${theme.colors.neutral.hue200};
        border: 1px solid ${theme.colors.neutral.hue50};
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
      background-color: ${theme.colors.neutral.hue50};
      color: ${theme.colors.neutral.hue200};
      cursor: not-allowed;
    }
  `
}

export const getSizeStyle = (size: ButtonSize) => {
  const sizeMap = {
    small: {
      fontSize: theme.typography.fontSize.xSmall,
      padding: '8px 8px',
      height: '32px',
      radius: '8px',
    },
    medium: {
      fontSize: theme.typography.fontSize.small,
      padding: '8px 14px',
      height: '40px',
      radius: '12px',
    },
    large: {
      fontSize: theme.typography.fontSize.base,
      padding: '8px 16px',
      height: '48px',
      radius: '12px',
    },
    xlarge: {
      fontSize: theme.typography.fontSize.large,
      padding: '8px 24px',
      height: '56px',
      radius: '12px',
    },
  }

  const { fontSize, padding, height, radius } = sizeMap[size]

  return css`
    font-size: ${fontSize};
    padding: ${padding};
    height: ${height};
    border-radius: ${radius};
  `
}
