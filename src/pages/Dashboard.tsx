import { useOutletContext, useSearchParams } from 'react-router-dom'

import { useTasks } from '../api/apiTasks'
import { Pagination } from '../components/atoms/pagination/Pagination'
import { TaskList } from '../components/molecules/task-list/TaskList'
import { PageStateContainer } from '../components/organisms/page-state-container/PageStateContainer'
import { PAGE_SIZE } from '../constants/constants'
import { usePrefetchPaginatedTasks } from '../hooks/usePrefetchPaginatedTasks'
import { PriorityFilters } from '../components/shared/priority-filters/PriorityFilter'
import { TaskPriority } from '../components/molecules/task-card/task.types'
import { FeedbackState } from '../components/molecules/feedback-state/FeedbackState'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()
  const [searchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page') || '1')
  const offset = (currentPage - 1) * PAGE_SIZE

  const search = searchParams.get('search') || ''
  const priorityParam = searchParams.get('priority') || ''

  const hasActiveFilters = Boolean(searchParams.get('priority') || searchParams.get('search'))

  const priority = (() => {
    switch (priorityParam) {
      case 'low':
        return TaskPriority.LOW
      case 'medium':
        return TaskPriority.MEDIUM
      case 'high':
        return TaskPriority.HIGH
      default:
        return undefined
    }
  })()

  const { data, isPending, isError, refetch } = useTasks({
    limit: PAGE_SIZE,
    offset,
    direction: 'desc',
    title: search,
    priority: priority,
  })

  usePrefetchPaginatedTasks({
    currentPage,
    totalPages: data?.totalPages,
    search,
  })

  const handleClick = () => {
    if (isError) {
      refetch()
    }
  }

  return (
    <PageStateContainer
      navHeight={navHeight}
      isLoading={isPending}
      error={isError}
      isEmpty={!data?.items.length && !(search || priority)}
      onClick={handleClick}
    >
      <PriorityFilters />
      <TaskList tasks={data?.items || []} />
      <Pagination count={data?.totalItems || 0} currentPage={data?.page ?? 1} />

      {data?.items.length === 0 && hasActiveFilters && (
        <FeedbackState
          title="No results found!"
          description="Please try searching for something else."
        />
      )}
    </PageStateContainer>
  )
}
