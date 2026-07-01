# Portfolio Redesign — Design Spec

**Date:** 2026-07-01
**Status:** Approved
**Project:** marcial.dev personal portfolio
**Stack:** Next.js 14, React 18, TypeScript, TailwindCSS, Framer Motion (motion)

---

## 1. Design Direction

**Editorial Minimal** — inspired by premium print publications (broadsheet newspapers, design magazines). The design should feel like it was made by a human who reads design books. Every decision must be deliberate. No decorative elements that don't serve a purpose.

**What this means in practice:**
- Off-white background (`#fafaf8`), near-black text (`#111111`)
- Palatino serif for display headlines only; tight-tracked system-ui sans for all UI
- One accent color (editorial red `#dc2626`) used in exactly two places site-wide
- Ruled lines, small-caps labels, and typographic hierarchy do the work that most sites do with color and shadows
- No rounded corners, no drop shadows, no gradient backgrounds, no glassmorphism
- No pill badges with filled backgrounds anywhere on the page

---

## 2. Color System

| Token | Value | Usage |
|---|---|---|
| `background` | `#fafaf8` | Page background |
| `background-alt` | `#f4f1eb` | Alternating section background (Experience, Skills) |
| `background-warm` | `#f0ece4` | Hero right column only |
| `foreground` | `#111111` | Primary text and headings |
| `secondary` | `#666666` | Body copy |
| `muted` | `#999999` | Secondary labels, captions |
| `border` | `#e0ddd7` | All dividers and ruled lines |
| `accent` | `#dc2626` | Status dot + "Featured" project label (two uses only) |
| `background-dark` | `#0d0d0d` | Contact section + Footer background |

> Note: `foreground` (`#111111`) and `background-dark` (`#0d0d0d`) are intentionally different values despite appearing similar — `#111` is used for text on light backgrounds, `#0d0d0d` is the dark section fill.

---

## 3. Typography

### Display (headlines only)
- **Font:** `'Palatino Linotype', 'Book Antiqua', Palatino, serif` — system font stack, zero web font requests
- **Usage:** Section `h2` headlines, hero name, contact headline, project featured title
- **Style:** Regular weight (400), italic for the second line of each headline pair
- **Sizes:** Hero name 68px, section h2 46px, featured project title 32px, contact 52px

### UI (everything else)
- **Font:** `system-ui, -apple-system, sans-serif`
- **Weights:** 400 (body), 600 (strong emphasis), 700 (CTA labels, company names)
- **Sizes:** Nav links 10px, section eyebrow labels 9px, body text 13px, captions/tags 9px
- **Tracking:** Uppercase labels always use `letter-spacing: 3px`; `text-transform: uppercase` is only used at ≤10px sizes

### Section headline copy
Every section `h2` uses the two-line Palatino italic-close pattern. The exact copy for each section:

| Section | Line 1 | Line 2 (italic) |
|---|---|---|
| About | A developer who | *loves the craft.* |
| Experience | Where I've | *worked.* |
| Projects | Selected | *projects.* |
| Skills | Technologies | *I work with.* |
| Education | Where I | *studied.* |
| Contact | Let's build | *something great.* |

---

## 4. Layout System

- **Max width:** 940px — implemented as a custom token in `tailwind.config.ts`: `extend.maxWidth.content = '940px'`. Use `max-w-content` as the container class across all components. Do not use inline `max-w-[940px]`.
- **Horizontal padding:** `px-13` (52px) on desktop, `px-6` (24px) on mobile
- **Section vertical padding:** `py-15` (60px) top/bottom
- **Grid:** CSS Grid via Tailwind `grid` utilities throughout — not Flexbox for major section layouts
- **Alternating backgrounds:** Sections 02 (Experience) and 04 (Skills) use `background-alt` (`#f4f1eb`)

---

## 5. Component Specs

### 5.1 Navbar

**Desktop (≥768px):**
- Transparent background initially; on scroll past 80px, transition to `background: rgba(250,250,248,0.9)` with `backdrop-filter: blur(8px)` and a 1px bottom border (`#e0ddd7`)
- Left: `Marcial Abasola` in Palatino 18px, `color: #111`
- Right: `Work · About · Experience · Contact` — 10px, `letter-spacing: 3px`, `text-transform: uppercase`, `color: #999`
- Active link state (set by IntersectionObserver on each section): `font-weight: 700`, `color: #111`
- IntersectionObserver: observe each section (`#about`, `#experience`, `#projects`, `#skills`, `#education`, `#contact`). The section with the most viewport overlap sets the active nav link.

**Mobile (<768px):**
- Nav links collapse to a hamburger button (3 horizontal lines, `color: #111`)
- On open: a full-width panel slides down below the logo row, listing each link vertically at 14px, 24px vertical padding each
- Panel background: `#fafaf8`, 1px bottom border when open

### 5.2 Hero

Two-column CSS Grid (`grid-cols-2`). Minimum height: `min-h-[100svh]` capped at `max-h-[800px]`. Separated by a 1px vertical border (`#e0ddd7`). Full-bleed (not constrained to `max-w-content`).

**Left column** (`padding: 60px 52px`):
- Eyebrow: `<status-dot> Available · Cambridge, PH` — 9px, `letter-spacing: 4px`, uppercase, `color: #bbb`
- Status dot: 6px circle, `background: #dc2626` — **first and only use of red on this half of the page**
- Name: Palatino 68px, `line-height: 0.95`, `letter-spacing: -1.5px`, `color: #111`
  - Line 1: "Marcial" (regular)
  - Line 2: "*Abasola.*" (italic)
- Divider: 40px × 1px `background: #ddd`, margin 26px top/bottom
- Tagline (max 15 words): "Full stack developer. I build across the stack and ship things that genuinely work."
- CTAs: "View Work" (solid black `#111` button, 10px uppercase, `padding: 11px 22px`) + "Get in Touch →" (plain text link, `color: #999`, 10px uppercase)
- Footer row (bottom of column): role + stack in 9px uppercase `color: #ccc`

**Right column** (background: `#f0ece4`, `overflow: hidden`):
- Content: Single Palatino "M" character, `font-size: 340px`, `color: #dedad3`, `font-weight: 400`
- Positioned `absolute`, `bottom: -20px`, `right: -24px` — clipped by the column's `overflow: hidden`. The crop is at the column boundary, not the viewport edge.

**Mobile behavior (<768px):**
- Right column (`overflow: hidden` with the "M") hides entirely: `hidden md:flex`. It does not collapse below.
- Left column becomes full width. Padding reduces to `px-6 py-16`.
- Name reduces to `clamp(48px, 12vw, 68px)`.

**Motion (hero entrance only):**
- Left column content: `fadeUp` (Y 20px → 0, opacity 0 → 1, 0.8s, `cubic-bezier(0.16, 1, 0.3, 1)`)
- "M" initial: `fadeIn` (opacity 0 → 1, 0.6s, 300ms delay)
- CTAs: `fadeUp` with 500ms delay (staggered within left column reveal)

### 5.3 Tech Strip

Static horizontal ruled strip. `padding: 14px 0`. Full-bleed to page edges, inner content constrained to `max-w-content`.

Tech items: `React · TypeScript · Node.js · Python · AWS · Supabase · PostgreSQL · Flutter`

Each item: 9px, `letter-spacing: 3px`, `text-transform: uppercase`, `color: #bbb`, `padding: 0 20px`. Separated by 1px vertical borders (`#e0ddd7`). First item has no left padding.

No marquee. No scroll animation. Completely static.

**Mobile (<640px):** Items wrap onto two lines using `flex-wrap: wrap`. Vertical separators between items are removed when wrapping (no `border-right`); a single 1px top border and 1px bottom border frames the entire strip instead. Padding per item reduces to `0 12px`.

### 5.4 About

Two-column grid (`grid-cols-2`, gap 52px). Alternating white background (not `background-alt`).

**Left column:**
- Bio: Two paragraphs, 13px, `color: #666`, `line-height: 1.85`. Company names in `<strong>` (`color: #111`, `font-weight: 600`).
- Tag row: 9px uppercase tags with 1px border (`#ddd`), no fill. `padding: 5px 10px`.
- **Remove the "Currently" status block entirely.** Availability is signalled by the hero status dot.

**Right column:**
- Photo: Permanent `filter: grayscale(1)`. No hover color reveal. Aspect ratio 3:4. Max width 220px. Left-aligned within the column. Immediately followed (no gap) by a 2px rule spanning the full column width (`width: 100%`, `background: #111`).
- Stats row: Two stat blocks below the rule. Each: 2px top border `#111`, Palatino numeral 34px `color: #111`, 9px uppercase label below in `color: #bbb`.
  - Stat 1: `3+` / `Years Professional`
  - Stat 2: `16+` / `Projects Built`

**Mobile (<768px):** Collapses to single column. Photo and stats stack below bio.

### 5.5 Experience

Full-width section, `background: #f4f1eb`.

Each experience entry: CSS Grid `grid-cols-[170px_1fr]`, gap 36px. Entries separated by 1px top border (`#e0ddd7`). Section opens with a 1px top border on the first entry.

**Left column:** Date (11px, `font-weight: 600`, `color: #111`), employment type (10px, `color: #bbb`, `letter-spacing: 1px`), location (same as type). Current badge: 8px uppercase, 1px solid border `#111`, `color: #111`, `padding: 2px 7px`. **Not red.**

**Right column:** Company name (13px, `font-weight: 700`, `color: #111`), role (11px, `color: #888`, `margin-bottom: 12px`). Bullets: 11px, `color: #666`, `line-height: 1.75`. Each bullet preceded by em dash `—` in `color: #ccc` via `::before` pseudo-element.

**Mobile (<640px):** Grid collapses to single column. Date/meta above company/bullets.

### 5.6 Projects

**Featured project:** CSS Grid `grid-cols-[3fr_1fr]`, no gap, border `1px solid #e0ddd7`.

*Main column* (`padding: 36px`, `border-right: 1px solid #e0ddd7`):
- "Featured" label: 9px, `letter-spacing: 3px`, uppercase, `color: #dc2626` — **second and final red use on the entire page**
- Title: Palatino 32px, `font-weight: 400`, `color: #111`
- Description: 12px, `color: #777`, `line-height: 1.8`
- Tags: 9px uppercase, `color: #aaa`, `border-bottom: 1px solid #e0ddd7`, no box border
- CTAs: "Live Demo ↗" and "GitHub ↗" as text links with `border-bottom: 1px solid #111`

*Aside column* (`padding: 28px`, `background: #f4f1eb`):
Exact content for GalaGuide:
- Top: Label "Status" (9px, uppercase, `color: #bbb`), value "Live · Vercel" (12px, `font-weight: 600`, `color: #555`)
- Stat 1: Palatino "2024" (28px), label "Launched" (9px, uppercase, `color: #bbb`)
- Stat 2: Palatino "Solo" (28px), label "Builder" (9px, uppercase, `color: #bbb`)
- Bottom note: "Designed and shipped independently." (10px, `color: #aaa`, `line-height: 1.6`)
Each stat/group separated by `1px solid #e0ddd7` top border.

**Project grid:** CSS Grid `grid-cols-3`. Each cell has `border-top: 1px solid #e0ddd7` and `border-right: 1px solid #e0ddd7`. Last cell in each row: no right border. No outer bottom border on the grid. This means horizontal rows are separated by the top border of each new row's cells, and vertical columns are separated by right borders.

Each cell (`padding: 26px`): index number (9px, uppercase, `color: #ccc`), title (14px, `font-weight: 700`, `color: #111`), description (11px, `color: #888`, `line-height: 1.7`), comma-separated tech list (9px, `color: #bbb`).

**Mobile (<768px):** Featured grid collapses to single column (aside stacks below main). Project grid collapses to single column.

### 5.7 Skills

No pills. No badges. Typeset index layout. `background: #f4f1eb`.

Each row: CSS Grid `grid-cols-[140px_1fr]`, gap 32px, `padding: 16px 0`, `border-top: 1px solid #e0ddd7`, `align-items: baseline`.

Left cell: category name (9px, `letter-spacing: 3px`, uppercase, `color: #bbb`).
Right cell: skills as a single 13px comma-separated sentence, `color: #555`. Secondary/contextual skills in italic `color: #aaa`.

Rows:
- Languages: `JavaScript, TypeScript, Python, C`
- Frontend: `React.js, Vue.js, TailwindCSS, Flutter` *· HTML / CSS*
- Backend: `Node.js, Express, Laravel, REST API`
- Databases & Cloud: `MySQL, MongoDB, Supabase, PostgreSQL` *· AWS, Azure*
- Testing & Tools: `Playwright, Selenium, Git, OpenCV, Pandas`

**Mobile (<640px):** Grid collapses to single column. Category label becomes a small-caps heading above its skill list.

### 5.8 Education

White background (not `background-alt`). CSS Grid `grid-cols-[170px_1fr]`, gap 36px. Entries separated by `border-top: 1px solid #e0ddd7`. Section opens with a 1px top border on the first entry.

**Left column:** Graduation year (11px, `font-weight: 600`, `color: #111`), location (10px, `color: #bbb`, `letter-spacing: 1px`).

**Right column:** Institution name (13px, `font-weight: 700`, `color: #111`), degree (11px, `color: #888`, `margin-top: 3px`).

No cards, no bullets, no description text — dates and names only.

**Mobile (<640px):** Grid collapses to single column. Year/location above institution/degree.

### 5.9 Contact

Dark section, `background: #0d0d0d`. No top border — the background transition is sufficient section break.

Two-column grid (`grid-cols-2`, gap 52px, `align-items: end`). Section constrained to `max-w-content`.

**Left column:**
- Eyebrow: `06 ── Contact` (9px, `color: #333`, uppercase, `letter-spacing: 3px`)
- Headline: Palatino 52px, `color: #fff`. Two lines: "Let's build / *something great.*" Second line italic in `color: #555`.
- Sub-text: "Open to freelance projects, collaborations, and new opportunities. I typically respond within 24 hours." (12px, `color: #555`, `line-height: 1.8`)

**Right column:**
- Label "Send a message" (9px, uppercase, `color: #333`)
- Email: `marcialabasola@gmail.com` — text only, no icon, 14px, `font-weight: 600`, `color: #fff`, `border-bottom: 1px solid #333`, click-to-copy using existing `CopyEmail` component logic
- Divider: `border-top: 1px solid #1a1a1a`
- Label "Find me on" (9px, uppercase, `color: #333`)
- Social links: **Text labels only, no icons.** Two links: `GitHub` and `LinkedIn`. Each: `border: 1px solid #222`, `padding: 9px 16px`, `font-size: 10px`, `color: #444`, `letter-spacing: 2px`, uppercase. No Facebook.

**Mobile (<768px):** Collapses to single column. Headline reduces to 38px.

### 5.10 Footer

`background: #0d0d0d`, `padding: 16px 52px`. Single row, full width.

- Left: `MA` in Palatino 16px, `color: #333`
- Right: `© 2026 Marcial Abasola` in 9px uppercase, `color: #2a2a2a`, `letter-spacing: 2px`
- No links, no icons, no extra content

---

## 6. Motion Spec

One animation system, used consistently. No exceptions.

**Scroll reveal (all sections below the fold):**
- `opacity: 0 → 1`, `translateY: 16px → 0`
- Duration: 0.6s, easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Trigger: IntersectionObserver, `threshold: 0.1`
- Children stagger: 80ms between items within a section
- Implemented via the existing `AnimatedSection` component

**Hero entrance (on page load only):**

Per-element delay table (all use `fadeUp`: Y 20px → 0, opacity 0 → 1, 0.8s, `cubic-bezier(0.16, 1, 0.3, 1)` unless noted):

| Element | Delay | Animation |
|---|---|---|
| Eyebrow (status dot + text) | 0ms | fadeUp |
| Name (both lines) | 100ms | fadeUp |
| Divider line | 200ms | fadeIn (opacity only) |
| Tagline | 300ms | fadeUp |
| CTAs row | 500ms | fadeUp |
| Footer row (role + stack) | 600ms | fadeIn (opacity only) |
| "M" initial (right column) | 300ms | fadeIn (opacity only, 0.6s) |

**Interactions:**
- Nav links: `color` transition on hover, 150ms
- CTA primary button: `background` darken on hover, 150ms
- Social links in Contact: `border-color` and `color` lighten on hover, 150ms
- No scale transforms, no rotate transforms, no magnetic effects

**Explicitly removed:**
- All `Magnetic` component usage
- Marquee animation on tech strip
- Grayscale hover-to-color on photo
- Any `rotate` or parallax transforms

---

## 7. What to Remove from Current Codebase

| Current element | Action |
|---|---|
| `Magnetic` component usage in Hero | Remove — replace with plain `<a>` tags |
| Marquee animation on `TechStrip.tsx` | Rewrite as static ruled strip |
| Skill pill badges (filled background) | Replace with typeset index rows |
| Project card drop shadows | Remove — 1px ruled borders only |
| `filter: grayscale` hover → color on photo | Remove hover — permanent grayscale always |
| Violet accent (`#7c3aed`) throughout | Replace with `#dc2626` (two uses only) |
| `StatCard.tsx` component | Remove — stats inlined into About right column |
| About "Currently" status block | Remove — availability signalled by hero status dot |
| Footer links (Next.js, Tailwind, Vercel) | Remove — footer is monogram + copyright only |
| Facebook social link in Contact | Remove — GitHub and LinkedIn only |
| Contact icon-only social buttons | Replace with text-label bordered buttons (no icons) |
| `anim-fade-up` / `anim-fade-in` CSS classes | Keep for hero — audit and remove from non-hero uses |

---

## 8. File Structure

No new pages or routes. All changes within existing component files.

**Add to `tailwind.config.ts`:**
- `extend.maxWidth.content = '940px'` — use `max-w-content` as container class site-wide

**Files to rewrite:**
- `components/Hero.tsx`
- `components/Navbar.tsx`
- `components/TechStrip.tsx`
- `components/About.tsx`
- `components/Experience.tsx`
- `components/Projects.tsx`
- `components/Skills.tsx`
- `components/Education.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`
- `app/globals.css`

**Files to delete:**
- `components/StatCard.tsx` — functionality inlined into About

**Files to keep unchanged:**
- `components/AnimatedSection.tsx`
- `components/CopyEmail.tsx`
- `app/layout.tsx`
- `app/page.tsx`

---

## 9. Success Criteria

- [ ] Page loads with zero web font requests (Palatino is system font)
- [ ] Red (`#dc2626`) appears exactly twice: hero status dot + "Featured" project label
- [ ] No rounded corners anywhere on the page
- [ ] No drop shadows anywhere on the page
- [ ] No gradient backgrounds anywhere on the page
- [ ] No pill badges with filled backgrounds
- [ ] No `Magnetic` component usage
- [ ] No marquee or scroll animation on the tech strip (static only)
- [ ] Skills section uses typeset index — no pills
- [ ] Photo is permanent grayscale, no hover color reveal
- [ ] All section headlines follow the Palatino two-line italic-close pattern (exact copy per Section 3 table)
- [ ] Contact socials: text labels only, GitHub and LinkedIn only, no icons
- [ ] About "Currently" status block is removed
- [ ] Footer has no links — monogram + copyright only
- [ ] Facebook link removed from codebase
- [ ] Responsive: hero right column hidden below 768px; all two-column grids collapse to single column below 768px; project grid collapses to single column below 768px
- [ ] Navbar has hamburger menu on mobile (<768px)
- [ ] Active nav link tracked by IntersectionObserver on section visibility
- [ ] `max-w-content` (940px) used as container class across all components
- [ ] Lighthouse Performance ≥ 90 (system fonts guarantee no layout shift)
