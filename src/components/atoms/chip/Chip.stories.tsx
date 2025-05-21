import type { Meta, StoryObj } from '@storybook/react'

import { Chip } from './Chip'
import { SizeEnum, StatusEnum } from './chip.types'

const sizes = Object.values(SizeEnum)
const statuses = Object.values(StatusEnum)

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
    size: SizeEnum.Small,
    status: StatusEnum.SUCCESS,
    label: 'Chip Label',
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {}

export const Success: Story = {
  args: {
    status: StatusEnum.SUCCESS,
    label: 'Success',
  },
}

export const Warning: Story = {
  args: {
    status: StatusEnum.WARNING,
    label: 'Warning',
  },
}

export const Danger: Story = {
  args: {
    status: StatusEnum.DANGER,
    label: 'Danger',
  },
}
