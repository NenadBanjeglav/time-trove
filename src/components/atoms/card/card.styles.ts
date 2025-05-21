import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.xLarge};
  width: fit-content;
  display: flex;
  flex-direction: column;
`
