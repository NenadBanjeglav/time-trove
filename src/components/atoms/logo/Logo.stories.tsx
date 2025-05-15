import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['full', 'icon'],
    },
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
  },
}
export default meta
type Story = StoryObj<typeof Logo>

export const FullLogo: Story = {
  args: {
    variant: 'full',
    width: 164,
    height: 56,
  },
}

export const IconLogo: Story = {
  args: {
    variant: 'small',
    width: 56,
    height: 56,
  },
}
