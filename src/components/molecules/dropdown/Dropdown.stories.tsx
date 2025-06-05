import type { Meta, StoryObj } from '@storybook/react'

import { GermanyFlagIcon } from '../../../assets/icons/GermanyFlagIcon'
import { UnitedKingdomFlagIcon } from '../../../assets/icons/UnitedKingdomFlagIcon'

import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
    },
    value: {
      control: 'select',
      options: ['en', 'rs', 'kz'],
    },
  },
  args: {
    size: 'small',
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

const options = [
  {
    label: 'EN',
    value: 'en',
    icon: UnitedKingdomFlagIcon,
  },
  {
    label: 'DE',
    value: 'de',
    icon: GermanyFlagIcon,
  },
]

export const Default: Story = {
  args: {
    options,
    value: 'en',
    onChange: value => {
      console.log('Selected:', value)
    },
  },
}

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'large',
    value: 'rs',
  },
}
