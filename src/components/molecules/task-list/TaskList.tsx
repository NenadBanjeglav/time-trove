import { useTranslation } from 'react-i18next'

import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { FlatList } from '../../atoms/flat-list/FlatList'
import { Spinner } from '../../atoms/icon/Spinner'
import { Pagination } from '../../atoms/pagination/Pagination'
import { FeedbackState } from '../feedback-state/FeedbackState'
import { TaskCard } from '../task-card/TaskCard'
import { type TaskCardProps } from '../task-card/task.types'

type TaskListProps = {
  tasks: TaskCardProps[]
  isLoading: boolean
  hasActiveFilters: boolean
  currentPage: number
  count: number
}

export const TaskList = ({
  tasks,
  isLoading,
  hasActiveFilters,
  currentPage,
  count,
}: TaskListProps) => {
  const { t } = useTranslation()

  const showEmpty = !isLoading && hasActiveFilters

  if (isLoading) return <Spinner />

  return (
    <>
      <FlatList
        items={tasks}
        render={task => <TaskCard key={task.id} {...task} />}
        empty={
          showEmpty ? (
            <FeedbackState
              title={t(T.PAGE_STATE.NO_RESULTS_TITLE)}
              description={t(T.PAGE_STATE.NO_RESULTS_DESCRIPTION)}
            />
          ) : null
        }
      />
      <Pagination count={count} currentPage={currentPage} />
    </>
  )
}
