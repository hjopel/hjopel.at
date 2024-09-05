'use client'

import { useState, useEffect, ReactNode } from 'react'
import InteractiveBackground from 'app/components/bg'

type MousePosition = { x: number; y: number }

export const MousePositionProvider = ({ children }: { children: ReactNode }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX / window.innerWidth,
        y: -event.clientY / window.innerHeight
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {children}
      <InteractiveBackground mousePosition={mousePosition} />
    </>
  )
}