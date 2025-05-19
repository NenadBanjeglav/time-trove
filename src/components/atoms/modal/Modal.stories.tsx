import type { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'

import { Button } from '../button/Button'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

const DummyContent = ({ onClose }: { onClose?: () => void }) => (
  <ModalBody>
    <h2>Example Modal</h2>
    <p>This is a simple modal for Storybook.</p>
    <Button variant="danger" onClick={onClose}>
      Close
    </Button>
  </ModalBody>
)

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`

export const Basic: Story = {
  render: () => (
    <Modal>
      <Modal.Open opens="example">
        <Button>Open Modal</Button>
      </Modal.Open>

      <Modal.Window name="example">
        <DummyContent />
      </Modal.Window>
    </Modal>
  ),
}
