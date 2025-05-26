import styled from 'styled-components'

import type { Padding, Pallete, RemSizeType } from '../../../styles/theme.types'

type StyledCardProps = {
  $borderColor?: Pallete
  $borderRadius?: RemSizeType
  $maxWidth?: RemSizeType
  $maxHeight?: RemSizeType
  $minWidth?: RemSizeType
  $minHeight?: RemSizeType
  $width?: RemSizeType
  $height?: RemSizeType
  $padding?: Padding
  $backgroundColor?: Pallete
}

export const StyledCard = styled.div<StyledCardProps>`
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor ? theme.colors[$backgroundColor].hue50 : theme.colors.neutral.hue0};

  padding: ${({ theme, $padding }) => $padding || theme.spacing.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width || 'fit-content'};
  height: ${({ $height }) => $height || 'auto'};

  border: 1px solid
    ${({ theme, $borderColor }) =>
      $borderColor ? theme.colors[$borderColor].hue200 : theme.colors.neutral.hue100};

  border-radius: ${({ theme, $borderRadius }) => $borderRadius || theme.borderRadius.large};

  max-width: ${({ $maxWidth }) => $maxWidth || 'none'};
  max-height: ${({ $maxHeight }) => $maxHeight || 'none'};

  min-width: ${({ $minWidth }) => $minWidth || 'initial'};
  min-height: ${({ $minHeight }) => $minHeight || 'initial'};
`
