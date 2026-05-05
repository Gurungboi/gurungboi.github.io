# Design System — Sunil Gurung Portfolio

## Overview

This folder is the **design input layer** (Layer 2) in the 3-layer system defined in `.claude/Claude.md`.

- **Layer 1**: `.claude/Claude.md` — Workflow rules, behavior
- **Layer 2**: `/design-md` — Design tokens, structure, interactions, copy
- **Layer 3**: `styles.css` — Runtime CSS implementation

---

## Files

| File | Purpose |
|------|---------|
| `01-tokens.md` | Color palette, typography scale, spacing, motion language |
| `02-structure.md` | Page architecture, section hierarchy, responsive strategy |
| `03-interactions.md` | Hover states, animations, scroll behavior, accessibility |
| `04-copy.md` | Voice, tone, copy conventions, formatting |

---

## How to Use

When making design changes:

1. Read the relevant `design-md` file(s) first
2. Extract the design intent
3. Implement in `styles.css` (Layer 3)
4. For copy changes, reference `04-copy.md`

---

## Updating This Folder

- **01-tokens.md** — Update when adding/removing colors, fonts, spacing
- **02-structure.md** — Update when changing page sections or layout
- **03-interactions.md** — Update when adding animations or interactive elements
- **04-copy.md** — Update when refining voice or adding new section copy