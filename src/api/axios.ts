import axios from 'axios'
import { SWAGGER_BASE_URL } from '../constants/swaggerBaseUrl'

export const axiosInstance = axios.create({
  baseURL: SWAGGER_BASE_URL,
  withCredentials: false,
})

let accessToken: string | null = null

export const setAccessToken = (token: string) => {
  accessToken = token
}

export const getAccessToken = () => accessToken

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
        const refreshRes = await axiosInstance.post('/auth/refresh')
        accessToken = refreshRes.data.accessToken
        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        return axiosInstance(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)
