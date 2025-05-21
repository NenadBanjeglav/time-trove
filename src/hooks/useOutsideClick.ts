import { useEffect, useRef } from 'react'

export const useOutsideClick = <T extends HTMLElement>(
  handler: () => void,
  listenCapturing = false
) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    }

    document.addEventListener('mousedown', handleClick, listenCapturing)

    return () => {
      document.removeEventListener('mousedown', handleClick, listenCapturing)
    }
  }, [handler, listenCapturing])

  return ref
}
