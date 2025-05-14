import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './routes'
import { ProtectedRoute } from './pages/ProtectedRoute'
import { AppLayout } from './pages/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { PublicLayout } from './pages/PublicLayout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { NotFound } from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
