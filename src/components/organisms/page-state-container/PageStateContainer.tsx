import type { ReactNode } from 'react'

import { Spinner } from '../../atoms/icon/Spinner'
import { PageWrapper } from '../../atoms/page-wrapper/PageWrapper'
import { FullCenteredLayout } from '../../atoms/page-wrapper/pageWrapper.styles'
import { FeedbackState } from '../../molecules/feedback-state/FeedbackState'

type PageStateContainerProps = {
  navHeight: number
  isLoading: boolean
  error?: boolean
  isEmpty: boolean
  children?: ReactNode
  onClick?: () => void
}

export const PageStateContainer = ({
  navHeight,
  isLoading,
  error,
  isEmpty,
  children,
  onClick = () => {},
}: PageStateContainerProps) => {
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
          onClick={onClick}
          imageMaxWidth="15.25rem"
        />
      )}

      {!isLoading && !error && isEmpty && (
        <FeedbackState
          imageSrc="/images/empty.png"
          title="Nothing here yet!"
          description="There are no tasks created"
          buttonLabel="Create task"
          onClick={onClick}
          imageMaxWidth="11.25rem"
        />
      )}

      {!isLoading && !error && isEmpty && children}
    </PageWrapper>
  )
}
