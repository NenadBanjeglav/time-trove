import type { Meta, StoryObj } from '@storybook/react'

import { theme } from '../../../styles/theme'
import type {
  FontSizeType,
  FontWeightType,
  LineHeightType,
  ThemeType,
} from '../../../styles/theme.types'

import { Heading } from './Heading'

const fontSizes = Object.keys(theme.typography.fontSize) as FontSizeType[]
const lineHeights = Object.keys(theme.typography.lineHeight) as LineHeightType[]
const fontWeights = Object.keys(theme.typography.fontWeight) as FontWeightType[]
const palletes = Object.keys(theme.colors) as (keyof ThemeType['colors'])[]

const neutralColors = Object.keys(theme.colors.neutral) as (keyof typeof theme.colors.neutral)[]
const primaryColors = Object.keys(theme.colors.primary) as (keyof typeof theme.colors.primary)[]

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'radio',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
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
    pallete: {
      control: 'select',
      options: palletes,
    },
  },
  args: {
    children: 'Heading Example',
    as: 'h2',
    fontSize: 'h2',
    lineHeight: 'h2',
    fontWeight: 'bold',
    pallete: 'neutral',
    color: 'hue200',
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const NeutralHeading: Story = {
  args: {
    pallete: 'neutral',
    color: 'hue200',
  },
  argTypes: {
    color: {
      control: 'select',
      options: neutralColors,
    },
  },
}

export const PrimaryHeading: Story = {
  args: {
    pallete: 'primary',
    color: 'hue100',
  },
  argTypes: {
    color: {
      control: 'select',
      options: primaryColors,
    },
  },
}
