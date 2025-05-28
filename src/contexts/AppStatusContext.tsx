import { createContext, useContext, type ReactNode } from 'react'

type AppStatus = {
  maintenance: boolean
}

const AppStatusContext = createContext<AppStatus>({ maintenance: false })

export const AppStatusProvider = ({ children }: { children: ReactNode }) => {
  const maintenance = false

  return <AppStatusContext.Provider value={{ maintenance }}>{children}</AppStatusContext.Provider>
}

export const useAppStatus = () => useContext(AppStatusContext)
