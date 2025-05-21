import { Chip } from '../components/atoms/chip/Chip'
import { ChipSizeEnum } from '../components/atoms/chip/chip.types'

export const Dashboard = () => {
  return (
    <div>
      <Chip label="High" pallete="danger" size={ChipSizeEnum.Large} />
    </div>
  )
}
