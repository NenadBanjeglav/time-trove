import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useDeleteTask } from '../../../api/apiTasks'
import { DeleteIcon } from '../../../assets/icons/DeleteIcon'
import { EditIcon } from '../../../assets/icons/EditIcon'
import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { useUnsavedChangesModal } from '../../../hooks/useUnsavedChangesModal'
import { Chip } from '../../atoms/chip/Chip'
import { ChipSize } from '../../atoms/chip/chip.types'
import { Heading } from '../../atoms/heading/Heading'
import { IconButton } from '../../atoms/icon-button/IconButton'
import { Modal } from '../../atoms/modal/Modal'
import { Text } from '../../atoms/text/Text'
import { TaskDetails } from '../../shared/task-details/TaskDetails'
import { EditTaskForm } from '../../shared/task-form-shell/EditTaskForm'
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
  const { t } = useTranslation()

  const { deleteTaskMutation, isDeleting } = useDeleteTask()
  const [isDetailsOpen, setDetailsOpen] = useState(false)
  const [isDeleteOpen, setDeleteOpen] = useState(false)

  const {
    isOpen: isEditOpen,
    confirmOpen: isDiscardConfirmOpen,
    open: openEditModal,
    requestClose: requestCloseEdit,
    discard: discardEdit,
    cancelClose: cancelDiscardEdit,
    onChange: markEditDirty,
    reset: resetEditState,
  } = useUnsavedChangesModal()

  const handleDelete = () => {
    deleteTaskMutation({ id, title })
  }

  const status = done ? TaskStatus.DONE : TaskStatus.INPROGRESS
  return (
    <>
      <FullWidthCard onClick={() => setDetailsOpen(true)}>
        <TaskHeader>
          <Heading as="h3" fontSize="base" lineHeight="base" fontWeight="bold">
            {title}
          </Heading>
          <Chip
            status={statusColorMap[status]}
            size={ChipSize.LARGE}
            label={getStatusLabel(status, t)}
          />
        </TaskHeader>
        <TaskBody>
          <Text
            fontSize="small"
            pallete="neutral"
            //@ts-ignore
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
              {t(T.TASK_CARD.PRIORITY)}
            </Text>
            <Chip
              status={priorityColorMap[priority]}
              size={ChipSize.SMALL}
              label={t(
                T.TASK_CARD.PRIORITY_LABELS[
                  priority.toUpperCase() as keyof typeof T.TASK_CARD.PRIORITY_LABELS
                ]
              )}
            />
          </PriorityWrapper>
          <ButtonWrapper>
            <IconButton
              onClick={e => {
                e.stopPropagation()
                openEditModal()
              }}
              shape="square"
              variant="neutral"
              icon={EditIcon}
            />

            <IconButton
              onClick={e => {
                e.stopPropagation()
                setDeleteOpen(true)
              }}
              shape="square"
              variant="danger"
              color="hue0"
              icon={DeleteIcon}
            />
          </ButtonWrapper>
        </Footer>
      </FullWidthCard>

      <Modal isOpen={isDetailsOpen} onClose={() => setDetailsOpen(false)}>
        <TaskDetails
          task={{ id, title, description, done, priority }}
          onEditSuccess={() => {
            setDetailsOpen(false)
            resetEditState()
          }}
        />
      </Modal>

      <Modal isOpen={isDeleteOpen} onClose={() => setDeleteOpen(false)}>
        <ConfirmDialog
          variant={DialogVariant.DANGER}
          title={t(T.TASK_CARD.DELETE_TITLE)}
          description={t(T.TASK_CARD.DELETE_DESCRIPTION)}
          primaryActionLabel={t(T.TASK_CARD.DELETE_CONFIRM)}
          secondaryActionLabel={t(T.TASK_CARD.DELETE_CANCEL)}
          onPrimaryAction={() => {
            handleDelete()
            setDeleteOpen(false)
          }}
          onClose={() => setDeleteOpen(false)}
          loading={isDeleting}
        />
      </Modal>

      <Modal isOpen={isEditOpen} onClose={requestCloseEdit}>
        <EditTaskForm
          task={{ id, title, description, done, priority }}
          onReset={resetEditState}
          onChange={markEditDirty}
        />
      </Modal>
      <Modal isOpen={isDiscardConfirmOpen} onClose={cancelDiscardEdit} zIndex={1100}>
        <ConfirmDialog
          variant={DialogVariant.DANGER}
          title={t(T.TASK_CARD.DISCARD_TITLE)}
          description={t(T.TASK_CARD.DISCARD_DESCRIPTION)}
          primaryActionLabel={t(T.TASK_CARD.DISCARD_CONFIRM)}
          secondaryActionLabel={t(T.TASK_CARD.DISCARD_CANCEL)}
          onPrimaryAction={discardEdit}
          onClose={cancelDiscardEdit}
        />
      </Modal>
    </>
  )
}
