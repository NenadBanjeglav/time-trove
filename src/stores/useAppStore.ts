import { create } from 'zustand'

export type ThemeMode = 'light' | 'dark'

type AppState = {
  maintenance: boolean
  setMaintenance: (value: boolean) => void

  totalTasks: number
  setTotalTasks: (count: number) => void

  themeMode: ThemeMode
  setTheme: (mode: ThemeMode) => void
  toggleTheme: () => void
}

export const useAppState = create<AppState>((set, get) => ({
  maintenance: false,
  setMaintenance: value => set({ maintenance: value }),

  totalTasks: 0,
  setTotalTasks: count => set({ totalTasks: count }),

  themeMode: (localStorage.getItem('themeMode') as ThemeMode) || 'light',
  setTheme: mode => {
    localStorage.setItem('themeMode', mode)
    set({ themeMode: mode })
  },
  toggleTheme: () => {
    const next = get().themeMode === 'light' ? 'dark' : 'light'
    localStorage.setItem('themeMode', next)
    set({ themeMode: next })
  },
}))
