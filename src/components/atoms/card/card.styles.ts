import styled from 'styled-components'
import type { Pallete } from '../../../styles/theme.types'

type StyledCardProps = {
  $borderColor?: Pallete
  $borderRadius?: string
  $maxWidth?: string
  $maxHeight?: string
}

export const StyledCard = styled.div<StyledCardProps>`
  background-color: ${({ theme }) => theme.colors.neutral.hue0};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: auto;

  border: 1px solid
    ${({ theme, $borderColor }) =>
      $borderColor ? theme.colors[$borderColor].hue200 : theme.colors.neutral.hue100};

  border-radius: ${({ theme, $borderRadius }) =>
    $borderRadius ? $borderRadius : theme.borderRadius.large};

  max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
  max-height: ${({ $maxHeight }) => $maxHeight || 'none'};
`
