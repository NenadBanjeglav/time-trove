import type { Meta, StoryObj } from '@storybook/react'

import { SearchIcon } from '../../../assets/icons/SearchIcon'

import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  args: {
    icon: SearchIcon,
    iconSize: 24,
    pallete: 'neutral',
    color: 'hue200',
  },
  argTypes: {
    iconSize: { control: 'number' },
    pallete: {
      control: 'select',
      options: ['primary', 'neutral', 'success', 'warning', 'danger'],
    },
    color: {
      control: 'select',
      options: ['hue0', 'hue50', 'hue100', 'hue200', 'hue300', 'hue400', 'hue500'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Icon component for rendering SVGs with themed size and color.',
      },
    },
  },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Icon>

export const SearchNeutral: Story = {
  args: {
    icon: SearchIcon,
    iconSize: 24,
    pallete: 'neutral',
    color: 'hue200',
  },
}

export const SearchSuccess: Story = {
  args: {
    icon: SearchIcon,
    iconSize: 24,
    pallete: 'success',
    color: 'hue200',
  },
}
