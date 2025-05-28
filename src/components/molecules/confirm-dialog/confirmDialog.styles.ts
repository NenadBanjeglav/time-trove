import styled from 'styled-components'

import type { Pallete } from '../../../styles/theme.types'
import { Card } from '../../atoms/card/Card'

export const ResponsiveCardWrapper = styled(Card)`
  width: 100%;
  height: auto;
  padding: ${({ theme }) => theme.spacing.xLarge};
  min-width: calc(100vw - 32px);

  @media (min-width: 640px) {
    width: 100%;
    min-width: 32.5rem;
  }
`

export const IconWrapper = styled.div<{ $pallete: Pallete }>`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  width: 96px;
  height: 96px;
  flex-shrink: 0;
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
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`
