import type { Meta, StoryObj } from '@storybook/react'

import { DeleteIcon } from '../../../assets/icons/DeleteIcon'
import { EditIcon } from '../../../assets/icons/EditIcon'
import { theme } from '../../../styles/theme'
import type { IconSize, Pallete } from '../../../styles/theme.types'

import { IconButton } from './IconButton'

const variants = Object.keys(theme.colors) as Pallete[]
const iconSizes = Object.keys(theme.iconSize) as IconSize[]
const shapes = ['circle', 'square'] as const

const colorMap: Record<Pallete, string[]> = {
  primary: Object.keys(theme.colors.primary),
  neutral: Object.keys(theme.colors.neutral),
  success: Object.keys(theme.colors.success),
  warning: Object.keys(theme.colors.warning),
  danger: Object.keys(theme.colors.danger),
}

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    color: {
      control: 'select',
      options: colorMap.primary,
    },
    iconSize: {
      control: 'select',
      options: iconSizes,
    },
    shape: {
      control: 'select',
      options: shapes,
    },
    icon: {
      control: false,
    },
  },
  args: {
    icon: EditIcon,
    variant: 'primary',
    color: 'hue100',
    iconSize: 'small',
    shape: 'circle',
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Primary: Story = {}

export const NeutralSquare: Story = {
  args: {
    variant: 'neutral',
    color: 'hue100',
    shape: 'square',
  },
}

export const DangerDeleteIcon: Story = {
  args: {
    icon: DeleteIcon,
    variant: 'danger',
    color: 'hue0',
    shape: 'square',
    iconSize: 'large',
  },
}
