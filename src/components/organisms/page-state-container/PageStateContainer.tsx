import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
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
  const { t } = useTranslation()

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
          title={t(T.PAGE_STATE.DISCARD_TITLE)}
          description={t(T.PAGE_STATE.DISCARD_DESCRIPTION)}
          variant={DialogVariant.DANGER}
          primaryActionLabel={t(T.PAGE_STATE.DISCARD_CONFIRM)}
          secondaryActionLabel={t(T.PAGE_STATE.DISCARD_CANCEL)}
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
          title={t(T.PAGE_STATE.ERROR_TITLE)}
          description={t(T.PAGE_STATE.ERROR_DESCRIPTION)}
          buttonElement={
            <ButtonWrapper>
              <Button variant="neutral" onClick={onClick} fullWidth size="xlarge">
                {t(T.PAGE_STATE.RETRY)}
              </Button>
            </ButtonWrapper>
          }
          imageMaxWidth="15.25rem"
        />
      )}

      {!isLoading && !error && !hasActiveFilters && isEmpty && (
        <FeedbackState
          imageSrc="/images/empty.png"
          title={t(T.PAGE_STATE.EMPTY_TITLE)}
          description={t(T.PAGE_STATE.EMPTY_DESCRIPTION)}
          buttonElement={
            <ButtonWrapper>
              <Button variant="primary" fullWidth size="xlarge" onClick={openTaskForm}>
                {t(T.PAGE_STATE.CREATE_TASK)}
              </Button>
            </ButtonWrapper>
          }
          imageMaxWidth="11.25rem"
        />
      )}

      {isEmpty && !isLoading && hasActiveFilters && (
        <FeedbackState
          title={t(T.PAGE_STATE.NO_RESULTS_TITLE)}
          description={t(T.PAGE_STATE.NO_RESULTS_DESCRIPTION)}
        />
      )}

      {!isLoading && !error && !isEmpty && children}
    </PageWrapper>
  )
}
