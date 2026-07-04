'use client'

interface TabConfig {
  section: string
  label: string
}

const tabs: TabConfig[] = [
  { section: 'about', label: 'About' },
  { section: 'experience', label: 'Exp' },
  { section: 'work', label: 'Work' },
  { section: 'skills', label: 'Skills' },
  { section: 'contact', label: 'Contact' },
]

function AboutIcon({ active }: { active: boolean }) {
  const c = active ? '#111' : '#aaa'
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="6" r="3" stroke={c} strokeWidth="1.3" />
      <path d="M3 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function BriefcaseIcon({ active }: { active: boolean }) {
  const c = active ? '#111' : '#aaa'
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="6" width="14" height="10" rx="1.2" stroke={c} strokeWidth="1.3" />
      <path d="M6 6V4.5A1.5 1.5 0 017.5 3h3A1.5 1.5 0 0112 4.5V6" stroke={c} strokeWidth="1.3" />
      <line x1="2" y1="11" x2="16" y2="11" stroke={c} strokeWidth="1.3" />
    </svg>
  )
}

function GridIcon({ active }: { active: boolean }) {
  const c = active ? '#111' : '#aaa'
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="0.6" stroke={c} strokeWidth="1.3" />
      <rect x="10" y="2" width="6" height="6" rx="0.6" stroke={c} strokeWidth="1.3" />
      <rect x="2" y="10" width="6" height="6" rx="0.6" stroke={c} strokeWidth="1.3" />
      <rect x="10" y="10" width="6" height="6" rx="0.6" stroke={c} strokeWidth="1.3" />
    </svg>
  )
}

function ListIcon({ active }: { active: boolean }) {
  const c = active ? '#111' : '#aaa'
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <line x1="3" y1="5" x2="15" y2="5" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="3" y1="9" x2="11" y2="9" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="3" y1="13" x2="13" y2="13" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function EnvelopeIcon({ active }: { active: boolean }) {
  const c = active ? '#111' : '#aaa'
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="4" width="14" height="10" rx="1.2" stroke={c} strokeWidth="1.3" />
      <path d="M2 6l7 5 7-5" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function Icon({ section, active }: { section: string; active: boolean }) {
  switch (section) {
    case 'about':      return <AboutIcon active={active} />
    case 'experience': return <BriefcaseIcon active={active} />
    case 'work':       return <GridIcon active={active} />
    case 'skills':     return <ListIcon active={active} />
    case 'contact':    return <EnvelopeIcon active={active} />
    default:           return null
  }
}

interface BottomTabBarProps {
  active: string
  onSelect: (section: string) => void
}

export default function BottomTabBar({ active, onSelect }: BottomTabBarProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fafaf8] border-t border-[#e0ddd7] flex safe-area-inset-bottom">
      {tabs.map(({ section, label }) => {
        const isActive = active === section
        return (
          <button
            key={section}
            onClick={() => onSelect(section)}
            className="flex-1 flex flex-col items-center justify-center gap-[4px] py-[10px] transition-colors duration-150"
          >
            <Icon section={section} active={isActive} />
            <span
              className={`text-[8px] tracking-[1px] uppercase leading-none ${
                isActive ? 'text-[#111] font-bold' : 'text-[#bbb]'
              }`}
            >
              {label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
