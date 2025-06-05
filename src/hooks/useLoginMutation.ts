import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { login } from '../api/apiAuth'
import { TRANSLATION_KEYS as T } from '../constants/translationKeys'
import { useToast } from './useToast'

export const useLoginMutation = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { addToast } = useToast()

  const { mutate: loginMutation, isPending: isLoggingIn } = useMutation({
    mutationFn: login,

    onSuccess: () => {
      navigate('/')
      addToast({
        type: 'success',
        title: t(T.LOGIN.SUCCESS_TITLE),
        message: t(T.LOGIN.SUCCESS_MESSAGE),
      })
    },

    onError: (error: AxiosError<{ message?: string; error?: string }>) => {
      console.error('Login failed', error)
      const serverMsg =
        error.response?.data?.message || error.response?.data?.error || 'Invalid request payload'

      addToast({
        type: 'error',
        title: t(T.LOGIN.ERROR_TITLE),
        message: serverMsg,
      })
    },
  })

  return { loginMutation, isLoggingIn }
}
