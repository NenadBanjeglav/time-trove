import { Navigate, useOutletContext } from 'react-router-dom'

import { Heading } from '../components/atoms/heading/Heading'

import { useAppStatus } from '../contexts/AppStatusContext'
import { PageStateContainer } from '../components/organisms/pageStateContainer/PageStateContainer'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()
  const { maintenance } = useAppStatus()

  const isLoading = false
  const data: number[] = []
  const error = false

  if (maintenance) return <Navigate to="/maintenance" replace />

  return (
    <PageStateContainer
      navHeight={navHeight}
      isLoading={isLoading}
      error={error}
      data={data}
      onClick={() => {}}
    >
      <Heading>Welcome to dashboard</Heading>
    </PageStateContainer>
  )
}
