# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign marcial.dev portfolio from a generic AI-generated aesthetic to a distinctive Editorial Minimal style inspired by premium print publications.

**Architecture:** Rewrite all 10 section components in place — no new pages or routes. Foundation changes (Tailwind config, globals.css, layout.tsx) establish the design token system and remove the Inter Google Font dependency. Each component is self-contained with no shared state between them. One file is deleted (`StatCard.tsx`).

**Tech Stack:** Next.js 14, React 18, TypeScript, TailwindCSS 3, system font stack (Palatino serif + system-ui sans — zero web font requests), existing `AnimatedSection.tsx` (IntersectionObserver scroll reveals)

**Spec:** `docs/superpowers/specs/2026-07-01-portfolio-redesign-design.md`

---

## Chunk 1: Foundation

### Task 1: Update Tailwind config

**Files:**
- Modify: `tailwind.config.ts`

- [ ] Replace the entire contents of `tailwind.config.ts` with:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        content: '940px',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        serif: ['Palatino Linotype', 'Book Antiqua', 'Palatino', 'serif'],
      },
      colors: {
        editorial: {
          bg: '#fafaf8',
          'bg-alt': '#f4f1eb',
          'bg-warm': '#f0ece4',
          'bg-dark': '#0d0d0d',
          fg: '#111111',
          secondary: '#666666',
          muted: '#999999',
          border: '#e0ddd7',
          accent: '#dc2626',
        },
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] Verify build passes: `npm run build`
- [ ] Confirm `max-w-content` class was generated in compiled CSS:
```bash
grep -r "max-w-content" .next/static/css/ 2>/dev/null | head -5
```
Expected: at least one match. If `.next/` is not present, run `npm run build` first, then re-check. The class must resolve to `max-width: 940px` in browser DevTools.

---

### Task 2: Update globals.css

**Files:**
- Modify: `app/globals.css`

- [ ] Replace the entire contents of `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #fafaf8;
  --foreground: #111111;
  --border: #e0ddd7;
  --muted: #999999;
  --accent: #dc2626;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  color: var(--foreground);
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #e0ddd7; border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: #bbb; }

/* Text selection */
::selection { background: #dc2626; color: #ffffff; }

/* ── Hero entrance animations ──────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.anim-fade-up {
  opacity: 0;
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.anim-fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;
}

/* ── Scroll-reveal (AnimatedSection) ─────── */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] Verify build: `npm run build`

---

### Task 3: Remove Inter font from layout

**Files:**
- Modify: `app/layout.tsx`

> **Spec note:** Spec Section 8 lists `app/layout.tsx` as "keep unchanged", but this directly conflicts with the Section 9 success criterion "zero web font requests". The current file imports Inter from `next/font/google`, which triggers an external font request on every page load. This task intentionally overrides the Section 8 classification to satisfy the primary design goal. The spec is self-contradictory on this point — the Section 9 requirement takes precedence.

- [ ] Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Marcial Abasola — Portfolio',
  description:
    'Full Stack Developer building web apps, mobile apps, and AI-powered systems.',
  openGraph: {
    title: 'Marcial Abasola — Portfolio',
    description:
      'Full Stack Developer building web apps, mobile apps, and AI-powered systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
```

- [ ] Verify no Inter import remains:
```bash
grep -r "Inter\|font-inter" app/ components/
```
Expected: no output

- [ ] Verify no component assumes the old Inter-based `font-sans`:
```bash
grep -r "font-sans" components/ app/
```
Expected: zero results, or only usages that will correctly resolve to the new `system-ui` stack defined in `tailwind.config.ts`.

- [ ] Verify build: `npm run build`

- [ ] Commit:
```bash
git add tailwind.config.ts app/globals.css app/layout.tsx
git commit -m "chore: redesign foundation — editorial tokens, system fonts, remove Inter"
```

---

## Chunk 2: Navbar + Hero

### Task 4: Rewrite Navbar

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] Replace `components/Navbar.tsx` with:

```tsx
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
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(250,250,248,0.9)] backdrop-blur-[8px] border-b border-[#e0ddd7]'
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
```

- [ ] Verify build: `npm run build`

---

### Task 5: Rewrite Hero

**Files:**
- Modify: `components/Hero.tsx`

Note: This component removes the `Magnetic` wrapper entirely. Replace with plain `<a>` tags.

- [ ] Replace `components/Hero.tsx` with:

```tsx
export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[100svh] max-h-[800px] border-b-2 border-[#111]">
      {/* Left column */}
      <div className="flex flex-col justify-between px-6 py-16 md:px-[52px] md:py-[60px] border-b md:border-b-0 md:border-r border-[#e0ddd7]">
        <div>
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
        <p
          className="text-[9px] tracking-[3px] uppercase text-[#ccc] leading-loose anim-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          Full Stack Developer
          <br />
          React · TypeScript · Node.js · AWS
        </p>
      </div>

      {/* Right column — "M" initial, hidden on mobile */}
      <div className="hidden md:flex items-center justify-center bg-[#f0ece4] relative overflow-hidden">
        <span
          className="font-serif font-normal text-[#dedad3] select-none absolute anim-fade-in"
          style={{ fontSize: '340px', lineHeight: 1, bottom: '-20px', right: '-24px', animationDelay: '300ms' }}
        >
          M
        </span>
      </div>
    </section>
  )
}
```

- [ ] Verify build: `npm run build`
- [ ] Run `npm run dev` and visually verify:
  - "M" is visible, darker than page bg, cropped at column edge
  - Animation sequence: eyebrow → name → divider → tagline → CTAs (staggered)
  - Right column hidden below 768px
  - Red dot in eyebrow is the only red element visible

- [ ] Commit:
```bash
git add components/Navbar.tsx components/Hero.tsx
git commit -m "feat: redesign Navbar and Hero — split column, hamburger, IntersectionObserver nav"
```

---

## Chunk 3: TechStrip + About

### Task 6: Rewrite TechStrip (static)

**Files:**
- Modify: `components/TechStrip.tsx`

- [ ] Replace `components/TechStrip.tsx` with:

```tsx
const items = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'AWS', 'Supabase', 'PostgreSQL', 'Flutter',
]

export default function TechStrip() {
  return (
    // On mobile: top+bottom border frames the strip; no vertical separators between items
    // On desktop (sm+): bottom border only; vertical separators between items
    <div className="border-t border-b sm:border-t-0 border-[#e0ddd7]">
      <div className="max-w-content mx-auto px-6 md:px-[52px]">
        <div className="flex flex-wrap items-center py-[14px]">
          {items.map((item, i) => (
            <span
              key={item}
              className={`text-[9px] tracking-[3px] uppercase text-[#bbb] py-1 ${
                i === 0 ? 'pr-3 sm:pr-5' : 'px-3 sm:px-5'
              } ${i < items.length - 1 ? 'sm:border-r sm:border-[#e0ddd7]' : ''}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
```

Note on mobile: vertical separators are hidden (`sm:border-r` only activates at 640px+). The outer wrapper adds a top border on mobile to frame the strip. Item padding reduces from 20px to 12px on mobile.

- [ ] Verify build: `npm run build`
- [ ] Check: no animation, no scrolling, purely static

---

### Task 7: Rewrite About

**Files:**
- Modify: `components/About.tsx`

Note: `StatCard` is no longer imported. Stats are inlined. The "Currently" status block is removed entirely.

- [ ] Replace `components/About.tsx` with:

```tsx
import Image from 'next/image'
import AnimatedSection from './AnimatedSection'

const tags = ['Full Stack', 'Cloud (AWS)', 'Automation', 'AI / ML', 'Embedded']

export default function About() {
  return (
    <section id="about" className="py-[60px] px-6 md:px-[52px]">
      <div className="max-w-content mx-auto">
        {/* Section header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">01</span>
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">About</span>
          </div>
          <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111]">
            A developer who
            <br />
            <em>loves the craft.</em>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[52px] mt-9 items-start">
          {/* Left: Bio */}
          <AnimatedSection delay={80}>
            <p className="text-[13px] text-[#666] leading-[1.85]">
              I&apos;m Marcial, a Software Engineer currently at{' '}
              <strong className="text-[#111] font-semibold">
                Cambridge University Press &amp; Assessment
              </strong>
              , where I work as a Full Stack Developer on the Identity Team — contributing to
              core service design, AWS Lambda scalability, and end-to-end development initiatives.
            </p>
            <p className="text-[13px] text-[#666] leading-[1.85] mt-5">
              My background spans embedded systems at Denso Techno Philippines and real estate
              automation with Python &amp; AWS. I got hooked on coding in high school and ranked{' '}
              <strong className="text-[#111] font-semibold">Top 1 of 50</strong> in Technical C
              training.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[2px] uppercase text-[#999] border border-[#ddd] px-[10px] py-[5px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Photo + Stats */}
          <AnimatedSection delay={160}>
            <div className="flex flex-col items-start">
              {/* Photo — permanent grayscale, no hover */}
              <div className="relative w-[220px] aspect-[3/4] grayscale overflow-hidden">
                <Image
                  src="/photo.png"
                  alt="Marcial Abasola"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* 2px rule spanning full column width */}
              <div className="w-full h-[2px] bg-[#111]" />
              {/* Stats */}
              <div className="flex gap-6 mt-5">
                {[
                  { value: '3+', label: 'Years\nProfessional' },
                  { value: '16+', label: 'Projects\nBuilt' },
                ].map(({ value, label }) => (
                  <div key={label} className="border-t-2 border-[#111] pt-[10px]">
                    <div className="font-serif text-[34px] text-[#111] leading-none">{value}</div>
                    <div className="text-[9px] tracking-[2px] uppercase text-[#bbb] mt-[5px] whitespace-pre-line leading-[1.5]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
```

- [ ] Verify build: `npm run build`
- [ ] Visually check:
  - No "Currently" block
  - Photo is grayscale — no hover effect
  - 2px black rule runs the full column width (not just photo width)
  - Stats sit below the rule with 2px top borders

- [ ] Commit:
```bash
git add components/TechStrip.tsx components/About.tsx
git commit -m "feat: redesign TechStrip (static) and About — grayscale photo, inline stats, no currently block"
```

---

## Chunk 4: Experience + Education

### Task 8: Rewrite Experience

**Files:**
- Modify: `components/Experience.tsx`

- [ ] Replace `components/Experience.tsx` with:

```tsx
import AnimatedSection from './AnimatedSection'

const experiences = [
  {
    company: 'Cambridge University Press & Assessment',
    role: 'Full Stack Developer — Identity Team',
    type: 'Full time · Makati City',
    period: 'Apr 2025 – Present',
    current: true,
    bullets: [
      'Drove end-to-end development as part of the Identity Team, contributing to core service design and implementation.',
      'Optimized dev workflow by integrating AWS SAM CLI — enabling local development across all services.',
      'Resolved a major scalability issue by migrating AWS Lambda environment variable storage.',
    ],
  },
  {
    company: 'TAP Series, LLC',
    role: 'Software Engineer',
    type: 'Part time · Remote',
    period: 'Oct 2024 – Dec 2025',
    current: false,
    bullets: [
      'Improved web data extraction systems for efficiency and reliability; maintained a customer ticketing system.',
      'Developed a Python script to automate credit card statement categorization.',
      'Contributed front-end and back-end feature implementations from specification documents.',
    ],
  },
  {
    company: 'Net Real Estate, LLC',
    role: 'Automation Software Engineer',
    type: 'Contract · Remote',
    period: 'Sep 2024 – Dec 2024',
    current: false,
    bullets: [
      'Automated weekly real estate data extraction — 90% improvement in accuracy and speed.',
      'Implemented AWS pipeline (EC2, S3, SSM, CloudWatch, EventBridge, Lambda) with Python & Selenium.',
      'Integrated paid proxy services and Google Sheets for real-time data handling.',
    ],
  },
  {
    company: 'Denso Techno Philippines Inc.',
    role: 'Software Engineer — Embedded Systems',
    type: 'Full time · Makati City',
    period: 'Aug 2022 – Apr 2025',
    current: false,
    bullets: [
      'Developed Python & MATLAB automation scripts — 60% productivity boost and 90% quality improvement.',
      'Ensured output quality through code reviews, MISRA C standards, and secure coding practices.',
      'Ranked Top 1 out of 50 trainees in Technical C training; trained junior engineers.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-[60px] px-6 md:px-[52px] bg-[#f4f1eb]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">02</span>
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">Experience</span>
          </div>
          <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111]">
            Where I&apos;ve
            <br />
            <em>worked.</em>
          </h2>
        </AnimatedSection>

        <div className="mt-9">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 80}>
              <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-9 py-[22px] border-t border-[#e0ddd7]">
                {/* Left */}
                <div>
                  <p className="text-[11px] font-semibold text-[#111] leading-[1.5]">{exp.period}</p>
                  <p className="text-[10px] text-[#bbb] tracking-[1px] mt-[3px]">{exp.type}</p>
                  {exp.current && (
                    <span className="inline-block mt-2 text-[8px] tracking-[2px] uppercase text-[#111] border border-[#111] px-[7px] py-[2px]">
                      Current
                    </span>
                  )}
                </div>
                {/* Right */}
                <div>
                  <p className="text-[13px] font-bold text-[#111] tracking-[-0.2px]">{exp.company}</p>
                  <p className="text-[11px] text-[#888] mt-[3px] mb-3 tracking-[0.3px]">{exp.role}</p>
                  <ul className="space-y-1">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="relative text-[11px] text-[#666] leading-[1.75] pl-[18px]">
                        <span className="absolute left-0 text-[#ccc]">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Verify build: `npm run build`
- [ ] Check: "Current" badge is black text + black border (not red)
- [ ] Check: rows separated by 1px top border only — no cards

---

### Task 9: Rewrite Education

**Files:**
- Modify: `components/Education.tsx`

The spec says ruled-row treatment. The current component has degrees + certifications — keep both in ruled-row format, degrees first then certifications under a secondary label.

- [ ] Replace `components/Education.tsx` with:

```tsx
import AnimatedSection from './AnimatedSection'

const degrees = [
  {
    year: '2018 – 2022',
    location: 'Legazpi City, Albay',
    institution: 'Bicol University',
    degree: 'Bachelor of Science in Computer Science',
  },
]

const certifications = [
  { year: '2025', category: 'General IT Knowledge', name: 'PhilNits ITPEC-IP Passer', link: null },
  { year: '2023', category: 'FreeCodeCamp', name: 'Frontend Development Libraries', link: 'https://www.freecodecamp.org/certification/fcc36581fa7-10ee-4a6e-b693-1787fd043aa9/front-end-development-libraries' },
  { year: '2023', category: 'FreeCodeCamp', name: 'Back End Development & APIs', link: 'https://www.freecodecamp.org/certification/fcc36581fa7-10ee-4a6e-b693-1787fd043aa9/back-end-development-and-apis' },
  { year: '2020', category: 'Android', name: 'Philippine Android Weekend 2020', link: null },
  { year: '2022', category: 'Python', name: 'Python for Data Science', link: 'https://www.sololearn.com/en/certificates/CT-7VDAGT22' },
]

export default function Education() {
  return (
    <section id="education" className="py-[60px] px-6 md:px-[52px]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">05</span>
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">Education</span>
          </div>
          <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111]">
            Where I
            <br />
            <em>studied.</em>
          </h2>
        </AnimatedSection>

        {/* Degrees */}
        <div className="mt-9">
          {degrees.map((deg, i) => (
            <AnimatedSection key={deg.institution} delay={i * 80}>
              <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-9 py-[22px] border-t border-[#e0ddd7]">
                <div>
                  <p className="text-[11px] font-semibold text-[#111] leading-[1.5]">{deg.year}</p>
                  <p className="text-[10px] text-[#bbb] tracking-[1px] mt-[3px]">{deg.location}</p>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#111] tracking-[-0.2px]">{deg.institution}</p>
                  <p className="text-[11px] text-[#888] mt-[3px]">{deg.degree}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications sub-label */}
        <AnimatedSection delay={120}>
          <div className="flex items-center gap-4 mt-14 mb-2">
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">Certifications</span>
          </div>
        </AnimatedSection>

        <div>
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.name} delay={i * 60}>
              <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-9 py-[18px] border-t border-[#e0ddd7] items-baseline">
                <div>
                  <p className="text-[11px] font-semibold text-[#111]">{cert.year}</p>
                  <p className="text-[10px] text-[#bbb] tracking-[1px] mt-[2px]">{cert.category}</p>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[13px] font-bold text-[#111] tracking-[-0.2px]">{cert.name}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] tracking-[1px] text-[#bbb] hover:text-[#555] transition-colors flex-shrink-0"
                    >
                      View ↗
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Verify build: `npm run build`
- [ ] Check: no card borders, no pill tags, no rounded corners
- [ ] Check: degrees and certifications both use the same ruled-row grid

- [ ] Commit:
```bash
git add components/Experience.tsx components/Education.tsx
git commit -m "feat: redesign Experience and Education — ruled-row newspaper layout"
```

---

## Chunk 5: Projects + Skills

### Task 10: Rewrite Projects

**Files:**
- Modify: `components/Projects.tsx`

Note: Red (`#dc2626`) appears on the "Featured" label only. This is the second and final red use site-wide.

- [ ] Replace `components/Projects.tsx` with:

```tsx
import AnimatedSection from './AnimatedSection'

const featured = {
  title: 'GalaGuide',
  description:
    'A travel itinerary sharing platform where users can discover, create, and share trip plans. Includes AI-powered itinerary generation to help travelers plan their next adventure — live on Vercel.',
  tags: ['React', 'Node.js', 'Supabase', 'AI'],
  link: 'https://gala-guide.vercel.app/',
  github: 'https://github.com/marsyaaaaal',
  aside: {
    status: 'Live · Vercel',
    year: '2024',
    note: 'Designed and shipped independently.',
  },
}

const projects = [
  {
    index: '01',
    title: 'DetectCore',
    description: 'Real-time illegal parking detection — YOLOv5, centroid tracking, image hashing. Thesis project.',
    tags: ['Python', 'PyTorch', 'YOLOv5'],
    github: 'https://github.com/lordsiinbal/Thesis101',
    link: null,
  },
  {
    index: '02',
    title: 'pasaBUY',
    description: 'Marketplace with real-time messaging, push notifications, and full transaction lifecycle.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    github: 'https://github.com/topetope024/pasabuy_SE',
    link: 'https://pasabuy-client.herokuapp.com/',
  },
  {
    index: '03',
    title: 'e-Tiquet',
    description: 'Automated traffic violation ticketing system built for local government use.',
    tags: ['PHP', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/topetope024/etiquet',
    link: null,
  },
  {
    index: '04',
    title: 'Real Estate Automation',
    description: 'Reduced manual data collection from hours to minutes — 90% improvement. Full AWS pipeline.',
    tags: ['Python', 'Selenium', 'AWS'],
    github: null,
    link: null,
  },
  {
    index: '05',
    title: 'iAssist',
    description: "Educational Android app covering Newton's Laws — lessons, quizzes, and score tracking. Built solo.",
    tags: ['Flutter', 'Dart'],
    github: 'https://github.com/marsyaaaaal/iAssist',
    link: 'https://drive.google.com/file/d/1t0yiVO84pzkKp5SYtjhoXbwiEAx4in8x/view',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-[60px] px-6 md:px-[52px]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">03</span>
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">Work</span>
          </div>
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111]">
              Selected
              <br />
              <em>projects.</em>
            </h2>
            <a
              href="https://github.com/marsyaaaaal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[2px] uppercase text-[#bbb] hover:text-[#555] transition-colors"
            >
              All on GitHub →
            </a>
          </div>
        </AnimatedSection>

        {/* Featured project */}
        <AnimatedSection delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] border border-[#e0ddd7] mb-px">
            {/* Main */}
            <div className="p-9 md:border-r border-[#e0ddd7]">
              {/* SECOND AND FINAL RED USE SITE-WIDE */}
              <p className="text-[9px] tracking-[3px] uppercase text-[#dc2626] mb-4">Featured</p>
              <h3 className="font-serif font-normal text-[32px] text-[#111] mb-4 leading-[1.05]">
                {featured.title}
              </h3>
              <p className="text-[12px] text-[#777] leading-[1.8] mb-5">{featured.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[2px] uppercase text-[#aaa] border-b border-[#e0ddd7] pb-[3px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold tracking-[2px] uppercase text-[#111] border-b border-[#111] pb-[2px] hover:text-[#555] hover:border-[#555] transition-colors"
                >
                  Live Demo ↗
                </a>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[2px] uppercase text-[#bbb] border-b border-[#ccc] pb-[2px] hover:text-[#777] transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            {/* Aside */}
            <div className="bg-[#f4f1eb] p-7 flex flex-col gap-0">
              <div className="pb-4">
                <p className="text-[9px] tracking-[2px] uppercase text-[#bbb] mb-1">Status</p>
                <p className="text-[12px] font-semibold text-[#555]">{featured.aside.status}</p>
              </div>
              <div className="border-t border-[#e0ddd7] py-4">
                <div className="font-serif text-[28px] text-[#111] leading-none">{featured.aside.year}</div>
                <div className="text-[9px] tracking-[2px] uppercase text-[#bbb] mt-[3px]">Launched</div>
              </div>
              <div className="border-t border-[#e0ddd7] py-4">
                <div className="font-serif text-[28px] text-[#111] leading-none">Solo</div>
                <div className="text-[9px] tracking-[2px] uppercase text-[#bbb] mt-[3px]">Builder</div>
              </div>
              <div className="border-t border-[#e0ddd7] pt-4">
                <p className="text-[10px] text-[#aaa] leading-[1.6]">{featured.aside.note}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Project grid — border-top and border-right per cell.
            Last cell in each row AND the last item overall get no right border. */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects.map((project, i) => {
            const isLastInRow = (i % 3) === 2
            const isLastItem = i === projects.length - 1
            return (
            <AnimatedSection key={project.title} delay={(i + 1) * 60}>
              <div
                className={`p-[26px] border-t border-[#e0ddd7] h-full ${
                  !isLastInRow && !isLastItem ? 'md:border-r md:border-[#e0ddd7]' : ''
                }`}
              >
                <p className="text-[9px] tracking-[3px] uppercase text-[#ccc] mb-4">{project.index}</p>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-[14px] font-bold text-[#111] tracking-[-0.2px] leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 flex-shrink-0 text-[#bbb]">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="text-[11px] hover:text-[#555] transition-colors" aria-label="Live demo">
                        ↗
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-[9px] tracking-[1px] uppercase hover:text-[#555] transition-colors">
                        GH
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[11px] text-[#888] leading-[1.7] mb-4">{project.description}</p>
                <p className="text-[9px] text-[#bbb] tracking-[1px]">{project.tags.join(' · ')}</p>
              </div>
            </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Verify build: `npm run build`
- [ ] Check: "Featured" label is `#dc2626` — only red in this component
- [ ] Check: no drop shadows, no rounded corners anywhere
- [ ] Check: aside has status, year (Palatino), Solo (Palatino), note

---

### Task 11: Rewrite Skills (typeset index)

**Files:**
- Modify: `components/Skills.tsx`

- [ ] Replace `components/Skills.tsx` with:

```tsx
import AnimatedSection from './AnimatedSection'

const skillGroups = [
  { category: 'Languages', primary: 'JavaScript, TypeScript, Python, C', secondary: '' },
  { category: 'Frontend', primary: 'React.js, Vue.js, TailwindCSS, Flutter', secondary: '· HTML / CSS' },
  { category: 'Backend', primary: 'Node.js, Express, Laravel, REST API', secondary: '' },
  { category: 'Databases & Cloud', primary: 'MySQL, MongoDB, Supabase, PostgreSQL', secondary: '· AWS, Azure' },
  { category: 'Testing & Tools', primary: 'Playwright, Selenium, Git, OpenCV, Pandas', secondary: '' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-[60px] px-6 md:px-[52px] bg-[#f4f1eb]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">04</span>
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">Skills</span>
          </div>
          <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111]">
            Technologies
            <br />
            <em>I work with.</em>
          </h2>
        </AnimatedSection>

        <div className="mt-9">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 60}>
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-8 py-4 border-t border-[#e0ddd7] items-baseline">
                <span className="text-[9px] tracking-[3px] uppercase text-[#bbb]">
                  {group.category}
                </span>
                <span className="text-[13px] text-[#555]">
                  {group.primary}
                  {group.secondary && (
                    <span className="text-[#aaa] italic"> {group.secondary}</span>
                  )}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] Verify build: `npm run build`
- [ ] Check: zero pill badges — plain comma-separated text only
- [ ] Check: secondary skills in lighter `#aaa`

- [ ] Commit:
```bash
git add components/Projects.tsx components/Skills.tsx
git commit -m "feat: redesign Projects and Skills — editorial grid, featured aside, typeset index"
```

---

## Chunk 6: Contact + Footer + Cleanup

### Task 12: Rewrite Contact

**Files:**
- Modify: `components/Contact.tsx`
- Modify: `components/CopyEmail.tsx`

> **Email address note:** The spec shows `marcialabasola@gmail.com` as an illustrative example. The actual email in the codebase is `marcial.abasolajr18@gmail.com` — keep using the existing address from `CopyEmail.tsx`. Do not change it.

- [ ] Replace `components/Contact.tsx` with:

```tsx
import AnimatedSection from './AnimatedSection'
import CopyEmail from './CopyEmail'

const socials = [
  { name: 'GitHub', href: 'https://github.com/marsyaaaaal' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/marcial-abasola-a9498b210/' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-[60px] px-6 md:px-[52px] bg-[#0d0d0d]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[52px] items-end">
            {/* Left */}
            <div>
              <p className="text-[9px] tracking-[3px] uppercase text-[#333] mb-6">
                06 ── Contact
              </p>
              <h2
                className="font-serif font-normal leading-[1.0] tracking-[-1px] text-white"
                style={{ fontSize: 'clamp(38px, 6vw, 52px)' }}
              >
                Let&apos;s build
                <br />
                <em className="text-[#555]">something great.</em>
              </h2>
              <p className="text-[12px] text-[#555] leading-[1.8] mt-5 max-w-[280px]">
                Open to freelance projects, collaborations, and new opportunities.
                I typically respond within 24 hours.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[9px] tracking-[3px] uppercase text-[#333] mb-3">
                  Send a message
                </p>
                <CopyEmail />
              </div>
              <div className="border-t border-[#1a1a1a]" />
              <div>
                <p className="text-[9px] tracking-[3px] uppercase text-[#333] mb-3">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socials.map(({ name, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#222] px-4 py-[9px] text-[10px] tracking-[2px] uppercase text-[#444] hover:text-[#888] hover:border-[#444] transition-colors duration-150"
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
```

- [ ] Update `components/CopyEmail.tsx` for the dark contact section:

```tsx
'use client'

import { useState } from 'react'

const EMAIL = 'marcial.abasolajr18@gmail.com'

export default function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="text-left w-full group"
      aria-label="Copy email address"
    >
      <span className="block text-[14px] font-semibold text-white tracking-[0.5px] border-b border-[#333] pb-3 group-hover:border-[#555] transition-colors duration-150">
        {copied ? '✓ Copied!' : `${EMAIL} ↗`}
      </span>
    </button>
  )
}
```

- [ ] Verify build: `npm run build`
- [ ] Check:
  - Social links: text labels only — "GitHub" and "LinkedIn" — no icons, no Facebook
  - No red anywhere in this section
  - Email click copies to clipboard

---

### Task 13: Rewrite Footer

**Files:**
- Modify: `components/Footer.tsx`

- [ ] Replace `components/Footer.tsx` with:

```tsx
export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1a1a1a] px-6 md:px-[52px] py-4">
      <div className="max-w-content mx-auto flex items-center justify-between">
        <span className="font-serif text-[16px] text-[#333]">MA</span>
        <span className="text-[9px] tracking-[2px] uppercase text-[#2a2a2a]">
          © 2026 Marcial Abasola
        </span>
      </div>
    </footer>
  )
}
```

- [ ] Verify build: `npm run build`
- [ ] Check: no links, no icons — "MA" monogram left, copyright right only

---

### Task 14: Cleanup + Final Verification

**Files:**
- Delete: `components/StatCard.tsx`

- [ ] Delete StatCard:
```bash
rm components/StatCard.tsx
```

- [ ] Confirm no imports remain:
```bash
grep -r "StatCard" app/ components/
```
Expected: no output

- [ ] Audit red — must appear exactly twice:
```bash
grep -rn "dc2626\|red-600" components/ app/
```
Expected: `Hero.tsx` (status dot) and `Projects.tsx` ("Featured" label) only

- [ ] Audit violet — must be zero:
```bash
grep -rn "7c3aed\|violet\|purple" components/ app/
```
Expected: no output

- [ ] Audit Magnetic — must be zero:
```bash
grep -rn "Magnetic\|magnetic" components/ app/
```
Expected: no output

- [ ] Audit marquee — must be zero:
```bash
grep -rn "marquee" components/ app/
```
Expected: no output

- [ ] Audit Inter font — must be zero:
```bash
grep -rn "Inter\|font-inter" components/ app/
```
Expected: no output

- [ ] Final build:
```bash
npm run build
```
Expected: ✓ Compiled successfully, 0 TypeScript errors

- [ ] Full visual pass at `npm run dev` — check every section against spec Section 9 success criteria:
  - [ ] Network tab: zero external font requests
  - [ ] Red appears exactly twice (hero status dot, "Featured" label)
  - [ ] No rounded corners anywhere on the page
  - [ ] No drop shadows anywhere
  - [ ] No gradient backgrounds
  - [ ] No pill badges with filled backgrounds
  - [ ] Skills: comma-separated text, no pills
  - [ ] Photo: permanent grayscale, no hover color
  - [ ] All h2 headlines: Palatino, two-line, second line italic
  - [ ] Contact: GitHub + LinkedIn only, text labels, no icons
  - [ ] Footer: "MA" + copyright only, no links
  - [ ] Hamburger menu works on mobile (<768px)
  - [ ] All two-column grids collapse on mobile
  - [ ] `max-w-content` (940px) constrains all sections

- [ ] Final commit:
```bash
git add -A
git commit -m "feat: complete portfolio redesign — editorial minimal

- Hero: split column, Palatino name, M initial, red status dot (only red #1)
- Navbar: scroll reveal, IntersectionObserver active links, hamburger menu
- TechStrip: static ruled strip, no marquee
- About: permanent grayscale photo, inline stats, removed Currently block
- Experience: ruled-row newspaper layout, black Current badge
- Projects: featured with stats aside, ruled grid, red Featured label (only red #2)
- Skills: typeset index — comma-separated text, zero pills
- Education: ruled rows for degree and certifications
- Contact: dark section, text-only socials (GitHub + LinkedIn only)
- Footer: MA monogram + copyright only
- Removed: StatCard, Magnetic, violet accent, marquee animation, Inter font"
```
