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
`

export const IconWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
`

export const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.neutral.hue500};
  border: 1px solid ${({ theme }) => theme.colors.neutral.hue200};
  width: 100%;
  border-radius: 8px;
  height: 100%;
  padding-left: 56px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.hue200};
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
