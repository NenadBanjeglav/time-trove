import type { Meta, StoryObj } from '@storybook/react'

import type { Pallete, RemSizeType } from '../../../styles/theme.types'
import { Heading } from '../../atoms/heading/Heading'
import { Text } from '../../atoms/text/Text'

import { Card } from './Card'

const borderOptions: Pallete[] = ['neutral', 'primary', 'success', 'warning', 'danger']
const remSizes: RemSizeType[] = ['16rem', '24rem', '32rem', '40rem'] // example values
const radii: RemSizeType[] = ['1rem', '2rem', '3rem']

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    borderColor: {
      control: 'select',
      options: borderOptions,
    },
    borderRadius: {
      control: 'select',
      options: radii,
    },
    maxWidth: {
      control: 'select',
      options: remSizes,
    },
    maxHeight: {
      control: 'select',
      options: remSizes,
    },
    width: {
      control: 'select',
      options: remSizes,
    },
    height: {
      control: 'select',
      options: remSizes,
    },
  },
  args: {
    borderColor: 'neutral',
    borderRadius: '1rem',
    maxWidth: '24rem',

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
    borderRadius: '2rem',
    maxWidth: '40rem',
  },
}

export const TallCard: Story = {
  args: {
    maxHeight: '40rem',
  },
}
