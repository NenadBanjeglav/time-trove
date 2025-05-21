import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../text/Text'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text fontSize="base" fontWeight="bold">
          Card Title
        </Text>
        <Text fontSize="base" color="hue400">
          This is a reusable card component. You can use it to wrap dashboard sections or UI blocks.
        </Text>
      </>
    ),
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {}

export const WithCustomPadding: Story = {
  render: args => (
    <Card {...args} style={{ padding: '3rem' }}>
      <Text fontSize="h1" fontWeight="bold">
        Custom Padded Card
      </Text>
      <Text>This card has custom inline padding.</Text>
    </Card>
  ),
}

export const FullWidthCard: Story = {
  render: args => (
    <div style={{ width: '100%' }}>
      <Card {...args} style={{ width: '100%' }}>
        <Text fontWeight="bold">Full Width</Text>
        <Text>This card stretches to the full width of its container.</Text>
      </Card>
    </div>
  ),
}
