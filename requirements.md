# Sritek Website — Requirements Document

## 1. Project Overview

**Project Name:** Sritek — Official Website  
**Business:** Sritek is a Jaipur-based software development startup offering custom web apps, mobile apps, UI/UX design, AI integrations, and dedicated development teams.  
**Stack:** Next.js 14 (App Router), Tailwind CSS, GSAP (with ScrollTrigger), TypeScript  
**Reference Design:** mygom.tech (replicate layout, interactions, and visual language — NOT the content)

---

## 2. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 with App Router |
| Styling | Tailwind CSS (custom config) |
| Animations | GSAP + ScrollTrigger + gsap/SplitText |
| Font | Barlow Condensed (display), Inter or DM Sans (body) via Google Fonts / next/font |
| Icons | Lucide React |
| Image Optimization | next/image |
| Deployment | Vercel |

---

## 3. Pages

### 3.1 Home (`/`)
| Section | Description |
|---|---|
| Navbar | Fixed top nav with logo, links, CTA button |
| Hero | Full-viewport dark panel, huge stacked text, mascot character SVG, subtitle paragraph |
| Trusted By | List of client companies with service categories |
| Services | 6 cards in 3×2 grid on purple background |
| Our Process | Dark section, large heading, description card, mascot illustration |
| Who We Are | Photo collage left, text + CTA right |
| Our Work | Featured project cards, "Show More" button |
| Client Reviews | Horizontal testimonial carousel |
| CTA Banner | "Let's Work Together" dark panel + button |
| Footer | 5-column links + huge brand name watermark |

### 3.2 About (`/about`)
| Section | Description |
|---|---|
| Hero | Purple bg, huge white display text heading |
| Team Photo | Full-width team group photo |
| About Text | Right-aligned body copy block |
| Journey / Milestones | Numbered (01, 02, 03…) horizontal timeline on dark bg |
| Pillars | Accordion-style values list on purple bg |
| The Team | 3-column member cards with photo, name, role |
| CTA Banner | Reusable CTA section |
| Footer | Shared footer component |

### 3.3 Projects (`/projects`)
- Grid of project cards (category tag, title, description, preview image)
- Filtering by service type
- Individual project page (`/projects/[slug]`)

### 3.4 Services (`/services/[slug]`)
- One page per service
- Hero, description, process steps, related projects, CTA

### 3.5 Articles (`/articles`)
- Blog listing page
- Individual article (`/articles/[slug]`)

### 3.6 Contact (`/contact`)
- Contact form (name, email, project type, budget, message)
- Company details sidebar

---

## 4. Components Inventory

### Global
- `Navbar` — fixed, purple bg, logo left, nav center, CTA right
- `Footer` — dark bg, 5 columns, large brand watermark
- `CTABanner` — reusable "Let's Work Together" dark panel
- `PageProgress` — circular scroll progress indicator (bottom right)
- `CustomCursor` — optional branded cursor

### Home
- `HeroSection`
- `TrustedBy` (client list)
- `ServiceCard` (×6)
- `ProcessSection`
- `WhoWeAre`
- `WorkCard` (project preview)
- `TestimonialCarousel`

### About
- `MilestoneTimeline`
- `PillarsAccordion`
- `TeamMemberCard`

### Shared UI
- `Button` (variants: primary green, outline, dark)
- `SectionLabel` (small caps label above headings)
- `ArrowLink`
- `GridDotBackground` (decorative dot grid overlay)
- `MascotSVG` (animated robot/space character)

---

## 5. GSAP Animations — Full Spec

### 5.1 Page Load
- Navbar slides down with fade-in (delay stagger on each nav item)
- Hero heading letters split and animate up using `SplitText` + `from` tween (y: 120, opacity: 0, stagger: 0.03)
- Hero mascot floats in from right (x: 200, opacity: 0, ease: "back.out(1.7)")
- Subtitle paragraph fades in after heading (delay 0.8s)

### 5.2 Scroll-Triggered (ScrollTrigger)
- Every section heading: `SplitText` character/word reveal on scroll enter
- Service cards: stagger reveal (scale from 0.92, y from 40) as they enter viewport
- Client list rows: each row slides in from right with stagger
- Milestone numbers: count-up animation when timeline enters viewport
- Project cards: stagger fade-up
- Testimonial cards: horizontal slide-in

### 5.3 Mascot / Character Animations
- Hero mascot: subtle floating loop (y: -15, yoyo: true, repeat: -1, duration: 2.5, ease: "sine.inOut")
- Process mascot: idle pointing animation (finger taps the grid)
- CTA mascot hand: wiggle loop

### 5.4 Hover Interactions
- Service cards: border glow + slight scale (1.02) + green arrow appears
- Nav links: underline draw animation
- CTA button: background fill from left (clip-path or pseudo-element)
- Project cards: image scale inside container (overflow hidden), overlay appears

### 5.5 Scroll Progress Indicator
- Circular SVG ring (bottom right) fills stroke-dashoffset as user scrolls
- Percentage counter updates

### 5.6 Smooth Scrolling
- Use Lenis (lightweight smooth scroll) paired with GSAP ticker for RAF sync

---

## 6. Content — Sritek

### Brand Voice
- Bold, confident, technical yet approachable
- Jaipur-based but globally capable

### Hero Copy
```
TURNING
IDEAS INTO
POWERFUL
SOLUTIONS
```
Subtitle: "Stop wasting your time. We ship your SaaS 3× faster with production-grade quality — trusted by Jaipur's fastest-growing startups."

### Services (6)
1. AI Integration & Automation — Service / 01
2. Dedicated Development Team — Service / 02
3. Mobile App Development — Service / 03
4. Creating Intuitive UI/UX Design — Service / 04
5. Conversion Optimised Website — Service / 05
6. Custom Web App Development — Service / 06

### Trusted By Section Heading
"TRUSTED BY RAJASTHAN'S FASTEST GROWING COMPANIES"

### Who We Are
"Sritek is a talented team of developers, UI/UX designers, and project managers creating custom software, SaaS, and AI that scales your business — built right here in Jaipur."

### CTA
"LET'S WORK TOGETHER"
Sub-copy: "Ready to bring your ideas to life? We're here to help."
Email: hello@sritek.in

### Footer Contact
- Email: hello@sritek.in
- Phone: +91 XXXXXXXXXX
- Address: Jaipur, Rajasthan, India

---

## 7. SEO & Meta

- `metadata` export from each page (Next.js App Router)
- OG image per page
- JSON-LD schema (Organization, WebSite)
- Sitemap via `next-sitemap`
- robots.txt

---

## 8. Performance Requirements

- Lighthouse score ≥ 90 (Performance, Accessibility, SEO)
- GSAP loaded client-side only (`"use client"` + dynamic import with `ssr: false` where needed)
- Images: WebP/AVIF via `next/image`
- Fonts: preloaded via `next/font`
- No layout shift on animation init (reserve space before JS hydrates)

---

## 9. Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile | < 768px |
| Tablet | 768px – 1024px |
| Desktop | > 1024px |

On mobile:
- Navbar becomes hamburger menu (slide-in drawer)
- Hero text scales down (fluid clamp typography)
- Service cards become single column
- Team cards stack vertically

---

## 10. File / Folder Structure

```
sritek/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, Lenis, GSAP context)
│   ├── page.tsx            # Home
│   ├── about/page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── services/[slug]/page.tsx
│   ├── articles/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── GridDotBackground.tsx
│   │   ├── PageProgress.tsx
│   │   └── MascotSVG.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TrustedBy.tsx
│       ├── ServicesGrid.tsx
│       ├── ProcessSection.tsx
│       ├── WhoWeAre.tsx
│       ├── OurWork.tsx
│       ├── TestimonialCarousel.tsx
│       └── CTABanner.tsx
├── lib/
│   ├── gsap.ts             # GSAP registration + plugins
│   ├── lenis.ts            # Smooth scroll setup
│   └── data/               # Static content (JSON or TS)
├── public/
│   ├── images/
│   └── fonts/
├── styles/
│   └── globals.css
├── tailwind.config.ts
└── tsconfig.json
```

---

## 11. Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "gsap": "^3.12.x",
    "@studio-freight/lenis": "^1.x",
    "lucide-react": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/react": "^18.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "latest",
    "postcss": "latest"
  }
}
```
