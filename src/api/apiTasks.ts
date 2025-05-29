import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import type { TaskPriority } from '../components/molecules/task-card/task.types'
import { useToast } from '../contexts/useToast'

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
    queryKey: ['tasks', { ...params }],
    queryFn: () => getTasks(params),
    placeholderData: keepPreviousData,
  })
}

type CreateTaskPayload = {
  title: string
  description?: string
  priority?: TaskPriority
}

export const createTask = async (payload: CreateTaskPayload): Promise<Task> => {
  const { data } = await axiosInstance.post('/tasks', payload)

  return data
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  const { addToast } = useToast()

  const { mutate: createTaskMutation, isPending: isCreating } = useMutation<
    Task,
    Error,
    CreateTaskPayload
  >({
    mutationFn: createTask,
    onSuccess: () => {
      addToast({
        type: 'success',
        title: 'Task created',
        message: 'Your new task was successfully added.',
      })
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
    onError: err => {
      addToast({
        type: 'error',
        title: 'Creation failed',
        message: err.message || 'An unexpected error occurred.',
      })
    },
  })

  return { isCreating, createTaskMutation }
}

type UpdateTaskPayload = Partial<Pick<Task, 'title' | 'description' | 'priority' | 'done'>>

export const updateTask = async (id: string, values: UpdateTaskPayload): Promise<Task> => {
  const { data } = await axiosInstance.patch(`/tasks/${id}`, values)

  return data
}

export const useEditTask = () => {
  const queryClient = useQueryClient()
  const { addToast } = useToast()

  const { mutate: editTaskMutation, isPending: isEditing } = useMutation<
    Task,
    Error,
    { id: string; values: Partial<Task> }
  >({
    mutationFn: ({ id, values }) => updateTask(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      addToast({
        type: 'success',
        title: 'Task updated',
        message: 'The task was successfully updated.',
      })
    },
    onError: err => {
      addToast({
        type: 'error',
        title: 'Update failed',
        message: err.message,
      })
    },
  })
  return { editTaskMutation, isEditing }
}

type DeleteTaskPayload = { id: string; title: string }

export const deleteTask = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/tasks/${id}`)
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()
  const { addToast } = useToast()

  const { mutate: deleteTaskMutation, isPending: isDeleting } = useMutation<
    void,
    Error,
    DeleteTaskPayload
  >({
    mutationFn: ({ id }) => deleteTask(id),
    onSuccess: (_data, { title }) => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      addToast({
        type: 'success',
        title: 'Task deleted',
        message: `“${title}” was successfully removed.`,
      })
    },
    onError: (_error, { title }) => {
      addToast({
        type: 'error',
        title: 'Deletion failed',
        message: `Could not delete “${title}”.`,
      })
    },
  })

  return { deleteTaskMutation, isDeleting }
}
