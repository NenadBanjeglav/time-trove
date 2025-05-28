import { Navigate, useOutletContext } from 'react-router-dom'

import { TaskList } from '../components/molecules/task-list/TaskList'
import { PageStateContainer } from '../components/organisms/page-state-container/PageStateContainer'
import { useAppStatus } from '../contexts/AppStatusContext'
import { useTasks } from '../api/apiTasks'
import { Pagination } from '../components/atoms/pagination/Pagination'
import { TaskPriority, type TaskCardProps } from '../components/molecules/task-card/task.types'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()
  const { maintenance } = useAppStatus()

  const mockTasks: TaskCardProps[] = [
    {
      id: '1',
      title: 'Design login page',
      description: 'Create a responsive login screen for the web app.',
      done: false,
      priority: TaskPriority.HIGH,
    },
    {
      id: '2',
      title: 'Setup database schema',
      description: 'Define tables and relationships for users and tasks.',
      done: true,
      priority: TaskPriority.MEDIUM,
    },
    {
      id: '3',
      title: 'Write unit tests',
      description: 'Ensure coverage for the authentication module.',
      done: false,
      priority: TaskPriority.LOW,
    },
  ]

  const { data, isPending, isError, refetch } = useTasks({
    limit: 10,
    offset: 0,
    direction: 'desc',
  })

  const handleClick = () => {
    if (isError) {
      refetch()
    }
  }

  if (maintenance) return <Navigate to="/maintenance" replace />

  return (
    <PageStateContainer
      navHeight={navHeight}
      isLoading={isPending}
      error={isError}
      // isEmpty={!data?.items.length}
      isEmpty={false}
      onClick={handleClick}
    >
      {<TaskList tasks={mockTasks} />}
      {<Pagination count={data?.totalItems || 0} />}
    </PageStateContainer>
  )
}
