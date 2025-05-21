import styled from 'styled-components'

export const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.medium} 0;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xSmall};
  flex-wrap: wrap;
`

export const PaginationButton = styled.button<{ $active?: boolean }>`
  border: none;
  border-radius: 8px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary.hue200 : theme.colors.neutral.hue50};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  padding: 0.6rem 1rem;
  min-width: 2.8rem;
  height: 2.8rem;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary.hue0 : theme.colors.neutral.hue500};
  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary.hue100};
    color: ${({ theme, $active }) =>
      $active ? theme.colors.primary.hue0 : theme.colors.primary.hue0};
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`
