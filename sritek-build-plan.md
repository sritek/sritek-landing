# SRITEK — Full Website Build Plan
### Inspired by MYGOM · Next.js + GSAP + Tailwind + Scroll-Trigger
---

## 🎨 DESIGN SYSTEM SNAPSHOT

| Token | Value |
|---|---|
| Background (dark) | `#121212` |
| Foreground / Ice Blue | `#99daff` |
| Grid accent | `rgba(153,218,255,0.06)` lines |
| Accent (mid-blue) | `#4ab8f0` (hover states, labels, tags) |
| Muted blue | `rgba(153,218,255,0.5)` |
| Faint blue | `rgba(153,218,255,0.08)` |

**Mood:** Dark Tech · Electric Blueprint · Premium Digital Agency

---

## 📁 PROJECT STRUCTURE

```
sritek/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    ← Home
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx         ← Case study dynamic routing
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── CTA.tsx                 ← Reusable CTA
│   │   ├── ServiceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   └── TeamCard.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ClientList.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── WhoWeAre.tsx
│   │   ├── OurWork.tsx
│   │   ├── Reviews.tsx
│   │   └── CTABanner.tsx
│   └── animations/
│       ├── SplitTextReveal.tsx
│       ├── ScrollFade.tsx
│       └── MarqueeRow.tsx
├── lib/
│   ├── gsap.ts                     ← GSAP + ScrollTrigger setup
│   └── data/
│       ├── services.ts
│       ├── projects.ts
│       └── team.ts
├── public/fonts/
└── tailwind.config.ts
```

---

## 🔢 PHASE-BY-PHASE PROMPTS FOR CURSOR / COPILOT

> Paste each prompt **in order** into Cursor's Composer (Cmd+I).
> Each prompt is self-contained and builds on the previous one.

---

### ━━━ PHASE 1 — PROJECT SETUP ━━━

---

#### PROMPT 1 — Init & Dependencies

```
Create a new Next.js 14 project called "sritek" using the App Router.

Install these dependencies:
- gsap (with @gsap/react)
- tailwindcss postcss autoprefixer
- @types/node @types/react typescript
- framer-motion (fallback for simple transitions)
- next-themes (for any theming)

Run: npx create-next-app@latest sritek --typescript --tailwind --app --src-dir=false

Then install: npm install gsap @gsap/react

Create the folder structure exactly as:
app/, components/layout/, components/ui/, components/sections/, components/animations/, lib/, lib/data/, public/fonts/

Initialize tailwind.config.ts with content paths covering app/ and components/.
```

---

#### PROMPT 2 — Design Tokens & Tailwind Config

```
Update tailwind.config.ts for the Sritek design system.

Add these EXACT custom values under `theme.extend`:

colors:
  dark: '#121212'
  blue: '#99daff'
  'blue-mid': '#4ab8f0'
  'blue-muted': 'rgba(153,218,255,0.5)'
  'blue-faint': 'rgba(153,218,255,0.08)'
  'dark-surface': '#1a1a1a'
  'dark-deep': '#0d0d0d'
  'dark-border': 'rgba(153,218,255,0.1)'

fontFamily:
  canela: ['Canela', 'Georgia', 'serif']
  avenir: ['Avenir Next', 'Avenir', 'system-ui', 'sans-serif']

Add a custom backgroundImage for the dot-grid pattern used throughout:
  'dot-grid': "radial-gradient(circle, rgba(153,218,255,0.12) 1px, transparent 1px)"

Add backgroundSize:
  'grid-sm': '28px 28px'
  'grid-md': '40px 40px'

Add these keyframes:
  marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } }
  fadeUp: { '0%': { opacity: 0, transform: 'translateY(40px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } }
  revealMask: { '0%': { clipPath: 'inset(0 100% 0 0)' }, '100%': { clipPath: 'inset(0 0% 0 0)' } }
  glowPulse: { '0%, 100%': { boxShadow: '0 0 20px rgba(153,218,255,0.1)' }, '50%': { boxShadow: '0 0 40px rgba(153,218,255,0.25)' } }

animations:
  marquee: 'marquee 22s linear infinite'
  fadeUp: 'fadeUp 0.7s ease forwards'
  glowPulse: 'glowPulse 3s ease-in-out infinite'

Also add a custom plugin that adds:
- `.text-balance` utility: text-wrap: balance
- `.glow-blue` utility: box-shadow: 0 0 30px rgba(153,218,255,0.2)
- `.glow-blue-text` utility: text-shadow: 0 0 60px rgba(153,218,255,0.25)
```

---

#### PROMPT 3 — Global CSS & Font Loading

```
Create app/globals.css with:

1. @font-face declarations for:
   - Canela (weights: 300, 400) — source: /fonts/Canela-Light.woff2 and Canela-Regular.woff2
   - Avenir Next (weights: 400, 500, 600, 700) — source: /fonts/AvenirNext-Regular.woff2 etc.
   (We'll add actual font files later — just scaffold the @font-face blocks)

2. CSS custom properties on :root:
   --color-dark: #121212;
   --color-blue: #99daff;
   --color-blue-mid: #4ab8f0;
   --color-dark-surface: #1a1a1a;
   --color-dark-deep: #0d0d0d;
   --font-display: 'Canela', Georgia, serif;
   --font-body: 'Avenir Next', Avenir, system-ui, sans-serif;
   --nav-height: 72px;
   --glow: 0 0 40px rgba(153,218,255,0.15);

3. Base styles:
   - html { scroll-behavior: smooth; }
   - body { background: var(--color-dark); color: var(--color-blue); font-family: var(--font-body); }
   - ::selection { background: var(--color-blue); color: var(--color-dark); }
   - Scrollbar: thin, #121212 track, #99daff thumb
   - * { border-color: rgba(153,218,255,0.1); }

4. Utility class .dot-grid-bg:
   background-image: radial-gradient(circle, rgba(153,218,255,0.1) 1px, transparent 1px);
   background-size: 28px 28px;

In app/layout.tsx:
- Import globals.css
- Set metadata: title 'Sritek — Turning Ideas Into Powerful Software', description, og tags
- Add a <div id="smooth-wrapper"> wrapping children for GSAP Smooth Scroller hook
- Set html lang="en"
```

---

#### PROMPT 4 — GSAP Setup Module

```
Create lib/gsap.ts:

This file should:
1. Import gsap from 'gsap'
2. Import ScrollTrigger from 'gsap/ScrollTrigger'
3. Import SplitText from 'gsap/SplitText' (premium — scaffold but comment out if unavailable, use a manual split fallback)
4. Register all plugins: gsap.registerPlugin(ScrollTrigger)
5. Export a function `initGSAP()` that sets:
   - ScrollTrigger.defaults({ markers: false })
   - gsap.defaults({ ease: 'power3.out', duration: 0.9 })
6. Export typed helpers:
   - `revealText(target: string | Element, delay?: number)` — staggers characters/lines up from 60px, opacity 0→1
   - `fadeInUp(target: string | Element, stagger?: number)` — fade+translateY animation with ScrollTrigger
   - `pinSection(trigger: string, endOffset?: string)` — pins a section using ScrollTrigger
   - `horizontalScroll(container: string)` — horizontal scroll for a container
7. Create a custom React hook `useGSAP` in lib/gsap.ts that wraps gsap context and cleans up on unmount

Also create components/animations/SplitTextReveal.tsx:
- A React component that takes `text: string`, `as?: keyof JSX.IntrinsicElements`, `className?: string`, `delay?: number`
- On mount, splits text by words, wraps each in a span with overflow-hidden parent
- Animates words up with staggered GSAP timeline triggered by ScrollTrigger
- Supports a `splitBy?: 'words' | 'chars'` prop
```

---

### ━━━ PHASE 2 — LAYOUT COMPONENTS ━━━

---

#### PROMPT 5 — Navbar

```
Create components/layout/Navbar.tsx

Design specs:

Structure:
- Fixed top bar, height 72px, z-index 50
- Background: transparent initially, transitions to rgba(18,18,18,0.92) + backdrop-blur on scroll > 80px
- On scroll: add border-bottom: 1px solid rgba(153,218,255,0.1)
- Left: "SRITEK" in font-canela text-[#99daff] font-light text-2xl tracking-widest
- Center: nav links — SERVICES (with dropdown chevron), PROJECTS, ABOUT, ARTICLES
  - font-avenir text-xs font-semibold tracking-[0.15em] uppercase text-[#99daff]/60 hover:text-[#99daff] transition
- Right: language toggle "EN" + "GET IN TOUCH" button
  - bg-[#99daff] text-[#121212] px-5 py-2.5 text-xs font-bold tracking-widest uppercase
  - hover: bg-[#4ab8f0], box-shadow: 0 0 20px rgba(153,218,255,0.3)

Behavior:
- On mobile: hamburger icon (3 lines → X morphs with GSAP)
- Mobile menu: full-screen overlay bg-[#121212], links stacked, animate in from right
- Active page link: 2px solid #99daff underline
- SERVICES: dropdown panel bg-[#1a1a1a] border border-[#99daff]/10, 4 service links 2-col

GSAP: On page load, navbar links staggered fadeDown (opacity 0 → 1, y: -10 → 0)

Types: Create NavItem type in lib/types.ts — { label, href, children?: NavItem[] }
```

---

#### PROMPT 6 — Footer

```
Create components/layout/Footer.tsx

Layout (5-column grid):
- Top: bg-[#121212], border-top: 1px solid rgba(153,218,255,0.08), 5 columns
  Col 1 — SERVICES: 6 service links
  Col 2 — COMPANY: Projects, About, Articles
  Col 3 — LEGAL: Cookie Policy, Terms of Use
  Col 4 — FOLLOW US: LinkedIn, Twitter/X, Instagram, GitHub
  Col 5 — GET IN TOUCH: email, phone, company details

- Column headers: font-avenir text-xs tracking-[0.2em] uppercase text-[#4ab8f0]
- Links: font-avenir text-xs text-[#99daff]/50 hover:text-[#99daff] transition
- Company details: text-[#99daff]/35 text-xs leading-relaxed

- Bottom: massive "SRITEK" text
  - font-canela text-[20vw] font-light leading-none
  - Color: rgba(153,218,255,0.04) — ultra-faint watermark
  - Add a centered radial glow behind it: background radial-gradient(ellipse at 50% 60%, rgba(153,218,255,0.04) 0%, transparent 70%)
  - Copyright: "© 2026 SRITEK" — text-[#99daff]/20 text-xs font-avenir

GSAP: Giant "SRITEK" text scales 0.95 → 1, opacity 0.02 → 0.04 scrubbed to scroll
```

---

### ━━━ PHASE 3 — HOME PAGE SECTIONS ━━━

---

#### PROMPT 7 — Hero Section

```
Create components/sections/Hero.tsx

Layout:
- Full viewport height (100svh), bg-[#121212], dot-grid-bg overlay
- Dot-grid: rgba(153,218,255,0.08) dots, 28px spacing
- Small floating corner squares (~12 hardcoded positions):
  4px × 4px, bg-[#99daff]/10, position absolute

Typography (massive, editorial):
- Line 1: "TURNING" — font-canela text-[12vw] leading-none text-[#99daff] font-light, top-left
- Line 2: "IDEAS" — font-canela text-[12vw] leading-none text-[#99daff] font-light, top-right
- Line 3: "INTO" — font-canela text-[12vw] leading-none text-[#99daff] font-light, left
- Line 4: "POWERFUL" — font-canela text-[12vw] leading-none text-[#99daff] font-light, center
- Line 5: "SOLUTIONS" — font-canela text-[12vw] leading-none text-[#99daff] font-light, right

Body copy (bottom-left):
- "Stop building slow. We ship your SaaS 3× faster with production-grade quality."
- font-avenir text-sm text-[#99daff]/50 max-w-xs leading-relaxed

GSAP Entrance Animation (runs once on mount):
1. Words: y:80 opacity:0 → y:0 opacity:1, staggered 0.08s
2. Body copy fades in last
3. Thin #99daff line draws left to right via clipPath
4. Total: ~1.2s

Decorative element (no mascot — abstract SVG):
- Large circle outline: 2px stroke rgba(153,218,255,0.12), ~40vw diameter, right-center
- Smaller filled circle: rgba(74,184,240,0.08), offset inside
- Faint radial glow behind both: radial-gradient(circle, rgba(153,218,255,0.05) 0%, transparent 60%)
- GSAP: circles slowly rotate — gsap.to, rotation:360, duration:40, repeat:-1, ease:'none'
- On mouse move: circles shift slightly (parallax, max ±20px) using gsap.quickTo
```

---

#### PROMPT 8 — Client List Section

```
Create components/sections/ClientList.tsx

Background: bg-[#0d0d0d] with dot-grid

Left column (sticky desktop, ~35%):
- "TRUSTED BY INDIA'S FASTEST GROWING COMPANIES"
- font-canela text-5xl font-light text-[#99daff] leading-tight
- Below: <CTA /> button
- GSAP: word-by-word reveal on scroll

Right column (~65%):
- Each row: [→ in #4ab8f0] [CLIENT NAME font-canela text-xl text-[#99daff]] [service font-avenir text-xs text-[#99daff]/30 right]
- Rows separated by 1px rgba(153,218,255,0.07) dividers
- Hover: arrow slides right 8px, row bg → rgba(153,218,255,0.03)
- GSAP ScrollTrigger: rows stagger in 0.04s from bottom

Sample client data:
ZEPHYR — Web Development & UI/UX Design
AXIOM — Custom SaaS Platform
NODEX — AI Integration & Automation
STRATA — Mobile App Development
KOVA — E-Commerce & UI/UX Design
LUMINA — ERP System
VANTAGE — Web Development
CIRRUS — Dedicated Team
PRISM — Sales Analytics Platform
VELOX — Web Development & UI/UX Design
```

---

#### PROMPT 9 — Services Grid Section

```
Create components/sections/ServicesGrid.tsx and components/ui/ServiceCard.tsx

NOTE: This site stays ENTIRELY DARK — no white/cream sections.
Contrast rhythm comes from surface depth: #121212 vs #1a1a1a vs #0d0d0d.

Background: bg-[#1a1a1a]

Section header:
- "OUR SERVICES" — font-avenir text-xs tracking-[0.2em] uppercase text-[#4ab8f0] mb-12

Grid: 3 columns × 2 rows desktop, 1 col mobile, gap-px (hairline dividers)

ServiceCard.tsx props: { title: string, number: string, href: string, description?: string }

Card design:
- bg-[#121212] border border-[#99daff]/6 p-8
- Number: "SERVICE / 01" — font-avenir text-xs tracking-widest text-[#99daff]/18 uppercase
- Title: font-canela text-3xl text-[#99daff] font-light leading-tight mt-3
- On hover:
  - border: rgba(153,218,255,0.25)
  - glow: box-shadow 0 0 30px rgba(153,218,255,0.06)
  - Arrow button (bg-[#99daff] text-[#121212] 40px × 40px) slides in from bottom-right
  - Card: y: -4px via GSAP quickTo

Services:
01 — AI INTEGRATION & AUTOMATION
02 — DEDICATED DEVELOPMENT TEAM
03 — MOBILE APP DEVELOPMENT
04 — CREATING INTUITIVE UI/UX DESIGN
05 — CONVERSION OPTIMISED WEBSITE
06 — CUSTOM WEB APP DEVELOPMENT

GSAP: Cards stagger in with scale(0.97→1) + opacity on scroll
```

---

#### PROMPT 10 — Process Section

```
Create components/sections/ProcessSection.tsx

Background: bg-[#121212] + dot-grid

Label: "OUR PROCESS" — font-avenir text-xs tracking-[0.2em] uppercase text-[#99daff]/22

Large heading:
"DESIGN  DEVELOPMENT" — font-canela text-[8vw] text-[#99daff] font-light leading-none

ScrollTrigger animation:
- "DESIGN" enters from x:-60 → 0
- "DEVELOPMENT" enters from x:60 → 0

Description card (bottom-left):
- bg-[#1a1a1a] border border-[#99daff]/8 p-8 rounded-2xl max-w-sm
- Inner glow: box-shadow inset 0 1px 0 rgba(153,218,255,0.06)
- font-avenir text-sm text-[#99daff]/55 leading-relaxed
- Text: "From idea to working software, we handle every step — discovery, design, development, and thorough testing — to bring your vision to life."

Right side visual:
- Large rectangle bg-[#99daff]/3 border border-[#99daff]/8 rounded-xl
- 6×6 grid of small squares, alternating rgba(153,218,255,0.06) and rgba(74,184,240,0.12)
- "Lit" squares: tiny radial glow rgba(153,218,255,0.2)
- GSAP: squares fade in wave pattern, stagger:0.02

Sticky: GSAP ScrollTrigger pin for 150vh before releasing
```

---

#### PROMPT 11 — Who We Are Section

```
Create components/sections/WhoWeAre.tsx

Background: bg-[#0d0d0d] (deepest black — maximum darkness moment)

Layout: 2 columns

Left col (photo collage — placeholder divs):
- Card 1: w-56 h-72 bg-[#99daff]/5 border border-[#99daff]/12 rounded-xl rotate(-2deg)
- Card 2: w-44 h-56 bg-[#99daff]/5 border border-[#99daff]/12 rounded-xl rotate(1.5deg) top-16 left-24
- Card 3: w-48 h-64 bg-[#99daff]/5 border border-[#99daff]/12 rounded-xl rotate(-1deg) top-32 left-8
- Placeholder label: "TEAM PHOTO" — font-avenir text-xs text-[#99daff]/12 centered
- Hover: subtle blue glow on each card
- GSAP: parallax tilt on scroll, ScrollTrigger scrub:1

Right col:
- "WHO WE ARE" — font-canela text-6xl text-[#99daff] font-light
- Body: font-avenir text-sm text-[#99daff]/48 leading-relaxed max-w-md mt-6
  "Sritek is a talented team of developers, UI/UX designers, and project managers creating custom software, SaaS, and AI that scales your business."
- <CTA variant="outline" label="ABOUT US" />
```

---

#### PROMPT 12 — Our Work Section

```
Create components/sections/OurWork.tsx and components/ui/ProjectCard.tsx

Background: bg-[#1a1a1a]

Header:
- "OUR WORK" — font-canela text-[8vw] text-[#99daff] font-light leading-none

Grid: Asymmetric — first two cards (40% + 60%), third full width
Cards: bg-[#121212] border border-[#99daff]/7 rounded-2xl overflow-hidden p-8

ProjectCard.tsx props:
{ category: string, title: string, description: string, href: string, imagePlaceholderColor?: string }

Card structure:
- Category: font-avenir text-xs tracking-widest uppercase text-[#4ab8f0]
- Title: font-canela text-3xl text-[#99daff] font-light mt-2 leading-tight
- Description: font-avenir text-sm text-[#99daff]/38 leading-relaxed mt-3
- Right: placeholder div with imagePlaceholderColor bg, rounded-xl
- Hover:
  - border: rgba(153,218,255,0.22)
  - glow: 0 0 40px rgba(153,218,255,0.05)
  - "→" arrow in #99daff slides in

"SHOW MORE" button:
- border border-[#99daff]/18 text-[#99daff]/45 font-avenir text-xs tracking-widest uppercase px-8 py-3
- hover: border-[#99daff]/50 text-[#99daff] shadow-[0_0_20px_rgba(153,218,255,0.08)]

Sample projects:
{ slug: 'ai-survey-platform', category: 'Digital Market Research', title: 'AI Video Survey Platform' }
{ slug: 'vehicle-damage-ai', category: 'AI-Driven Insurtech', title: 'AI Vehicle Damage Assessment' }
{ slug: 'saas-dashboard', category: 'SaaS', title: 'Real-Time Analytics Dashboard' }

GSAP: clipPath reveal inset(100% 0 0 0) → inset(0 0 0 0) on scroll
```

---

#### PROMPT 13 — Reusable CTA Component

```
Create components/ui/CTA.tsx — THE reusable CTA component.

Props interface:
{
  label?: string       // default: "GET IN TOUCH"
  href?: string        // default: "/contact"
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  external?: boolean
}

Variants:
- solid: bg-[#99daff] text-[#121212] hover:bg-[#4ab8f0]
  hover: box-shadow 0 0 30px rgba(153,218,255,0.3)
- outline: border border-[#99daff]/35 text-[#99daff] hover:border-[#99daff] hover:bg-[#99daff]/6
  hover: box-shadow 0 0 20px rgba(153,218,255,0.1)
- ghost: text-[#99daff]/55 underline underline-offset-4 hover:text-[#99daff]

All shared:
- font-avenir font-semibold uppercase tracking-widest
- transition-all duration-300
- rounded-none (sharp corners)

Sizes:
- sm: text-xs px-4 py-2
- md: text-xs px-6 py-3
- lg: text-sm px-8 py-4

Micro-animation:
- Hover: GSAP fill-slide from left (bg rgba(153,218,255,0.06) pseudo-element)
- Click: scale(0.97) → scale(1) spring

Also create components/sections/CTABanner.tsx:
- bg-[#0d0d0d] + dot-grid
- Heading: "LET'S WORK TOGETHER" — font-canela text-[9vw] text-[#99daff] font-light
  text-shadow: 0 0 80px rgba(153,218,255,0.18)
- Subtext card: bg-[#1a1a1a] border border-[#99daff]/8 p-6 rounded-xl max-w-xs positioned top-right
  font-avenir text-sm text-[#99daff]/55
- CTA centered: <CTA size="lg" />
- Decorative SVG arc: stroke rgba(153,218,255,0.1), strokeWidth 2
  GSAP dashOffset animates on scroll — arc draws as section enters
- GSAP: words reveal on scroll entry
```

---

#### PROMPT 14 — Testimonials Carousel

```
Create components/sections/Reviews.tsx and components/ui/TestimonialCarousel.tsx

Background: bg-[#1a1a1a]

Header: "CLIENT REVIEWS" — font-canela text-7xl text-[#99daff] font-light

Carousel:
- Shows 3 cards, 1 partially visible on right edge
- Draggable (GSAP Draggable or pointer events)
- Navigation buttons: 48px circles, bg-[#99daff]/8 border border-[#99daff]/18 text-[#99daff]
  hover: bg-[#99daff]/15, glow

TestimonialCard:
- bg-[#121212] border border-[#99daff]/7 rounded-2xl p-8 min-h-[280px]
- Quote: font-avenir text-sm text-[#99daff]/55 leading-relaxed italic
- Client: font-avenir text-xs tracking-widest uppercase text-[#4ab8f0] mt-auto
- Active: border rgba(153,218,255,0.28), glow 0 0 30px rgba(153,218,255,0.07)
- Inactive: opacity-50

Sample testimonials (lib/data/testimonials.ts):
{
  quote: "The ability to adapt in a rapidly changing environment and close communication makes Sritek a strong software development partner.",
  client: "AXIOM LABS"
},
{
  quote: "Speed, flexibility, and quality. Our demands are high, but Sritek enforces our values and makes them stronger.",
  client: "NODEX"
},
{
  quote: "Working with Sritek since day one. Their team is highly qualified, communication always effortless.",
  client: "ZEPHYR"
}

Auto-play every 5s, pause on hover.
```

---

### ━━━ PHASE 4 — ABOUT PAGE ━━━

---

#### PROMPT 15 — About Page

```
Create app/about/page.tsx with these sections in order:

1. HERO (bg-[#121212] + dot-grid):
   - Massive heading: "THE TEAM BEHIND YOUR SOFTWARE"
   - font-canela text-[11vw] leading-none text-[#99daff] font-light
   - Subtle: text-shadow 0 0 120px rgba(153,218,255,0.12)
   - Team photo placeholder: bg-[#1a1a1a] border border-[#99daff]/7 rounded-2xl w-full h-[60vh] mt-8
   - GSAP: word-stagger reveal from y:100 on page load

2. ABOUT DESCRIPTION (bg-[#121212]):
   - Two-column, left empty, right text
   - font-avenir text-base text-[#99daff]/52 leading-relaxed max-w-lg
   - "Our talented team of developers, UI/UX designers, and project managers is passionate about turning your business needs into efficient, scalable software solutions. Based in India, we specialize in web and mobile apps, SaaS platforms, and AI automation."

3. KEY MILESTONES (bg-[#0d0d0d] + dot-grid):
   - Label: "OUR JOURNEY: KEY MILESTONES" — text-[#99daff]/22 font-avenir text-xs tracking-widest
   - 3-column layout, horizontal timeline line in rgba(153,218,255,0.15)
   - Dot on timeline: 6px circle in #4ab8f0, glow: 0 0 10px rgba(74,184,240,0.5)
   - Number: "01" "02" "03" — font-canela text-[8vw] text-[#99daff]/6 font-light
   - Title: font-canela text-3xl text-[#99daff]
   - Description: font-avenir text-sm text-[#99daff]/38 leading-relaxed
   - GSAP: timeline line scaleX 0→1 on scroll, numbers count up

   Milestones:
   01 — FOUNDATION: "Founded with a vision to turn business challenges into technological successes."
   02 — INITIAL GROWTH: "Shipped our first SaaS MVP in weeks, not months. Trust built the company."
   03 — FROM LOCAL TO GLOBAL: "Partnered with startups and enterprises across India, EU, and US."

4. THE PILLARS (bg-[#1a1a1a]):
   - Label: "THE PILLARS OF SRITEK" — text-[#4ab8f0]
   - Four rows, dividers: 1px rgba(153,218,255,0.07)
   - Left: font-canela text-4xl text-[#99daff]
   - Right: font-avenir text-sm text-[#99daff]/42
   - GSAP: rows slide in from left with stagger

   Pillars:
   — EMBRACING IDEAS AND INNOVATION
   — DRIVEN FOR EXCELLENCE
   — DEDICATED TO SUCCESS
   — HONESTY AND CLARITY

5. THE TEAM (bg-[#121212]):
   - "THE TEAM" — font-canela text-6xl text-[#99daff] font-light
   - 3-column TeamCard grid
   - TeamCard: rounded-2xl overflow-hidden, border border-[#99daff]/8
     Top: bg-[#99daff]/5 (photo placeholder)
     Bottom: bg-[#1a1a1a] p-4
     Name: font-avenir text-sm font-semibold text-[#99daff]
     Role: font-avenir text-xs text-[#4ab8f0] uppercase tracking-widest
   - Hover: border rgba(153,218,255,0.22), glow

6. <CTABanner /> (reuse existing component)
```

---

### ━━━ PHASE 5 — CASE STUDY DYNAMIC ROUTING ━━━

---

#### PROMPT 16 — Projects Data & Dynamic Routes

```
Create lib/data/projects.ts:

export interface Project {
  slug: string
  category: string
  title: string
  headline: string
  description: string
  challenge: string
  solution: string
  results: string[]
  tech: string[]
  year: string
  imageColor: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'ai-survey-platform',
    category: 'Digital Market Research',
    title: 'AI Video Survey Platform',
    headline: 'Transforming Market Research with AI-Powered Video',
    description: 'An AI-powered video survey platform that transforms market research by capturing authentic video feedback at scale.',
    challenge: 'Traditional surveys miss emotional nuance. Clients needed richer qualitative data without manual video review.',
    solution: 'We built a platform where respondents record video answers. AI transcribes, sentiment-analyzes, and clusters responses into insights automatically.',
    results: ['3× faster research cycles', '40% higher response quality scores', 'Reduced analysis time by 80%'],
    tech: ['Next.js', 'OpenAI Whisper', 'Python', 'PostgreSQL', 'AWS S3'],
    year: '2025',
    imageColor: '#0c1520',
    featured: true
  },
  {
    slug: 'vehicle-damage-ai',
    category: 'AI-Driven Insurtech',
    title: 'AI Vehicle Damage Assessment',
    headline: 'Automating Insurance Claims with Computer Vision',
    description: 'An AI-powered platform that revolutionizes automotive insurance claims by automating damage detection.',
    challenge: 'Manual vehicle damage assessment is slow, subjective, and expensive for insurers.',
    solution: 'Computer vision model trained on 50k+ damage images, integrated into a mobile-first claims flow.',
    results: ['Claims processing from 5 days → 2 hours', '94% model accuracy', 'Saved $2M in assessor costs annually'],
    tech: ['React Native', 'Python', 'TensorFlow', 'FastAPI', 'GCP'],
    year: '2025',
    imageColor: '#0a1825',
    featured: true
  }
]

Then create app/projects/[slug]/page.tsx — Case Study page:

1. HERO (bg-[#0d0d0d]):
   - Category: font-avenir text-[#4ab8f0] uppercase tracking-widest
   - Title: font-canela text-[8vw] text-[#99daff] font-light
     text-shadow: 0 0 80px rgba(153,218,255,0.15)
   - Year + tech tags: bg-[#99daff]/6 border border-[#99daff]/12 text-[#99daff]/60 px-3 py-1 rounded-full
   - Mockup placeholder: bg imageColor, border border-[#99daff]/6, h-[60vh] rounded-2xl

2. CHALLENGE (bg-[#121212]):
   - "THE CHALLENGE" label in #4ab8f0
   - font-canela text-4xl text-[#99daff] font-light max-w-3xl

3. SOLUTION (bg-[#0d0d0d] + dot-grid):
   - "OUR SOLUTION" label in #4ab8f0
   - Tech pills: bg-[#99daff]/6 border border-[#99daff]/12 text-[#99daff]/65 rounded-full px-3 py-1

4. RESULTS (bg-[#1a1a1a]):
   - "THE RESULTS" label in #4ab8f0
   - Stat numbers: font-canela text-6xl text-[#99daff]
     text-shadow: 0 0 40px rgba(153,218,255,0.25)

5. NEXT PROJECT (bg-[#121212]):
   - "NEXT PROJECT →" with hover glow

Use generateStaticParams(), notFound(), generateMetadata().
```

---

### ━━━ PHASE 6 — SCROLL ANIMATIONS & SECTION SNAPPING ━━━

---

#### PROMPT 17 — ScrollTrigger Animations

```
Create components/animations/ScrollFade.tsx:

Props:
{
  children: React.ReactNode
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'maskReveal' | 'glowIn'
  delay?: number
  duration?: number  // default 0.9
  stagger?: number
  threshold?: string // default "top 85%"
  className?: string
}

Variants:
- fadeUp: y:40 opacity:0 → y:0 opacity:1
- fadeIn: opacity:0 → opacity:1
- slideLeft: x:-60 opacity:0 → x:0 opacity:1
- slideRight: x:60 opacity:0 → x:0 opacity:1
- scaleIn: scale:0.94 opacity:0 → scale:1 opacity:1
- maskReveal: clipPath 'inset(0 100% 0 0)' → 'inset(0 0% 0 0)'
- glowIn: opacity:0 + filter:blur(8px) → opacity:1 + blur(0)
  Also animates textShadow from 0 → '0 0 60px rgba(153,218,255,0.25)'
  (use this for major headings — they literally "glow on")

Respect prefers-reduced-motion. Cleanup on unmount.

Create components/animations/MarqueeRow.tsx:
- items: string[], speed?: number, direction?: 'left' | 'right'
- Duplicates items for seamless loop
- CSS marquee animation
- Item styling: text-[#99daff]/35 font-avenir text-xs tracking-widest uppercase
- Separator: 4px circle bg-[#4ab8f0]/35
- Row bg: bg-[#0d0d0d] border-y border-[#99daff]/6 py-4

Tech ticker usage between Hero and ClientList:
Items: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'GSAP', 'TAILWIND', 'PRISMA', 'AWS', 'OPENAI']
```

---

#### PROMPT 18 — Section Snapping (Optional)

```
Implement optional section snapping using GSAP ScrollTrigger's snap feature.

Create lib/hooks/useSectionSnap.ts:

Hook:
1. Accepts sectionSelector: string (e.g. '.snap-section')
2. Finds all matching sections on mount
3. Creates ScrollTrigger with:
   snap: {
     snapTo: 1 / (sections.length - 1),
     duration: { min: 0.3, max: 0.8 },
     ease: 'power1.inOut',
     delay: 0.1
   }
4. Desktop only (window.innerWidth > 1024)
5. Returns disableSnap()

Create <SectionSnapContainer> component:
- Wraps children, applies data-snap="true" to each direct child section
- Uses useSectionSnap internally
- Accepts enabled?: boolean prop

Dot indicator (right side, position fixed):
- Vertical stack of 5 dots
- Inactive: 6px circle bg-[#99daff]/18
- Active: 8px circle bg-[#99daff], box-shadow: 0 0 8px rgba(153,218,255,0.6)
- Smooth transition between states
```

---

### ━━━ PHASE 7 — PERFORMANCE & POLISH ━━━

---

#### PROMPT 19 — Performance Optimization

```
Optimize for production performance.

1. next.config.ts:
   - experimental.optimizeCss: true
   - swcMinify: true
   - image remotePatterns
   - Font cache headers: Cache-Control public, max-age=31536000

2. Font optimization in app/layout.tsx:
   - next/font/local for Canela and Avenir Next
   - display: 'swap', preload: true, subset: latin

3. <LazySection> wrapper:
   - Intersection Observer to defer below-fold rendering
   - Skeleton: bg-[#99daff]/4 animate-pulse rounded-2xl
   - Apply to: Reviews, OurWork, ClientList

4. GSAP optimization:
   - gsap.ticker.lagSmoothing(0)
   - gsap.context() in ALL components
   - ScrollTrigger.normalizeScroll(true)

5. Image components for later:
   - <TeamPhoto> using next/image, placeholder="blur"
   - <ProjectMockup> with enforced aspect-ratio

6. Page transition (components/layout/PageTransition.tsx):
   - Thin #99daff progress bar at top on route change
     glow: box-shadow 0 0 10px rgba(153,218,255,0.5)
   - Content: quick opacity fade
   - usePathname() to detect route changes
```

---

#### PROMPT 20 — Final Integration & App Router Setup

```
Wire everything together.

app/page.tsx render order:
1. <Hero />
2. <MarqueeRow /> (bg-[#0d0d0d])
3. <ClientList />
4. <ServicesGrid />
5. <ProcessSection />
6. <WhoWeAre />
7. <OurWork />
8. <Reviews />
9. <CTABanner />

Wrap in <SectionSnapContainer enabled={false}> initially.

app/layout.tsx:
- <Navbar /> → <main>{children}</main> → <Footer />
- <PageTransition /> wraps {children}
- initGSAP() in root-level useEffect

Create app/loading.tsx:
- "SRITEK" centered in font-canela text-[#99daff]
- text-shadow: 0 0 60px rgba(153,218,255,0.4)
- Thin #99daff line: width 0% → 100% in 600ms
- Line glow: box-shadow 0 2px 12px rgba(153,218,255,0.4)

Create app/not-found.tsx:
- "404" — font-canela text-[20vw] text-[#99daff]/5
- Radial glow radiating from text
- "PAGE NOT FOUND" — font-avenir text-[#99daff]/28
- <CTA label="GO HOME" href="/" />

Create app/contact/page.tsx:
- bg-[#121212] + dot-grid
- Heading: "LET'S BUILD SOMETHING" — font-canela text-[7vw] text-[#99daff]
  text-shadow: 0 0 80px rgba(153,218,255,0.15)
- Form fields: bg-[#99daff]/4 border border-[#99daff]/8 text-[#99daff] font-avenir
  focus:border-[#99daff]/38 focus:shadow-[0_0_20px_rgba(153,218,255,0.07)]
  No rounded corners
- Submit: <CTA size="lg" label="SEND MESSAGE" />
- API: POST to /api/contact (app/api/contact/route.ts — validation + console.log)

Final check: generateMetadata, semantic HTML, no hydration mismatches.
```

---

## 🗺️ EXECUTION ORDER

```
1 → 2 → 3 → 4     Setup & tokens
5 → 6              Layout shell (Nav + Footer)
7 → 8 → 9 → 10    Core homepage sections
11 → 12 → 13 → 14 Remaining sections + CTA
15                 About page
16                 Case study routing
17 → 18            Animations layer
19 → 20            Polish & integration
```

---

## ⚡ QUICK-REFERENCE: DESIGN DECISIONS

| Element | Value |
|---|---|
| Primary dark bg | `#121212` |
| Surface / elevated | `#1a1a1a` |
| Deepest black | `#0d0d0d` |
| Primary text / display | `#99daff` |
| Accent / labels | `#4ab8f0` |
| Muted text | `#99daff` at 38–55% opacity |
| Borders | `rgba(153,218,255,0.06–0.15)` |
| Glow (subtle, cards) | `box-shadow: 0 0 30px rgba(153,218,255,0.08)` |
| Glow (strong, buttons) | `box-shadow: 0 0 30px rgba(153,218,255,0.3)` |
| Glow (text headings) | `text-shadow: 0 0 80px rgba(153,218,255,0.18)` |
| Button border-radius | `0` (sharp everywhere) |
| Card border-radius | `16–24px` |
| Animation easing | `power3.out` (enters), `power2.inOut` (transitions) |
| Scroll trigger start | `"top 80%"` |
| Stagger | `0.06–0.10s` |
| Display font | Canela Light, vw-based sizing |
| UI font | Avenir Next 400/600/700 |

---

## 🎯 SRITEK vs MYGOM — KEY DIFFERENCES

| MYGOM | SRITEK |
|---|---|
| `#0e0b1e` navy + `#7aff6e` neon green | `#121212` true black + `#99daff` ice blue |
| Cartoon astronaut mascot | Abstract SVG glowing circles — no illustration needed |
| Electric green, high-contrast | Cool electric blue — refined, space-age |
| Light sections (white bg contrast) | All dark — contrast via surface depth only |
| Green as accent everywhere | Blue glow as the visual language (borders, shadows, text) |
| Condensed sans-serif heavy | Canela serif display + Avenir UI |
| Shouts | Radiates |

---

*Plan updated: May 2026 · Colors: `#121212` × `#99daff` · Tech: Next.js 14, GSAP 3, Tailwind CSS 3*
