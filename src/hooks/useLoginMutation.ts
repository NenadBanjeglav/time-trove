import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

import { login } from '../api/apiAuth'
import { useToast } from '../contexts/useToast'

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { mutate: loginMutation, isPending: isLoggingIn } = useMutation({
    mutationFn: login,

    onSuccess: () => {
      navigate('/')
      addToast({
        type: 'success',
        title: 'Welcome back!',
        message: 'You have successfully logged in.',
      })
    },

    onError: (error: AxiosError<{ message?: string; error?: string }>) => {
      console.error('Login failed', error)
      const serverMsg =
        error.response?.data?.message || error.response?.data?.error || 'Invalid request payload'

      addToast({
        type: 'error',
        title: 'Login failed',
        message: serverMsg,
      })
    },
  })

  return { loginMutation, isLoggingIn }
}
