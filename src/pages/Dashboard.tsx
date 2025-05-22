import { Navigate, useOutletContext } from 'react-router-dom'

import { Heading } from '../components/atoms/heading/Heading'
import { Spinner } from '../components/atoms/icon/Spinner'
import { PageWrapper } from '../components/atoms/page-wrapper/PageWrapper'
import { FullCenteredLayout } from '../components/atoms/page-wrapper/pageWrapper.styles'
import { FeedbackState } from '../components/molecules/feedback-state/FeedbackState'
import { useAppStatus } from '../contexts/AppStatusContext'

type LayoutContext = { navHeight: number }

export const Dashboard = () => {
  const { navHeight } = useOutletContext<LayoutContext>()
  const { maintenance } = useAppStatus()

  const isLoading = false
  const data = []
  const error = false

  if (maintenance) return <Navigate to="/maintenance" replace />

  return (
    <PageWrapper dynamicHeightOffset={navHeight}>
      {isLoading && (
        <FullCenteredLayout>
          <Spinner />
        </FullCenteredLayout>
      )}

      {!isLoading && error && (
        <FeedbackState
          imageSrc="/images/error.png"
          title="Something went wrong"
          description="An error occurred while attempting to retrieve data from the server."
          buttonLabel="Try again"
          buttonVariant="neutral"
          onClick={() => window.location.reload()}
          imageMaxWidth="244px"
        />
      )}

      {!isLoading && !error && data.length === 0 && (
        <FeedbackState
          imageSrc="/images/empty.png"
          title="Nothing here yet!"
          description="There are no tasks created"
          buttonLabel="Create task"
          onClick={() => {}}
          imageMaxWidth="180px"
        />
      )}

      {!isLoading && !error && data.length > 0 && <Heading>Welcome to dashboard</Heading>}
    </PageWrapper>
  )
}
