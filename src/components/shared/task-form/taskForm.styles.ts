import styled from 'styled-components'

import { Card } from '../../atoms/card/Card'

export const ResponsiveFormWrapper = styled(Card)`
  width: 100%;
  min-width: 672px;
  height: auto;
  padding: ${({ theme }) => theme.spacing.medium};
  box-sizing: border-box;

  @media (max-width: 744px) {
    min-width: calc(100vw - 32px);
    width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  width: 100%;
`

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.smallPlus};
`

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.smallPlus};
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.neutral.hue50};
  border-radius: 50%;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  align-items: flex-start;
  flex: 0 0 auto;
`

export const PriorityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  align-items: flex-start;
`

export const ErrorWrapper = styled.div`
  height: 1em;
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  margin-top: -16px;
`
