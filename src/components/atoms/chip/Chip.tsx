import type { HTMLAttributes } from 'react'

import { ChipStatus, type ChipSizeEnum } from './chip.types'
import { createStyledChip } from './chip.styles'

type ChipProps = HTMLAttributes<HTMLDivElement> & {
  size: ChipSizeEnum
  label: string
  status?: ChipStatus
}

export const Chip = ({ size, label, status = ChipStatus.SUCCESS, ...rest }: ChipProps) => {
  const StyledChip = createStyledChip()

  return (
    <StyledChip $status={status} $size={size} {...rest}>
      {label}
    </StyledChip>
  )
}
