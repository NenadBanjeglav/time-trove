import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { AppStatusProvider } from './contexts/AppStatusContext'
import { ToastProvider } from './contexts/ToastProvider'
import GlobalStyles from './styles/globalStyles'
import { theme } from './styles/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})

export const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <AppStatusProvider>
        <ToastProvider>
          <GlobalStyles />
          {children}
        </ToastProvider>
      </AppStatusProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ThemeProvider>
)
