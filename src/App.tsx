import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppLayout, PublicLayout, Dashboard, Login, Register, NotFound } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected App Routes */}
        <Route
          element={
            // <ProtectedRoute>
            <AppLayout />
            // </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
