import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppLayout, PublicLayout, Dashboard, Login, Register, NotFound } from './pages'
import { ROUTES } from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected App Routes */}
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.register} element={<Register />} />
          <Route path={ROUTES.notFound} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
