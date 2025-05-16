import type { Meta, StoryObj } from '@storybook/react'

import { Chip } from './Chip'

const variants = ['low', 'medium', 'high', 'inProgress', 'done'] as const
const sizes = ['small', 'large'] as const

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    size: {
      control: 'radio',
      options: sizes,
    },
  },
  args: {
    variant: 'medium',
    size: 'small',
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Low: Story = {
  args: {
    variant: 'low',
  },
}

export const Medium: Story = {
  args: {
    variant: 'medium',
  },
}

export const High: Story = {
  args: {
    variant: 'high',
  },
}

export const InProgress: Story = {
  args: {
    variant: 'inProgress',
  },
}

export const Done: Story = {
  args: {
    variant: 'done',
  },
}

export const LargeSize: Story = {
  args: {
    size: 'large',
  },
}
