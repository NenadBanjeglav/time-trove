import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Button } from '../../atoms/button/Button'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setIsOpen(true)} variant="primary">
          Open Modal
        </Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div style={{ padding: '2rem', maxWidth: '400px' }}>
            <h2 style={{ marginBottom: '1rem' }}>Modal Title</h2>
            <p style={{ marginBottom: '1rem' }}>
              This is a modal. Click outside or press Escape to close it.
            </p>
            <Button onClick={() => setIsOpen(false)} variant="danger">
              Close
            </Button>
          </div>
        </Modal>
      </>
    )
  },
}
