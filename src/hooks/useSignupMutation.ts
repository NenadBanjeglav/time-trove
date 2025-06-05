import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { signup, login } from '../api/apiAuth'
import type { SignUpPayload, UserResponse } from '../api/apiAuth'
import { TRANSLATION_KEYS as T } from '../constants/translationKeys'
import { useToast } from './useToast'

export const useSignupMutation = () => {
  const { t } = useTranslation()
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
          title: t(T.SIGNUP.SUCCESS_TITLE),
          message: t(T.SIGNUP.SUCCESS_MESSAGE, { username: user.username }),
        })

        navigate('/')
      } catch (err) {
        console.error('Auto-login failed', err)

        addToast({
          type: 'error',
          title: t(T.SIGNUP.AUTOLOGIN_ERROR_TITLE),
          message: t(T.SIGNUP.AUTOLOGIN_ERROR_MESSAGE),
        })

        navigate('/login')
      }
    },

    onError: error => {
      const serverMsg =
        error.response?.data?.message || error.response?.data?.error || 'Signup failed.'

      addToast({
        type: 'error',
        title: t(T.SIGNUP.ERROR_TITLE),
        message: serverMsg,
      })
    },
  })

  return { signupMutation, isSigningUp }
}
