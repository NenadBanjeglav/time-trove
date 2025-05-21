import axios from 'axios'
import { SWAGGER_BASE_URL } from '../constants/swaggerBaseUrl'

export const axiosInstance = axios.create({
  baseURL: SWAGGER_BASE_URL,
  withCredentials: false,
})

let accessToken: string | null = localStorage.getItem('accessToken')
let refreshToken: string | null = localStorage.getItem('refreshToken')

export const setRefreshToken = (token: string) => {
  refreshToken = token
  localStorage.setItem('refreshToken', token)
}

export const getRefreshToken = () => refreshToken

export const setAccessToken = (token: string) => {
  accessToken = token
  localStorage.setItem('accessToken', token)
}

export const getAccessToken = () => accessToken

export const clearAccessToken = () => {
  accessToken = null
  localStorage.removeItem('accessToken')
}

export const clearRefreshToken = () => {
  refreshToken = null
  localStorage.removeItem('refreshToken')
}

axiosInstance.interceptors.request.use(config => {
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`
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
