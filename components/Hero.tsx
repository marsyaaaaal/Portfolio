'use client'

import { useEffect, useRef } from 'react'

interface HeroProps {
  onEnterApp?: (section?: string) => void
}

export default function Hero({ onEnterApp }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!onEnterApp) return
    const el = sectionRef.current
    if (!el) return
    let fired = false
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !fired) {
          fired = true
          onEnterApp('about')
        }
      },
      { threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [onEnterApp])

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[100svh] max-h-[800px] border-b-2 border-[#111] dark:border-[#2c2a27]"
    >
      {/* Left column */}
      <div className="flex flex-col px-6 md:px-[52px] py-16 md:py-[60px] border-b md:border-b-0 md:border-r border-[#e0ddd7] dark:border-[#2c2a27]">
        <div className="max-w-[470px] ml-auto w-full flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-5 anim-fade-up" style={{ animationDelay: '0ms' }}>
            <span className="w-[6px] h-[6px] rounded-full bg-[#dc2626] flex-shrink-0" />
            <span className="text-[9px] tracking-[4px] uppercase text-[#888] dark:text-[#767270]">
              Available · Cambridge, PH
            </span>
          </div>

          <h1
            className="font-serif font-normal leading-[0.95] tracking-[-1.5px] text-[#111] dark:text-[#e5e2db] anim-fade-up"
            style={{ fontSize: 'clamp(48px, 12vw, 68px)', animationDelay: '100ms' }}
          >
            Marcial
            <br />
            <em>Abasola.</em>
          </h1>

          <div className="w-10 h-px bg-[#ddd] dark:bg-[#2c2a27] my-6 anim-fade-in" style={{ animationDelay: '200ms' }} />

          <p
            className="text-[14px] text-[#777] dark:text-[#777370] leading-[1.75] max-w-[300px] anim-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            Full stack developer. I build across the stack and ship things that genuinely work.
          </p>

          <div className="flex items-center gap-7 mt-9 anim-fade-up" style={{ animationDelay: '500ms' }}>
            <button
              onClick={() => onEnterApp?.('work')}
              className="text-[10px] font-bold tracking-[2.5px] uppercase text-white bg-[#111] dark:bg-[#e5e2db] dark:text-[#111] px-[22px] py-[11px] hover:bg-[#333] dark:hover:bg-[#ccc] transition-colors duration-150"
            >
              View Work
            </button>
            <button
              onClick={() => onEnterApp?.('contact')}
              className="text-[10px] tracking-[2.5px] uppercase text-[#717171] dark:text-[#7e7b78] hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-150"
            >
              Get in Touch →
            </button>
          </div>
        </div>

        <div className="max-w-[470px] ml-auto w-full">
          <p
            className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57] leading-loose anim-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            Full Stack Developer
            <br />
            React · TypeScript · Node.js · AWS
          </p>
        </div>
      </div>

      {/* Right column */}
      <div className="hidden md:flex flex-col justify-between bg-[#f0ece4] dark:bg-[#1e1c18] relative overflow-hidden px-10 py-[60px]">
        <nav className="flex flex-col gap-[14px] anim-fade-in" style={{ animationDelay: '400ms' }}>
          {['About', 'Experience', 'Work', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => onEnterApp?.(item.toLowerCase())}
              className="text-left text-[9px] tracking-[3px] uppercase text-[#888] dark:text-[#767270] hover:text-[#666] dark:hover:text-[#888580] transition-colors duration-150"
            >
              {item}
            </button>
          ))}
        </nav>
        <p className="text-[9px] tracking-[2px] uppercase text-[#909090] dark:text-[#5c5a57] anim-fade-in" style={{ animationDelay: '600ms' }}>
          Portfolio
          <br />
          2026
        </p>
        <span
          className="font-serif font-normal text-[#dedad3] dark:text-[#1a1816] select-none absolute anim-fade-in"
          style={{ fontSize: '260px', lineHeight: 1, bottom: '-16px', right: '-18px', animationDelay: '300ms' }}
        >
          M
        </span>
      </div>
    </section>
  )
}
