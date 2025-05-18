import type { Meta, StoryObj } from '@storybook/react'

import { InputField } from './Input'

const meta: Meta<typeof InputField> = {
  title: 'Components/Input',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
  args: {
    name: 'example',
    label: 'Example Label',
    placeholder: 'Type something...',
    type: 'text',
  },
}

export default meta
type Story = StoryObj<typeof InputField>

export const Default: Story = {}

export const WithError: Story = {
  args: {
    error: 'This field is required.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
}

export const PasswordType: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
}
