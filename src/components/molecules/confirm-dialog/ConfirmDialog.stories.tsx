import type { Meta, StoryObj } from '@storybook/react'

import { ChipStatus } from '../../atoms/chip/chip.types'
import { ConfirmDialog } from './ConfirmDialog'

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/Dialog/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: Object.values(ChipStatus),
    },
    confirmLabel: {
      control: 'text',
    },
    cancelLabel: {
      control: 'text',
    },
    loading: {
      control: 'boolean',
    },
  },
  args: {
    title: 'Are you sure?',
    description: 'This action cannot be undone.',
    confirmLabel: 'Yes, Confirm',
    cancelLabel: 'Cancel',
  },
}

export default meta
type Story = StoryObj<typeof ConfirmDialog>

export const Success: Story = {
  args: {
    status: ChipStatus.SUCCESS,
  },
}

export const Warning: Story = {
  args: {
    status: ChipStatus.WARNING,
  },
}

export const Danger: Story = {
  args: {
    status: ChipStatus.DANGER,
  },
}

export const LoadingState: Story = {
  args: {
    status: ChipStatus.DANGER,
    loading: true,
  },
}

export const CancelOnly: Story = {
  args: {
    status: ChipStatus.WARNING,
    onConfirm: undefined,
  },
}

export const ConfirmOnly: Story = {
  args: {
    status: ChipStatus.SUCCESS,
    onCancel: undefined,
  },
}
