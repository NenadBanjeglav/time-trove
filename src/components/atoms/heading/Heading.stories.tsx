import type { Meta, StoryObj } from '@storybook/react'

import { theme } from '../../../styles/theme'
import type { FontSizeType, FontWeightType, LineHeightType } from '../../../styles/theme.types'
import { Heading } from './Heading'

const fontSizes = Object.keys(theme.typography.fontSize) as FontSizeType[]
const lineHeights = Object.keys(theme.typography.lineHeight) as LineHeightType[]
const fontWeights = Object.keys(theme.typography.fontWeight) as FontWeightType[]

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    fontSize: {
      control: 'select',
      options: fontSizes,
    },
    lineHeight: {
      control: 'select',
      options: lineHeights,
    },
    fontWeight: {
      control: 'radio',
      options: fontWeights,
    },
    as: {
      control: 'radio',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const DefaultHeading: Story = {
  args: {
    children: 'This is a heading',
    fontSize: 'h2',
    lineHeight: 'h2',
    fontWeight: 'bold',
    as: 'h2',
  },
}

export const H1BoldLarge: Story = {
  args: {
    children: 'This is an H1 heading',
    fontSize: 'h1',
    lineHeight: 'h1',
    fontWeight: 'bold',
    as: 'h1',
  },
}
