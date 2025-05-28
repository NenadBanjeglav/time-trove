import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { logout as logoutApi } from '../api/apiAuth'

export const useLogout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const logout = () => {
    logoutApi()
    queryClient.removeQueries({ queryKey: ['user'] })
    navigate('/login')
  }

  return { logout }
}
