import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { Search } from './Search'

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/?search=example']}>
        <Routes>
          <Route path="*" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
  args: {
    placeholder: 'Search...',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Search component with icon and dynamic clear (X) button when `search` query param exists.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Search>

export const DefaultWithInitialValue: Story = {}
