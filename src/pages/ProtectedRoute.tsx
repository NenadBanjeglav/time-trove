import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Spinner } from '../components/atoms/icon/Spinner'
import { PageWrapper } from '../components/atoms/page-wrapper/PageWrapper'
import { FullCenteredLayout } from '../components/atoms/page-wrapper/pageWrapper.styles'

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAuthenticated(true)
      setIsLoading(false)
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate('/login')
  }, [isLoading, isAuthenticated, navigate])

  if (isLoading)
    return (
      <PageWrapper>
        <FullCenteredLayout>
          <Spinner />
        </FullCenteredLayout>
      </PageWrapper>
    )

  if (isAuthenticated) return children

  return null
}
