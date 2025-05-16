import type { Meta, StoryObj } from '@storybook/react'

import { DeleteIcon } from '../../../assets/icons/DeleteIcon'
import { theme } from '../../../styles/theme'
import type { Pallete, ButtonSize } from '../../../styles/theme.types'

import { Button } from './Button'

const sizes = Object.keys(theme.button.sizes) as ButtonSize[]
const variants = Object.keys(theme.colors) as Pallete[]

const colorMap: Record<Pallete, string[]> = {
  primary: Object.keys(theme.colors.primary),
  neutral: Object.keys(theme.colors.neutral),
  success: Object.keys(theme.colors.success),
  warning: Object.keys(theme.colors.warning),
  danger: Object.keys(theme.colors.danger),
}

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    color: {
      control: 'select',
      options: colorMap['primary'], // default to primary
    },
    size: {
      control: 'select',
      options: sizes,
    },
    isIconButton: {
      control: 'boolean',
    },
    shape: {
      control: 'select',
      options: ['regular', 'circle', 'square'],
      if: { arg: 'isIconButton', truthy: true },
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    color: 'hue100',
    size: 'medium',
    children: 'Click Me',
    loading: false,
    isIconButton: false,
    shape: 'regular',
    fullWidth: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const WithIconButton: Story = {
  args: {
    isIconButton: true,
    shape: 'circle',
    children: <DeleteIcon />,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
}

export const NeutralVariant: Story = {
  args: {
    variant: 'neutral',
    color: 'hue200',
  },
}
