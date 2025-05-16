import { Outlet } from 'react-router-dom'

import { Logo } from '../components/atoms/logo/Logo'
import { Heading } from '../components/atoms/heading/Heading'

export const AppLayout = () => {
  return (
    <div>
      <nav>
        <Logo variant="full" />
        <Logo variant="compact" />
        <Heading as="h2" pallete="neutral" color="hue400">
          Dashboard
        </Heading>
      </nav>
      <Outlet />
    </div>
  )
}
