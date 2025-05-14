import type { Meta, StoryObj } from '@storybook/react'

import { theme } from '../../../styles/theme'
import type { ButtonSize, ButtonVariant } from '../../../styles/theme.types'
import { Button } from './Button'

const variants = theme.button.variants as ButtonVariant[]
const sizes = Object.keys(theme.button.sizes) as ButtonSize[]

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    size: {
      control: 'radio',
      options: sizes,
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  args: {
    label: 'Button',
    variant: variants[0],
    size: sizes[0],
    disabled: false,
  },
}

export const AllVariants = {
  render: () => {
    const variants = theme.button.variants
    const sizes = Object.keys(theme.button.sizes) as ButtonSize[]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {variants.map(variant => (
          <div key={variant}>
            <h4 style={{ margin: 0, fontWeight: 600 }}>{variant}</h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {sizes.map(size => (
                <Button
                  key={`${variant}-${size}`}
                  label="Button"
                  variant={variant as ButtonVariant}
                  size={size}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}
