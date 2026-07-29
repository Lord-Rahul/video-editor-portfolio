import { useEffect, useState } from 'react'

export function useCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, hidden: false })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY, hidden: false })
    }

    const handleMouseLeave = () => setCursor((current) => ({ ...current, hidden: true }))
    const handleMouseEnter = () => setCursor((current) => ({ ...current, hidden: false }))

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return cursor
}
