import type { Meta, StoryObj } from '@storybook/react'

import { Chip } from './Chip'
import { ChipSizeEnum, ChipStatus } from './chip.types'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    size: {
      control: 'radio',
      options: Object.values(ChipSizeEnum),
    },
    status: {
      control: 'select',
      options: Object.values(ChipStatus),
    },
    label: {
      control: 'text',
    },
  },
  args: {
    size: ChipSizeEnum.Small,
    status: ChipStatus.SUCCESS,
    label: 'Chip Label',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Chip>

export const Primary: Story = {
  args: {
    status: ChipStatus.WARNING,
    label: 'Primary',
  },
}

export const Success: Story = {
  args: {
    status: ChipStatus.SUCCESS,
    label: 'Success',
  },
}

export const Warning: Story = {
  args: {
    status: ChipStatus.WARNING,
    label: 'Warning',
  },
}

export const Danger: Story = {
  args: {
    status: ChipStatus.DANGER,
    label: 'Danger',
  },
}

export const LargeSize: Story = {
  args: {
    status: ChipStatus.SUCCESS,
    size: ChipSizeEnum.Large,
    label: 'Large Success',
  },
}
