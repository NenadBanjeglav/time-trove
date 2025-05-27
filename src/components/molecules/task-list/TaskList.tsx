import type { FC } from 'react'
import styled from 'styled-components'

import { Modal } from '../../atoms/modal/Modal'
import { Text } from '../../atoms/text/Text'
import { ConfirmDialog } from '../confirm-dialog/ConfirmDialog'
import { DialogVariant } from '../confirm-dialog/confirmDialog.types'
import { TaskCard } from '../task-card/TaskCard'
import { type TaskCardProps } from '../task-card/task.types'

export const TaskListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.medium};
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 745px) {
    grid-template-columns: 1fr;
  }
`

type TaskListProps = {
  tasks: TaskCardProps[]
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <Modal>
      <TaskListWrapper>
        {tasks.map(task => (
          <div key={task.id}>
            <TaskCard {...task} />

            <Modal.Window name={`delete ${task.id}`}>
              <ConfirmDialog
                variant={DialogVariant.DANGER}
                title="Delete this task?"
                description="Are you sure you want to delete this task? This action cannot be undone."
                primaryActionLabel="Delete"
                secondaryActionLabel="Cancel"
                onPrimaryAction={() => {
                  console.log('Deleting task with ID:', task.id)
                }}
              />
            </Modal.Window>

            <Modal.Window name={`edit ${task.id}`}>
              <Text>Edit Task Form</Text>
            </Modal.Window>
          </div>
        ))}
      </TaskListWrapper>
    </Modal>
  )
}
