'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import PanelLayout from '@/components/PanelLayout'

const PANEL_SECTIONS = ['about', 'experience', 'work', 'skills', 'contact']

function parseHash(hash: string): { section: string; subview?: string } {
  if (hash === 'work/eyesee') return { section: 'work', subview: 'eyesee' }
  if (PANEL_SECTIONS.includes(hash)) return { section: hash }
  return { section: '' }
}

export default function Page() {
  const [view, setView] = useState<'hero' | 'panel'>('hero')
  const [activeSection, setActiveSection] = useState('about')
  const [activeSubview, setActiveSubview] = useState<string | undefined>(undefined)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const { section, subview } = parseHash(window.location.hash.slice(1))
    if (section) {
      setActiveSection(section)
      setActiveSubview(subview)
      setView('panel')
    }
  }, [])

  useEffect(() => {
    const onPopState = () => {
      const { section, subview } = parseHash(window.location.hash.slice(1))
      if (section) {
        setActiveSection(section)
        setActiveSubview(subview)
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
    setActiveSubview(undefined)
    setView('panel')
  }

  const backToHero = () => {
    window.history.pushState(null, '', window.location.pathname)
    setView('hero')
  }

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
        <PanelLayout
          initialSection={activeSection}
          initialSubview={activeSubview}
          onBackToHero={backToHero}
        />
      )}
    </>
  )
}
