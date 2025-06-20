import { useLayoutEffect, useRef, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Navbar } from '../components/shared/navbar/Navbar'
import { useLogout } from '../hooks/useLogout'
import { useAppState } from '../stores/useAppStore'

export const AppLayout = () => {
  const maintenance = useAppState(state => state.maintenance)
  const ref = useRef<HTMLElement>(null)
  const [navHeight, setNavHeight] = useState(56)
  const { logout } = useLogout()

  useLayoutEffect(() => {
    if (!ref.current) return

    const observer = new ResizeObserver(entries => {
      const height = entries[0]?.contentRect.height
      if (height) setNavHeight(height)
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const effectiveHeight = maintenance ? 0 : navHeight

  if (maintenance) return <Navigate to="/maintenance" replace />

  return (
    <>
      <Navbar onLogout={logout} />
      <Outlet context={{ navHeight: effectiveHeight }} />
    </>
  )
}

//final
