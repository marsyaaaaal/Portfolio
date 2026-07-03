'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['projects', 'about', 'experience', 'skills', 'education', 'contact']

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  // Hide navbar while hero section is visible; show once scrolled past it
  useEffect(() => {
    const hero = document.getElementById('hero-section')
    if (!hero) return
    const obs = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    )
    obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const visibilityMap: Record<string, number> = {}
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[id] = entry.intersectionRatio
          const entries = Object.entries(visibilityMap) as [string, number][]
          const active = entries.reduce<[string, number]>(
            (best, [k, v]) => (v > best[1] ? [k, v] : best),
            ['', 0]
          )
          if (active[1] > 0) setActiveSection(active[0])
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const isActive = (href: string) => href.slice(1) === activeSection

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-[rgba(250,250,248,0.9)] backdrop-blur-[8px] border-b border-[#e0ddd7]
        ${pastHero
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'md:opacity-0 md:-translate-y-2 md:pointer-events-none opacity-100 translate-y-0 pointer-events-auto'
        }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-[52px] flex items-center justify-between h-14">
        <span className="font-serif text-[18px] text-[#111] tracking-[-0.5px]">
          Marcial Abasola
        </span>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`text-[10px] tracking-[3px] uppercase transition-colors duration-150 ${
                isActive(href)
                  ? 'text-[#111] font-bold'
                  : 'text-[#999] hover:text-[#555]'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-[#111] transition-transform duration-200 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-[#111] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-[#111] transition-transform duration-200 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 bg-[#fafaf8] border-b border-[#e0ddd7] ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-6 text-[14px] tracking-[2px] uppercase text-[#555] border-b border-[#e0ddd7] last:border-b-0 hover:text-[#111] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}
