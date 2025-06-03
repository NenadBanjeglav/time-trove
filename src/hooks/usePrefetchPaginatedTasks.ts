import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { getTasks } from '../api/apiTasks'
import { PAGE_SIZE } from '../constants/constants'

type PrefetchTasksParams = {
  currentPage: number
  totalPages: number | undefined
  search: string
}

export const usePrefetchPaginatedTasks = ({
  currentPage,
  totalPages,
  search,
}: PrefetchTasksParams) => {
  const queryClient = useQueryClient()

  useEffect(() => {
    if (!totalPages) return

    const nextPage = currentPage + 1
    const prevPage = currentPage - 1

    if (nextPage <= totalPages) {
      queryClient.prefetchQuery({
        queryKey: [
          'tasks',
          {
            limit: PAGE_SIZE,
            offset: (nextPage - 1) * PAGE_SIZE,
            direction: 'desc',
            title: search,
          },
        ],
        queryFn: () =>
          getTasks({
            limit: PAGE_SIZE,
            offset: (nextPage - 1) * PAGE_SIZE,
            direction: 'desc',
            title: search,
          }),
      })
    }

    if (prevPage > 0) {
      queryClient.prefetchQuery({
        queryKey: [
          'tasks',
          {
            limit: PAGE_SIZE,
            offset: (prevPage - 1) * PAGE_SIZE,
            direction: 'desc',
            title: search,
          },
        ],
        queryFn: () =>
          getTasks({
            limit: PAGE_SIZE,
            offset: (prevPage - 1) * PAGE_SIZE,
            direction: 'desc',
            title: search,
          }),
      })
    }
  }, [currentPage, totalPages, queryClient, search])
}
