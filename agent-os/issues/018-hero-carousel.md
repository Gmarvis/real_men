# 018: Hero Carousel with Themed Slides

## Overview

Create a high-impact, auto-advancing hero carousel with 3 themed slides. Each slide has a distinct layout design while maintaining the site's visual identity. The carousel guides visitors through a persuasion arc: Problem → Vision → Action.

## Requirements

- 3 slides with unique layouts and messaging
- Autoplay (5s per slide) with dot indicators
- Smooth Motion transitions between slides
- Mobile responsive (stacked layouts on small screens)
- Respect `prefers-reduced-motion` accessibility
- Preload images for performance

---

## Slide Content

### Slide 1: The Problem (Urgency)
| Field | Content |
|-------|---------|
| **Headline** | The World Needs Godly Men |
| **Subtext** | Fatherlessness, moral decline, and lost identity. It's time for men to rise. |
| **Accent** | *"Every generation needs men who fear God"* |
| **CTA** | Scroll indicator / "Learn More" |
| **Image** | `/IMG-20251223-WA0020.jpg` |

### Slide 2: The Vision (Hope)
| Field | Content |
|-------|---------|
| **Headline** | Rise to Your Calling |
| **Subtext** | A community where men embrace and live out their biblical calling fearlessly. |
| **Verse Badge** | *"Take courage and be a man" — 1 Kings 2:2* |
| **CTA** | "Discover Our Vision" (outline button) |
| **Image** | `/IMG-20251223-WA0022.jpg` |

### Slide 3: Take Action (Community)
| Field | Content |
|-------|---------|
| **Headline** | Join the Brotherhood |
| **Subtext** | Iron sharpens iron. Find accountability, mentorship, and purpose. |
| **CTA Primary** | "Get Involved" |
| **CTA Secondary** | "Watch Our Story" |
| **Image** | `/IMG-20251223-WA0025.jpg` |

---

## Visual Layout Diagrams

### Slide 1: Full Overlay (Urgency)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                     │
│                     ░  FULL BACKGROUND IMAGE    ░                     │
│                     ░  with DARK OVERLAY (70%)  ░                     │
│                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                     │
│                                                                         │
│                          ┌─────────────┐                                │
│                          │  • REAL MEN │  ← Badge with pulse           │
│                          └─────────────┘                                │
│                                                                         │
│              ╔═══════════════════════════════════════╗                  │
│              ║   THE WORLD NEEDS GODLY MEN           ║  ← HUGE text    │
│              ╚═══════════════════════════════════════╝                  │
│                                                                         │
│                 Fatherlessness, moral decline, and                      │
│                 lost identity. It's time for men to rise.               │
│                                                                         │
│              ┌─────────────────────────────────────────┐                │
│              │  "Every generation needs men who fear   │  ← Accent     │
│              │   God" — highlighted quote              │    callout    │
│              └─────────────────────────────────────────┘                │
│                                                                         │
│                            ▼ Scroll                                     │
│                                                                         │
│                           ● ○ ○  ← Dot indicators                       │
└─────────────────────────────────────────────────────────────────────────┘
```

### Slide 2: Split Layout (Vision)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   ┌───────────────────────────────┐  ┌───────────────────────────────┐  │
│   │                               │  │                               │  │
│   │        CONTENT AREA           │  │                               │  │
│   │          (60%)                │  │      CROPPED IMAGE            │  │
│   │                               │  │         (40%)                 │  │
│   │   ┌─────────────────────┐     │  │                               │  │
│   │   │ 📖 1 Kings 2:2      │     │  │   ░░░░░░░░░░░░░░░░░░░░░░░░░   │  │
│   │   └─────────────────────┘     │  │   ░                       ░   │  │
│   │                               │  │   ░   Men in fellowship   ░   │  │
│   │   ╔═══════════════════╗       │  │   ░        image          ░   │  │
│   │   ║  RISE TO YOUR     ║       │  │   ░                       ░   │  │
│   │   ║  CALLING          ║       │  │   ░░░░░░░░░░░░░░░░░░░░░░░░░   │  │
│   │   ╚═══════════════════╝       │  │                               │  │
│   │                               │  │                               │  │
│   │   A community where men       │  │                               │  │
│   │   embrace and live out their  │  │        Rounded corners        │  │
│   │   biblical calling fearlessly │  │        with shadow            │  │
│   │                               │  │                               │  │
│   │   ┌─────────────────────┐     │  │                               │  │
│   │   │ Discover Our Vision │     │  │                               │  │
│   │   └─────────────────────┘     │  │                               │  │
│   │         ↑ outline btn         │  │                               │  │
│   │                               │  │                               │  │
│   └───────────────────────────────┘  └───────────────────────────────┘  │
│                                                                         │
│                           ○ ● ○  ← Dot indicators                       │
└─────────────────────────────────────────────────────────────────────────┘
```

### Slide 3: Full Overlay (Action)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                     │
│                     ░  FULL BACKGROUND IMAGE    ░                     │
│                     ░  WARM TONES / COMMUNITY   ░                     │
│                     ░  with LIGHTER OVERLAY     ░                     │
│                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                     │
│                                                                         │
│              ╔═══════════════════════════════════════╗                  │
│              ║   JOIN THE BROTHERHOOD                ║  ← Bold text    │
│              ╚═══════════════════════════════════════╝                  │
│                                                                         │
│                    Iron sharpens iron. Find                             │
│                    accountability, mentorship,                          │
│                    and purpose.                                         │
│                                                                         │
│              ┌──────────────────┐  ┌──────────────────┐                 │
│              │   GET INVOLVED   │  │ Watch Our Story  │                 │
│              │  ████████████████│  │    (outline)     │                 │
│              │  (primary solid) │  │                  │                 │
│              └──────────────────┘  └──────────────────┘                 │
│                                                                         │
│                           ○ ○ ●  ← Dot indicators                       │
└─────────────────────────────────────────────────────────────────────────┘
```

### Mobile Layouts (Stacked)

```
┌─────────────────────┐   ┌─────────────────────┐   ┌─────────────────────┐
│                     │   │  ┌───────────────┐  │   │                     │
│  ░░░░░░░░░░░░░░░░░  │   │  │    IMAGE      │  │   │  ░░░░░░░░░░░░░░░░░  │
│  ░ FULL BG IMAGE ░  │   │  │   (shorter)   │  │   │  ░ FULL BG IMAGE ░  │
│  ░░░░░░░░░░░░░░░░░  │   │  └───────────────┘  │   │  ░░░░░░░░░░░░░░░░░  │
│                     │   │                     │   │                     │
│    • REAL MEN       │   │  ╔═════════════╗    │   │  ╔═════════════╗    │
│                     │   │  ║ RISE TO     ║    │   │  ║ JOIN THE    ║    │
│  ╔═══════════════╗  │   │  ║ YOUR CALLING║    │   │  ║ BROTHERHOOD ║    │
│  ║ THE WORLD     ║  │   │  ╚═════════════╝    │   │  ╚═════════════╝    │
│  ║ NEEDS GODLY   ║  │   │                     │   │                     │
│  ║ MEN           ║  │   │  Subtext here       │   │  Subtext here       │
│  ╚═══════════════╝  │   │  wraps nicely       │   │  wraps nicely       │
│                     │   │                     │   │                     │
│  Subtext smaller    │   │  ┌─────────────┐    │   │  ┌─────────────┐    │
│  on mobile          │   │  │  Discover   │    │   │  │ GET INVOLVED│    │
│                     │   │  └─────────────┘    │   │  └─────────────┘    │
│       ▼             │   │                     │   │  ┌─────────────┐    │
│                     │   │                     │   │  │ Watch Story │    │
│      ● ○ ○          │   │      ○ ● ○          │   │  └─────────────┘    │
└─────────────────────┘   └─────────────────────┘   │      ○ ○ ●          │
     Slide 1                   Slide 2              └─────────────────────┘
                                                         Slide 3
```

---

## Technical Specifications

### Component Structure

```
hero.tsx
├── HeroCarousel (main container)
│   ├── AnimatePresence
│   │   └── Slides (conditional render based on currentSlide)
│   │       ├── SlideUrgency (layout: full-overlay-dark)
│   │       ├── SlideVision (layout: split)
│   │       └── SlideAction (layout: full-overlay-warm)
│   └── DotsIndicator
│       └── DotButton[] (clickable navigation)
└── useEffect (autoplay timer)
```

### Data Structure

```typescript
interface HeroSlide {
  id: number
  layout: 'full-overlay-dark' | 'split' | 'full-overlay-warm'
  image: string
  badge?: string
  headline: string
  subtext: string
  accent?: string       // quote or verse
  verseBadge?: string   // for split layout
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

const slides: HeroSlide[] = [
  { id: 1, layout: 'full-overlay-dark', ... },
  { id: 2, layout: 'split', ... },
  { id: 3, layout: 'full-overlay-warm', ... },
]
```

### Animation Specs

| Animation | Values |
|-----------|--------|
| Slide entry | `opacity: 0 → 1`, `scale: 1.05 → 1`, duration: `0.8s` |
| Slide exit | `opacity: 1 → 0`, duration: `0.5s` |
| Text stagger | Headline → Subtext → CTA, delay: `0.2s` each |
| Dot active | `scale: 1 → 1.3`, `bg-white/50 → bg-white` |
| Background | Subtle `scale: 1.0 → 1.05` over 5s (Ken Burns) |

### Accessibility

- Pause autoplay when `prefers-reduced-motion: reduce`
- Add `aria-live="polite"` to slide container
- Dot buttons have `aria-label="Go to slide X"`
- Skip to content link for keyboard users

---

## Implementation Steps

1. [ ] Create slide data array with content for all 3 slides
2. [ ] Set up `currentSlide` state with autoplay timer (5s)
3. [ ] Build `SlideUrgency` component (full overlay, dark)
4. [ ] Build `SlideVision` component (split layout)
5. [ ] Build `SlideAction` component (full overlay, warm)
6. [ ] Add `DotsIndicator` with click navigation
7. [ ] Implement Motion transitions with AnimatePresence
8. [ ] Add Ken Burns effect on background images
9. [ ] Mobile responsive adjustments
10. [ ] Preload images in document head
11. [ ] Add `prefers-reduced-motion` support
12. [ ] Test and verify all slides

---

## Files to Modify

- `apps/website/app/components/hero.tsx` - Main implementation
- `apps/website/app/root.tsx` - Add preload links for images

---

## Verification

- [ ] 3 slides auto-cycle every 5s
- [ ] Dot indicators navigate correctly
- [ ] Animations are smooth (60fps)
- [ ] Mobile layouts stack properly
- [ ] Reduced motion preference disables autoplay
- [ ] Images preload without layout shift
