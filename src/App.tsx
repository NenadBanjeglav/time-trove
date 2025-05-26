import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ROUTES } from './constants/routes'
import { AuthProvider } from './contexts/AuthContext'
import { AppLayout } from './pages/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { ProtectedRoute } from './pages/ProtectedRoute'
import { PublicLayout } from './pages/PublicLayout'
import { Signup } from './pages/Signup'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
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
              <Route path={ROUTES.notFound} element={<NotFound />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
