'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight nav link for whichever section is in the viewport center
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-zinc-900 text-lg tracking-tight hover:text-violet-600 transition-colors"
        >
          MA<span className="text-violet-600">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm relative pb-0.5 transition-all duration-200 ${
                  isActive ? 'text-zinc-900 font-medium' : 'text-zinc-400 hover:text-zinc-700'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-px bg-violet-500 rounded-full transition-all duration-300 origin-left ${
                    isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`}
                />
              </Link>
            )
          })}
          <a
            href="mailto:marcial.abasolajr18@gmail.com"
            className="text-sm px-5 py-2 bg-zinc-900 text-white rounded-full font-medium hover:bg-violet-600 transition-all duration-200"
          >
            Hire me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-zinc-100`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                  isActive
                    ? 'text-zinc-900 font-medium bg-violet-50'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="mailto:marcial.abasolajr18@gmail.com"
            className="text-sm px-5 py-2.5 bg-zinc-900 text-white rounded-full font-medium text-center hover:bg-violet-600 transition-colors mt-2"
            onClick={() => setIsOpen(false)}
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  )
}
