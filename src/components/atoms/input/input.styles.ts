import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
  height: calc(56px + 1em);
`

export const StyledInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: 14px 20px 10px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.colors.neutral.hue100};
  outline: none;
  height: 56px;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border-color: ${({ theme, $error }) =>
      $error ? theme.colors.danger.hue200 : theme.colors.primary.hue200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral.hue50};
    border-color: ${({ theme }) => theme.colors.neutral.hue100};
    color: ${({ theme }) => theme.colors.neutral.hue300};
    cursor: not-allowed;
  }

  ${({ $error, theme }) =>
    $error &&
    css`
      border-color: ${theme.colors.danger.hue200};
    `}
`

export const StyledLabel = styled.label<{ $error?: boolean }>`
  position: absolute;
  top: 18px;
  left: 20px;
  transition: all 0.2s ease;
  pointer-events: none;

  color: ${({ theme, $error }) =>
    $error ? theme.colors.danger.hue200 : theme.colors.neutral.hue500};

  input:focus ~ &,
  input:not(:placeholder-shown) ~ & {
    top: -18px;
    left: 4px;
    font-size: ${({ theme }) => theme.typography.fontSize.xSmall};
    line-height: ${({ theme }) => theme.typography.lineHeight.xSmall};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    background: ${({ theme }) => theme.colors.neutral.hue0};
    padding: 0 4px;

    color: ${({ theme, $error }) =>
      $error ? theme.colors.danger.hue200 : theme.colors.primary.hue200};
  }

  ${StyledInput}:disabled + & {
    color: ${({ theme }) => theme.colors.neutral.hue200};
  }
`

export const ErrorText = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: ${({ theme }) => theme.typography.fontSize.xSmall};
  line-height: ${({ theme }) => theme.typography.lineHeight.xSmall};
  letter-spacing: 0;
  min-height: 1em;
  color: ${({ theme }) => theme.colors.danger.hue200};
  margin-left: 8px;
`
