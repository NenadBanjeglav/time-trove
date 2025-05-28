import { PageWrapper } from '../components/atoms/page-wrapper/PageWrapper'
import { FeedbackState } from '../components/molecules/feedback-state/FeedbackState'

export const Maintenance = () => {
  return (
    <PageWrapper>
      <FeedbackState
        imageSrc="/images/maintance.png"
        title="We’ll be right back!"
        description="This service is temporarily down for a bit of maintenance."
        imageMaxWidth="392px"
      />
    </PageWrapper>
  )
}
