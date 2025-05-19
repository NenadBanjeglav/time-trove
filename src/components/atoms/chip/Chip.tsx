import type { HTMLAttributes } from 'react'

import { StyledChip } from './chip.styles'

export type ChipVariant = 'low' | 'medium' | 'high' | 'inProgress' | 'done'
export type ChipSize = 'small' | 'large'

type ChipProps = HTMLAttributes<HTMLDivElement> & {
  variant: ChipVariant
  size: ChipSize
}

const variantLabelMap: Record<ChipVariant, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  inProgress: 'In Progress',
  done: 'Done',
}

export const Chip = ({ variant, size, ...rest }: ChipProps) => {
  return (
    <StyledChip $variant={variant} $size={size} {...rest}>
      {variantLabelMap[variant]}
    </StyledChip>
  )
}
