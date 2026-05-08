# Cursor Prompts — Sritek Website Development

Use these prompts in order. Paste each prompt into Cursor's Composer (Cmd+I).
Always reference the attached `requirements.md` and `design.md` files in your project.

---

## PHASE 0 — Project Setup

### Prompt 0.1 — Init Next.js Project

```
Create a new Next.js 14 project called "sritek" with the following setup:
- TypeScript enabled
- Tailwind CSS configured
- App Router (not pages router)
- ESLint enabled
- src/ directory: NO (use root app/ directory)

After creating, install these additional packages:
  gsap @studio-freight/lenis lucide-react clsx tailwind-merge

Then configure tailwind.config.ts to extend with these custom colors and font variables:
  - colors: purple (#9a0002), green.neon (#4DFF7C), navy (#0D0D1F)
  - fontFamily: display (var(--font-display)), body (var(--font-body))

Configure app/layout.tsx to import Barlow Condensed (weights 700, 800) and DM Sans (weights 400, 500) from next/font/google and apply as CSS variables --font-display and --font-body on the html element.

Set globals.css with:
  - CSS reset (box-sizing, margin 0)
  - CSS variables for all colors from design.md
  - Base font: DM Sans on body
  - Smooth scroll behavior
```

### Prompt 0.2 — File Structure

```
Create the following empty files and folders to match the project structure in requirements.md:

app/
  page.tsx
  about/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  contact/page.tsx

components/
  layout/Navbar.tsx
  layout/Footer.tsx
  ui/Button.tsx
  ui/SectionLabel.tsx
  ui/GridDotBackground.tsx
  ui/PageProgress.tsx
  sections/HeroSection.tsx
  sections/TrustedBy.tsx
  sections/ServicesGrid.tsx
  sections/ProcessSection.tsx
  sections/WhoWeAre.tsx
  sections/OurWork.tsx
  sections/TestimonialCarousel.tsx
  sections/CTABanner.tsx

lib/
  gsap.ts
  lenis.ts
  data/services.ts
  data/projects.ts
  data/testimonials.ts

Each file should export a default empty component or empty object as appropriate.
```

---

## PHASE 1 — Foundation

### Prompt 1.1 — GSAP + Lenis Setup

```
Set up GSAP and Lenis smooth scrolling for the project.

In lib/gsap.ts:
  - Import gsap, ScrollTrigger, SplitText from 'gsap' and its plugins
  - Register ScrollTrigger and SplitText plugins
  - Export gsap, ScrollTrigger, SplitText

In lib/lenis.ts:
  - Import Lenis from '@studio-freight/lenis'
  - Import gsap and ScrollTrigger from lib/gsap.ts
  - Create and export an initLenis() function that:
    - Creates a new Lenis instance with smooth scrolling
    - Connects Lenis RAF to GSAP ticker: gsap.ticker.add((time) => lenis.raf(time * 1000))
    - Sets gsap.ticker.lagSmoothing(0)
    - Connects lenis scroll event to ScrollTrigger.update
    - Returns the lenis instance

Create a LenisProvider client component in components/LenisProvider.tsx that:
  - Uses "use client" directive
  - Calls initLenis() in a useEffect on mount
  - Destroys lenis on unmount
  - Returns children

Add LenisProvider to app/layout.tsx wrapping the main content.

Important: GSAP is loaded client-side only. In any component using GSAP, add "use client" and import from lib/gsap.ts.
```

### Prompt 1.2 — Navbar Component

```
Build the Navbar component in components/layout/Navbar.tsx following design.md section 5.1.

Requirements:
- "use client" directive
- Fixed top, full width, z-index 50
- Background: bg-[#9a0002] (purple)
- Height: 72px, flex items-center
- Logo: "SRITEK" in white, Barlow Condensed font, text-2xl font-extrabold, left side
- Navigation links center: SERVICES (with dropdown arrow ▾), PROJECTS, ABOUT, ARTICLES, EN ▾
  - Each link: white text, DM Sans, text-sm font-medium uppercase tracking-widest
  - Hover: text-white with animated underline (CSS ::after pseudo, width 0 to 100% on hover)
- CTA button right: "GET IN TOUCH"
  - Style: border-2 border-[#4DFF7C] text-[#4DFF7C] px-5 py-2 text-sm font-bold uppercase tracking-widest
  - Hover: bg-[#4DFF7C] text-[#0D0D1F] transition-all duration-200

On mount, add a GSAP entrance animation:
  - Navbar slides down from y: -100 to y: 0, opacity 0 to 1, duration 0.6, ease "power2.out"
  - Each nav link staggers in with opacity 0 to 1, delay 0.1s per item

Mobile (below md breakpoint):
  - Hide nav links and CTA
  - Show hamburger icon (Lucide Menu icon, white)
  - On click: toggle a full-screen overlay (bg-purple, z-40, fixed inset-0)
    - Show links vertically centered, large Barlow Condensed text
    - Animate overlay in with GSAP: y from -100% to 0, duration 0.5, ease "power3.inOut"
```

### Prompt 1.3 — Footer Component

```
Build the Footer component in components/layout/Footer.tsx following design.md section 5.10.

Structure:
- Outer: bg-[#0D0D1F]
- Top section: 5-column responsive grid (cols-2 md:cols-5), px-12 py-20
  Columns:
  1. SERVICES — links: AI Integration & Automation, Dedicated Development Team, Mobile App Development, Creating Intuitive UI/UX Design, Conversion Optimised Website, Custom Web App Development
  2. COMPANY — links: Projects, About, Articles
  3. LEGAL — links: Cookie Policy, Terms of Use
  4. FOLLOW US — links: Instagram, LinkedIn, Twitter, GitHub
  5. GET IN TOUCH — info: hello@sritek.in, +91-XXXXXXXXXX, Jaipur, Rajasthan, India

  Column header style: text-[#9a0002] text-xs font-medium uppercase tracking-widest mb-4
  Link style: text-white/80 text-sm hover:text-[#4DFF7C] transition-colors block mb-2

- Divider: thin border-white/10 border-t

- Copyright: "© 2026 SRITEK" — text-white/40 text-xs px-12 py-6

- Brand watermark: "SRITEK" in Barlow Condensed, font-extrabold, text-[#9a0002]
  - Font size: clamp(6rem, 20vw, 18rem)
  - Display block, w-full text-center or stretched
  - Line height 0.85, overflow hidden, select-none
  - On scroll enter: animate letters from opacity 0.2 to 1, y 50 to 0 via GSAP ScrollTrigger
```

### Prompt 1.4 — Reusable UI Components

```
Create the following small reusable UI components:

1. components/ui/Button.tsx
   Props: variant ('primary' | 'outline' | 'dark'), size ('sm' | 'md' | 'lg'), children, onClick, href, className
   - primary: bg-[#4DFF7C] text-[#0D0D1F] font-bold uppercase tracking-widest rounded-sm
   - outline: border-2 border-[#4DFF7C] text-[#4DFF7C] hover:bg-[#4DFF7C] hover:text-[#0D0D1F]
   - dark: bg-[#0D0D1F] text-white hover:bg-[#0D0D1F]/80
   - If href is provided, render as Next.js Link, otherwise as button
   - All variants: px-8 py-3 text-sm font-bold transition-all duration-200

2. components/ui/SectionLabel.tsx
   Props: children, className
   - Small caps label: text-xs font-medium uppercase tracking-[0.15em]
   - Default color: text-[#4DFF7C] (use text-white/50 class override for purple sections)

3. components/ui/GridDotBackground.tsx
   - "use client"
   - An absolutely positioned div covering its container (inset-0, pointer-events-none)
   - CSS background using radial-gradient for dots: rgba(255,255,255,0.10) 1.5px at 80px 80px grid
   - Also render ~20 small absolutely positioned hollow squares (3px border, 12px×12px, white/10)
   - Square positions should be randomly scattered but feel grid-aligned (use fixed positions array)

4. components/ui/PageProgress.tsx
   - "use client", fixed bottom-8 right-8, z-50
   - SVG circle (w-16 h-16), white background with slight shadow, rounded-full
   - Inner text: "PAGE PROGRESS" small rotated label (font-size 6px, letter-spacing 0.15em)
   - Circle stroke: purple, strokeDasharray = 2*PI*28, strokeDashoffset animates with scroll
   - Number: bold white text-xs in center showing 0-100%
   - Use GSAP ScrollTrigger onUpdate to animate stroke and update number
   - Small labels "PAGE" and "PROGRESS" curved around the outside (use textPath on SVG arc or position absolutely)
```

---

## PHASE 2 — Home Page Sections

### Prompt 2.1 — Hero Section

```
Build HeroSection in components/sections/HeroSection.tsx following design.md section 5.2.

Layout:
- Full viewport height (min-h-screen)
- Outer wrapper: bg-[#9a0002] (purple) with padding ~px-6 pb-12 pt-[72px] (accounting for navbar)
- Inner box: bg-[#0D0D1F] rounded-2xl relative overflow-hidden w-full min-h-[85vh]
  - Apply GridDotBackground component inside

Content:
- Heading text: Barlow Condensed 800, neon green (#4DFF7C), uppercase
  Lines stacked:
  Line 1: "TURNING" — top-left, ~9rem
  Line 2: "IDEAS" — top-right, ~9rem
  Line 3: "INTO  POWERFUL" — middle (two words spread apart), ~7rem
  Line 4: "SOLUTIONS" — bottom-right, ~9rem
  Use absolute/relative positioning or flex with justify-between for spread layout

- Subtitle: bottom-left, white, DM Sans 400, max-w-[280px], text-base
  "Stop wasting your time. We ship your SaaS 3× faster with production-grade quality — trusted by Jaipur's fastest-growing startups."

- Mascot: absolutely positioned right-center (right-8 top-1/2 -translate-y-1/3)
  For now, create a placeholder SVG astronaut figure:
  - White circle head (r=60), purple helmet visor detail
  - White body rectangle rounded, purple headphone circles
  - White glove hands, white boots
  - Purple coiled cable SVG path from mascot down to bottom of hero
  - The SVG should be ~300px wide

GSAP Animations (in useEffect after mount):
1. Hero heading: SplitText on each line, chars animate from {y: 100, opacity: 0, rotationX: -30} with stagger 0.02, ease "power4.out", duration 0.8
2. Mascot: fade in from x: 150 opacity: 0, then start infinite float: y -20 yoyo repeat:-1 duration 2.5 ease "sine.inOut"
3. Subtitle: fade in from y: 20 opacity: 0, delay 1s
4. Purple cable path: SVG stroke-dasharray animation — draw from 0 to full length, delay 0.5s, duration 1.5s
```

### Prompt 2.2 — Trusted By Section

```
Build TrustedBy section in components/sections/TrustedBy.tsx following design.md section 5.3.

Data: Create lib/data/clients.ts with array of { name, service } objects:
[
  { name: "ANTARA", service: "Manufacturing & Instant Quoting Platform" },
  { name: "AGMIS", service: "Dedicated Team" },
  { name: "BIOMA", service: "Web Development & UI/UX Design" },
  { name: "BMI GROUP", service: "Web Development" },
  { name: "TECHSTARS JAIPUR", service: "E-Commerce & UI/UX Design" },
  { name: "STARTUPJAIPUR", service: "ERP System" },
  { name: "ESKIMI", service: "Web Development & UI/UX Design" },
  { name: "EVERGROWTH", service: "Sales Analytics Platform" },
  { name: "FERIKAS", service: "E-Commerce & UI/UX Design" },
  { name: "FAVRO", service: "Web Development" },
]

Layout:
- Background: bg-[#0D0D1F]
- Two-column layout: left (40%) and right (60%)
- Left:
  - Heading "TRUSTED BY RAJASTHAN'S FASTEST GROWING COMPANIES" — Barlow Condensed 800, text-[#4DFF7C], ~4rem
  - GET IN TOUCH button below (Button component, variant="primary")
- Right:
  - Each client row: flex justify-between items-center, border-b border-white/10, py-4 cursor-pointer
    - Left of row: arrow icon (→) in white/50 + client name in Barlow Condensed 700 white uppercase text-2xl
    - Right of row: service name in white/50 text-sm DM Sans
    - Hover: entire row background tint (white/5), name becomes text-[#4DFF7C], arrow moves right (translateX 6px transition)

GSAP:
- ScrollTrigger on container start: 'top 70%'
- Heading: SplitText words reveal, y: 60 opacity: 0, stagger 0.1
- Client rows: stagger from x: 50 opacity: 0, each row 0.05s apart
```

### Prompt 2.3 — Services Grid

```
Build ServicesGrid in components/sections/ServicesGrid.tsx following design.md section 5.4.

Data in lib/data/services.ts:
[
  { id: "01", title: "AI INTEGRATION &\nAUTOMATION", slug: "ai-integration" },
  { id: "02", title: "DEDICATED\nDEVELOPMENT TEAM", slug: "dedicated-team" },
  { id: "03", title: "MOBILE APP\nDEVELOPMENT", slug: "mobile-app-development" },
  { id: "04", title: "CREATING INTUITIVE\nUI/UX DESIGN", slug: "ui-ux-design" },
  { id: "05", title: "CONVERSION\nOPTIMISED WEBSITE", slug: "conversion-website" },
  { id: "06", title: "CUSTOM WEB APP\nDEVELOPMENT", slug: "custom-web-app" },
]

Layout:
- Background: bg-[#9a0002]
- Section padding: py-20 px-8
- 3×2 grid: grid grid-cols-1 md:grid-cols-3 gap-4

ServiceCard component (inline):
- bg-white rounded-2xl p-8 relative overflow-hidden cursor-pointer group
- border-2 border-transparent hover:border-black transition-all duration-200
- Service label: "SERVICE / 01" — text-[#9a0002] text-xs font-medium uppercase tracking-widest mb-4
- Title: Barlow Condensed 800, text-[#0D0D1F], text-4xl leading-none, whitespace-pre-line
- Arrow button: absolute top-6 right-6, bg-[#4DFF7C] rounded-sm w-10 h-10 flex items-center justify-center
  - Hidden by default (opacity-0), shows on group-hover (opacity-100 scale 1)
  - GSAP: on card mouseenter, animate arrow from opacity 0 scale 0.7 to opacity 1 scale 1
- Hover: card scale 1.02 (CSS transform transition)

GSAP ScrollTrigger:
- All 6 cards stagger from: opacity 0, y: 50, scale: 0.93
- stagger: 0.08, duration: 0.55, ease: "power2.out"
- trigger: grid container, start: 'top 75%'
```

### Prompt 2.4 — Process Section

```
Build ProcessSection in components/sections/ProcessSection.tsx following design.md section 5.5.

Layout:
- Background: bg-[#0D0D1F] with GridDotBackground overlay
- Padding: py-32 px-12
- Two-column: content left (50%) and illustration right (50%)

Left content:
- SectionLabel "OUR PROCESS" in green at top
- Large heading: "DESIGN  DEVELOPMENT" (3-4 spaces between words for spread effect)
  Barlow Condensed 800, text-[#4DFF7C], clamp(3rem, 7vw, 6rem)
- White card: bg-white rounded-2xl p-8 max-w-sm mt-8
  Text: "From idea to working software, we handle every step — design, development, and thorough testing — to bring your vision to life."
  Text color: text-[#0D0D1F], DM Sans 400

Right illustration:
- Absolutely positioned or right column
- Purple tilted rectangle: bg-[#9a0002] w-[400px] h-[280px] rounded-xl rotate-6 relative
  - Pixel grid pattern inside: 6×8 grid of small squares, alternating green/purple colors
- Robot mascot SVG overlapping rectangle: large head-bob character pointing at the grid
  - Reuse mascot from hero, different pose (pointing/touching grid)

GSAP:
- Heading: SplitText chars reveal on scroll
- White card: slides in from left (x: -40, opacity: 0)
- Illustration: slides in from right (x: 60, opacity: 0), slight rotation spring
- Mascot: idle bob animation (y ±10, repeat -1, yoyo, duration 2)
```

### Prompt 2.5 — Who We Are

```
Build WhoWeAre section in components/sections/WhoWeAre.tsx following design.md section 5.6.

Layout:
- Background: bg-[#0D0D1F] inside purple margin (same pattern as hero — outer bg-[#9a0002], inner bg-[#0D0D1F] rounded-2xl) OR full dark
- Two-column grid: photos left (55%), text right (45%)

Photo collage (left):
- 3 overlapping photo containers using absolute positioning within a relative container h-[600px]
- Photo 1: top-left, w-56 h-72, rounded-2xl, border-2 border-[#9a0002], rotate-[-3deg], z-10
- Photo 2: center, w-64 h-80, rounded-2xl, border-2 border-white/20, z-20, translate-x-16 translate-y-8
- Photo 3: bottom-right, w-56 h-64, rounded-2xl, border-2 border-[#9a0002], rotate-[2deg], z-10, translate-y-24
- Use bg-gray-700 placeholder with "Team Photo" text for now (real photos come later)

Text (right):
- "WHO WE ARE" heading: Barlow Condensed 800, text-[#4DFF7C], text-6xl
- Body: DM Sans 400, text-white/85, text-lg, leading-relaxed, max-w-md, mt-6
  "Sritek is a talented team of developers, UI/UX designers, and project managers creating custom software, SaaS, and AI that scales your business — built right here in Jaipur."
- ABOUT US button: Button component, variant="primary", mt-8

GSAP ScrollTrigger:
- Photos: each slides in from different directions with stagger (photo 1 from left, photo 2 from bottom, photo 3 from right)
- Heading: SplitText chars
- Body + button: fade up
```

### Prompt 2.6 — Our Work / Projects

```
Build OurWork section in components/sections/OurWork.tsx following design.md section 5.7.

Data in lib/data/projects.ts (3 sample projects):
[
  {
    id: "01",
    category: "AI-DRIVEN PLATFORM",
    title: "AI VIDEO SURVEY PLATFORM",
    description: "AI-powered video survey platform transforms market research by capturing authentic feedback with video, offering real insights...",
    slug: "ai-video-survey",
    featured: true
  },
  {
    id: "02",
    category: "SAAS PRODUCT",
    title: "E-COMMERCE ANALYTICS DASHBOARD",
    description: "A full-stack SaaS analytics platform built for Jaipur's growing e-commerce sector...",
    slug: "ecommerce-analytics",
    featured: false
  },
  {
    id: "03",
    category: "MANUFACTURING",
    title: "CUSTOM QUOTING SYSTEM",
    description: "A sheet metal processing company modernized custom orders with a custom e-commerce platform...",
    slug: "quoting-system",
    featured: false
  }
]

Layout:
- Background: bg-[#9a0002], py-20 px-8
- "OUR WORK" heading: Barlow Condensed 800, text-white, text-7xl, mb-12

Cards layout:
- Row 1: 2 cards side by side (grid-cols-2), first card has featured border
- Row 2: 1 wide card (col-span-2)

ProjectCard component:
- bg-white rounded-2xl p-8 overflow-hidden relative group cursor-pointer
- Category label: text-[#9a0002] text-xs uppercase tracking-widest font-medium mb-2
- Title: Barlow Condensed 800, text-[#0D0D1F], text-4xl, mb-4
- Description: DM Sans 400, text-[#0D0D1F]/70, text-sm, line-clamp-3
- Right side: placeholder image area (bg-gray-100 rounded-xl h-48)
- Featured card: border-2 border-[#0D0D1F], arrow button (green) appears on hover

"SHOW MORE" button: centered below grid, Button variant="outline" (green outline)

GSAP:
- Cards stagger reveal: y: 60, opacity: 0, stagger: 0.12, scrollTrigger start: 'top 75%'
- On card hover: image inside scales to 1.05 (GSAP quickTo)
```

### Prompt 2.7 — Testimonials Carousel

```
Build TestimonialCarousel in components/sections/TestimonialCarousel.tsx following design.md section 5.8.

Data in lib/data/testimonials.ts:
[
  { quote: "Working with Sritek has been transformative. Their team delivered our SaaS MVP in 6 weeks with exceptional quality. Communication was always clear and they felt like part of our team.", company: "TECHSTARS JAIPUR" },
  { quote: "The ability to adapt in a rapidly changing business environment and close communication makes Sritek a strong software development partner.", company: "KILO.HEALTH" },
  { quote: "Speed, flexibility, and quality — these are the key values that our company lives by. Sritek enforces our values and makes them even stronger.", company: "FINTEGRY" },
  { quote: "It has been a few months Sritek's developer works as part of our in-house IT team. Highly qualified professional, happy to have such a partner.", company: "SPOTOS" },
  { quote: "We have been working with Sritek since early 2024. The team is highly qualified, communication is always simple and effortless.", company: "AGMIS" },
]

Layout:
- Background: bg-[#9a0002], py-20
- "CLIENT REVIEWS" heading: Barlow Condensed 800, text-white, text-7xl, px-8 mb-12

Carousel:
- Outer: overflow-hidden, position relative
- Inner track: flex, transition-transform, gap-6
- Each card: min-w-[340px], bg-white, rounded-2xl, p-8, flex-shrink-0
  - Quote text: DM Sans 400, text-[#0D0D1F], text-base, leading-relaxed, italic, mb-8
  - Company: text-[#9a0002] text-xs uppercase tracking-widest font-medium
- Show ~3.5 cards on desktop, 1.2 on mobile (peek next card)

Navigation:
- Two square dark buttons (bg-[#0D0D1F] w-12 h-12 rounded-sm), centered below
- Left arrow and right arrow (Lucide icons, white)
- On click: GSAP animate carousel track x position (not CSS transition — use gsap.to for smooth ease)
- Auto-play: every 4s advance one card

On mount GSAP:
- Heading SplitText chars reveal
- Cards drag-scroll on mobile: implement basic touch/mouse drag
```

### Prompt 2.8 — CTA Banner + Assemble Home Page

```
1. Build CTABanner in components/sections/CTABanner.tsx following design.md section 5.9:

Layout:
- Outer: bg-[#9a0002] px-6 pb-12
- Inner box: bg-[#0D0D1F] rounded-2xl relative overflow-hidden min-h-[420px] flex items-center justify-center
  - GridDotBackground overlay
- Heading: "LET'S WORK TOGETHER" — Barlow Condensed 800, text-[#4DFF7C], text-center
  Font size: clamp(3rem, 8vw, 7rem), leading-none
- CTA button: Button variant="primary" "GET IN TOUCH" centered below heading, mt-8
- Speech bubble card: bg-white rounded-2xl p-6 absolute right-8 top-1/2 -translate-y-1/2 max-w-[280px]
  Text: "Ready to bring your ideas to life? We're here to help." DM Sans 400 text-[#0D0D1F]
- Mascot hand SVG: absolute bottom-0 left-1/3, pointing hand illustration with purple cable

GSAP:
- Heading: massive SplitText char reveal on scroll, large stagger (0.04)
- Speech bubble: slides in from right on scroll enter
- Mascot hand: continuous wiggle animation

2. Assemble app/page.tsx:
Import and render all sections in order:
  <Navbar />
  <HeroSection />
  <TrustedBy />
  <ServicesGrid />
  <ProcessSection />
  <WhoWeAre />
  <OurWork />
  <TestimonialCarousel />
  <CTABanner />
  <Footer />
  <PageProgress />

Wrap page in a main element. Ensure Navbar is in layout.tsx (fixed), not page.tsx.
```

---

## PHASE 3 — About Page

### Prompt 3.1 — About Page

```
Build the About page at app/about/page.tsx with all sections following design.md.

Sections in order:

1. AboutHero:
   - bg-[#9a0002], full height, huge white heading
   - "THE TEAM BEHIND YOUR SOFTWARE" Barlow Condensed 800, text-white, clamp(4rem, 10vw, 9rem)
   - Animated in via SplitText on page load

2. TeamPhoto:
   - Full-width next/image (use a placeholder team photo bg-gray-700 for now)
   - Slight parallax on scroll: GSAP ScrollTrigger scrub, y moves -30px

3. AboutDescription (right-aligned text block):
   - bg-[#9a0002], text block on right side (ml-auto max-w-2xl px-12 py-20)
   - DM Sans 400, text-white, text-xl, leading-relaxed
   - "Our talented team of developers, UI/UX designers, and project managers is passionate about turning your business needs into efficient, scalable software solutions. As a trusted custom software company based in Jaipur, we specialize in web and mobile apps, SaaS platforms, and AI automation."

4. MilestoneTimeline:
   - bg-[#0D0D1F] py-32 px-12
   - SectionLabel: "OUR JOURNEY: KEY MILESTONES" green
   - 3-column grid
   - Each: huge number (Barlow Condensed, text-[#4DFF7C], 10rem), thin green line with dot, bold white title, body text
   - Data: Foundation / Initial Growth / From Local to Global
   - GSAP: numbers count up from 0 when entering viewport, timeline line draws left to right

5. Pillars:
   - bg-[#9a0002] py-20 px-12
   - SectionLabel: "THE PILLARS OF SRITEK"
   - 4 rows separated by border-white/20 border-b
   - Each row: flex justify-between items-start py-10
     Left: heading (Barlow Condensed 800 text-white text-5xl)
     Right: description (DM Sans text-white/80 text-lg max-w-md)
   - On hover: left text animates to text-[#4DFF7C]
   - Values: Embracing Ideas and Innovation, Driven for Excellence, Dedicated to Success, Honesty and Clarity
   - GSAP ScrollTrigger: each row slides in from bottom stagger

6. TheTeam:
   - bg-[#0D0D1F] py-20 px-12
   - "THE TEAM" Barlow Condensed 800, text-[#4DFF7C], text-7xl, mb-12
   - 3-column grid of TeamMemberCards
   - TeamMemberCard: rounded-2xl overflow-hidden, top 65% bg-gray-700 (photo placeholder), bottom 35% bg-white p-6
     Name: DM Sans 500 text-[#0D0D1F] text-lg
     Role: text-[#9a0002] text-xs uppercase tracking-widest
   - Team members: Founder (CEO & Founder), CTO, Project Manager
   - GSAP: stagger cards from y: 60 opacity: 0

7. CTABanner (reuse component)
8. Footer (reuse component)
```

---

## PHASE 4 — Polish & Details

### Prompt 4.1 — Custom Cursor (optional)

```
Add a custom cursor to the site:
- Hide default cursor (cursor: none on body)
- Create a CustomCursor component: small white dot (8px) that follows mouse with slight lag
- Secondary larger circle (40px, border-2 border-[#4DFF7C], opacity-60) that follows with more lag
- On hover over buttons/links: large circle scales to 80px and changes to bg-[#4DFF7C]/20
- Use GSAP quickTo for performance: gsap.quickTo(element, "x", {duration: 0.3, ease: "power3"})
- Add to layout.tsx
```

### Prompt 4.2 — Mobile Navigation

```
Update Navbar.tsx for complete mobile experience:
- Below md breakpoint: show hamburger (Lucide Menu icon)
- On click: full-screen menu overlay appears
  - bg-[#9a0002] fixed inset-0 z-40 flex flex-col justify-center px-8
  - GSAP animation: clipPath from "inset(0 0 100% 0)" to "inset(0 0 0% 0)", duration 0.6 ease "power3.inOut"
  - Links: vertical list, Barlow Condensed 800 text-white text-6xl, each link staggered in
  - Close (X) icon top-right
  - On link click or X: reverse animation then remove overlay
```

### Prompt 4.3 — Scroll-triggered Counters

```
Add animated number counters to the Trusted By section.
Above the client list, add a stats row with 3 numbers:
- "50+" Scale-ups
- "3x" Faster Delivery
- "5+" Years Experience

Each stat: large Barlow Condensed number in green, label below in white/60 DM Sans.

When stats enter viewport (ScrollTrigger), animate numbers counting up using GSAP:
- gsap.to(obj, { val: targetNumber, duration: 2, ease: "power1.out", onUpdate: () => element.textContent = Math.round(obj.val) + suffix })
```

### Prompt 4.4 — SEO & Metadata

```
Add complete Next.js metadata to each page:

In app/layout.tsx: add base metadata object with:
  title: { default: "Sritek — Custom Software Development in Jaipur", template: "%s | Sritek" }
  description: "Sritek is Jaipur's leading custom software development studio. We build SaaS products, mobile apps, and AI solutions."
  keywords, openGraph, twitter card fields

In app/page.tsx: title "Home", OG description
In app/about/page.tsx: title "About"
In app/projects/page.tsx: title "Our Projects"
In app/contact/page.tsx: title "Contact Us"

Also add a JSON-LD Organization schema script in layout.tsx:
  name: Sritek, url: https://sritek.in, address: Jaipur Rajasthan India
```

### Prompt 4.5 — Final Polish Pass

```
Do a final polish pass on the entire site:

1. Typography: Ensure all display headings use Barlow Condensed with font-extrabold and uppercase
2. Spacing: Verify section padding is consistent (py-20 lg:py-32) across all sections
3. Color: No section should have mismatched backgrounds — alternate strictly between bg-[#9a0002] and bg-[#0D0D1F]
4. Animations:
   - Ensure all ScrollTrigger animations have markers: false (remove debug markers)
   - All SplitText usage should clean up on component unmount (split.revert())
   - All GSAP animations should use gsap context for cleanup
5. Accessibility:
   - All interactive elements have focus-visible ring styles
   - Images have alt text
   - nav has role="navigation" aria-label="Main navigation"
6. Performance:
   - All images use next/image with width/height
   - GSAP imports are only in "use client" components
   - No GSAP code runs server-side
7. Hover transitions: All card and button transitions use duration-200 or duration-300 with appropriate easing
8. Responsive: Test and fix layout at 375px (mobile), 768px (tablet), 1280px (desktop)
```

---

## TIPS FOR CURSOR

1. **Always reference design.md** — paste relevant sections when asking for specific components
2. **Add "use client" reminder** — every component using hooks or GSAP needs this
3. **Use incremental prompts** — build one section at a time, test, then continue
4. **For GSAP SplitText** — it requires a paid GSAP Club membership. If unavailable, use a free alternative: split text into `<span>` elements manually with a utility function
5. **Placeholder images** — use `bg-gray-700 rounded-xl` divs until real assets arrive
6. **Test scroll animations** — GSAP ScrollTrigger needs page height to work, ensure enough content exists before testing
