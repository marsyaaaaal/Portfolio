'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[100svh] max-h-[800px] border-b-2 border-[#111]"
    >
      {/* Left column — padded to align with content below */}
      <div className="flex flex-col px-6 md:px-[52px] py-16 md:py-[60px] border-b md:border-b-0 md:border-r border-[#e0ddd7]">
        <div className="max-w-[470px] ml-auto w-full flex-1 flex flex-col justify-center">
          {/* Eyebrow — delay 0ms */}
          <div
            className="flex items-center gap-2 mb-5 anim-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-[#dc2626] flex-shrink-0" />
            <span className="text-[9px] tracking-[4px] uppercase text-[#bbb]">
              Available · Cambridge, PH
            </span>
          </div>

          {/* Name — delay 100ms */}
          <h1
            className="font-serif font-normal leading-[0.95] tracking-[-1.5px] text-[#111] anim-fade-up"
            style={{ fontSize: 'clamp(48px, 12vw, 68px)', animationDelay: '100ms' }}
          >
            Marcial
            <br />
            <em>Abasola.</em>
          </h1>

          {/* Divider — delay 200ms */}
          <div
            className="w-10 h-px bg-[#ddd] my-6 anim-fade-in"
            style={{ animationDelay: '200ms' }}
          />

          {/* Tagline — delay 300ms */}
          <p
            className="text-[14px] text-[#777] leading-[1.75] max-w-[300px] anim-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            Full stack developer. I build across the stack and ship things that genuinely work.
          </p>

          {/* CTAs — delay 500ms */}
          <div
            className="flex items-center gap-7 mt-9 anim-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            <a
              href="#projects"
              className="text-[10px] font-bold tracking-[2.5px] uppercase text-white bg-[#111] px-[22px] py-[11px] hover:bg-[#333] transition-colors duration-150"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="text-[10px] tracking-[2.5px] uppercase text-[#999] hover:text-[#555] transition-colors duration-150"
            >
              Get in Touch →
            </a>
          </div>
        </div>

        {/* Footer row — delay 600ms */}
        <div className="max-w-[470px] ml-auto w-full">
          <p
            className="text-[9px] tracking-[3px] uppercase text-[#ccc] leading-loose anim-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            Full Stack Developer
            <br />
            React · TypeScript · Node.js · AWS
          </p>
        </div>
      </div>

      {/* Right column — editorial sidebar, fades out as hero scrolls away */}
      <div
        className={`hidden md:flex flex-col justify-between bg-[#f0ece4] relative overflow-hidden px-10 py-[60px] transition-opacity duration-300 ${
          heroVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Section nav */}
        <nav
          className="flex flex-col gap-[14px] anim-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[9px] tracking-[3px] uppercase text-[#bbb] hover:text-[#666] transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </nav>
        {/* Bottom meta */}
        <p
          className="text-[9px] tracking-[2px] uppercase text-[#ccc] anim-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          Portfolio
          <br />
          2025
        </p>
        {/* M watermark */}
        <span
          className="font-serif font-normal text-[#dedad3] select-none absolute anim-fade-in"
          style={{ fontSize: '260px', lineHeight: 1, bottom: '-16px', right: '-18px', animationDelay: '300ms' }}
        >
          M
        </span>
      </div>
    </section>
  )
}
