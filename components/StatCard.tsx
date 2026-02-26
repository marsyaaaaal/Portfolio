'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  value: string  // e.g. "3+", "90%", "4"
  label: string
  delay?: number
}

function parse(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: parseInt(match[1], 10), suffix: match[2] }
}

export default function StatCard({ value, label, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const { num, suffix } = parse(value)

  // Trigger once the card enters the viewport
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Count-up animation
  useEffect(() => {
    if (!started) return
    const timer = setTimeout(() => {
      const duration = 1000
      const startTime = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * num))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }, delay)

    return () => clearTimeout(timer)
  }, [started, num, delay])

  return (
    <div
      ref={ref}
      className="group p-6 rounded-2xl border border-zinc-100 bg-zinc-50/60 hover:border-violet-100 hover:bg-violet-50/50 transition-all duration-300 cursor-default"
    >
      <div className="text-4xl font-black text-zinc-900 group-hover:text-violet-600 transition-colors mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-xs text-zinc-500 leading-snug">{label}</div>
    </div>
  )
}
