import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: ${({ theme }) => theme.spacing.xSmall};
  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  border-radius: 8px;
  width: 100%;
  max-width: 340px;
  height: 40px;

  @media (max-width: 760px) {
    max-width: 100%;
    order: 3;
  }
`

export const IconWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
`

type StyledInputProps = {
  $hasValue?: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.neutral.hue500};
  width: 100%;
  height: 100%;
  padding-left: 56px;
  border-radius: 8px;
  transition: border-color 0.2s;

  border: 1px solid
    ${({ theme, $hasValue }) =>
      $hasValue ? theme.colors.primary.hue200 : theme.colors.neutral.hue100};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.hue200};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.hue200};
  }
`
export const ClearButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.small};
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  height: 100%;
  color: ${({ theme }) => theme.colors.neutral.hue200};

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.hue300};
  }
`
