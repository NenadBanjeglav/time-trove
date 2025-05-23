import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup } from './RadioGroup'
import { useState } from 'react'
import { ChipSize, ChipStatus } from '../../atoms/chip/chip.types'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Forms/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

// Reusable options for all stories
const options: {
  label: string
  value: string
  status: ChipStatus
}[] = [
  { label: 'Low', value: 'low', status: ChipStatus.SUCCESS },
  { label: 'Medium', value: 'medium', status: ChipStatus.WARNING },
  { label: 'High', value: 'high', status: ChipStatus.DANGER },
]

// Template that uses internal state
const Template = (args: Omit<React.ComponentProps<typeof RadioGroup>, 'value' | 'onChange'>) => {
  const [selected, setSelected] = useState('low')
  return <RadioGroup {...args} value={selected} onChange={setSelected} options={options} />
}

export const Default: Story = {
  render: Template,
  args: {
    name: 'priority',
    size: ChipSize.Large,
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    name: 'priority',
    size: ChipSize.Small,
    disabled: true,
  },
}

export const ErrorState: Story = {
  render: Template,
  args: {
    name: 'priority',
    size: ChipSize.Large,
    error: true,
  },
}

export const LargeSize: Story = {
  render: Template,
  args: {
    name: 'priority',
    size: ChipSize.Large,
  },
}
