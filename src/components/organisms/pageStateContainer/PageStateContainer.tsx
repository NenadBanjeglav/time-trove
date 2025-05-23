import type { ReactNode } from 'react'
import { PageWrapper } from '../../atoms/page-wrapper/PageWrapper'
import { FullCenteredLayout } from '../../atoms/page-wrapper/pageWrapper.styles'
import { Spinner } from '../../atoms/icon/Spinner'
import { FeedbackState } from '../../molecules/feedback-state/FeedbackState'

type PageStateContainerProps<T> = {
  navHeight: number
  isLoading: boolean
  error?: boolean
  data: T[]
  children: ReactNode
  onClick?: () => void
}

export const PageStateContainer = <T,>({
  navHeight,
  isLoading,
  error,
  data,
  children,
  onClick = () => {},
}: PageStateContainerProps<T>) => {
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
          imageMaxWidth="244px"
        />
      )}

      {!isLoading && !error && data.length === 0 && (
        <FeedbackState
          imageSrc="/images/empty.png"
          title="Nothing here yet!"
          description="There are no tasks created"
          buttonLabel="Create task"
          onClick={onClick}
          imageMaxWidth="180px"
        />
      )}

      {!isLoading && !error && data.length > 0 && children}
    </PageWrapper>
  )
}
