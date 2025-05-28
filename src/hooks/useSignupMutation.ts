import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

import { signup, login } from '../api/apiAuth'
import type { SignUpPayload, UserResponse } from '../api/apiAuth'
import { useToast } from '../contexts/useToast'

export const useSignupMutation = () => {
  const { addToast } = useToast()
  const navigate = useNavigate()

  const { mutate: signupMutation, isPending: isSigningUp } = useMutation<
    UserResponse,
    AxiosError<{ message?: string; error?: string }>,
    SignUpPayload
  >({
    mutationFn: signup,

    onSuccess: async (user, variables) => {
      try {
        await login(variables)

        addToast({
          type: 'success',
          title: 'Welcome!',
          message: `Signed up and logged in as ${user.username}`,
        })

        navigate('/')
      } catch (err) {
        console.error('Auto-login failed', err)

        addToast({
          type: 'error',
          title: 'Auto-login failed',
          message: 'Your account was created, but login failed. Please try again.',
        })

        navigate('/login')
      }
    },

    onError: error => {
      const serverMsg =
        error.response?.data?.message || error.response?.data?.error || 'Signup failed.'

      addToast({
        type: 'error',
        title: 'Signup failed',
        message: serverMsg,
      })
    },
  })

  return { signupMutation, isSigningUp }
}
