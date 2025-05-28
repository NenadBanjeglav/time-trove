import type { FC } from 'react'

import { DeleteIcon } from '../../../assets/icons/DeleteIcon'
import { EditIcon } from '../../../assets/icons/EditIcon'
import { Chip } from '../../atoms/chip/Chip'
import { ChipSize } from '../../atoms/chip/chip.types'
import { Heading } from '../../atoms/heading/Heading'
import { IconButton } from '../../atoms/icon-button/IconButton'
import { Modal } from '../../atoms/modal/Modal'
import { Text } from '../../atoms/text/Text'

import { getStatusLabel, priorityColorMap, statusColorMap } from './helpers'
import { TaskStatus, type TaskCardProps } from './task.types'
import {
  ButtonWrapper,
  Footer,
  FullWidthCard,
  PriorityWrapper,
  TaskBody,
  TaskHeader,
} from './taskCard.styles'
import { ConfirmDialog } from '../confirm-dialog/ConfirmDialog'
import { DialogVariant } from '../confirm-dialog/confirmDialog.types'

export const TaskCard: FC<TaskCardProps> = ({ id, title, description, done, priority }) => {
  const status = done ? TaskStatus.DONE : TaskStatus.INPROGRESS
  return (
    <>
      <Modal.Open opens={`Card details for ${id}`}>
        <FullWidthCard>
          <TaskHeader>
            <Heading as="h3" fontSize="base" lineHeight="base" fontWeight="bold">
              {title}
            </Heading>
            <Chip
              status={statusColorMap[status]}
              size={ChipSize.LARGE}
              label={getStatusLabel(status)}
            />
          </TaskHeader>
          <TaskBody>
            <Text
              fontSize="small"
              color="hue300"
              lineHeight="small"
              fontWeight="regular"
              textAlign="start"
            >
              {description}
            </Text>
          </TaskBody>
          <Footer>
            <PriorityWrapper>
              <Text fontSize="small" lineHeight="small" fontWeight="bold">
                Priority
              </Text>
              <Chip status={priorityColorMap[priority]} size={ChipSize.SMALL} label={priority} />
            </PriorityWrapper>
            <ButtonWrapper>
              <Modal.Open opens={`Edit ${id}`}>
                <IconButton shape="square" variant="neutral" icon={EditIcon} />
              </Modal.Open>

              <Modal.Open opens={`Delete ${id}`}>
                <IconButton shape="square" variant="danger" color="hue0" icon={DeleteIcon} />
              </Modal.Open>
            </ButtonWrapper>
          </Footer>
        </FullWidthCard>
      </Modal.Open>

      <Modal.Window name={`Card details for ${id}`}>
        <Text>Card Details</Text>
      </Modal.Window>
      <Modal.Window name={`Delete ${id}`}>
        <ConfirmDialog
          variant={DialogVariant.DANGER}
          title="Delete this task?"
          description="Are you sure you want to delete this task? This action cannot be undone."
          primaryActionLabel="Delete"
          secondaryActionLabel="Cancel"
          onPrimaryAction={() => {
            console.log('Deleting task with ID:', id)
          }}
        />
      </Modal.Window>
      <Modal.Window name={`Edit ${id}`}>
        <Text>Edit Task Form</Text>
      </Modal.Window>
    </>
  )
}
