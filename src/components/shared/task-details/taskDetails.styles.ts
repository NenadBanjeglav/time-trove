import styled from 'styled-components'

import { Card } from '../../atoms/card/Card'

export const TaskDetailsWrapper = styled(Card)`
  width: 100%;
  max-width: 672px;
  height: auto;
  padding: ${({ theme }) => theme.spacing.medium};
  box-sizing: border-box;

  @media (max-width: 744px) {
    max-width: calc(100vw - 32px);
    width: 100%;
  }
`
export const TaskDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.smallPlus};
`

export const TaskDetailsIconText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.smallPlus};
`

export const TaskDetailsIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.neutral.hue50};
  border-radius: 50%;
`

export const TaskDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  align-items: flex-start;
  flex: 0 0 auto;
`

export const TaskDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  width: 100%;
`
