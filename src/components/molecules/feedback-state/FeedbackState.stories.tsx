import type { Meta, StoryObj } from '@storybook/react'
import { FeedbackState } from './FeedbackState'
import { Button } from '../../atoms/button/Button'

const meta: Meta<typeof FeedbackState> = {
  title: 'Molecules/FeedbackState',
  component: FeedbackState,
  tags: ['autodocs'],
  args: {
    title: 'Something went wrong',
    description: 'An error occurred while attempting to retrieve data from the server.',
    imageSrc: '/images/error.png',
  },
}

export default meta

type Story = StoryObj<typeof FeedbackState>

export const Default: Story = {}

export const WithButton: Story = {
  args: {
    buttonElement: <Button size="large">Try Again</Button>,
  },
}

export const CustomImageSize: Story = {
  args: {
    imageMaxWidth: '16rem',
  },
}
