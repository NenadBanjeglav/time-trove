import { useLayoutEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Heading } from '../components/atoms/heading/Heading'
import { Logo } from '../components/atoms/logo/Logo'
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

  return (
    <>
      <nav ref={ref} style={{ display: 'flex', height: '56px' }}>
        <Logo variant="full" />
        <Logo variant="compact" />
        <Heading as="h2" pallete="neutral" color="hue400">
          Dashboard
        </Heading>
      </nav>

      <Outlet context={{ navHeight: effectiveHeight }} />
    </>
  )
}
