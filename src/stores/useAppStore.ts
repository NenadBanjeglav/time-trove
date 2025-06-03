import { create } from 'zustand'

type AppState = {
  totalTasks: number
  setTotalTasks: (count: number) => void
}

export const useAppState = create<AppState>(set => ({
  totalTasks: 0,
  setTotalTasks: count => set({ totalTasks: count }),
}))
