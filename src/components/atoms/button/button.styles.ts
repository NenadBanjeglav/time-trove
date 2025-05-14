import styled from 'styled-components'

import type { ButtonSize } from '../../../styles/theme.types'

import { getSizeStyle, getVariantStyle } from './helpers'
import type { ButtonVariant } from './Button'

export const StyledButton = styled.button<{ $variant: ButtonVariant; $size: ButtonSize }>`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: ${({ theme, $size }) => theme.button.sizes[$size].minWidth};

  ${props => getVariantStyle(props.$variant)}
  ${props => getSizeStyle(props.$size)}
`
