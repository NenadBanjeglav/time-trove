import { Outlet } from 'react-router-dom'

import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { Button } from '../components/atoms/button/Button'
import { Heading } from '../components/atoms/heading/Heading'
import { Icon } from '../components/atoms/icon/Icon'
import { useLogout } from '../hooks/useLogout'

export const AppLayout = () => {
  const { logout } = useLogout()
  return (
    <div>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button isIconButton shape="circle" variant="danger" color="hue0" onClick={logout}>
          <Icon icon={LogoutIcon} pallete="danger" color="hue200" />
        </Button>
        <Heading as="h2" pallete="neutral" color="hue400">
          Dashboard
        </Heading>
      </nav>

      <Outlet />
    </div>
  )
}
