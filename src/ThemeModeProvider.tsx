import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from './styles/darkTheme'
import { theme } from './styles/theme'

type ThemeMode = 'light' | 'dark'

const ThemeModeContext = createContext<{
  themeMode: ThemeMode
  toggleTheme: () => void
} | null>(null)

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext)
  if (!context) throw new Error('useThemeMode must be used inside ThemeModeProvider')
  return context
}

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    return (localStorage.getItem('themeMode') as ThemeMode) || 'light'
  })

  const toggleTheme = () => {
    setThemeMode(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('themeMode', next)
      return next
    })
  }

  useEffect(() => {
    document.body.dataset.theme = themeMode
  }, [themeMode])

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={themeMode === 'dark' ? darkTheme : theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  )
}
