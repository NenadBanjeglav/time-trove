import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.xLarge};
  border: 1px solid ${({ theme }) => theme.colors.neutral.hue100};
  width: fit-content;
  display: flex;
  flex-direction: column;
`
