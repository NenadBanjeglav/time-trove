import { useLayoutEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { LogoutIcon } from '../assets/icons/LogoutIcon'
import { Button } from '../components/atoms/button/Button'
import { Heading } from '../components/atoms/heading/Heading'
import { Icon } from '../components/atoms/icon/Icon'
import { useLogout } from '../hooks/useLogout'
import { useAppStatus } from '../contexts/AppStatusContext'

export const AppLayout = () => {
  const { maintenance } = useAppStatus()
  const ref = useRef<HTMLElement>(null)
  const [navHeight, setNavHeight] = useState(56)

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

  const { logout } = useLogout()
  return (
    <>
      <nav
        ref={ref}
        style={{
          display: 'flex',
          height: '56px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button isIconButton shape="circle" variant="danger" color="hue0" onClick={logout}>
          <Icon icon={LogoutIcon} pallete="danger" color="hue200" />
        </Button>
        <Heading as="h2" pallete="neutral" color="hue400">
          Dashboard
        </Heading>
      </nav>

      <Outlet context={{ navHeight: effectiveHeight }} />
    </>
  )
}
