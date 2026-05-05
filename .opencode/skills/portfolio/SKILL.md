# Skill: Portfolio — Sunil Gurung Personal Site

## When to use

- Writing or updating copy on the portfolio site
- Adding new sections or restructuring content
- Adding new projects to the Open Source section
- Updating skills, experience, or education
- Refreshing the About section
- Making any visual/design changes to the site

## Context

This is a **personal developer portfolio** for Sunil Gurung — Senior Mobile Engineer.
It's not a SaaS product or agency site. The tone is:
- Specific and evidence-based (numbers over claims)
- Calm and confident (not salesy)
- Human and grounded (music + family undertone)

Tech stack: pure HTML/CSS/JS — no framework, no build tools.

## Site Structure

```
index.html      — All content (9 sections)
styles.css      — Complete design system (~2066 lines)
script.js       — Navigation, scroll-reveal (~104 lines)
meta.js         — Dynamic meta tags (OG tags now static in HTML)
design-md/      — Design system documentation (tokens, structure, interactions, copy)
```

## Design System Layers

| Layer | File | Purpose |
|-------|------|---------|
| 1. Core System | `.claude/Claude.md` | Workflow rules, anti-AI-slop, signature requirement |
| 2. Design Input | `design-md/*.md` | Tokens, structure, interactions, copy conventions |
| 3. Runtime | `styles.css` | CSS implementation |

**Always read `design-md/` before making visual changes.**

## Writing Copy

### Voice Rules

From `design-md/04-copy.md`:

**Use:**
- Ship, deliver, led, owned, drove
- Built, rebuilt, introduced, restructured
- Improved, reduced, cut, accelerated
- Critical thinking, thoughtful, careful

**Avoid:**
- "Rockstar", "ninja", "guru", "revolutionary", "game-changing"
- Synergy, leveraging (use "using")
- Marketing fluff

### Formatting

| Element | Format |
|---------|--------|
| Numbers | "60%", not "sixty percent" |
| Time | "45s", "3+ min" |
| Job titles | Capitalize specific roles: "Senior Mobile Engineer" |
| Company first mention | **Bold full name** |

### Section-Specific

| Section | Tone |
|---------|------|
| Hero bio | 2-3 punchy sentences. Lead with trajectory. |
| About lede | Hook — 1-2 sentences that make them keep reading |
| Architecture | Honest about trade-offs, not just success stories |
| AI | Thoughtful, critical — "I think carefully about..." |
| Contact | Short, confident, action-oriented |

## Adding a Project (Open Source Section)

When adding a new project card, include:
- Type label (e.g., "SwiftUI · Open Source")
- Project name
- Clear description (1-2 sentences, specific)
- Tech tags (max 5)
- Link to GitHub

Example format:
```html
<div class="os-card reveal">
  <a href="..." class="os-link">↗</a>
  <div class="os-type">SwiftUI · Open Source</div>
  <div class="os-name">Project Name</div>
  <div class="os-desc">1-2 sentence description.</div>
  <div class="os-tech">
    <span>SwiftUI</span><span>Combine</span><span>MVI</span>
  </div>
</div>
```

## Adding Experience Entries

Timeline structure:
- Job dot (red for current, outlined for past)
- Period, title, company
- Promotion badges (if applicable)
- Area sub-sections with bullet lists

Never remove old jobs — the timeline shows career progression.

## Updating Skills

Skills section uses 4-column grid with tag pills:
- High-priority skills get `.hi` class (always red background)
- Tags should reflect current tech stack only
- Remove deprecated technologies promptly

## Anti-AI-Slop Checklist

Before any change, verify:
- [ ] No Inter/Roboto/Open Sans fonts
- [ ] No Lucide/Font Awesome icons
- [ ] No purple gradients
- [ ] No SaaS bento grid layouts
- [ ] No fake testimonials
- [ ] Calm, warm, minimal aesthetic maintained

## Signature Element

The **ticker tape** in the hero is the signature rhythmic element — a music score metaphor. When adding features, ensure they don't clash with this pacing.

## Adding a Testimonial

If adding a testimonial to About:
- Real quote from a colleague/manager
- Attribution with name and role
- Keep it brief (1-2 sentences)
- Place after the lede or in a dedicated small section

## Process for Updates

1. Read relevant `design-md/` file(s)
2. Make copy/structure changes in `index.html`
3. Make style changes in `styles.css` (derived from tokens)
4. Test responsive at 860px and 500px breakpoints
5. Test scroll-reveal animations
6. Verify OG tags if changing titles/descriptions

## Common Tasks

| Task | File | Notes |
|------|------|-------|
| Add new skill tag | `index.html` #skills section | Add `.tag` span |
| Update job description | `index.html` #experience | Add bullet to `.blist` |
| Add new architecture generation | `index.html` #architecture | Add `.arch-card` with gen number |
| Change accent color | `styles.css` `:root` | `--red` and `--red2` tokens |
| Add AI tool | `index.html` #ai section | Add `.ai-row` |
| Update education | `index.html` #education | Add `.edu-card` |

## Voice Reminder

> "I ship things that matter."

This is the underlying principle. If copy doesn't feel like it could sit under that tagline, reconsider it.