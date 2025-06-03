import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'

import { ThemeModeProvider } from './ThemeModeProvider'
import { AppStatusProvider } from './contexts/AppStatusContext'
import { ToastProvider } from './contexts/ToastProvider'
import i18n from './locales/i18n'
import GlobalStyles from './styles/globalStyles'

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
  <ThemeModeProvider>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <AppStatusProvider>
          <ToastProvider>
            <GlobalStyles />
            {children}
          </ToastProvider>
        </AppStatusProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </I18nextProvider>
    </QueryClientProvider>
  </ThemeModeProvider>
)
