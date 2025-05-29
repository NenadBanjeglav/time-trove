import { useOutletContext, useSearchParams } from 'react-router-dom'

import { useTasks } from '../api/apiTasks'
import { Pagination } from '../components/atoms/pagination/Pagination'
import { TaskList } from '../components/molecules/task-list/TaskList'
import { PageStateContainer } from '../components/organisms/page-state-container/PageStateContainer'
import { PAGE_SIZE } from '../constants/constants'
import { usePrefetchPaginatedTasks } from '../hooks/usePrefetchPaginatedTasks'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()
  const [searchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page') || '1')
  const offset = (currentPage - 1) * PAGE_SIZE

  const search = searchParams.get('search') || ''

  const { data, isPending, isError, refetch } = useTasks({
    limit: PAGE_SIZE,
    offset,
    direction: 'desc',
    title: search,
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
      isEmpty={!data?.items.length}
      onClick={handleClick}
    >
      <TaskList tasks={data?.items || []} />
      <Pagination count={data?.totalItems || 0} currentPage={data?.page ?? 1} />
    </PageStateContainer>
  )
}
