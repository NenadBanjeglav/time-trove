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
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    primaryActionLabel: {
      control: 'text',
    },
    secondaryActionLabel: {
      control: 'text',
    },
    loading: {
      control: 'boolean',
    },
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

export const Default: Story = {
  args: {
    onPrimaryAction: () => alert('Primary action'),
    onSecondaryAction: () => alert('Secondary action'),
  },
}

export const LoadingState: Story = {
  args: {
    loading: true,
    onPrimaryAction: () => alert('Submitting...'),
    onSecondaryAction: () => alert('Cancel'),
  },
}

export const DangerVariant: Story = {
  args: {
    variant: DialogVariant.DANGER,
    title: 'Critical action',
    primaryActionLabel: 'Proceed',
    description: 'This operation is irreversible. Are you absolutely sure?',
    onPrimaryAction: () => alert('Proceeding...'),
    onSecondaryAction: () => alert('Abort'),
  },
}

export const WithoutSecondaryButton: Story = {
  args: {
    secondaryActionLabel: undefined,
    onPrimaryAction: () => alert('Confirmed!'),
  },
}
