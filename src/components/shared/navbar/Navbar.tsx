import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { LogoutIcon } from '../../../assets/icons/LogoutIcon'
import { ROUTES } from '../../../constants/routes'
import { useUnsavedChangesModal } from '../../../hooks/useUnsavedCHangesModal'
import { Button } from '../../atoms/button/Button'
import { Heading } from '../../atoms/heading/Heading'
import { IconButton } from '../../atoms/icon-button/IconButton'
import { Modal } from '../../atoms/modal/Modal'
import { Search } from '../../atoms/search/Search'
import { ConfirmDialog } from '../../molecules/confirm-dialog/ConfirmDialog'
import { DialogVariant } from '../../molecules/confirm-dialog/confirmDialog.types'
import { CreateTaskForm } from '../task-form-shell/CreateTaskForm'

import { ButtonIconWrapper, ButtonWrapper, NavbarContainer, StyledNavbar } from './navbar.styles'

const routeTitleMap: Record<string, string> = {
  [ROUTES.root]: 'Dashboard',
  [`/${ROUTES.login}`]: 'Login',
  [`/${ROUTES.signup}`]: 'Sign Up',
  [`/${ROUTES.maintenance}`]: 'Maintenance',
}

type NavbarProps = {
  onLogout: () => void
}

export const Navbar = ({ onLogout }: NavbarProps) => {
  const { pathname } = useLocation()
  const [isLogoutOpen, setLogoutOpen] = useState(false)
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
        <Heading as="h2" pallete="neutral" color="hue400">
          <Link to="/">{title}</Link>
        </Heading>
        <Search />

        <ButtonIconWrapper>
          <ButtonWrapper>
            <Button onClick={openTaskForm} variant="primary" size="medium" fullWidth>
              Create task
            </Button>

            <Modal isOpen={isTaskFormOpen} onClose={closeTaskForm}>
              <CreateTaskForm onReset={safeClose} onChange={markTaskFormDirty} />
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
              title="Log out"
              description="Are you sure you want to log out?"
              primaryActionLabel="Log out"
              secondaryActionLabel="Cancel"
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
