'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import PanelLayout from '@/components/PanelLayout'

const PANEL_SECTIONS = ['about', 'experience', 'work', 'skills', 'contact']

export default function Page() {
  const [view, setView] = useState<'hero' | 'panel'>('hero')
  const [activeSection, setActiveSection] = useState('about')
  const [mounted, setMounted] = useState(false)

  // On mount, check hash — if it matches a panel section, go straight to panel
  useEffect(() => {
    setMounted(true)
    const hash = window.location.hash.slice(1)
    if (PANEL_SECTIONS.includes(hash)) {
      setActiveSection(hash)
      setView('panel')
    }
  }, [])

  // Handle browser back/forward
  useEffect(() => {
    const onPopState = () => {
      const hash = window.location.hash.slice(1)
      if (PANEL_SECTIONS.includes(hash)) {
        setActiveSection(hash)
        setView('panel')
      } else {
        setView('hero')
      }
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const enterPanel = (section = 'about') => {
    const s = PANEL_SECTIONS.includes(section) ? section : 'about'
    window.history.pushState(null, '', `#${s}`)
    setActiveSection(s)
    setView('panel')
  }

  const backToHero = () => {
    window.history.pushState(null, '', window.location.pathname)
    setView('hero')
  }

  // SSR / pre-mount: render hero so server HTML matches initial client render
  if (!mounted) {
    return (
      <main className="min-h-screen">
        <Hero />
      </main>
    )
  }

  return (
    <>
      {view === 'hero' && (
        <main className="min-h-screen">
          <Hero onEnterApp={enterPanel} />
        </main>
      )}
      {view === 'panel' && (
        <PanelLayout initialSection={activeSection} onBackToHero={backToHero} />
      )}
    </>
  )
}
