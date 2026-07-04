'use client'

import { useEffect, useRef, useState } from 'react'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'
import BottomTabBar from './BottomTabBar'

type Section = 'about' | 'experience' | 'work' | 'skills' | 'contact'
const SECTIONS: Section[] = ['about', 'experience', 'work', 'skills', 'contact']

const NAV_LABELS: Record<Section, string> = {
  about:      'About',
  experience: 'Experience',
  work:       'Work',
  skills:     'Skills',
  contact:    'Contact',
}

function PanelContent({ section }: { section: Section }) {
  switch (section) {
    case 'about':      return <About />
    case 'experience': return <Experience />
    case 'work':       return <Projects />
    case 'skills':     return <><Skills /><Education /></>
    case 'contact':    return <><Contact /><Footer /></>
  }
}

interface PanelLayoutProps {
  initialSection?: string
  onBackToHero: () => void
}

export default function PanelLayout({ initialSection = 'about', onBackToHero }: PanelLayoutProps) {
  const [active, setActive] = useState<Section>(
    SECTIONS.includes(initialSection as Section) ? (initialSection as Section) : 'about'
  )
  const [contentVisible, setContentVisible] = useState(false)
  const [fading, setFading] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // Fade in on mount
  useEffect(() => {
    const raf = requestAnimationFrame(() => setContentVisible(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  // Sync when parent changes initialSection (hash navigation)
  useEffect(() => {
    if (SECTIONS.includes(initialSection as Section) && initialSection !== active) {
      setActive(initialSection as Section)
    }
  }, [initialSection]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelect = (section: string) => {
    const s = section as Section
    if (s === active) return
    setFading(true)
    setTimeout(() => {
      setActive(s)
      contentRef.current?.scrollTo({ top: 0 })
      window.history.replaceState(null, '', `#${s}`)
      setFading(false)
    }, 150)
  }

  return (
    <div
      className={`flex h-screen w-full overflow-hidden bg-[#fafaf8] transition-opacity duration-300 ${
        contentVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* ── Desktop sidebar ──────────────────────────── */}
      <aside className="hidden md:flex flex-col w-[220px] flex-shrink-0 border-r border-[#e0ddd7] bg-[#fafaf8] h-screen">
        <div className="flex flex-col h-full px-7 py-9">
          {/* Name — click returns to hero */}
          <button
            onClick={onBackToHero}
            className="font-serif text-[17px] text-[#111] tracking-[-0.5px] mb-10 text-left hover:text-[#555] transition-colors duration-150 leading-[1.2]"
          >
            Marcial
            <br />
            <em>Abasola.</em>
          </button>

          {/* Nav items */}
          <nav className="flex flex-col gap-[2px] flex-1">
            {SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => handleSelect(section)}
                className={`text-left text-[10px] tracking-[2.5px] uppercase py-[9px] px-3 rounded-[2px] transition-all duration-150 ${
                  active === section
                    ? 'text-[#111] font-bold bg-[#f0ece4]'
                    : 'text-[#aaa] hover:text-[#555] hover:bg-[#f7f5f0]'
                }`}
              >
                {NAV_LABELS[section]}
              </button>
            ))}
          </nav>

          {/* Availability */}
          <div className="flex items-center gap-[7px] pt-6 border-t border-[#e0ddd7]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#dc2626] flex-shrink-0" />
            <span className="text-[9px] tracking-[2.5px] uppercase text-[#aaa]">Available</span>
          </div>
        </div>
      </aside>

      {/* ── Content panel ────────────────────────────── */}
      <div
        ref={contentRef}
        className="flex-1 overflow-y-auto pb-[64px] md:pb-0 h-screen"
      >
        <div
          className={`transition-opacity duration-150 min-h-full ${
            fading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <PanelContent section={active} />
        </div>
      </div>

      {/* ── Mobile bottom tab bar ────────────────────── */}
      <BottomTabBar active={active} onSelect={handleSelect} />
    </div>
  )
}
