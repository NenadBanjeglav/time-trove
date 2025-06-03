import type { Meta, StoryObj } from '@storybook/react'

import { Toast } from './Toast'
import type { ToastType } from './toast.types'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    message: 'This is a sample message!',
    onClose: () => alert('Toast closed!'),
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning'] satisfies ToastType[],
    },
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

// ✅ Success toast
export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success!',
  },
}

// ✅ Error toast
export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error!',
  },
}

// ✅ Warning toast
export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning!',
  },
}
