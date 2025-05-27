import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '../../atoms/modal/Modal'

import { TaskCard } from './TaskCard'
import { TaskPriority, TaskStatus } from './task.types'

const meta: Meta<typeof TaskCard> = {
  title: 'Components/TaskCard',
  component: TaskCard,
  tags: ['autodocs'],
  args: {
    id: 'task-123',
    title: 'Design Review',
    description: 'Review the design system updates and provide feedback to the design team.',
    status: TaskStatus.INPROGRESS,
    priority: TaskPriority.MEDIUM,
  },
  argTypes: {
    status: {
      control: 'select',
      options: Object.values(TaskStatus),
    },
    priority: {
      control: 'select',
      options: Object.values(TaskPriority),
    },
  },
  decorators: [
    Story => (
      <Modal>
        <Story />
      </Modal>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TaskCard>

export const InProgressMedium: Story = {}

export const DoneHigh: Story = {
  args: {
    status: TaskStatus.DONE,
    priority: TaskPriority.HIGH,
    title: 'Submit Final Report',
    description: 'Submit the final report to the stakeholders and archive the documents.',
  },
}

export const InProgressLow: Story = {
  args: {
    status: TaskStatus.INPROGRESS,
    priority: TaskPriority.LOW,
    title: 'Refactor Codebase',
    description: 'Clean up and organize the code for better maintainability.',
  },
}
