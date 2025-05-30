import type { FC } from 'react'

import { useEditTask, type Task } from '../../../api/apiTasks'
import { FileIcon } from '../../../assets/icons/FileIcon'
import { Button } from '../../atoms/button/Button'
import { Chip } from '../../atoms/chip/Chip'
import { ChipStatus, ChipSize } from '../../atoms/chip/chip.types'
import { Heading } from '../../atoms/heading/Heading'
import { Icon } from '../../atoms/icon/Icon'
import { Text } from '../../atoms/text/Text'

import {
  TaskDetailsContainer,
  TaskDetailsHeader,
  TaskDetailsIconText,
  TaskDetailsSection,
} from './taskDetails.styles'
import { IconWrapper, ResponsiveFormWrapper } from '../task-form-shell/taskFormShell.styles'

type TaskDetailsProps = {
  task: Partial<Task>
  onClose?: () => void
}

export const TaskDetails: FC<TaskDetailsProps> = ({ task, onClose }) => {
  const { editTaskMutation, isEditing } = useEditTask()

  const handleMarkAsDone = () => {
    if (!task.id) return

    editTaskMutation(
      { id: task.id, values: { done: true } },
      {
        onSuccess: () => {
          onClose?.()
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
              Task details
            </Heading>
          </TaskDetailsIconText>

          {task.done !== undefined && (
            <Chip
              label={task.done ? 'Done' : 'In progress'}
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
          Mark as done
        </Button>
      </TaskDetailsContainer>
    </ResponsiveFormWrapper>
  )
}
