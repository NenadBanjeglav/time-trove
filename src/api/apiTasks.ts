import { useQuery } from '@tanstack/react-query'
import type { TaskPriority } from '../components/molecules/task-card/task.types'
import { axiosInstance } from './axios'

export type Task = {
  id: string
  title: string
  description: string
  done: boolean
  createdAt: string
  updatedAt: string
  priority: TaskPriority
}

export type TaskListResponse = {
  items: Task[]
  totalItems: number
  totalPages: number
  page: number
}

export type GetTasksParams = {
  limit?: number
  offset?: number
  direction?: 'asc' | 'desc'
  title?: string
  createdAt?: string
  done?: boolean
  priority?: TaskPriority
}

export const getTasks = async (params: GetTasksParams = {}): Promise<TaskListResponse> => {
  const { data } = await axiosInstance.get<TaskListResponse>('/tasks', { params })
  return data
}

export const useTasks = (params: GetTasksParams) => {
  return useQuery<TaskListResponse, Error>({
    queryKey: ['tasks', params],
    queryFn: () => getTasks(params),
    placeholderData: previousData => previousData,
  })
}
