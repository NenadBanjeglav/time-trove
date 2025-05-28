import { useNavigate } from 'react-router-dom'

import { PageWrapper } from '../components/atoms/page-wrapper/PageWrapper'
import { FeedbackState } from '../components/molecules/feedback-state/FeedbackState'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <PageWrapper>
      <FeedbackState
        imageSrc="/images/notFound.png"
        title="Page not found!"
        description="The page you are attempting to access is currently unavailable or does not exist."
        buttonLabel="Back home"
        onClick={() => navigate('/')}
        imageMaxWidth="23.25rem"
      />
    </PageWrapper>
  )
}
