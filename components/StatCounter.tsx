'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  value: number | '∞'
  prefix?: string
  suffix?: string
  label: string
}

export default function StatCounter({ value, prefix = '', suffix = '', label }: StatCounterProps) {
  const ref        = useRef<HTMLDivElement>(null)
  const animated   = useRef(false)
  const isInfinity = value === '∞'
  const [count, setCount] = useState<number>(isInfinity ? 0 : 0)

  useEffect(() => {
    if (isInfinity) return
    const numVal = value as number
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(numVal)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return
        animated.current = true

        const duration = 1500
        const start    = performance.now()
        const tick     = (now: number) => {
          const p     = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - p) ** 3
          setCount(Math.round(eased * numVal))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, isInfinity])

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <span className="font-lora font-medium text-[56px] leading-none text-text-main">
        {isInfinity ? '∞' : `${prefix}${count}${suffix}`}
      </span>
      <span className="font-inter text-[10px] font-medium tracking-[0.12em] uppercase text-gray-dark">
        {label}
      </span>
    </div>
  )
}
