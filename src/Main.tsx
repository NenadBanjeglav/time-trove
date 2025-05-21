import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App.tsx'
import { ToastProvider } from './contexts/ToastProvider.tsx'
import GlobalStyles from './styles/globalStyles.ts'
import { theme } from './styles/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <GlobalStyles />
        <App />
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>
)
