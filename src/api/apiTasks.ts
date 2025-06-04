import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import type { TaskPriority } from '../components/molecules/task-card/task.types'
import { PAGE_SIZE } from '../constants/constants'
import { TRANSLATION_KEYS as T } from '../constants/translationKeys'
import { useToast } from '../contexts/useToast'
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

const getTasksQueryParams = (page: number): GetTasksParams => ({
  direction: 'desc',
  limit: PAGE_SIZE,
  offset: (page - 1) * PAGE_SIZE,
  title: '',
})

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
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const { addToast } = useToast()
  const [searchParams, setSearchParams] = useSearchParams()
  const { setTotalTasks } = useAppState()
  const totalTasks = useAppState(state => state.totalTasks)

  const { mutate: createTaskMutation, isPending: isCreating } = useMutation<
    Task,
    Error,
    CreateTaskPayload,
    {
      currentParams: GetTasksParams
      previousTasks: TaskListResponse | undefined
    }
  >({
    mutationFn: createTask,
    onSuccess: (newTask, _payload) => {
      const totalAfterInsert = totalTasks + 1
      const totalPages = Math.ceil(totalAfterInsert / PAGE_SIZE)
      const currentPage = Number(searchParams.get('page') || '1')

      addToast({
        type: 'success',
        title: t(T.CREATE_TASK.SUCCESS_TITLE),
        message: t(T.CREATE_TASK.SUCCESS_MESSAGE, { title: newTask.title }),
      })

      setTotalTasks(totalAfterInsert)

      queryClient.invalidateQueries({ queryKey: ['tasks'] }).then(() => {
        if (currentPage !== totalPages) {
          searchParams.set('page', totalPages.toString())
          setSearchParams(searchParams)
        }
      })
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
  const totalTasks = useAppState(state => state.totalTasks)
  const [searchParams, setSearchParams] = useSearchParams()

  const { mutate: deleteTaskMutation, isPending: isDeleting } = useMutation<
    void,
    Error,
    DeleteTaskPayload,
    {
      previousTasks: TaskListResponse | undefined
      currentParams: GetTasksParams
    }
  >({
    mutationFn: ({ id }) => deleteTask(id),

    onMutate: async ({ id }) => {
      const currentPage = Number(searchParams.get('page') || '1')
      const totalAfterDelete = totalTasks - 1
      const totalPagesAfterDelete = Math.max(1, Math.ceil(totalAfterDelete / PAGE_SIZE))
      const currentParams = getTasksQueryParams(currentPage)

      await queryClient.cancelQueries({ queryKey: ['tasks', currentParams] })

      const previousTasks = queryClient.getQueryData<TaskListResponse>(['tasks', currentParams])

      if (currentPage > totalPagesAfterDelete) {
        const fallbackPage = totalPagesAfterDelete
        const fallbackParams = getTasksQueryParams(fallbackPage)

        const fallbackTasks = queryClient.getQueryData<TaskListResponse>(['tasks', fallbackParams])

        if (fallbackTasks) {
          queryClient.setQueryData(['tasks', currentParams], fallbackTasks)
          searchParams.set('page', fallbackPage.toString())
          setSearchParams(searchParams)
        }
      }

      queryClient.setQueryData<TaskListResponse>(['tasks', currentParams], old => {
        if (!old || !Array.isArray(old.items)) return old
        return {
          ...old,
          tasks: old.items.filter(task => task.id !== id),
        }
      })

      return { previousTasks, currentParams }
    },

    onSuccess: (_data, { title }) => {
      addToast({
        type: 'success',
        title: t(T.DELETE_TASK.SUCCESS_TITLE),
        message: t(T.DELETE_TASK.SUCCESS_MESSAGE, { title }),
      })
    },

    onError: (_error, { title }, context) => {
      if (context?.previousTasks && context?.currentParams) {
        queryClient.setQueryData(['tasks', context.currentParams], context.previousTasks)
      }

      addToast({
        type: 'error',
        title: t(T.DELETE_TASK.ERROR_TITLE),
        message: t(T.DELETE_TASK.ERROR_MESSAGE, { title }),
      })
    },
  })

  return { deleteTaskMutation, isDeleting }
}
