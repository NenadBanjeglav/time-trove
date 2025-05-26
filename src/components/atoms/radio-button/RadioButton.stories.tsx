import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { RadioButton } from './RadioButton'

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RadioButton>

const ControlledTemplate = (args: React.ComponentProps<typeof RadioButton>) => {
  const [checked, setChecked] = useState(args.checked ?? false)

  return <RadioButton {...args} checked={checked} onChange={() => setChecked(true)} />
}

export const DefaultUnchecked: Story = {
  args: {
    checked: false,
  },
  render: args => <ControlledTemplate {...args} />,
}

export const DefaultChecked: Story = {
  args: {
    checked: true,
  },
  render: args => <ControlledTemplate {...args} />,
}

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  render: args => <ControlledTemplate {...args} />,
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: args => <ControlledTemplate {...args} />,
}

export const Error: Story = {
  args: {
    checked: true,
    error: true,
  },
  render: args => <ControlledTemplate {...args} />,
}
