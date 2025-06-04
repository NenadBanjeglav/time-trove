import type { HTMLAttributes } from 'react'
import { StyledChip } from './chip.styles'
import { ChipStatus, type ChipSize } from './chip.types'

type ChipProps = HTMLAttributes<HTMLDivElement> & {
  size: ChipSize
  label: string
  status?: ChipStatus
}

export const Chip = ({ size, label, status = ChipStatus.SUCCESS, ...rest }: ChipProps) => {
  return (
    <StyledChip $status={status} $size={size} {...rest}>
      {label}
    </StyledChip>
  )
}
