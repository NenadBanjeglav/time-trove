import { useTranslation } from 'react-i18next'

import { useEditTask, type Task } from '../../../api/apiTasks'
import { FileIcon } from '../../../assets/icons/FileIcon'
import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { Button } from '../../atoms/button/Button'
import { Chip } from '../../atoms/chip/Chip'
import { ChipStatus, ChipSize } from '../../atoms/chip/chip.types'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'
import { Text } from '../../atoms/text/Text'
import { IconWrapper, ResponsiveFormWrapper } from '../task-form-shell/taskFormShell.styles'

import {
  TaskDetailsContainer,
  TaskDetailsHeader,
  TaskDetailsIconText,
  TaskDetailsSection,
} from './taskDetails.styles'

type TaskDetailsProps = {
  task: Partial<Task>
  onEditSuccess: () => void
}

export const TaskDetails = ({ task, onEditSuccess }: TaskDetailsProps) => {
  const { t } = useTranslation()
  const { editTaskMutation, isEditing } = useEditTask()

  const handleMarkAsDone = () => {
    if (!task.id) return

    editTaskMutation(
      { id: task.id, values: { done: true } },
      {
        onSuccess: () => {
          onEditSuccess()
        },
      }
    )
  }

  return (
    <ResponsiveFormWrapper>
      <TaskDetailsContainer as="div">
        <TaskDetailsHeader>
          <TaskDetailsIconText>
            <IconWrapper>
              <Icon icon={FileIcon} pallete="neutral" color="hue200" iconSize="small" />
            </IconWrapper>
            <Heading as="h2" fontWeight="bold" fontSize="large" lineHeight="large">
              {t(T.TASK_DETAILS.HEADING)}
            </Heading>
          </TaskDetailsIconText>

          {task.done !== undefined && (
            <Chip
              label={task.done ? t(T.TASK_DETAILS.DONE) : t(T.TASK_DETAILS.IN_PROGRESS)}
              status={task.done ? ChipStatus.SUCCESS : ChipStatus.WARNING}
              size={ChipSize.SMALL}
            />
          )}
        </TaskDetailsHeader>

        <TaskDetailsSection>
          <Heading as="h3" fontWeight="bold" fontSize="base" lineHeight="base" textAlign="start">
            {task.title}
          </Heading>

          <Text>{task.description}</Text>
        </TaskDetailsSection>
        <Button size="xlarge" fullWidth onClick={handleMarkAsDone} loading={isEditing}>
          {t(T.TASK_DETAILS.MARK_AS_DONE)}
        </Button>
      </TaskDetailsContainer>
    </ResponsiveFormWrapper>
  )
}
