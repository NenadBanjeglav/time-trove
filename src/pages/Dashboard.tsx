import { useOutletContext } from 'react-router-dom'

import { TaskList } from '../components/molecules/task-list/TaskList'
import { PageStateContainer } from '../components/organisms/page-state-container/PageStateContainer'

import { useTasks } from '../api/apiTasks'
import { Pagination } from '../components/atoms/pagination/Pagination'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()

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

  return (
    <PageStateContainer
      navHeight={navHeight}
      isLoading={isPending}
      error={isError}
      isEmpty={!data?.items.length}
      onClick={handleClick}
    >
      {<TaskList tasks={data?.items || []} />}
      {<Pagination count={data?.totalItems || 0} />}
    </PageStateContainer>
  )
}
