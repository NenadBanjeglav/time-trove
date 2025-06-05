import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import type { TaskPriority } from '../components/molecules/task-card/task.types'
import { PAGE_SIZE } from '../constants/constants'
import { TRANSLATION_KEYS as T } from '../constants/translationKeys'
import { useToast } from '../hooks/useToast'
import { useAppState } from '../stores/useAppStore'

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
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const { addToast } = useToast()
  const [searchParams, setSearchParams] = useSearchParams()

  const totalTasks = useAppState(state => state.totalTasks)

  const { mutate: createTaskMutation, isPending: isCreating } = useMutation<
    Task,
    Error,
    CreateTaskPayload
  >({
    mutationFn: createTask,
    onSuccess: () => {
      addToast({
        type: 'success',
        title: t(T.CREATE_TASK.SUCCESS_TITLE),
        message: t(T.CREATE_TASK.SUCCESS_MESSAGE),
      })
      queryClient.invalidateQueries({ queryKey: ['tasks'] })

      const totalAfterInsert = totalTasks + 1
      const totalPages = Math.ceil(totalAfterInsert / PAGE_SIZE)

      searchParams.set('page', totalPages.toString())
      setSearchParams(searchParams)
    },
    onError: err => {
      addToast({
        type: 'error',
        title: t(T.CREATE_TASK.ERROR_TITLE),
        message: err.message || t(T.CREATE_TASK.DEFAULT_ERROR),
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
  const { t } = useTranslation()
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
        title: t(T.EDIT_TASK.SUCCESS_TITLE),
        message: t(T.EDIT_TASK.SUCCESS_MESSAGE),
      })
    },
    onError: err => {
      addToast({
        type: 'error',
        title: t(T.EDIT_TASK.ERROR_TITLE),
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
  const { t } = useTranslation()
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
        title: t(T.DELETE_TASK.SUCCESS_TITLE),
        message: t(T.DELETE_TASK.SUCCESS_MESSAGE, { title }),
      })
    },
    onError: (_error, { title }) => {
      addToast({
        type: 'error',
        title: t(T.DELETE_TASK.ERROR_TITLE),
        message: t(T.DELETE_TASK.ERROR_MESSAGE, { title }),
      })
    },
  })

  return { deleteTaskMutation, isDeleting }
}
