import styled from 'styled-components'

export const StyledContainer = styled.div`
  max-width: 1240px;
  padding: 0 16px;
  margin: 0 auto;
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral.hue100};
`
