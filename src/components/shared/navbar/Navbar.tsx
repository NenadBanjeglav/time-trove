import { useLocation } from 'react-router-dom'

import { LogoutIcon } from '../../../assets/icons/LogoutIcon'
import { ROUTES } from '../../../constants/routes'
import { Button } from '../../atoms/button/Button'
import { Heading } from '../../atoms/heading/Heading'
import { IconButton } from '../../atoms/icon-button/IconButton'
import { Modal } from '../../atoms/modal/Modal'
import { Search } from '../../atoms/search/Search'
import { ConfirmDialog } from '../../molecules/confirm-dialog/ConfirmDialog'
import { DialogVariant } from '../../molecules/confirm-dialog/confirmDialog.types'

import { ButtonIconWrapper, ButtonWrapper, NavbarContainer, StyledNavbar } from './navbar.styles'
import { CreateTaskForm } from '../task-form-shell/CreateTaskForm'

const routeTitleMap: Record<string, string> = {
  [ROUTES.root]: 'Dashboard',
  [`/${ROUTES.login}`]: 'Login',
  [`/${ROUTES.signup}`]: 'Sign Up',
  [`/${ROUTES.maintenance}`]: 'Maintenance',
}

export const Navbar = ({ onLogout }: React.HTMLProps<HTMLElement> & { onLogout: () => void }) => {
  const { pathname } = useLocation()
  const title = routeTitleMap[pathname] ?? 'Dashboard'

  return (
    <StyledNavbar>
      <NavbarContainer>
        <Heading as="h2" pallete="neutral" color="hue400">
          {title}
        </Heading>

        <Search />

        <ButtonIconWrapper>
          <ButtonWrapper>
            <Modal.Open opens="taskForm">
              <Button variant="primary" size="medium" fullWidth>
                Create task
              </Button>
            </Modal.Open>
            <Modal.Window name="taskForm">
              <CreateTaskForm />
            </Modal.Window>
          </ButtonWrapper>
          <Modal.Open opens="logout">
            <IconButton icon={LogoutIcon} variant="danger" shape="circle" color="hue0" />
          </Modal.Open>
          <Modal.Window name="logout">
            <ConfirmDialog
              variant={DialogVariant.DANGER}
              title="Log out"
              description="Are you sure you want to log out?"
              primaryActionLabel="Log out"
              secondaryActionLabel="Cancel"
              onPrimaryAction={onLogout}
            />
          </Modal.Window>
        </ButtonIconWrapper>
      </NavbarContainer>
    </StyledNavbar>
  )
}
