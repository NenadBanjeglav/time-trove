import styled from 'styled-components'

import { theme } from '../../../styles/theme'
import type { ButtonSize, ButtonVariant } from '../../../styles/theme.types'

import { getSizeStyle, getVariantStyle } from './helpers'

export const StyledButton = styled.button<{ $variant: ButtonVariant; $size: ButtonSize }>`
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: ${theme.typography.lineHeight.base};
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => getVariantStyle(props.$variant)}
  ${props => getSizeStyle(props.$size)}
`
