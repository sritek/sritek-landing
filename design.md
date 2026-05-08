# Sritek Website — Design System Document

## 1. Design Philosophy

The design language is **bold typographic brutalism meets tech-futurism** — an unapologetic, high-energy aesthetic that communicates speed, competence, and ambition. The visual identity uses three alternating "worlds": a vivid electric purple world, a near-black dark navy world, and white card surfaces — creating sharp contrast-based rhythm as the user scrolls.

---

## 2. Color Palette

```css
:root {
  /* Primary */
  --color-purple: #9a0002; /* Electric purple — navbar, sections, CTAs */
  --color-purple-dark: #5500dd; /* Hover/pressed state */

  /* Backgrounds */
  --color-dark: #0d0d1f; /* Deep navy — hero, process, footer panels */
  --color-dark-alt: #0a0a18; /* Slightly darker variant */

  /* Accent */
  --color-green: #4dff7c; /* Neon lime green — headings on dark, CTA borders */
  --color-green-dark: #39e865; /* Hover state */

  /* Neutrals */
  --color-white: #ffffff;
  --color-off-white: #f5f5f5;
  --color-card: #ffffff; /* Service card bg */
  --color-card-border: #e5e5e5;

  /* Dot grid */
  --color-dot: rgba(255, 255, 255, 0.08); /* On dark sections */
  --color-dot-purple: rgba(0, 0, 0, 0.1); /* On purple sections */

  /* Text */
  --color-text-primary: #ffffff;
  --color-text-body: rgba(255, 255, 255, 0.85);
  --color-text-dark: #0d0d1f; /* On white cards */
  --color-text-label: #4dff7c; /* Section labels on dark bg */
  --color-text-label-purple: rgba(255, 255, 255, 0.6); /* Labels on purple */
}
```

### Tailwind Config Extension

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#9a0002",
          dark: "#5500DD",
        },
        green: {
          neon: "#4DFF7C",
          dark: "#39E865",
        },
        navy: {
          DEFAULT: "#0D0D1F",
          deep: "#0A0A18",
        },
      },
    },
  },
};
```

---

## 3. Typography

### Font Families

| Role               | Font                 | Weight          | Style                     |
| ------------------ | -------------------- | --------------- | ------------------------- |
| Display / Headings | **Barlow Condensed** | 800 (ExtraBold) | Uppercase, tight tracking |
| Sub-headings       | **Barlow Condensed** | 700 (Bold)      | Uppercase                 |
| Body / UI          | **DM Sans**          | 400, 500        | Normal                    |
| Labels             | **DM Sans**          | 500             | Uppercase, wide tracking  |

Import via `next/font/google`:

```ts
import { Barlow_Condensed, DM_Sans } from "next/font/google";

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});
```

### Type Scale

```css
/* Display — Hero / Section Headings */
.text-display-xl {
  font-family: var(--font-display);
  font-size: clamp(4rem, 10vw, 9rem);
  font-weight: 800;
  line-height: 0.92;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

/* Display — Medium Headings */
.text-display-lg {
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  font-weight: 800;
  line-height: 0.95;
  text-transform: uppercase;
}

/* Section labels */
.text-label {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* Body */
.text-body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
}
```

---

## 4. Spacing System

Follow 8px base grid. Use Tailwind spacing utilities. Key layout values:

| Token               | Value                                  | Usage                   |
| ------------------- | -------------------------------------- | ----------------------- |
| Section padding Y   | `py-20 lg:py-32`                       | All full-width sections |
| Container max-width | `max-w-[1280px] mx-auto px-6 lg:px-12` | Content wrapper         |
| Card padding        | `p-8`                                  | Service / project cards |
| Gap between cards   | `gap-6`                                | Grid gaps               |
| Navbar height       | `h-[72px]`                             | Fixed top nav           |

---

## 5. Section-by-Section Design Spec

### 5.1 Navbar

- **Background:** `bg-purple` (#9a0002)
- **Height:** 72px, fixed top, full width
- **Logo:** White text, bold, ~24px, left aligned
- **Nav links:** White text, DM Sans 500, uppercase tracking, spaced `gap-8`
- **Language toggle:** "EN ▾" dropdown
- **CTA Button:** `border-2 border-green-neon text-green-neon hover:bg-green-neon hover:text-navy`, rounded-sm, px-6 py-2, DM Sans bold
- **On scroll:** No bg change (stays purple) — just box-shadow
- **Mobile:** Hamburger icon → full-screen overlay slide from top

### 5.2 Hero Section

- **Background:** `bg-navy` with `GridDotBackground` overlay
- **Layout:** Contained box (rounded-xl) within purple page margin
- **Heading:** Barlow Condensed 800, clamp(5rem, 11vw, 9.5rem), `text-green-neon`, stacked lines with manual line breaks
- **Text layout:** Lines staggered (some left, some right) mimicking MYGOM layout
- **Mascot:** SVG cartoon astronaut/robot character, positioned absolute right-center, animated float
- **Mascot cable:** SVG curved purple line connecting mascot to bottom
- **Subtitle:** Bottom-left, white, DM Sans 400, max-w-xs
- **Grid dots:** Scattered small squares (3px) + hollow squares (12px) at grid intersections — pure CSS or SVG

### 5.3 Trusted By / Clients

- **Background:** `bg-navy`
- **Left:** Large Barlow Condensed heading in `text-green-neon`, CTA button below
- **Right:** List of client names — white, Barlow Condensed 700, uppercase + service category in gray on the right. Horizontal rule between each row. Arrow icon left of name.
- **Hover:** Row highlights, arrow animates right

### 5.4 Services Grid

- **Background:** `bg-purple`
- **Grid:** 3 columns × 2 rows, `gap-4`
- **Card:** White bg, rounded-xl, `p-8`, border border-transparent hover:border-black
- **Card title:** Barlow Condensed 800, `text-navy`, uppercase, ~3rem
- **Card label:** `text-purple text-label` — "SERVICE / 01" etc.
- **Hover state:** Green arrow appears top-right, slight scale(1.02), border darkens
- **Active/selected card:** Black border (2px solid black)

### 5.5 Process Section

- **Background:** `bg-navy` with dot grid
- **Label:** "OUR PROCESS" small caps, top-left
- **Heading:** "DESIGN DEVELOPMENT" (two words with large gap), `text-green-neon`, Barlow Condensed
- **Description:** White card (rounded-xl, bg-white, text-navy, p-8, max-w-sm), bottom-left
- **Illustration:** Right side — cartoon robot character pointing at a pixel/dot grid on a purple tilted rectangle, positioned absolute

### 5.6 Who We Are

- **Background:** Dark section with purple page margin (same as hero pattern)
- **Left:** Photo collage — 3 overlapping photos with slight rotation (CSS transform), purple border frames
- **Right:** `text-green-neon` heading "WHO WE ARE", white body text, green CTA button
- **Photos:** `rounded-2xl`, `border-2 border-purple` on some

### 5.7 Our Work

- **Background:** `bg-purple`
- **Header:** "OUR WORK" Barlow Condensed, white
- **Cards:** 2 large cards side-by-side (row 1), 1 wide card below
- **Card structure:** White bg, category label in purple small caps, project title in Barlow Condensed navy, body text, preview image on right
- **Highlighted card:** Dark border, green arrow button on image
- **"Show More" button:** Centered, green outlined

### 5.8 Client Reviews

- **Background:** `bg-purple`
- **Header:** "CLIENT REVIEWS" Barlow Condensed, white
- **Carousel:** Horizontal scroll, cards overflow visible, ~4 visible at once, desktop; 1 on mobile
- **Card:** White bg, rounded-xl, italic quote text (DM Sans 400), company name in `text-purple` label style
- **Nav buttons:** Dark rounded square arrows, centered below

### 5.9 CTA Banner

- **Outer:** `bg-purple` margin
- **Inner box:** `bg-navy` rounded-xl with dot grid
- **Heading:** "LET'S WORK TOGETHER" — massive Barlow Condensed `text-green-neon`
- **Sub-copy:** White card (bg-white rounded-xl) bottom-right: "Ready to bring your ideas to life? We're here to help."
- **CTA button:** Green bg, navy text, centered
- **Mascot:** Hand/character element bottom-center pointing at button

### 5.10 Footer

- **Background:** Dark (`bg-[#0D0D1F]`)
- **Top:** 5-column link grid (SERVICES, COMPANY, LEGAL, FOLLOW US, GET IN TOUCH)
- **Column headers:** `text-purple text-label`
- **Links:** White, DM Sans, hover:text-green-neon
- **Copyright:** Small, top of bottom area
- **Brand watermark:** Barlow Condensed 800, ~25vw tall, `text-purple`, opacity-100, stretches full width

---

## 6. Decorative System

### 6.1 Grid Dot Background

Used on: Hero, Process, CTA Banner

```tsx
// GridDotBackground.tsx
// SVG pattern — dots at every ~80px grid intersection
// Two dot sizes: 3px solid circles, 12px hollow squares
// Opacity: 0.15 on dark sections
```

CSS approach:

```css
.grid-dot-bg {
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.12) 1.5px,
    transparent 1.5px
  );
  background-size: 80px 80px;
}
```

Hollow squares: small `div` elements absolutely positioned at pre-calculated grid coordinates, `border border-white/10 w-3 h-3`.

### 6.2 Mascot Character

- SVG-based cartoon astronaut/robot (custom drawn or from illustration library)
- White body, purple helmet, white boots
- Purple coiled cable/cord
- Animations: float loop, arm gestures via GSAP
- Variants: full body (hero), torso only (process), hand only (CTA)

### 6.3 Section Transitions

- Purple → Dark: Hard edge (no gradient) for sharp contrast
- Dark → Purple: Same
- The alternating rhythm is intentional and creates visual energy

---

## 7. Interactive States

### Buttons

```
Primary (Green):
  default:  bg-green-neon text-navy font-bold px-8 py-3 rounded-sm
  hover:    bg-green-dark scale-[1.02] transition-all

Outline (Green):
  default:  border-2 border-green-neon text-green-neon px-8 py-3
  hover:    bg-green-neon text-navy

Dark:
  default:  bg-navy text-white px-8 py-3
  hover:    bg-navy/80
```

### Cards (Service)

```
default: bg-white border-2 border-transparent rounded-2xl
hover:   border-black scale-[1.02] → green arrow icon fades in top-right
```

### Nav Links

```
default: text-white/80
hover:   text-white with underline draw animation (CSS clip-path width 0→100%)
```

---

## 8. GSAP Animation Code Patterns

### Register plugins (lib/gsap.ts)

```ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
export { gsap, ScrollTrigger, SplitText };
```

### Lenis Setup (lib/lenis.ts)

```ts
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

export function initLenis() {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}
```

### Hero Text Reveal

```ts
const split = new SplitText(headingRef.current, { type: "chars,words" });
gsap.from(split.chars, {
  y: 120,
  opacity: 0,
  rotationX: -40,
  stagger: 0.025,
  duration: 0.8,
  ease: "power4.out",
  delay: 0.3,
});
```

### Scroll-triggered Section Heading

```ts
gsap.from(split.words, {
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top 80%",
  },
  y: 80,
  opacity: 0,
  stagger: 0.08,
  duration: 0.7,
  ease: "power3.out",
});
```

### Mascot Float Loop

```ts
gsap.to(mascotRef.current, {
  y: -18,
  duration: 2.5,
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1,
});
```

### Service Cards Stagger

```ts
gsap.from(cardRefs.current, {
  scrollTrigger: {
    trigger: gridRef.current,
    start: "top 75%",
  },
  y: 50,
  opacity: 0,
  scale: 0.95,
  stagger: 0.1,
  duration: 0.6,
  ease: "power2.out",
});
```

### Page Progress Indicator

```ts
// SVG circle with stroke-dasharray = circumference
// On scroll: stroke-dashoffset = circumference * (1 - progress)
const circumference = 2 * Math.PI * 45; // r=45
ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: (self) => {
    const progress = self.progress;
    circleRef.current.style.strokeDashoffset = `${circumference * (1 - progress)}`;
    setPercent(Math.round(progress * 100));
  },
});
```

---

## 9. About Page — Additional Specs

### Milestone Timeline

- Dark background
- Large neon green numbers: 01, 02, 03 — Barlow Condensed, ~10rem
- Thin green horizontal line connects milestones with dot markers
- Bold white title below each number
- Body text in white/gray below title

### Pillars of Sritek (Values)

- Purple background
- "THE PILLARS OF SRITEK" small label top-left
- Horizontal rule separating each value
- Left: value title (Barlow Condensed, white, large)
- Right: one-sentence description (DM Sans, white/gray)
- Hover: title highlights to green-neon

### Team Cards

- Dark background
- "THE TEAM" in green-neon, Barlow Condensed
- 3-column grid (stacks on mobile)
- Card: rounded-2xl, overflow-hidden
- Top 70%: photo (grayscale or color)
- Bottom 30%: white bg, name (DM Sans 500), role in `text-purple text-label`

---

## 10. Responsive Design Notes

### Mobile

- All display text: `clamp(2.5rem, 8vw, 4.5rem)`
- Service grid: `grid-cols-1`
- Navbar: hamburger menu (full-screen overlay, bg-purple)
- Hero mascot: hidden or scaled down, centered
- Team cards: single column
- Testimonials: one card visible + swipe

### Fluid Typography (Tailwind plugin or manual clamp)

```css
/* Hero heading */
font-size: clamp(3.5rem, 9vw, 9rem);

/* Section heading */
font-size: clamp(2.5rem, 6vw, 5.5rem);

/* Milestone numbers */
font-size: clamp(5rem, 12vw, 10rem);
```

---

## 11. Asset Checklist

Before development, prepare:

- [ ] Sritek logo (SVG, white version + color version)
- [ ] Mascot SVG (astronaut/robot character — 3 poses)
- [ ] Team photos (high quality, consistent bg/style)
- [ ] Project screenshots / mockups
- [ ] Client logos (if available)
- [ ] OG image (1200×630px, purple bg with logo)
- [ ] Favicon (SVG preferred)
