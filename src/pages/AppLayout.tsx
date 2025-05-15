import { Outlet } from 'react-router-dom'

import { Logo } from '../components/atoms/logo/Logo'

export const AppLayout = () => {
  return (
    <div>
      <nav>
        <Logo />
        <Logo variant="small" />
      </nav>
      <Outlet />
    </div>
  )
}
