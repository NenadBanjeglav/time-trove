import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useOutletContext, useSearchParams } from 'react-router-dom'

import { getTasks, useTasks } from '../api/apiTasks'
import { Pagination } from '../components/atoms/pagination/Pagination'
import { TaskList } from '../components/molecules/task-list/TaskList'
import { PageStateContainer } from '../components/organisms/page-state-container/PageStateContainer'
import { PAGE_SIZE } from '../constants/constants'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const queryClient = useQueryClient()
  const { navHeight } = useOutletContext<LayoutContext>()
  const [searchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page') || '1')
  const offset = (currentPage - 1) * PAGE_SIZE

  const { data, isPending, isError, refetch } = useTasks({
    limit: PAGE_SIZE,
    offset,
    direction: 'desc',
  })

  useEffect(() => {
    if (!data?.totalPages) return

    const nextPage = currentPage + 1
    const prevPage = currentPage - 1

    if (nextPage <= data.totalPages) {
      queryClient.prefetchQuery({
        queryKey: [
          'tasks',
          { limit: PAGE_SIZE, offset: (nextPage - 1) * PAGE_SIZE, direction: 'desc' },
        ],
        queryFn: () =>
          getTasks({ limit: PAGE_SIZE, offset: (nextPage - 1) * PAGE_SIZE, direction: 'desc' }),
      })
    }

    if (prevPage > 0) {
      queryClient.prefetchQuery({
        queryKey: [
          'tasks',
          { limit: PAGE_SIZE, offset: (prevPage - 1) * PAGE_SIZE, direction: 'desc' },
        ],
        queryFn: () =>
          getTasks({ limit: PAGE_SIZE, offset: (prevPage - 1) * PAGE_SIZE, direction: 'desc' }),
      })
    }
  }, [currentPage, data?.totalPages, queryClient])

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
      isEmpty={!data?.items.length}
      onClick={handleClick}
    >
      <TaskList tasks={data?.items || []} />
      <Pagination count={data?.totalItems || 0} currentPage={data?.page ?? 1} />
    </PageStateContainer>
  )
}
