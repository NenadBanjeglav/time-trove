import type { Meta, StoryObj } from '@storybook/react'

import { theme } from '../../../styles/theme'
import type { FontSizeType, LineHeightType, FontWeightType } from '../../../styles/theme.types'
import { Text } from './Text'

// Extract options from theme
const fontSizes = Object.keys(theme.typography.fontSize) as FontSizeType[]
const lineHeights = Object.keys(theme.typography.lineHeight) as LineHeightType[]
const fontWeights = Object.keys(theme.typography.fontWeight) as FontWeightType[]

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
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const DefaultText: Story = {
  args: {
    children: 'This is default text',
    fontSize: 'base',
    lineHeight: 'base',
    fontWeight: 'regular',
    as: 'span',
  },
}

export const ParagraphBoldLarge: Story = {
  args: {
    children: 'This is bold paragraph text',
    fontSize: 'large',
    lineHeight: 'large',
    fontWeight: 'bold',
    as: 'p',
  },
}
