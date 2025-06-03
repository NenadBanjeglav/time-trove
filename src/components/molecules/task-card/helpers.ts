import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { ChipStatus } from '../../atoms/chip/chip.types'

import { TaskPriority, TaskStatus } from './task.types'

export const priorityColorMap: Record<TaskPriority, ChipStatus> = {
  [TaskPriority.LOW]: ChipStatus.SUCCESS,
  [TaskPriority.MEDIUM]: ChipStatus.WARNING,
  [TaskPriority.HIGH]: ChipStatus.DANGER,
}

export const statusColorMap: Record<TaskStatus, ChipStatus> = {
  [TaskStatus.INPROGRESS]: ChipStatus.WARNING,
  [TaskStatus.DONE]: ChipStatus.SUCCESS,
}

export const getStatusLabel = (status: TaskStatus, t: (key: string) => string) => {
  return status === TaskStatus.DONE ? t(T.TASK_STATUS.DONE) : t(T.TASK_STATUS.IN_PROGRESS)
}
