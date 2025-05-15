import type { Meta, StoryObj } from '@storybook/react'

import { theme } from '../../../styles/theme'
import type {
  FontSizeType,
  LineHeightType,
  FontWeightType,
  ThemeType,
} from '../../../styles/theme.types'

import { Text } from './Text'

const fontSizes = Object.keys(theme.typography.fontSize) as FontSizeType[]
const lineHeights = Object.keys(theme.typography.lineHeight) as LineHeightType[]
const fontWeights = Object.keys(theme.typography.fontWeight) as FontWeightType[]
const neutralColors = Object.keys(theme.colors.neutral) as (keyof typeof theme.colors.neutral)[]
const palletes = Object.keys(theme.colors) as (keyof ThemeType['colors'])[]

const primaryColors = Object.keys(theme.colors.primary) as (keyof typeof theme.colors.primary)[]

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
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
      options: ['span', 'p'],
    },
    pallete: {
      control: 'select',
      options: palletes,
    },
  },
  args: {
    pallete: 'neutral',
    color: 'hue500',
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const NeutralText: Story = {
  args: {
    children: 'Neutral color text',
    fontSize: 'base',
    lineHeight: 'base',
    fontWeight: 'regular',
    as: 'span',
    pallete: 'neutral',
    color: 'hue500',
  },
  argTypes: {
    color: {
      control: 'select',
      options: neutralColors,
    },
  },
}

export const PrimaryText: Story = {
  args: {
    children: 'Primary color text',
    fontSize: 'base',
    lineHeight: 'base',
    fontWeight: 'regular',
    as: 'span',
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
