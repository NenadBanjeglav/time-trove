import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { Spinner } from '../components/atoms/icon/Spinner'
import { PageWrapper } from '../components/atoms/page-wrapper/PageWrapper'
import { FullCenteredLayout } from '../components/atoms/page-wrapper/pageWrapper.styles'
import { useAuth } from '../hooks/useAuth'

type ProtectedRouteProps = {
  children: ReactNode
  redirectTo?: string
}

export const ProtectedRoute = ({ children, redirectTo = '/login' }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading)
    return (
      <PageWrapper>
        <FullCenteredLayout>
          <Spinner />
        </FullCenteredLayout>
      </PageWrapper>
    )

  if (!isAuthenticated) return <Navigate to={redirectTo} replace />

  return <>{children}</>
}
