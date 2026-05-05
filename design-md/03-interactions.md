# Interaction Notes — Sunil Gurung Portfolio

## Purpose

Document all user interactions, hover states, transitions, and behavioral details that aren't visible in static CSS. This feeds into `script.js` and CSS hover/focus states.

---

## 1. Navigation Interactions

### Sidebar Nav Button

| State | Behavior |
|-------|----------|
| Default | Subtle text (rgba 42%), number even more muted |
| Hover | Background rgba(255,255,255,0.05), label brightens to 85% |
| Active (current section) | Red background, white text |
| Click | Scrolls to section smoothly (behavior: smooth) |

### Active State Trigger

- Uses `IntersectionObserver` with `threshold: 0.35`
- When section enters 35% of viewport, matching nav button becomes active
- Only one button active at a time
- Active state persists until another section takes focus

---

## 2. Scroll Reveal Animation

### Trigger Behavior

| Property | Value |
|----------|-------|
| Trigger point | Element enters viewport |
| Threshold | 12% visible |
| Animation | opacity 0→1, translateY 22px→0 |
| Duration | 650ms |
| Easing | cubic-bezier(0.16, 1, 0.3, 1) |
| Trigger count | Once (unobserves after first trigger) |

### Elements with Reveal

All elements with class `.reveal`:
- Section headers
- About text blocks and cards
- Skills grid items
- Architecture cards
- AI tools rows
- Experience timeline items
- Open source cards
- Education cards
- Contact content

---

## 3. Hero Interactions

### Name Animation (Entrance)

| Element | Animation | Delay |
|---------|-----------|-------|
| Hero kicker | heroFadeUp | 0.1s |
| "Sunil" row | heroRise | 0.2s |
| "Gurung." row | heroRise | 0.32s |
| Hero bottom left | heroFadeUp | 0.6s |
| Hero bottom right | heroFadeUp | 0.75s |

### Ticker Tape

| Property | Value |
|----------|-------|
| Animation | ticker |
| Duration | 30s linear infinite |
| Pause on hover | Yes (animation-play-state: paused) |
| Content | Skills/tech stack, duplicated for seamless loop |

### Glow Elements (Ambient)

| Element | Animation | Duration |
|---------|-----------|----------|
| hero-glow-a | floatA | 12s ease-in-out infinite |
| hero-glow-b | floatB | 9s ease-in-out infinite |

### Grain Texture

| Property | Value |
|----------|-------|
| Animation | grainShift |
| Duration | 7s steps(2) infinite |
| Effect | Subtle position shift of SVG noise filter |

---

## 4. Card Hover Interactions

### Highlight Card (About)

| State | Change |
|-------|--------|
| Default | White background, red left accent hidden |
| Hover | Red left accent (4px width) slides in over 350ms |

### Architecture Card

| State | Change |
|-------|--------|
| Default | White bg, subtle shadow |
| Hover | translateY(-4px), deeper shadow, red bottom line (4px) appears |

### Open Source Card

| State | Change |
|-------|--------|
| Default | paper2 background |
| Hover | Full dark (--ink) background, text inverts, arrow becomes red |

### App Card (Experience)

| State | Change |
|-------|--------|
| Default | Large number in muted color |
| Hover | Number turns red, red left accent slides in |

### Education Card

| State | Change |
|-------|--------|
| Default | paper2 background |
| Hover | White background |

---

## 5. Button Interactions

### Primary Button (.btn-red)

| State | Change |
|-------|--------|
| Default | --red background, white text |
| Hover | --red2 background, translateY(-2px) |
| Active | translateY(0) |

### Outline Button (.btn-outline)

| State | Change |
|-------|--------|
| Default | Transparent, rgba(255,255,255,0.7) text, white border |
| Hover | White text, white border, translateY(-2px) |

### Contact Link (.clink)

| State | Change |
|-------|--------|
| Default | Dark bg, subtle border |
| Hover | Red background, white text |

---

## 6. Stat Row Interaction

| State | Change |
|-------|--------|
| Default | Standard padding (0 40px) |
| Hover | padding-left increases to 48px, subtle background highlight |

---

## 7. AI Tool Row Interaction

| State | Change |
|-------|--------|
| Default | Standard padding |
| Hover | padding-left increases by 8px, arrow becomes red |

---

## 8. Tag/Pill Interactions

### Skill Tag

| State | Change |
|-------|--------|
| Default | Transparent, bordered |
| Hover | --red background |
| Highlighted (.hi) | --red background always |

### Learning Pill

| State | Change |
|-------|--------|
| Default | Dashed border |
| Hover | Solid border, red text |

---

## 9. Keyboard / Accessibility

| Interaction | Behavior |
|-------------|----------|
| Tab navigation | Focus rings visible on all interactive elements |
| Enter/Space on nav | Scrolls to target section |
| ESC | No action (pages don't have modals) |
| Arrow keys | Not handled (single-page, standard scroll) |

---

## 10. Performance Considerations

| Animation | Impact | Mitigation |
|-----------|--------|------------|
| Grain texture | Low | SVG filter, fixed inset, pointer-events: none |
| FloatA/FloatB | Low | Radial gradient, large bounds, hardware-accelerated |
| Ticker | Medium | Pauses on hover, no repaints during animation |
| Scroll reveal | Low | Single observer, unobserves after trigger |

---

## 11. Future Interaction Ideas

| Feature | Description | Priority |
|---------|-------------|----------|
| Now Playing 🎧 | Spotify/Apple Music currently playing — ambient audio element | Medium |
| Section progress bar | Thin red line at top showing scroll progress | Low |
| Resume download | PDF download button in hero | High |
| Share section | Copy link button for each section | Low |