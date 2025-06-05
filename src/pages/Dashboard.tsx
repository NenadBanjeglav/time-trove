import { useEffect } from 'react'
import { useOutletContext, useSearchParams } from 'react-router-dom'

import { useTasks } from '../api/apiTasks'
import { PageWrapper } from '../components/atoms/page-wrapper/PageWrapper'
import { TaskPriority } from '../components/molecules/task-card/task.types'
import { TaskList } from '../components/molecules/task-list/TaskList'
import { PageStateContainer } from '../components/organisms/page-state-container/PageStateContainer'
import { DashboardHeading } from '../components/shared/priority-filters/DashboardHeading'
import { PAGE_SIZE } from '../constants/constants'
import { usePrefetchPaginatedTasks } from '../hooks/usePrefetchPaginatedTasks'
import { useAppState } from '../stores/useAppStore'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()

  const [searchParams] = useSearchParams()
  const { setTotalTasks } = useAppState()

  const currentPage = Number(searchParams.get('page') || '1')
  const offset = (currentPage - 1) * PAGE_SIZE

  const search = searchParams.get('search') || ''
  const priorityParam = searchParams.get('priority') || ''

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

  const { data, isPending, isFetching, isError, refetch } = useTasks({
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

  useEffect(() => {
    if (data?.totalItems != null) {
      setTotalTasks(data.totalItems)
    }
  }, [data?.totalItems, setTotalTasks])

  const handleClick = () => {
    if (isError) {
      refetch()
    }
  }

  return (
    <PageWrapper dynamicHeightOffset={navHeight}>
      {!isError && <DashboardHeading />}
      <PageStateContainer
        navHeight={navHeight}
        isLoading={isPending}
        error={isError}
        isEmpty={!isPending && data?.items.length === 0 && !search && !priority}
        hasActiveFilters={!!search || !!priority}
        onClick={handleClick}
      >
        <TaskList
          tasks={data?.items || []}
          isLoading={isPending}
          hasActiveFilters={!!search || !!priority}
          currentPage={currentPage}
          count={data?.totalItems || 0}
        />
      </PageStateContainer>
    </PageWrapper>
  )
}
