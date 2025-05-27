import { useQuery } from '@tanstack/react-query'

import { fetchUser, type User } from '../api/apiAuth'

export const useAuth = () => {
  const {
    data: user,
    isLoading,
    isError,
    refetch,
  } = useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: fetchUser,
    retry: false,
    refetchOnWindowFocus: false,
  })

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    isError,
    refetchUser: refetch,
  }
}
