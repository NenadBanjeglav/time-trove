import type { Meta, StoryObj } from '@storybook/react'

import { Chip } from './Chip'

const sizes = ['small', 'large'] as const
const palletes = ['primary', 'neutral', 'success', 'warning', 'danger'] as const

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: sizes,
    },
    pallete: {
      control: 'select',
      options: palletes,
    },
    label: {
      control: 'text',
    },
  },
  args: {
    size: 'small',
    pallete: 'success',
    label: 'Low',
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Playground: Story = {}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Chip size="large" label="In progress" pallete="warning" />
        <Chip size="large" label="Done" pallete="success" />
        <Chip size="large" label="Low" pallete="success" />
        <Chip size="large" label="Medium" pallete="warning" />
        <Chip size="large" label="High" pallete="danger" />
      </div>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Chip size="small" label="Low" pallete="success" />
        <Chip size="small" label="Medium" pallete="warning" />
        <Chip size="small" label="High" pallete="danger" />
      </div>
    </div>
  ),
}
