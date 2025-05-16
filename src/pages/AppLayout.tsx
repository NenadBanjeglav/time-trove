import { Outlet } from 'react-router-dom'

import { Logo } from '../components/atoms/logo/Logo'

export const AppLayout = () => {
  return (
    <div>
      <nav>
        <Logo variant="compact" />
        <Logo variant="full" />
      </nav>
      <Outlet />
    </div>
  )
}
