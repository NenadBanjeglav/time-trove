import styled from 'styled-components'

export const StyledPageWrapper = styled.div<{ $heightOffset?: number }>`
  padding: 0 16px;
  margin: 0 auto;
  width: 100%;
  min-height: ${({ $heightOffset }) =>
    $heightOffset !== undefined ? `calc(100vh - ${$heightOffset}px)` : '100vh'};
  background-color: ${({ theme }) => theme.colors.neutral.hue50};
  display: flex;
  flex-direction: column;
`
export const FullCenteredLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.large};
`
