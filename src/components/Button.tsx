import React from 'react'
import styled, { css } from 'styled-components'

import { theme } from '../styles/theme'

type ButtonVariant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral'
type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: ButtonVariant
  size?: ButtonSize
}

const getVariantStyle = (variant: ButtonVariant) => {
  const color = theme.colors[variant]
  return css`
    background-color: ${color.hue200};
    color: ${variant === 'neutral' ? theme.colors.neutral.hue500 : 'white'};

    &:hover {
      background-color: ${color.hue100};
    }

    &:disabled {
      background-color: ${theme.colors.neutral.hue50};
      color: ${theme.colors.neutral.hue200};
      cursor: not-allowed;
    }
  `
}

const getSizeStyle = (size: ButtonSize) => {
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSize};
    padding: ${padding};
    height: ${height};
    border-radius: ${radius};
  `
}

const StyledButton = styled.button<Required<Pick<ButtonProps, 'variant' | 'size'>>>`
  border: none;
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: ${theme.typography.lineHeight.base};
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${props => getVariantStyle(props.variant)}
  ${props => getSizeStyle(props.size)}
`

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  ...rest
}) => {
  return (
    <StyledButton variant={variant} size={size} {...rest}>
      {label}
    </StyledButton>
  )
}

export default Button
