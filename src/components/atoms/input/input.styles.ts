import styled, { css } from 'styled-components'

export const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledLabel = styled.label<{
  $error?: boolean

  $disabled?: boolean
}>`
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: ${({ theme }) => theme.typography.fontSize.xSmall};
  line-height: ${({ theme }) => theme.typography.lineHeight.xSmall};
  letter-spacing: 0;

  color: ${({ theme, $error, $disabled }) =>
    $disabled
      ? theme.colors.neutral.hue300
      : $error
        ? theme.colors.danger.hue200
        : theme.colors.neutral.hue500};
`
export const StyledInput = styled.input<{
  $error?: boolean
}>`
  padding: 10px 16px;
  border-radius: 12px;

  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  letter-spacing: 0;

  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  border: 1px solid ${({ theme }) => theme.colors.neutral.hue200};

  ${({ $error, theme }) =>
    $error &&
    css`
      border-color: ${theme.colors.danger.hue200};
    `}

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.hue200};
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral.hue50};
    color: ${({ theme }) => theme.colors.neutral.hue300};
    cursor: not-allowed;
  }
`

export const ErrorText = styled.span<{ $visible: boolean }>`
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: ${({ theme }) => theme.typography.fontSize.xSmall};
  line-height: ${({ theme }) => theme.typography.lineHeight.xSmall};
  letter-spacing: 0;

  min-height: 1em;
  color: ${({ theme }) => theme.colors.danger.hue200};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
`
