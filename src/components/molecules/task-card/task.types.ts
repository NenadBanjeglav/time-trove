export enum TaskStatus {
  INPROGRESS = 'InProgress',
  DONE = 'Done',
}

export enum TaskPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export type TaskCardProps = {
  id: string
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
}
