import type { Meta, StoryObj } from '@storybook/react'

import { TextareaField } from './Textarea'

const meta: Meta<typeof TextareaField> = {
  title: 'Components/Textarea',
  component: TextareaField,
  tags: ['autodocs'],
  args: {
    name: 'message',
    label: 'Message',
    value: '',
    onChange: () => {},
  },
  argTypes: {
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TextareaField>

export const Default: Story = {}

export const Filled: Story = {
  args: {
    value: 'This is a sample message.',
  },
}

export const WithError: Story = {
  args: {
    error: 'Message is required',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled textarea value',
  },
}
