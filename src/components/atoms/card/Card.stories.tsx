import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../../atoms/text/Text'
import { Heading } from '../../atoms/heading/Heading'
import type { Pallete } from '../../../styles/theme.types'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    borderColor: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'error'],
    },
    borderRadius: {
      control: 'text',
    },
    maxWidth: {
      control: 'text',
    },
    maxHeight: {
      control: 'text',
    },
  },
  args: {
    borderColor: 'neutral' as Pallete,
    borderRadius: '16px',
    maxWidth: '400px',
    maxHeight: 'none',
    children: (
      <>
        <Heading fontSize="h1" fontWeight="bold" as="h2">
          Card Title
        </Heading>
        <Text>
          This is a customizable Card component with support for border color, radius, and size.
        </Text>
      </>
    ),
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {}

export const WithSuccessBorder: Story = {
  args: {
    borderColor: 'success',
  },
}

export const RoundedAndWide: Story = {
  args: {
    borderRadius: '32px',
    maxWidth: '600px',
  },
}

export const TallCard: Story = {
  args: {
    maxHeight: '600px',
  },
}
