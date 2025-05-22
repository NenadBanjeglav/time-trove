import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ROUTES } from './constants/routes'
import { AppStatusProvider } from './contexts/AppStatusContext'
import { AppLayout } from './pages/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { Maintenance } from './pages/Maintenance'
import { NotFound } from './pages/NotFound'
import { ProtectedRoute } from './pages/ProtectedRoute'
import { PublicLayout } from './pages/PublicLayout'
import { Register } from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <AppStatusProvider>
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
            <Route path={ROUTES.register} element={<Register />} />
            <Route path={ROUTES.notFound} element={<NotFound />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Route>
        </Routes>
      </AppStatusProvider>
    </BrowserRouter>
  )
}

export default App
