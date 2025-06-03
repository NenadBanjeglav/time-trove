import { motion } from 'motion/react'
import styled from 'styled-components'

export const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  max-height: 40px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.neutral.hue50};
`

export const ToggleButton = styled.button<{ selected: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xSmall};
  padding: ${({ theme }) => `${theme.spacing.medium} ${theme.spacing.medium}`};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.neutral.hue0 : theme.colors.neutral.hue200};
  transition: color 0.2s ease;
  position: relative;
  z-index: 10;
  background: transparent;
  border: none;
  cursor: pointer;
`

export const SliderBackground = styled(motion.span)`
  position: absolute;
  height: 100%;
  width: 50%;
  border-radius: 9999px;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.primary.hue100}, ${theme.colors.primary.hue200})`};
  z-index: 0;
`
export const SliderWrapper = styled.div<{ $themeMode: 'light' | 'dark' }>`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: ${({ $themeMode }) => ($themeMode === 'dark' ? 'flex-end' : 'flex-start')};
  z-index: 0;
`
