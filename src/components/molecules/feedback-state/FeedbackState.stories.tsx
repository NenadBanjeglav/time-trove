import type { Meta, StoryObj } from '@storybook/react'

import { FeedbackState } from './FeedbackState'

const meta: Meta<typeof FeedbackState> = {
  title: 'Components/FeedbackState',
  component: FeedbackState,
  tags: ['autodocs'],
  argTypes: {
    imageSrc: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
    buttonVariant: {
      control: 'select',
      options: ['primary', 'neutral', 'success', 'warning', 'danger'],
    },
    imageMaxWidth: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    imageSrc: '/images/empty.png',
    title: 'Nothing here yet!',
    description: 'There are no items to show at the moment.',
    buttonLabel: 'Create',
    buttonVariant: 'primary',
    imageMaxWidth: '24.5rem',
  },
}

export default meta

type Story = StoryObj<typeof FeedbackState>

export const Empty: Story = {}

export const Error: Story = {
  args: {
    imageSrc: '/images/error.png',
    title: 'Something went wrong',
    description: 'An error occurred while attempting to retrieve data from the server.',
    buttonLabel: 'Try again',
    buttonVariant: 'danger',
  },
}

export const NotFound: Story = {
  args: {
    imageSrc: '/images/notFound.png',
    title: 'Page not found!',
    description:
      'The page you are attempting to access is currently unavailable or does not exist.',
    buttonLabel: 'Back home',
    buttonVariant: 'neutral',
  },
}

export const Maintenance: Story = {
  args: {
    imageSrc: '/images/maintance.png',
    title: "We'll be right back!",
    description: 'We are currently performing scheduled maintenance. Please check back soon.',
    buttonLabel: 'Refresh',
    buttonVariant: 'primary',
  },
}
