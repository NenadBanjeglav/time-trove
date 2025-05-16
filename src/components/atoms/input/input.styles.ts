import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
`

const baseStyle = css`
  width: 100%;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  outline: none;
  transition: all 0.2s ease;
  background-color: ${({ theme }) => theme.colors.neutral.hue0};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.hue300};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    font-size: ${({ theme }) => theme.typography.fontSize.small};
  }
`

export const StyledLabel = styled.label<{ $hasError: boolean }>`
  position: absolute;
  top: -20px;
  left: 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: color 0.2s ease;

  color: ${({ theme, $hasError }) =>
    $hasError ? theme.colors.danger.hue200 : theme.colors.neutral.hue400};

  input:focus + & {
    color: ${({ theme }) => theme.colors.primary.hue200};
  }

  input:not(:placeholder-shown):not(:focus) + & {
    color: ${({ theme }) => theme.colors.primary.hue200};
  }
`

export const StyledInput = styled.input<{ $hasError: boolean }>`
  ${baseStyle}
  border: 1px solid ${({ theme }) => theme.colors.neutral.hue200};

  &:focus,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.primary.hue200};
  }

  &:not(:placeholder-shown):not(:focus) {
    border: 1px solid ${({ theme }) => theme.colors.neutral.hue300};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral.hue100};
    color: ${({ theme }) => theme.colors.neutral.hue300};
    cursor: not-allowed;
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border: 1px solid ${theme.colors.danger.hue100};
    `}
`
