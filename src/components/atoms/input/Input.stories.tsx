import type { Meta, StoryObj } from '@storybook/react'

import { InputField } from './Input'

const meta: Meta<typeof InputField> = {
  title: 'Components/Input',
  component: InputField,
  tags: ['autodocs'],
  args: {
    name: 'email',
    label: 'Email',
    type: 'text',
    value: '',
    onChange: () => {},
  },
  argTypes: {
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof InputField>

export const Default: Story = {}

export const WithText: Story = {
  args: {
    value: 'hello@example.com',
  },
}

export const WithError: Story = {
  args: {
    error: 'This field is required',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled value',
  },
}
