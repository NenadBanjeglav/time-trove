import type { Meta, StoryObj } from '@storybook/react'

import { TaskCard } from './TaskCard'
import { TaskPriority } from './task.types'

const meta: Meta<typeof TaskCard> = {
  title: 'Components/Task/TaskCard',
  component: TaskCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    id: 'task-123',
    title: 'Prepare presentation',
    description: 'Prepare slides and speaking notes for the upcoming client meeting.',
    done: false,
    priority: TaskPriority.MEDIUM,
  },
  argTypes: {
    done: {
      control: 'boolean',
    },
    priority: {
      control: 'select',
      options: Object.values(TaskPriority),
    },
  },
}

export default meta

type Story = StoryObj<typeof TaskCard>

export const Default: Story = {}

export const DoneTask: Story = {
  args: {
    done: true,
    title: 'Submit project report',
    description: 'Final report submitted to client. No further action needed.',
  },
}

export const HighPriority: Story = {
  args: {
    priority: TaskPriority.HIGH,
    title: 'Fix critical bug',
    description: 'Resolve the login crash on mobile devices ASAP.',
  },
}

export const LowPriority: Story = {
  args: {
    priority: TaskPriority.LOW,
    title: 'Clean up backlog',
    description: 'Organize old tasks and remove irrelevant items.',
  },
}

export const LongDescription: Story = {
  args: {
    title: 'Research competitors',
    description:
      'Explore competitor products, review features, pricing models, and user experience. Summarize the findings in a shared document with links and screenshots for comparison.',
  },
}
