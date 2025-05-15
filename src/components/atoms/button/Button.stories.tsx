import type { Meta, StoryObj } from '@storybook/react'

import { theme } from '../../../styles/theme'
import type { Pallete, ButtonSize } from '../../../styles/theme.types'

import { Button } from './Button'

const sizes = Object.keys(theme.button.sizes) as ButtonSize[]
const variants = Object.keys(theme.colors) as Pallete[]

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
    variant: {
      control: 'select',
      options: variants,
    },
    loading: {
      control: 'boolean',
    },
    icon: {
      control: false,
    },
    children: {
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Click Me',
    loading: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
