import type { Meta, StoryObj } from '@storybook/react'

import { GermanyFlagIcon } from '../../../assets/icons/GermanyFlagIcon'
import { UnitedKingdomFlagIcon } from '../../../assets/icons/UnitedKingdomFlagIcon'

import { Dropdown } from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    languages: { control: false }, // not interactive, custom data
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

const languageOptions = [
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
    languages: languageOptions,
  },
}
