import { Navigate, useOutletContext } from 'react-router-dom'

import { TaskList } from '../components/molecules/task-list/TaskList'
import { PageStateContainer } from '../components/organisms/page-state-container/PageStateContainer'
import { useAppStatus } from '../contexts/AppStatusContext'
import { useTasks } from '../api/apiTasks'
import { Pagination } from '../components/atoms/pagination/Pagination'
import { TaskPriority } from '../components/molecules/task-card/task.types'

type LayoutContext = { navHeight: number }

export const mockTasks = Array.from({ length: 50 }, (_, i) => {
  const priorities: TaskPriority[] = [TaskPriority.LOW, TaskPriority.MEDIUM, TaskPriority.HIGH]
  const priority = priorities[i % priorities.length]
  const done = i % 3 === 0

  return {
    id: `${i + 1}`,
    title: `Mock Task ${i + 1}`,
    description: `This is a description for mock task ${i + 1}.`,
    done,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    priority,
  }
})

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()
  const { maintenance } = useAppStatus()

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
      isEmpty={!data?.items.length}
      onClick={handleClick}
    >
      {data && <TaskList tasks={data?.items} />}
      {data && <Pagination count={data.totalItems} />}
    </PageStateContainer>
  )
}
