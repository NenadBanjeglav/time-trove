import axios from 'axios'

import { SWAGGER_BASE_URL } from '../constants/swaggerBaseUrl'

export const axiosInstance = axios.create({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  baseURL: SWAGGER_BASE_URL,
  withCredentials: false,
})

export const getAccessToken = () => localStorage.getItem('accessToken')
export const getRefreshToken = () => localStorage.getItem('refreshToken')

export const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token)
}

export const setRefreshToken = (token: string) => {
  localStorage.setItem('refreshToken', token)
}

export const clearAccessToken = () => {
  localStorage.removeItem('accessToken')
}

export const clearRefreshToken = () => {
  localStorage.removeItem('refreshToken')
}

axiosInstance.interceptors.request.use(config => {
  const token = getAccessToken()
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosInstance.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshRes = await axiosInstance.post('/auth/refresh', {
          refreshToken: getRefreshToken(),
        })

        const newAccessToken = refreshRes.data.accessToken
        const newRefreshToken = refreshRes.data.refreshToken

        setAccessToken(newAccessToken)
        if (newRefreshToken) setRefreshToken(newRefreshToken)

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return axiosInstance(originalRequest)
      } catch (refreshError) {
        clearAccessToken()
        clearRefreshToken()
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)
