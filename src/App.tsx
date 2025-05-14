import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppLayout, PublicLayout, Dashboard, Login, Register, NotFound } from './pages'
import ProtectedRoute from './pages/ProtectedRoute'
import { ROUTES } from './routes'

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
