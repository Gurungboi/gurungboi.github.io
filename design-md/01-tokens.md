# Design Tokens — Sunil Gurung Portfolio

## Overview

This layer is the **design input layer** — pure design decisions that feed into `styles.css`.

The system is called **"Rhythmic Mobile Craft"** — mobile engineering precision with music-inspired timing and family-grounded calm.

---

## Table of Contents

1. [Colors](#1-colors)
2. [Typography](#2-typography)
3. [Spacing & Rhythm](#3-spacing--rhythm)
4. [Motion Language](#4-motion-language)
5. [Vibe Definitions](#5-vibe-definitions)
6. [Anti-AI-Slop Rules](#6-anti-ai-slop-rules)

---

## 1. Colors

### Surface Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--paper` | `#F2ECE3` | Primary background (warm off-white) |
| `--paper2` | `#EAE2D7` | Secondary surface (cards, alternating sections) |
| `--paper3` | `#E2D9CC` | Tertiary surface (subtle depth) |
| `--white` | `#FDFAF6` | Bright surface (hero, inverted sections) |

### Text Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--ink` | `#110E0B` | Primary text (near-black, warm) |
| `--ink2` | `#322D28` | Secondary text (softer black) |
| `--muted` | `#8A7E74` | Tertiary/disabled text (warm gray) |

### Accent Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--red` | `#C03A10` | Primary accent (burnt sienna/terracotta) |
| `--red2` | `#E04A18` | Accent hover state (lighter) |

### Borders & Dividers

| Token | Hex | Usage |
|-------|-----|-------|
| `--rule` | `#D0C8BC` | Primary divider color |

### Availability Indicator

| Token | Hex | Usage |
|-------|-----|-------|
| `--green` | `#4ADE80` | Available dot (blink animation) |

### Dark Section Background

| Token | Hex | Usage |
|-------|-----|-------|
| `--ink` | `#110E0B` | Sidebar and inverted sections |

---

## 2. Typography

### Font Families

| Role | Font | Fallback |
|------|------|----------|
| **Display/Headlines** | Playfair Display (900) | Georgia, serif |
| **Body/Reading** | Cormorant Garamond | Georgia, serif |
| **Mono/Labels** | DM Mono | Menlo, monospace |

### Type Scale

| Element | Font | Size | Weight | Letter Spacing | Line Height |
|---------|------|------|--------|----------------|-------------|
| Hero Name | Playfair Display | clamp(5rem, 11vw, 10rem) | 900 | -0.05em | 0.86 |
| Section Title | Playfair Display | clamp(2rem, 3.5vw, 2.8rem) | 900 | -0.04em | 1 |
| Job Title | Playfair Display | 1.7rem | 900 | -0.03em | 1.1 |
| Card Name | Playfair Display | 1.3-1.35rem | 900 | -0.02em | 1.1 |
| Contact Heading | Playfair Display | clamp(2.5rem, 4.5vw, 4rem) | 900 | -0.05em | 0.95 |
| Body | Cormorant Garamond | 1rem | 400 | 0 | 1.85 |
| Body Italic | Cormorant Garamond | 1.18rem | 400 | 0 | 1.72 |
| Lede | Cormorant Garamond | 1.28rem | 400 | 0 | 1.78 |
| Label/Code | DM Mono | 0.55-0.68rem | 400-500 | 0.08-0.14em | varies |

### Special Typography

| Element | Treatment |
|---------|-----------|
| Drop cap (About lede) | Playfair Display 900, 3.6rem, red, float left |
| Pull quote | Playfair Display italic, 1.2rem, red left border |
| Section number | DM Mono, 0.62rem, red, uppercase |
| Nav label | DM Mono, 0.67rem, uppercase |
| Tag/Pill | DM Mono, 0.57-0.63rem, bordered |

---

## 3. Spacing & Rhythm

### Base Unit

**4px** — all spacing is a multiple of 4px

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight gaps |
| `--space-2` | 8px | Tag padding, icon gaps |
| `--space-3` | 12px | Button padding |
| `--space-4` | 16px | Card padding, list gaps |
| `--space-5` | 20px | Section padding |
| `--space-6` | 24px | Sidebar padding |
| `--space-7` | 28px | Timeline indent |
| `--space-8` | 32px | Card spacing |
| `--space-9` | 36px | Sidebar height offset |
| `--space-10` | 40px | Section gap |
| `--space-12` | 48px | Large gaps |
| `--space-15` | 60px | Section padding (primary) |

### Layout

| Element | Value |
|---------|-------|
| Sidebar width | 200px |
| Section padding | 60px horizontal |
| Section header margin | 40px bottom |
| Grid gap (cards) | 2px |
| Max content width | 680px (for reading) |

### Rhythm Concept

Spacing should feel like **musical measure spacing** — consistent baseline with occasional emphasis moments (like a beat hitting). The `--red` accent marks the "downbeat" moments.

---

## 4. Motion Language

### Principles

- **Purposeful** — every animation communicates something
- **Rhythmic** — timing should feel like music (not chaotic)
- **Calm** — transitions are smooth, never jarring

### Timing Functions

| Name | Easing | Usage |
|------|--------|-------|
| `cubic-bezier(0.16, 1, 0.3, 1)` | Ease-out expo | Primary reveal animations |
| `ease-in-out` | Standard | Subtle hovers |
| `steps(2)` | Discrete | Grain animation only |

### Durations

| Category | Duration | Examples |
|----------|----------|----------|
| Micro (hover) | 150-200ms | Button hovers, nav highlights |
| Standard (reveal) | 600-900ms | Section content reveal |
| Slow (ambient) | 7-12s | Grain shift, float animations |
| Infinite loop | 2.2-30s | Ticker, availability blink |

### Named Animations

| Name | Type | Duration | Effect |
|------|------|----------|--------|
| `heroRise` | Entrance | 1s | Name text slides up from hidden |
| `heroFadeUp` | Entrance | 0.8-0.9s | Content fades in + slight lift |
| `grainShift` | Ambient | 7s, steps(2) | Film grain texture shift |
| `floatA` | Ambient | 12s ease-in-out | Glow moves slowly |
| `floatB` | Ambient | 9s ease-in-out | Glow moves slowly |
| `ticker` | Loop | 30s linear | Skills ticker scrolls |
| `blink` | Loop | 2.2s infinite | Availability dot pulse |

### Scroll Reveal

| Property | Value |
|----------|-------|
| Trigger threshold | 12% |
| Animation | opacity 0→1, translateY 22px→0 |
| Timing | 650ms cubic-bezier(0.16, 1, 0.3, 1) |
| Once | Yes (unobserve after trigger) |

---

## 5. Vibe Definitions

### Rhythmic Mobile Craft

**Core personality**: Precision engineer who thinks in systems, feels in rhythm.

| Trait | Expression |
|-------|-----------|
| **Mobile engineering precision** | Tight spacing, consistent tokens, clean hierarchy |
| **Rhythm-based UI** | Ticker animation, staggered reveals, measured timing |
| **Calm minimal** | Warm neutrals, single accent, no visual noise |
| **Family grounding** | Warm tones, approachable copy, human voice |
| **Music-inspired flow** | Timing curves feel musical, seamless loops |

### Signature Element

The **ticker tape** at the bottom of the hero is the primary rhythmic signature — it echoes a musical score moving across the screen, reinforcing the "craft" aspect.

---

## 6. Anti-AI-Slop Rules

### Never Use

- Fonts: Inter, Roboto, Open Sans, Arial
- Icons: Lucide, Font Awesome (use emojis or custom SVG only)
- Colors: Purple gradients, neon blues, gradient meshes
- Layouts: SaaS bento grids, startup landing patterns
- Animations: Confetti, particle effects, aggressive parallax

### Avoid

- Flashy UI animations
- Fake testimonials or social proof
- Marketing-heavy copy ("revolutionary", "game-changing")
- Generic stock photo imagery
- Gradient backgrounds

### Always Use

- Warm, grounded color palette
- Serif + mono typography pairing
- Single accent color (red)
- Music/rhythm as subtle undertone, never explicit
- Real, specific achievements with numbers

---

## Design Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2024 | Red accent (#C03A10) | Warm, terracotta — grounded, not aggressive |
| 2024 | Playfair + DM Mono | Editorial feel with engineering precision |
| 2024 | Ticker as signature | Music score metaphor — reinforces rhythmic vibe |
| 2024 | Warm paper background | Feels like quality paper, not cold tech |
| 2024 | Grain texture on hero | Film/music studio warmth |