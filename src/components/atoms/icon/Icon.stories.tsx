import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { EclipseIcon } from '../../../assets/icons/EclipseIcon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    as: { control: false },
    size: { control: 'number' },
    pallete: { control: 'select', options: ['neutral', 'primary', 'danger', 'warning', 'success'] },
    color: {
      control: 'select',
      options: ['hue0', 'hue50', 'hue100', 'hue200', 'hue300', 'hue400', 'hue500'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    as: EclipseIcon,
    size: 24,
    pallete: 'neutral',
    color: 'hue200',
  },
}

export const Success: Story = {
  args: {
    as: EclipseIcon,
    size: 40,
    pallete: 'success',
    color: 'hue200',
  },
}
