import { useMutation } from '@tanstack/react-query'

import { axiosInstance, setAccessToken } from './axios'

export const login = async (email: string, password: string) => {
  const res = await axiosInstance.post('/auth/login', { email, password })
  setAccessToken(res.data.accessToken)
}

export type SignUpPayload = {
  username: string
  password: string
}

export type UserResponse = {
  id: string
  username: string
}

export const signup = async (data: SignUpPayload): Promise<UserResponse> => {
  const res = await axiosInstance.post<UserResponse>('/auth/registration', data)

  return res.data
}

export const useSignMutation = () => {
  const { mutate: signUpMutation, isPending: isSigningUp } = useMutation({
    mutationFn: signup,
    onSuccess: user => {
      console.log(user)
    },
  })

  return { signUpMutation, isSigningUp }
}
