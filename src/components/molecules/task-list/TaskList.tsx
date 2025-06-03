import { useTranslation } from 'react-i18next'

import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { FlatList } from '../../atoms/flat-list/FlatList'
import { FeedbackState } from '../feedback-state/FeedbackState'
import { TaskCard } from '../task-card/TaskCard'
import { type TaskCardProps } from '../task-card/task.types'

type TaskListProps = {
  tasks: TaskCardProps[]
  isLoading: boolean
  hasActiveFilters: boolean
}

export const TaskList = ({ tasks, isLoading, hasActiveFilters }: TaskListProps) => {
  const { t } = useTranslation()

  const showEmpty = !isLoading && hasActiveFilters

  return (
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
  )
}
