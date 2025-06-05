import type { Task } from '../api/apiTasks'
import type { EditTaskFormValues } from '../components/shared/task-form-shell/EditTaskForm'

export const getChangedValues = (
  original: Partial<Task>,
  updated: EditTaskFormValues
): Partial<EditTaskFormValues> => {
  const changedEntries = Object.entries(updated).filter(([key, value]) => {
    return original[key as keyof Task] !== value
  })

  return Object.fromEntries(changedEntries)
}
