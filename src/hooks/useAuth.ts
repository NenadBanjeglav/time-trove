import { useQuery } from '@tanstack/react-query'

import { fetchUser, type User } from '../api/apiAuth'

export const useAuth = () => {
  const token = localStorage.getItem('accessToken')

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: fetchUser,
    enabled: !!token,
  })

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    isError,
  }
}
