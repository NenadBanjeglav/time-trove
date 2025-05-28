import { Navigate, useOutletContext } from 'react-router-dom'

import { PageStateContainer } from '../components/organisms/page-state-container/PageStateContainer'
import { useAppStatus } from '../contexts/AppStatusContext'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()
  const { maintenance } = useAppStatus()

  const isLoading = false
  const data: number[] = []
  const error = true

  if (maintenance) return <Navigate to="/maintenance" replace />

  return (
    <PageStateContainer
      navHeight={navHeight}
      isLoading={isLoading}
      error={error}
      isEmpty={!data.length}
      {...(error ? { onClick: () => console.log('something') } : {})}
    >
      {
        //content
      }
    </PageStateContainer>
  )
}
