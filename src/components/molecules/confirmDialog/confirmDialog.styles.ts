import styled from 'styled-components'
import type { Pallete } from '../../../styles/theme.types'

export const DialogBox = styled.div`
  background: ${({ theme }) => theme.colors.neutral.hue0};
  border-radius: ${({ theme }) => theme.borderRadius.xLarge};
  padding: ${({ theme }) => theme.spacing.xLarge};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`

export const IconWrapper = styled.div<{ $pallete: Pallete }>`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  width: 96px;
  height: 96px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ theme, $pallete }) => theme.colors[$pallete].hue100};
`

export const HeadingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 32px;
`
export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.small};
`
