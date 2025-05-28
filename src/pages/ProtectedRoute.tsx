import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { Spinner } from '../components/atoms/icon/Spinner'
import { useAuth } from '../hooks/useAuth'
import { PageWrapper } from '../components/atoms/page-wrapper/PageWrapper'
import { FullCenteredLayout } from '../components/atoms/page-wrapper/pageWrapper.styles'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading)
    return (
      <PageWrapper>
        <FullCenteredLayout>
          <Spinner />
        </FullCenteredLayout>
      </PageWrapper>
    )

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return <>{children}</>
}
