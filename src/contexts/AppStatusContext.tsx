import { createContext, useContext, type ReactNode } from 'react'

type AppStatus = {
  maintance: boolean
}

const AppStatusContext = createContext<AppStatus>({ maintance: false })

export const AppStatusProvider = ({ children }: { children: ReactNode }) => {
  const maintance = false

  return <AppStatusContext.Provider value={{ maintance }}>{children}</AppStatusContext.Provider>
}

export const useAppStatus = () => useContext(AppStatusContext)
