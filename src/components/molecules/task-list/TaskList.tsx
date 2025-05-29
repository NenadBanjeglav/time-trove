import type { FC } from 'react'
import styled from 'styled-components'

import { TaskCard } from '../task-card/TaskCard'
import { type TaskCardProps } from '../task-card/task.types'

export const TaskListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(0, 1fr);
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
    <TaskListWrapper>
      {tasks.map(task => (
        <TaskCard key={task.id} {...task} />
      ))}
    </TaskListWrapper>
  )
}
