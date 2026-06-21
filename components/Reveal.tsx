'use client'

import { type ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  )
}
