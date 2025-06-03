import { type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useUnsavedChangesModal } from '../../../hooks/useUnsavedCHangesModal'
import { Button } from '../../atoms/button/Button'
import { Spinner } from '../../atoms/icon/Spinner'
import { Modal } from '../../atoms/modal/Modal'
import { PageWrapper } from '../../atoms/page-wrapper/PageWrapper'
import { FullCenteredLayout } from '../../atoms/page-wrapper/pageWrapper.styles'
import { ConfirmDialog } from '../../molecules/confirm-dialog/ConfirmDialog'
import { DialogVariant } from '../../molecules/confirm-dialog/confirmDialog.types'
import { FeedbackState } from '../../molecules/feedback-state/FeedbackState'
import { ButtonWrapper } from '../../molecules/feedback-state/feedbackState.styles'
import { CreateTaskForm } from '../../shared/task-form-shell/CreateTaskForm'

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
  const [searchParams] = useSearchParams()

  const {
    isOpen: isTaskFormOpen,
    confirmOpen: isDiscardConfirmOpen,
    open: openTaskForm,
    requestClose: closeTaskForm,
    discard: discardTaskForm,
    cancelClose: cancelDiscard,
    onChange: markTaskFormDirty,
    reset,
  } = useUnsavedChangesModal()

  const hasActiveFilters = Boolean(searchParams.get('priority') || searchParams.get('search'))

  return (
    <PageWrapper dynamicHeightOffset={navHeight}>
      <Modal isOpen={isTaskFormOpen} onClose={closeTaskForm}>
        <CreateTaskForm onChange={markTaskFormDirty} onReset={reset} />
      </Modal>

      <Modal isOpen={isDiscardConfirmOpen} onClose={cancelDiscard} zIndex={1100}>
        <ConfirmDialog
          title="Discard task?"
          description="You have unsaved changes. Are you sure you want to close the form?"
          variant={DialogVariant.DANGER}
          primaryActionLabel="Discard"
          secondaryActionLabel="Cancel"
          onPrimaryAction={discardTaskForm}
          onClose={cancelDiscard}
        />
      </Modal>

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

      {!isLoading && !error && !hasActiveFilters && isEmpty && (
        <FeedbackState
          imageSrc="/images/empty.png"
          title="Nothing here yet!"
          description="There are no tasks created"
          buttonElement={
            <ButtonWrapper>
              <Button variant="primary" fullWidth size="xlarge" onClick={openTaskForm}>
                Create task
              </Button>
            </ButtonWrapper>
          }
          imageMaxWidth="11.25rem"
        />
      )}

      {isEmpty && !isLoading && hasActiveFilters && (
        <FeedbackState
          title="No results found!"
          description="Please try searching for something else."
        />
      )}

      {!isLoading && !error && !isEmpty && children}
    </PageWrapper>
  )
}
