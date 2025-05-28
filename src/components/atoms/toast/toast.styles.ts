import styled from 'styled-components'

import { palleteMap } from './helpers'
import type { ToastType } from './toast.types'

export const ToastWrapper = styled.div<{ $type: ToastType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  border-bottom: 3px solid ${({ theme, $type }) => theme.colors[palleteMap[$type]].hue200};

  padding: 16px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 420px;
  min-height: 80px;
`

export const ToastHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`

export const Content = styled.div`
  flex: 1;
`

export const Message = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral.hue200};
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.neutral.hue200};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.hue500};
  }
`
