import styled from 'styled-components'

export const StateLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.large};
`

export const Wrapper = styled.div`
  max-width: 716px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};
`

export const Illustration = styled.img<{ $maxWidth?: string }>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth ?? '372px'};
  height: auto;
`

export const ButtonWrapper = styled.div`
  width: 320px;
`
