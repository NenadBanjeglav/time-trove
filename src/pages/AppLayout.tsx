import { Outlet } from 'react-router-dom'

import { Heading } from '../components/atoms/heading/Heading'
import { Search } from '../components/atoms/search/Search'
import { Logo } from '../components/atoms/logo/Logo'

export const AppLayout = () => {
  return (
    <div>
      <nav style={{ display: 'flex' }}>
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
