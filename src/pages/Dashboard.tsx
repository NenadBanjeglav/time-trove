import { Navigate, useOutletContext } from 'react-router-dom'

import { TaskPriority, TaskStatus } from '../components/molecules/task-card/task.types'
import { TaskList } from '../components/molecules/task-list/TaskList'
import { PageStateContainer } from '../components/organisms/page-state-container/PageStateContainer'
import { useAppStatus } from '../contexts/AppStatusContext'

type LayoutContext = { navHeight: number }

const mockTasks = [
  {
    id: '1',
    title: 'Design Landing Page',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, modi? Eligendi quam delectus assumenda sapiente voluptatibus quos enim excepturi accusantium iure aut quidem, inventore dolorum temporibus dolor cupiditate nemo sit.',
    status: TaskStatus.INPROGRESS,
    priority: TaskPriority.HIGH,
  },
  {
    id: '2',
    title: 'Fix Login Bug',
    description: 'Investigate and resolve the login issue reported by QA team.',
    status: TaskStatus.DONE,
    priority: TaskPriority.MEDIUM,
  },
  {
    id: '3',
    title: 'Write API Documentation',
    description: 'Document all endpoints for the new task management API.',
    status: TaskStatus.INPROGRESS,
    priority: TaskPriority.LOW,
  },
  {
    id: '4',
    title: 'Team Standup Notes',
    description: 'Summarize and distribute today’s standup notes to the team.',
    status: TaskStatus.DONE,
    priority: TaskPriority.LOW,
  },
  {
    id: '5',
    title: 'Implement Task Filtering',
    description: 'Allow users to filter tasks by status and priority.',
    status: TaskStatus.INPROGRESS,
    priority: TaskPriority.MEDIUM,
  },
]

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()
  const { maintenance } = useAppStatus()

  const isLoading = false
  const data = mockTasks
  const error = false

  const handleClick = () => {
    if (error) {
      console.log('Retrying fetch...')
    } else if (!data.length) {
      console.log('Opening add task modal...')
    }
  }

  if (maintenance) return <Navigate to="/maintenance" replace />

  return (
    <PageStateContainer
      navHeight={navHeight}
      isLoading={isLoading}
      error={error}
      isEmpty={!data.length}
      onClick={handleClick}
    >
      <TaskList tasks={data} />
    </PageStateContainer>
  )
}
