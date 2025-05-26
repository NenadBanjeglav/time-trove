import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { Pagination } from './Pagination'

// Define simulation-only arg type
type PaginationStoryArgs = {
  count: number
  page?: number // simulation only
}

// Use a generic Meta type that includes the fake page field
const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story, context) => {
      const { page = 1 } = context.args as PaginationStoryArgs
      return (
        <MemoryRouter initialEntries={[`/?page=${page}`]}>
          <Routes>
            <Route path="/" element={<Story />} />
          </Routes>
        </MemoryRouter>
      )
    },
  ],
  // This cast avoids the TS error for `page`
  argTypes: {
    count: {
      control: 'number',
      description: 'Total number of items',
    },
  },
  args: {
    count: 120,
  },
} as Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof Pagination>

export const Page1: Story = {
  args: { count: 120 }, // Simulates page=1
  parameters: { pseudoArgs: { page: 1 } }, // Optional visual clue
}

export const Page3: Story = {
  args: { count: 120 },
  parameters: { pseudoArgs: { page: 3 } },
}

export const Page7: Story = {
  args: { count: 300 },
  parameters: { pseudoArgs: { page: 7 } },
}

export const LastPage: Story = {
  args: { count: 300 },
  parameters: { pseudoArgs: { page: 12 } },
}
