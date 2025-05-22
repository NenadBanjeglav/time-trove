import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from '../components/molecules/page-container/Container'

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAuthenticated(true)
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate('/login')
  }, [isLoading, isAuthenticated, navigate])

  if (isLoading) return <Container isLoading />

  if (isAuthenticated) return children

  return null
}
