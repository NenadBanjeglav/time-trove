import type { ReactNode } from 'react'

import { Button } from '../../atoms/button/Button'
import { Spinner } from '../../atoms/icon/Spinner'
import { Modal } from '../../atoms/modal/Modal'
import { PageWrapper } from '../../atoms/page-wrapper/PageWrapper'
import { FullCenteredLayout } from '../../atoms/page-wrapper/pageWrapper.styles'
import { FeedbackState } from '../../molecules/feedback-state/FeedbackState'
import { ButtonWrapper } from '../../molecules/feedback-state/feedbackState.styles'
import { TaskForm } from '../../shared/task-form/TaskForm'

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
          buttonElement={
            <ButtonWrapper>
              <Button variant="neutral" onClick={onClick} fullWidth size="xlarge">
                Try again
              </Button>
            </ButtonWrapper>
          }
          imageMaxWidth="15.25rem"
        />
      )}

      {!isLoading && !error && isEmpty && (
        <FeedbackState
          imageSrc="/images/empty.png"
          title="Nothing here yet!"
          description="There are no tasks created"
          buttonElement={
            <ButtonWrapper>
              <Modal.Open opens="taskForm">
                <Button variant="primary" fullWidth size="xlarge">
                  Create task
                </Button>
              </Modal.Open>
              <Modal.Window name="taskForm">
                <TaskForm />
              </Modal.Window>
            </ButtonWrapper>
          }
          imageMaxWidth="11.25rem"
        />
      )}

      {!isLoading && !error && !isEmpty && children}
    </PageWrapper>
  )
}
