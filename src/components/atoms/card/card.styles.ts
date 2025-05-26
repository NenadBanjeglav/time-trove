import styled from 'styled-components'
import type { Pallete } from '../../../styles/theme.types'

type StyledCardProps = {
  $borderColor?: Pallete
  $borderRadius?: string
  $maxWidth?: string
  $maxHeight?: string
  $padding?: string
  $backgroundColor?: Pallete
}

export const StyledCard = styled.div<StyledCardProps>`
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor ? theme.colors[$backgroundColor].hue50 : theme.colors.neutral.hue0};

  padding: ${({ theme, $padding }) => $padding || theme.spacing.medium};
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: auto;

  border: 1px solid
    ${({ theme, $borderColor }) =>
      $borderColor ? theme.colors[$borderColor].hue200 : theme.colors.neutral.hue100};

  border-radius: ${({ theme, $borderRadius }) => $borderRadius || theme.borderRadius.large};

  max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
  max-height: ${({ $maxHeight }) => $maxHeight || 'none'};
`
