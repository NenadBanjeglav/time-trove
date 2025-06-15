import type { Meta, StoryObj } from '@storybook/react'

import { ConfirmDialog } from './ConfirmDialog'
import { DialogVariant } from './confirmDialog.types'

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/Dialogs/ConfirmDialog',
  component: ConfirmDialog,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(DialogVariant),
    },
    title: { control: 'text' },
    description: { control: 'text' },
    primaryActionLabel: { control: 'text' },
    secondaryActionLabel: { control: 'text' },
    loading: { control: 'boolean' },
  },
  args: {
    variant: DialogVariant.SUCCESS,
    title: 'Delete item',
    description: 'Are you sure you want to delete this item? This action cannot be undone.',
    primaryActionLabel: 'Delete',
    secondaryActionLabel: 'Cancel',
    loading: false,
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof ConfirmDialog>

export const SuccessDialog: Story = {
  args: {
    onPrimaryAction: () => alert('Item deleted'),
    onClose: () => alert('Dialog closed'),
  },
}

export const DangerDialog: Story = {
  args: {
    variant: DialogVariant.DANGER,
    title: 'Permanent deletion',
    description: 'This action will remove the item permanently.',
    primaryActionLabel: 'Delete permanently',
    secondaryActionLabel: 'Back',
    onPrimaryAction: () => alert('Permanently deleted'),
    onClose: () => alert('Cancelled'),
  },
}

export const InfoDialog: Story = {
  args: {
    variant: DialogVariant.WARNING,
    title: 'Session expired',
    description: 'Please log in again to continue.',
    primaryActionLabel: 'Log In',
    secondaryActionLabel: 'Close',
    onPrimaryAction: () => alert('Redirecting to login'),
    onClose: () => alert('Dialog closed'),
  },
}

export const LoadingDialog: Story = {
  args: {
    loading: true,
    primaryActionLabel: 'Processing...',
    onPrimaryAction: () => alert('Processing...'),
    onClose: () => alert('Cancelled'),
  },
}

export const WithoutSecondaryButton: Story = {
  args: {
    secondaryActionLabel: undefined,
    onPrimaryAction: () => alert('Confirmed!'),
    onClose: () => alert('Dialog closed'),
  },
}
