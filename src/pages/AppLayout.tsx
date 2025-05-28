import { useLayoutEffect, useRef, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { Heading } from '../components/atoms/heading/Heading'
import { useLogout } from '../hooks/useLogout'
import { useAppStatus } from '../contexts/AppStatusContext'
import { IconButton } from '../components/atoms/icon-button/IconButton'
import { Modal } from '../components/atoms/modal/Modal'
import { ConfirmDialog } from '../components/molecules/confirm-dialog/ConfirmDialog'
import { DialogVariant } from '../components/molecules/confirm-dialog/confirmDialog.types'

export const AppLayout = () => {
  const { maintenance } = useAppStatus()
  const ref = useRef<HTMLElement>(null)
  const [navHeight, setNavHeight] = useState(56)
  const { logout } = useLogout()

  useLayoutEffect(() => {
    if (!ref.current) return

    const observer = new ResizeObserver(entries => {
      const height = entries[0]?.contentRect.height
      if (height) setNavHeight(height)
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const effectiveHeight = maintenance ? 0 : navHeight

  if (maintenance) return <Navigate to="/maintenance" replace />

  return (
    <Modal>
      <nav
        ref={ref}
        style={{
          display: 'flex',
          height: '56px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
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
            onPrimaryAction={() => logout()}
          />
        </Modal.Window>
        <Heading as="h2" pallete="neutral" color="hue400">
          Dashboard
        </Heading>
      </nav>

      <Outlet context={{ navHeight: effectiveHeight }} />
    </Modal>
  )
}
