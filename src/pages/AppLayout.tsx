import { Outlet } from 'react-router-dom'

import { Heading } from '../components/atoms/heading/Heading'
import { Logo } from '../components/atoms/logo/Logo'
import { Text } from '../components/atoms/text/Text'
import { useAuth } from '../hooks/useAuth'

export const AppLayout = () => {
  const { user } = useAuth()
  return (
    <div>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo variant="full" />
        <Logo variant="compact" />
        <Heading as="h2" pallete="neutral" color="hue400">
          Dashboard
        </Heading>
        <Text>Welcome back, {user?.username}</Text>
      </nav>

      <Outlet />
    </div>
  )
}
