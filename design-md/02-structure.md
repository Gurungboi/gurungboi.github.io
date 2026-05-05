# Page Structure — Sunil Gurung Portfolio

## Purpose

This defines the **information architecture** and **content hierarchy** for the portfolio. It is the blueprint — `index.html` is the implementation, `styles.css` is the styling.

---

## 1. Page Architecture

```
┌─────────────────────────────────────────────────────────────┐
│ SIDEBAR (fixed, 200px)                                     │
│ ┌─────────────────────┐                                     │
│ │ Logo: Sunil G.      │                                     │
│ │ Role: iOS·Android·KMP                                      │
│ ├─────────────────────┤                                     │
│ │ 00 Home             │                                     │
│ │ 01 About            │                                     │
│ │ 02 Skills           │                                     │
│ │ 03 Architecture     │                                     │
│ │ 04 AI               │                                     │
│ │ 05 Experience      │                                     │
│ │ 06 Projects         │                                     │
│ │ 07 Education        │                                     │
│ │ 08 Contact          │                                     │
│ ├─────────────────────┤                                     │
│ │ ● Available         │                                     │
│ └─────────────────────┘                                     │
├─────────────────────────────────────────────────────────────┤
│ MAIN CONTENT (scrollable)                                   │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ HERO — full viewport, inverted (dark)                    │ │
│ │ • Top bar: availability status + location               │ │
│ │ • Name: Sunil Gurung. (large, animated)                 │ │
│ │ • Ticker: scrolling skills tape (signature element)      │ │
│ │ • Bottom: bio + stats (2-column)                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ABOUT — 2-column layout                                 │ │
│ │ • Lede (drop cap) + body text                           │ │
│ │ • Pull quote                                            │ │
│ │ • Highlight cards (4): Apple Pay, Architecture, KMP, TL │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ SKILLS — dark section, 4-column grid                    │ │
│ │ • iOS, Android, Architecture, Cross-Platform, CI/CD,     │ │
│ │   Leadership, Integrations, AI Tooling                  │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ARCHITECTURE — evolution narrative                      │ │
│ │ • Intro + quote                                         │ │
│ │ • 3 generation cards (MVC → MVVM+Coord → MVI+Coord)     │ │
│ │ • Bottom stats row                                      │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ AI & LEARNING — 2-column                                │ │
│ │ • Left: badge, heading, description, learning pills      │ │
│ │ • Right: AI tools list                                  │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ EXPERIENCE — timeline                                   │ │
│ │ • Prezzee (primary, large) with promotion badges        │ │
│ │ • Areas: Apple Pay, Platform, Tech Lead                 │ │
│ │ • Divider                                               │ │
│ │ • Impact IT (past, smaller) with app cards              │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ OPEN SOURCE — 3-column grid                            │ │
│ │ • 3 project cards with links                           │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ EDUCATION — 3-column grid                               │ │
│ │ • Master, Bachelor, Nanodegree                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ CONTACT — dark, 2-column                               │ │
│ │ • Left: heading + sub + contact links                   │ │
│ │ • Right: hiring CTA card + location                    │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Section Order Rationale

| Section | Position | Reasoning |
|---------|----------|-----------|
| Hero | 1 | Highest impact, establishes identity in 3 seconds |
| About | 2 | Builds trust and human connection before skills |
| Skills | 3 | Proof of technical depth (engineer readers go here first) |
| Architecture | 4 | Showcase thinking — separates senior from mid-level |
| AI | 5 | Shows current thinking and growth mindset |
| Experience | 6 | Detailed evidence supporting earlier claims |
| Open Source | 7 | Tangible proof of craftsmanship |
| Education | 8 | Credentials (short section — not the focus) |
| Contact | 9 | Clear next step for engaged readers |

---

## 3. Navigation Design

### Sidebar Navigation

- **Fixed position** — always accessible, never scrolls away
- **Numbered sections** (00-08) — reinforce order and engineering mindset
- **Active state** — red background on current section
- **Hover state** — subtle highlight before click
- **IntersectionObserver-driven** — active state follows scroll position

### Deep Linking

Each section has a stable ID for direct URL access:
- `#hero`, `#about`, `#skills`, `#architecture`, `#ai`, `#experience`, `#projects`, `#education`, `#contact`

---

## 4. Content Hierarchy Rules

| Level | Element | Font | Size |
|-------|---------|------|------|
| 1 (Highest) | Hero name | Playfair Display 900 | clamp(5rem, 11vw, 10rem) |
| 2 | Section title | Playfair Display 900 | clamp(2rem, 3.5vw, 2.8rem) |
| 3 | Job/Card title | Playfair Display 700 | 1.3-1.7rem |
| 4 | Sub-heading | Playfair Display 700 | ~1rem |
| 5 | Body | Cormorant Garamond | 1rem |
| 6 | Label/Mono | DM Mono | 0.55-0.68rem |

---

## 5. Responsive Strategy

| Breakpoint | Layout Change |
|------------|--------------|
| > 860px | Full sidebar + main 2-column layouts |
| ≤ 860px | Sidebar becomes horizontal top bar, grids collapse to 1-2 column |
| ≤ 500px | Sidebar becomes compact, skills grid 1 column |

### Key Responsive Behaviors

- **Sidebar** → horizontal scrollable bar on tablet, hidden on phone (nav still works via in-page links)
- **Hero stats** → hidden on tablet (too cramped), replaced by streamlined mobile view
- **Architecture cards** → stack vertically with rotated arrow on tablet
- **Skills grid** → 4 col → 2 col → 1 col

---

## 6. Section-Specific Patterns

### Hero Pattern
- Dark inverted background (--ink)
- Ambient glow elements (floatA, floatB animations)
- Film grain texture overlay
- Ticker tape at bottom (signature rhythmic element)

### Card Pattern
- 2px gap between cards (--paper3 border shows through)
- Hover: translateY(-4px) + shadow + red accent line
- Transition: 320ms cubic-bezier(0.16, 1, 0.3, 1)

### Timeline Pattern
- Left spine line (gradient red → transparent)
- Dot markers (red filled for current, outlined for past)
- 40px left indent for content

### Stat Row Pattern
- Label on right, number on left
- Hover: padding-left shift + subtle background

---

## 7. Open Questions / Future Changes

| Item | Status | Notes |
|------|--------|-------|
| Now Playing widget | Not implemented | Would require Spotify/Apple Music API |
| Resume PDF download | Not implemented | File hosting needed |
| Testimonial section | Not implemented | Would add social proof |
| Blog/Writing section | Not implemented | Could showcase thought leadership |

---

## 8. Accessibility Notes

- All interactive elements are `<button>` or `<a>` — no divs with click handlers
- Color contrast meets WCAG AA for body text (--muted on --paper is ~4.5:1)
- Ticker animation can be paused on hover (prefers-reduced-motion friendly)
- Semantic HTML: `<section>`, `<aside>`, `<main>`, `<nav>`, `<ul>`, `<h1>`-`<h3>`