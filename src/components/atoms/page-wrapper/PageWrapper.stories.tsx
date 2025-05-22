import type { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import { Heading } from '../../atoms/heading/Heading'
import { Text } from '../../atoms/text/Text'

import { PageWrapper } from './PageWrapper'
import { FullCenteredLayout } from './pageWrapper.styles'

const meta: Meta<typeof PageWrapper> = {
  title: 'Components/Layout/PageWrapper',
  component: PageWrapper,
  tags: ['autodocs'],
  args: {
    dynamicHeightOffset: 0,
  },
}

export default meta

type Story = StoryObj<typeof PageWrapper>

const DummyContent = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.primary.hue50};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`

export const Default: Story = {
  args: {
    children: <DummyContent>Default Page Content</DummyContent>,
  },
}

export const WithOffset: Story = {
  args: {
    dynamicHeightOffset: 80,
    children: <DummyContent>This page has a height offset of 80px</DummyContent>,
  },
}

export const CenteredContent: Story = {
  args: {
    children: (
      <FullCenteredLayout>
        <Heading
          as="h1"
          pallete="neutral"
          color="hue500"
          fontSize="h2"
          fontWeight="bold"
          lineHeight="h2"
        >
          Centered Heading
        </Heading>
        <Text
          as="p"
          pallete="neutral"
          color="hue200"
          fontSize="base"
          fontWeight="regular"
          lineHeight="base"
        >
          This content is centered both vertically and horizontally.
        </Text>
      </FullCenteredLayout>
    ),
  },
}
