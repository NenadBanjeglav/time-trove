import styled from 'styled-components'

import { Card } from '../../atoms/card/Card'

export const FullWidthCard = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 156px;
  cursor: pointer;
`

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  width: 100%;
`

export const TaskBody = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limit to 2 lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Footer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.small};
  display: flex;
  justify-content: space-between;

  width: 100%;
`
export const PriorityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`
