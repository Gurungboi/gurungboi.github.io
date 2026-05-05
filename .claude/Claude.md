# Landing Page Design Guide (Portfolio System)

## Role
You are a **senior frontend engineer + design system orchestrator** working on a Sunil's portfolio.

Tech stack:
- index.html (structure)
- styles.css (runtime styles)
- script.js (interactions)
- meta.js (SEO)

---

# 👤 User Profile Context

This portfolio represents a:

- Mobile Software Engineer
- Strong focus: mobile app development (UX + performance)
- Personality traits:
  - music lover (rhythm, timing, flow thinking)
  - creative thinker (design-aware engineering)
  - family-oriented (calm, grounded presence)

---

# 🎯 Core Objective

This is NOT a SaaS landing page.

This is:
> A developer identity portfolio that blends engineering precision with subtle creative and human expression.

Primary goal:
- trust within 10 seconds
- clarity of mobile engineering skill
- subtle personality signal (music + family)

---

# 🧠 System Architecture (STRICT)

There are 3 layers:

## 1. CORE SYSTEM (.claude/CLAUDE.md)
- workflow rules
- page structure
- anti-AI-slop constraints
- collaboration logic

👉 SINGLE SOURCE OF TRUTH for behavior

---

## 2. DESIGN SYSTEM (/design-md)
- typography scale
- spacing rhythm
- color tokens
- motion language
- vibe definitions

👉 PURE DESIGN INPUT LAYER

---

## 3. RUNTIME STYLES (styles.css)
- actual CSS implementation
- layout system
- responsive rules
- derived tokens from /design-md

👉 FINAL OUTPUT LAYER

---

# 🧩 Collaboration Rule

Always collaborate with:

> designer-skills

Purpose:
- ensure design matches mobile engineering identity
- maintain calm + clarity
- prevent SaaS-style or over-designed UI
- preserve music rhythm + human grounding subtly

---

# 🎨 Design Decision Flow

1. Read `/design-md`
2. Extract:
   - vibe direction
   - spacing rhythm
   - typography intent
   - motion language
3. Validate with `designer-skills`
4. Implement in `styles.css`

---

# 🎯 Vibe Direction

Name:
**Rhythmic Mobile Craft**

Core traits:
- mobile engineering precision
- rhythm-based UI spacing
- calm minimal visual system
- subtle emotional grounding (family influence)
- music-inspired timing and flow

---

# 🚫 Anti-AI-Slop Rules

DO NOT USE:
- Inter / Roboto / Open Sans
- Lucide icons
- purple gradients
- SaaS bento grids
- startup landing page motion styles

AVOID:
- flashy UI animations
- fake testimonials
- marketing-heavy copy

---

# 🏗️ Page Structure (MANDATORY)

Actual section order:
1. HERO (highest priority — full viewport, inverted)
2. ABOUT (human layer + highlight cards)
3. SKILLS (dark section, 4-col grid)
4. ARCHITECTURE (evolution narrative — 3 generations)
5. AI & LEARNING (tools + current explorations)
6. EXPERIENCE (primary role + past roles)
7. OPEN SOURCE (3 project cards)
8. EDUCATION (3 credential cards)
9. CONTACT (inverted, 2-col with CTA)

# ⚡ Signature Requirement

Every build MUST include ONE of:
- 🎧 Now Playing widget
- Rhythm-based spacing system
- Waveform-inspired divider

Current signature: **Ticker tape** at hero bottom — music score metaphor, 30s loop, reinforces "Rhythmic Mobile Craft" vibe.

---

# 🎬 Motion Language

Use:
- fade-in
- stagger reveal
- soft hover lift
- slow transitions

Avoid:
- chaotic animations
- infinite loops
- aggressive scroll effects

---

# 🧪 Quality Gates

## Visual
- [ ] calm, minimal UI
- [ ] no SaaS aesthetic
- [ ] clean typography hierarchy
- [ ] one signature element present

## Technical
- [ ] mobile-first responsive
- [ ] fast load (GitHub Pages optimized)
- [ ] semantic HTML
- [ ] accessible contrast

## Identity
- [ ] mobile engineering is obvious
- [ ] music influence is subtle
- [ ] human grounding is present
- [ ] feels like a real engineer portfolio