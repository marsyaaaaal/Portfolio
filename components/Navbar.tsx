'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(250,250,248,0.92)] backdrop-blur-[8px] border-b border-[#e0ddd7]'
          : 'bg-transparent'
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
              className="text-[10px] tracking-[3px] uppercase text-[#999] hover:text-[#555] transition-colors duration-150"
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
            className="block px-6 py-5 text-[13px] tracking-[2px] uppercase text-[#555] border-b border-[#e0ddd7] last:border-b-0 hover:text-[#111] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}
