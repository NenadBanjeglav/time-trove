import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { LogoutIcon } from '../../../assets/icons/LogoutIcon'
import { ROUTES } from '../../../constants/routes'
import { TRANSLATION_KEYS as T } from '../../../constants/translationKeys'
import { useUnsavedChangesModal } from '../../../hooks/useUnsavedChangesModal'
import { Button } from '../../atoms/button/Button'
import { Heading } from '../../atoms/heading/Heading'
import { IconButton } from '../../atoms/icon-button/IconButton'
import { Modal } from '../../atoms/modal/Modal'
import { Search } from '../../atoms/search/Search'
import { ConfirmDialog } from '../../molecules/confirm-dialog/ConfirmDialog'
import { DialogVariant } from '../../molecules/confirm-dialog/confirmDialog.types'
import { CreateTaskForm } from '../task-form-shell/CreateTaskForm'

import { ButtonIconWrapper, ButtonWrapper, NavbarContainer, StyledNavbar } from './navbar.styles'

type NavbarProps = {
  onLogout: () => void
}

export const Navbar = ({ onLogout }: NavbarProps) => {
  const { pathname } = useLocation()
  const [isLogoutOpen, setLogoutOpen] = useState(false)
  const { t } = useTranslation()

  const routeTitleMap: Record<string, string> = {
    [ROUTES.root]: t(T.NAVBAR.TITLE_DASHBOARD),
    [`/${ROUTES.login}`]: t(T.NAVBAR.TITLE_LOGIN),
    [`/${ROUTES.signup}`]: t(T.NAVBAR.TITLE_SIGNUP),
    [`/${ROUTES.maintenance}`]: t(T.NAVBAR.TITLE_MAINTENANCE),
  }

  const title = routeTitleMap[pathname] ?? 'Dashboard'

  const {
    isOpen: isTaskFormOpen,
    confirmOpen: isDiscardConfirmOpen,
    open: openTaskForm,
    requestClose: closeTaskForm,
    discard: discardTaskForm,
    cancelClose: cancelDiscard,
    onChange: markTaskFormDirty,
    safeClose,
  } = useUnsavedChangesModal()

  return (
    <StyledNavbar>
      <NavbarContainer>
        <Heading
          as="h2"
          pallete="neutral"
          //@ts-ignore
          color="hue400"
        >
          <Link to="/">{title}</Link>
        </Heading>
        <Search />

        <ButtonIconWrapper>
          <ButtonWrapper>
            <Button onClick={openTaskForm} variant="primary" size="medium" fullWidth>
              {t(T.NAVBAR.CREATE_TASK)}
            </Button>

            <Modal isOpen={isTaskFormOpen} onClose={closeTaskForm}>
              <CreateTaskForm onReset={safeClose} onChange={markTaskFormDirty} />
            </Modal>
            <Modal isOpen={isDiscardConfirmOpen} onClose={cancelDiscard} zIndex={1100}>
              <ConfirmDialog
                title={t(T.NAVBAR.DISCARD_TITLE)}
                description={t(T.NAVBAR.DISCARD_DESCRIPTION)}
                variant={DialogVariant.DANGER}
                primaryActionLabel={t(T.NAVBAR.DISCARD_CONFIRM)}
                secondaryActionLabel={t(T.NAVBAR.DISCARD_CANCEL)}
                onPrimaryAction={discardTaskForm}
                onClose={cancelDiscard}
              />
            </Modal>
          </ButtonWrapper>

          <IconButton
            onClick={() => setLogoutOpen(true)}
            icon={LogoutIcon}
            variant="danger"
            shape="circle"
            color="hue0"
          />

          <Modal isOpen={isLogoutOpen} onClose={() => setLogoutOpen(false)}>
            <ConfirmDialog
              variant={DialogVariant.DANGER}
              title={t(T.NAVBAR.LOGOUT_TITLE)}
              description={t(T.NAVBAR.LOGOUT_DESCRIPTION)}
              primaryActionLabel={t(T.NAVBAR.LOGOUT_CONFIRM)}
              secondaryActionLabel={t(T.NAVBAR.LOGOUT_CANCEL)}
              onPrimaryAction={() => {
                onLogout()
                setLogoutOpen(false)
              }}
              onClose={() => setLogoutOpen(false)}
            />
          </Modal>
        </ButtonIconWrapper>
      </NavbarContainer>
    </StyledNavbar>
  )
}
