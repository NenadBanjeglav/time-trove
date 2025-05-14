import type { Meta, StoryObj } from '@storybook/react'

import { theme } from '../../../styles/theme'
import type { ButtonSize } from '../../../styles/theme.types'
import { Button, buttonVariants } from './Button'
import { Spinner } from '../Spinner'

const variants = buttonVariants
const sizes = Object.keys(theme.button.sizes) as ButtonSize[]

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    size: {
      control: 'radio',
      options: sizes,
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const DefaultButton: Story = {
  args: {
    label: 'Button',
    variant: variants[0],
    size: sizes[0],
    disabled: false,
  },
}

export const LoadingButton: Story = {
  args: {
    label: '',
    variant: variants[0],
    size: sizes[0],
    children: <Spinner />,
    disabled: false,
  },
}
