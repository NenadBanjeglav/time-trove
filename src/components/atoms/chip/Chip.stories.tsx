import type { Meta, StoryObj } from '@storybook/react'

import { Chip } from './Chip'
import { ChipSize, ChipStatus } from './chip.types'

const sizes = Object.values(ChipSize)
const statuses = Object.values(ChipStatus)

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
    status: {
      control: 'select',
      options: statuses,
    },
    label: {
      control: 'text',
    },
  },
  args: {
    size: ChipSize.SMALL,
    status: ChipStatus.SUCCESS,
    label: 'Chip Label',
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {}

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
