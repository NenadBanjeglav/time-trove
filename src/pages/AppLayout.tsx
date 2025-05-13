import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet />
    </div>
  )
}

export default AppLayout
