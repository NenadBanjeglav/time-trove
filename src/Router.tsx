import { Routes, Route } from 'react-router-dom'

import { ROUTES } from './constants/routes'
import { AppLayout } from './pages/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Maintenance } from './pages/Maintenance'
import { NotFound } from './pages/NotFound'
import { ProtectedRoute } from './pages/ProtectedRoute'
import { PublicLayout } from './pages/PublicLayout'
import { Signup } from './pages/Signup'

export const AppRouter = () => (
  <Routes>
    <Route
      element={
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<Dashboard />} />
    </Route>

    <Route element={<PublicLayout />}>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.signup} element={<Signup />} />
      <Route path={ROUTES.maintenance} element={<Maintenance />} />
      <Route path={ROUTES.notFound} element={<NotFound />} />
    </Route>
  </Routes>
)
