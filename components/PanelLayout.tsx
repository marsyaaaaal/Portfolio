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
import CommandPalette from './CommandPalette'
import EyeSeeCaseStudy from './EyeSeeCaseStudy'
import { useTheme } from './ThemeContext'

type Section = 'about' | 'experience' | 'work' | 'skills' | 'contact'
const SECTIONS: Section[] = ['about', 'experience', 'work', 'skills', 'contact']

const NAV_LABELS: Record<Section, string> = {
  about:      'About',
  experience: 'Experience',
  work:       'Work',
  skills:     'Skills',
  contact:    'Contact',
}

function useDaysSince(dateStr: string): number {
  const start = new Date(dateStr).getTime()
  return Math.floor((Date.now() - start) / 86_400_000)
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 8l10 7 10-7" />
    </svg>
  )
}

interface PanelLayoutProps {
  initialSection?: string
  initialSubview?: string
  onBackToHero: () => void
}

export default function PanelLayout({ initialSection = 'about', initialSubview, onBackToHero }: PanelLayoutProps) {
  const { theme, toggle: toggleTheme } = useTheme()
  const [active, setActive] = useState<Section>(
    SECTIONS.includes(initialSection as Section) ? (initialSection as Section) : 'about'
  )
  const [caseStudy, setCaseStudy] = useState(initialSubview === 'eyesee')
  const [contentVisible, setContentVisible] = useState(false)
  const [fading, setFading] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const days = useDaysSince('2022-08-01')

  useEffect(() => {
    const raf = requestAnimationFrame(() => setContentVisible(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (SECTIONS.includes(initialSection as Section) && initialSection !== active) {
      setActive(initialSection as Section)
      setCaseStudy(false)
    }
  }, [initialSection]) // eslint-disable-line react-hooks/exhaustive-deps

  // ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleSelect = (section: string) => {
    const s = section as Section
    if (s === active && !caseStudy) return
    setFading(true)
    setTimeout(() => {
      setActive(s)
      setCaseStudy(false)
      contentRef.current?.scrollTo({ top: 0 })
      window.history.replaceState(null, '', `#${s}`)
      setFading(false)
    }, 150)
  }

  const openCaseStudy = () => {
    setFading(true)
    setTimeout(() => {
      setCaseStudy(true)
      contentRef.current?.scrollTo({ top: 0 })
      window.history.replaceState(null, '', '#work/eyesee')
      setFading(false)
    }, 150)
  }

  const closeCaseStudy = () => {
    setFading(true)
    setTimeout(() => {
      setCaseStudy(false)
      contentRef.current?.scrollTo({ top: 0 })
      window.history.replaceState(null, '', '#work')
      setFading(false)
    }, 150)
  }

  const renderContent = () => {
    if (active === 'work' && caseStudy) return <EyeSeeCaseStudy onBack={closeCaseStudy} />
    switch (active) {
      case 'about':      return <About />
      case 'experience': return <Experience />
      case 'work':       return <Projects onCaseStudy={openCaseStudy} />
      case 'skills':     return <><Skills /><Education /></>
      case 'contact':    return (
        <div className="min-h-full flex flex-col">
          <div className="flex-1 flex items-center"><Contact /></div>
          <Footer />
        </div>
      )
    }
  }

  return (
    <>
      <div
        className={`flex h-screen w-full overflow-hidden bg-[#fafaf8] dark:bg-[#111110] transition-opacity duration-300 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* ── Desktop sidebar ──────────────────────────── */}
        <aside className="hidden md:flex flex-col w-[220px] flex-shrink-0 border-r border-[#e0ddd7] dark:border-[#2c2a27] bg-[#fafaf8] dark:bg-[#111110] h-screen">
          <div className="flex flex-col h-full px-6 py-8">

            {/* Name + ⌘K hint */}
            <div className="mb-8">
              <button
                onClick={onBackToHero}
                className="font-serif text-[17px] text-[#111] dark:text-[#e5e2db] tracking-[-0.5px] text-left hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-150 leading-[1.2] block"
              >
                Marcial
                <br />
                <em>Abasola.</em>
              </button>
              <button
                onClick={() => setPaletteOpen(true)}
                className="mt-[6px] flex items-center gap-[5px] text-[8px] tracking-[1.5px] uppercase text-[#ccc] dark:text-[#302e2b] hover:text-[#999] dark:hover:text-[#555250] transition-colors duration-150"
                aria-label="Open command palette"
              >
                <kbd className="border border-[#e0ddd7] dark:border-[#2c2a27] px-[5px] py-[1px] font-sans text-[8px]">⌘K</kbd>
                <span>Quick nav</span>
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-[2px]">
              {SECTIONS.map((section) => (
                <button
                  key={section}
                  onClick={() => handleSelect(section)}
                  className={`text-left text-[10px] tracking-[2.5px] uppercase py-[9px] px-3 rounded-[2px] transition-all duration-150 ${
                    active === section
                      ? 'text-[#111] dark:text-[#e5e2db] font-bold bg-[#f0ece4] dark:bg-[#1e1c18]'
                      : 'text-[#aaa] dark:text-[#484542] hover:text-[#555] dark:hover:text-[#888580] hover:bg-[#f7f5f0] dark:hover:bg-[#191917]'
                  }`}
                >
                  {NAV_LABELS[section]}
                </button>
              ))}
            </nav>

            {/* Social icons + theme toggle — sits between nav and bottom status */}
            <div className="flex items-center justify-between mt-7 mb-1">
              <div className="flex items-center gap-4">
                <a
                  href="mailto:marcial.abasolajr18@gmail.com"
                  aria-label="Email"
                  className="text-[#bbb] dark:text-[#3c3a37] hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-150"
                >
                  <EmailIcon />
                </a>
                <a
                  href="https://github.com/marsyaaaaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[#bbb] dark:text-[#3c3a37] hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-150"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcial-abasola-a9498b210/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#bbb] dark:text-[#3c3a37] hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-150"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="text-[#bbb] dark:text-[#3c3a37] hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-150"
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>

            {/* Bottom status — availability + uptime */}
            <div className="border-t border-[#e0ddd7] dark:border-[#2c2a27] mt-auto pt-6 flex flex-col gap-4">
              {/* Availability */}
              <div className="flex items-center gap-[7px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#dc2626] flex-shrink-0" />
                <span className="text-[9px] tracking-[2.5px] uppercase text-[#aaa] dark:text-[#484542]">Available</span>
              </div>

              {/* Uptime */}
              <p className="text-[8px] text-[#ccc] dark:text-[#302e2b] leading-[1.6] font-mono">
                Shipping since Aug 2022
                <br />
                {days.toLocaleString()} days
              </p>
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
            {renderContent()}
          </div>
        </div>

        {/* ── Mobile bottom tab bar ────────────────────── */}
        <BottomTabBar active={active} onSelect={handleSelect} />
      </div>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onSelect={(section) => {
          handleSelect(section)
          setPaletteOpen(false)
        }}
      />
    </>
  )
}
