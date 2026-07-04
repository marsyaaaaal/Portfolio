'use client'

import { useEffect, useRef, useState } from 'react'

const items = [
  { id: 'about',      label: 'About',             description: 'Who I am' },
  { id: 'experience', label: 'Experience',         description: 'Where I\'ve worked' },
  { id: 'work',       label: 'Work',               description: 'Selected projects' },
  { id: 'skills',     label: 'Skills & Education', description: 'Technologies and background' },
  { id: 'contact',    label: 'Contact',            description: 'Get in touch' },
]

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
  onSelect: (section: string) => void
}

export default function CommandPalette({ open, onClose, onSelect }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [highlighted, setHighlighted] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    if (open) {
      setQuery('')
      setHighlighted(0)
      // slight delay so panel transition doesn't steal focus
      const t = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => { setHighlighted(0) }, [query])

  if (!open) return null

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowDown':
        e.preventDefault()
        setHighlighted((h) => Math.min(h + 1, filtered.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlighted((h) => Math.max(h - 1, 0))
        break
      case 'Enter':
        if (filtered[highlighted]) {
          onSelect(filtered[highlighted].id)
          onClose()
        }
        break
    }
  }

  return (
    <div
      className="animate-overlay-in fixed inset-0 z-[200] flex items-start justify-center pt-[18vh] bg-[#111]/50 dark:bg-[#000]/60 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="animate-palette-in w-full max-w-[480px] mx-4 bg-[#fafaf8] dark:bg-[#191917] border border-[#e0ddd7] dark:border-[#2c2a27]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Input row */}
        <div className="flex items-center gap-3 px-4 py-[11px] border-b border-[#e0ddd7] dark:border-[#2c2a27]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-[#909090] dark:text-[#767270] flex-shrink-0">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Go to section..."
            className="flex-1 bg-transparent text-[13px] text-[#111] dark:text-[#e5e2db] placeholder-[#ccc] dark:placeholder-[#3c3a37] outline-none focus-visible:outline-none"
          />
          <kbd className="text-[8px] tracking-[1px] uppercase text-[#909090] dark:text-[#767270] border border-[#e0ddd7] dark:border-[#2c2a27] px-[6px] py-[2px] font-sans">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="py-[4px]">
          {filtered.length === 0 && (
            <div className="px-4 py-3 text-[11px] text-[#717171] dark:text-[#7e7b78]">No results</div>
          )}
          {filtered.map((item, i) => (
            <button
              key={item.id}
              onClick={() => { onSelect(item.id); onClose() }}
              className={`cursor-pointer w-full text-left px-4 py-[10px] flex items-center justify-between transition-colors duration-[200ms] focus-visible:outline-none focus-visible:bg-[#f0ece4] dark:focus-visible:bg-[#232220] ${
                i === highlighted
                  ? 'bg-[#f0ece4] dark:bg-[#232220]'
                  : 'hover:bg-[#f7f5f0] dark:hover:bg-[#1e1c19]'
              }`}
            >
              <div>
                <div className={`text-[12px] font-semibold leading-none mb-[3px] ${
                  i === highlighted ? 'text-[#111] dark:text-[#e5e2db]' : 'text-[#555] dark:text-[#888580]'
                }`}>
                  {item.label}
                </div>
                <div className="text-[10px] text-[#717171] dark:text-[#7e7b78]">{item.description}</div>
              </div>
              {i === highlighted && (
                <kbd className="text-[8px] tracking-[1px] uppercase text-[#bbb] dark:text-[#3c3a37] border border-[#e0ddd7] dark:border-[#2c2a27] px-[6px] py-[2px] font-sans">
                  ↵
                </kbd>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
