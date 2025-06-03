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

export const clearTokens = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

axiosInstance.interceptors.request.use(config => {
  const token = getAccessToken()
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

let isRefreshing = false
let refreshPromise: Promise<string> | null = null
let failedQueue: ((token: string) => void)[] = []

const processQueue = (token: string) => {
  failedQueue.forEach(cb => cb(token))
  failedQueue = []
}

axiosInstance.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (!getRefreshToken()) {
        clearTokens()
        return Promise.reject(error)
      }

      if (isRefreshing) {
        return new Promise(resolve => {
          failedQueue.push(token => {
            originalRequest.headers.Authorization = `Bearer ${token}`
            resolve(axiosInstance(originalRequest))
          })
        })
      }

      originalRequest._retry = true
      isRefreshing = true

      refreshPromise = axios
        .post(`${SWAGGER_BASE_URL}/auth/refresh`, {
          refreshToken: getRefreshToken(),
        })
        .then(res => {
          const { accessToken, refreshToken } = res.data
          setAccessToken(accessToken)
          if (refreshToken) setRefreshToken(refreshToken)

          processQueue(accessToken)
          return accessToken
        })
        .catch(refreshErr => {
          clearTokens()
          return Promise.reject(refreshErr)
        })
        .finally(() => {
          isRefreshing = false
          refreshPromise = null
        })

      const newToken = await refreshPromise
      originalRequest.headers.Authorization = `Bearer ${newToken}`
      return axiosInstance(originalRequest)
    }

    return Promise.reject(error)
  }
)
