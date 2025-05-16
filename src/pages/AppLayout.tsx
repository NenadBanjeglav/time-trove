import { Outlet } from 'react-router-dom'
import { Heading } from '../components/atoms/heading/Heading'

export const AppLayout = () => {
  return (
    <div>
      <nav>
        <Heading as="h2" pallete="neutral" color="hue400">
          Dashboard
        </Heading>
      </nav>
      <Outlet />
    </div>
  )
}
