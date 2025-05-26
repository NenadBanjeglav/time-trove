import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAccessToken, clearAccessToken, clearRefreshToken, axiosInstance } from '../api/axios'

type User = {
  id: string
  username: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  logout: () => void
  setUser: (user: User | null) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const setUser = (user: User | null) => {
    setUserState(user)
  }
  useEffect(() => {
    const fetchUser = async () => {
      const token = getAccessToken()
      if (!token) {
        setIsLoading(false)
        return
      }

      try {
        const res = await axiosInstance.get<User>('/me')
        setUser(res.data)
      } catch {
        clearAccessToken()
        clearRefreshToken()
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [])

  const logout = () => {
    clearAccessToken()
    clearRefreshToken()
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
