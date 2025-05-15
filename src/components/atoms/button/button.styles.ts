import styled from 'styled-components'

import type { ButtonSize } from '../../../styles/theme.types'

import { getVariantStyle } from './helpers'
import type { ButtonVariant } from './Button'

export const StyledButton = styled.button<{ $variant: ButtonVariant; $size: ButtonSize }>`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};

  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, $size }) => {
    const { fontSize, padding, height, radius, minWidth } = theme.button.sizes[$size]
    return `
      font-size: ${fontSize};
      padding: ${padding};
      height: ${height};
      border-radius: ${radius};
      min-width: ${minWidth};
    `
  }}

  ${props => getVariantStyle(props.$variant)}
`
