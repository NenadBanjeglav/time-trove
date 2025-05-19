import type { HTMLAttributes } from 'react'

import type { Pallete } from '../../../styles/theme.types'

import { createStyledChip } from './chip.styles'

export type ChipSize = 'small' | 'large'

type ChipProps<T extends Pallete = 'neutral'> = HTMLAttributes<HTMLDivElement> & {
  size: ChipSize
  label: string
  pallete?: T
}

export const Chip = <T extends Pallete = 'neutral'>({
  size,
  label,
  pallete = 'neutral' as T,
  ...rest
}: ChipProps<T>) => {
  const StyledChip = createStyledChip<T>()

  return (
    <StyledChip $pallete={pallete} $size={size} {...rest}>
      {label}
    </StyledChip>
  )
}
