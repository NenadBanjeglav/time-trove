import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'

import { Spinner } from '../components/atoms/icon/Spinner'
import { useAuth } from '../hooks/useAuth'

const FullPage = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral.hue100};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return <>{children}</>
}
