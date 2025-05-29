import { axiosInstance, clearTokens, setAccessToken, setRefreshToken } from './axios'

export type LoginPayload = {
  username: string
  password: string
}

export async function login({ username, password }: LoginPayload) {
  const { data } = await axiosInstance.post('/auth/login', { username, password })

  const { accessToken, refreshToken, user } = data

  if (!accessToken || !refreshToken) {
    throw new Error('Missing tokens')
  }

  if (!user) throw new Error('User data missing')

  setAccessToken(accessToken)
  setRefreshToken(refreshToken)

  return user
}

export type SignUpPayload = {
  username: string
  password: string
}

export type UserResponse = {
  id: string
  username: string
}

export const signup = async ({ username, password }: SignUpPayload): Promise<UserResponse> => {
  const { data } = await axiosInstance.post<UserResponse>('/auth/registration', {
    username,
    password,
  })

  return data
}

export type User = {
  id: string
  username: string
}

export const fetchUser = async (): Promise<User> => {
  const { data } = await axiosInstance.get<User>('/me')
  return data
}

export const logout = () => {
  clearTokens()
}
