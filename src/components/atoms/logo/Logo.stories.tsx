import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['compact', 'full'],
    },
  },
  args: {
    variant: 'compact',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Logo component that renders either a compact or full TimeTrove logo with preserved aspect ratio.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Logo>

export const Compact: Story = {
  args: {
    variant: 'compact',
  },
}

export const Full: Story = {
  args: {
    variant: 'full',
  },
}
