import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { Heading } from '../../atoms/heading/Heading'

import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Components/Layout/Container',
  component: Container,
  tags: ['autodocs'],
  args: {
    dynamicHeightOffset: 0,
  },
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    children: <Heading>Default Content</Heading>,
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const Error: Story = {
  args: {
    error: 'Storybook-triggered error',
  },
}

export const Empty: Story = {
  args: {
    data: [],
    isDataEmpty: data => Array.isArray(data) && data.length === 0,
  },
}

export const NotFound: Story = {
  args: {
    variant: 'notFound',
  },
}

export const Maintenance: Story = {
  args: {
    variant: 'maintance',
  },
}
