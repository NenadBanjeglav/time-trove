import type { HTMLAttributes } from 'react'

import { createStyledChip } from './chip.styles'
import { StatusEnum, type SizeEnum } from './chip.types'

type ChipProps = HTMLAttributes<HTMLDivElement> & {
  size: SizeEnum
  label: string
  status?: StatusEnum
}

export const Chip = ({ size, label, status = StatusEnum.SUCCESS, ...rest }: ChipProps) => {
  const StyledChip = createStyledChip()

  return (
    <StyledChip $status={status} $size={size} {...rest}>
      {label}
    </StyledChip>
  )
}
