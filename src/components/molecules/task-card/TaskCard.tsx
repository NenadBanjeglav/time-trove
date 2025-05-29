import type { FC } from 'react'

import { useDeleteTask } from '../../../api/apiTasks'
import { DeleteIcon } from '../../../assets/icons/DeleteIcon'
import { EditIcon } from '../../../assets/icons/EditIcon'
import { Chip } from '../../atoms/chip/Chip'
import { ChipSize } from '../../atoms/chip/chip.types'
import { Heading } from '../../atoms/heading/Heading'
import { IconButton } from '../../atoms/icon-button/IconButton'
import { Modal } from '../../atoms/modal/Modal'
import { Text } from '../../atoms/text/Text'
import { TaskDetails } from '../../shared/task-details/TaskDetails'
import { TaskForm } from '../../shared/task-form/TaskForm'
import { ConfirmDialog } from '../confirm-dialog/ConfirmDialog'
import { DialogVariant } from '../confirm-dialog/confirmDialog.types'

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

export const TaskCard: FC<TaskCardProps> = ({ id, title, description, done, priority }) => {
  const { deleteTaskMutation, isDeleting } = useDeleteTask()

  const handleDelete = () => {
    deleteTaskMutation({ id, title })
  }

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
        <TaskDetails task={{ id, title, description, done, priority }} />
      </Modal.Window>
      <Modal.Window name={`Delete ${id}`}>
        <ConfirmDialog
          variant={DialogVariant.DANGER}
          title="Delete this task?"
          description="Are you sure you want to delete this task? This action cannot be undone."
          primaryActionLabel="Delete"
          secondaryActionLabel="Cancel"
          onPrimaryAction={handleDelete}
          loading={isDeleting}
        />
      </Modal.Window>
      <Modal.Window name={`Edit ${id}`}>
        <TaskForm task={{ id, title, description, done, priority }} />
      </Modal.Window>
    </>
  )
}
