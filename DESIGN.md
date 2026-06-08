# Design

Visual system for the NinjaDev portfolio. Register: brand. Direction: **refined brutalist** — heavy grotesque type, hard-edged flat color blocks, high contrast, mono metadata, no gradients or glass. Bold and striking, but composed.

## Theme

Light base, ink-dominant. A crisp cool off-white "paper" carries most surfaces; near-black "ink" carries type and the projects stage; one electric azure/cobalt blue (chosen deliberately over the AI-default violet) is the punch, with a brighter sky-blue for accents on dark. Art direction shifts per section: paper hero, ink projects stage, blue contact drench. No dark mode (the brutalist light scheme is the identity).

## Color

OKLCH. Tokens live in `assets/styles/variables/colors.scss` as `--c-*`.

| Token | OKLCH | Role |
|---|---|---|
| `--c-paper` | `oklch(0.972 0.004 280)` | Default background (cool off-white, NOT warm cream) |
| `--c-paper-2` | `oklch(0.99 0.004 280)` | Raised paper / inset panels |
| `--c-ink` | `oklch(0.17 0.014 280)` | Primary text; projects-stage background |
| `--c-ink-2` | `oklch(0.32 0.018 280)` | Secondary text on paper (>=7:1) |
| `--c-ink-3` | `oklch(0.50 0.02 280)` | Muted metadata on paper (>=4.5:1) |
| `--c-accent` | `oklch(0.52 0.16 245)` | Azure/cobalt accent; AA for small text on paper and white-on-blue |
| `--c-accent-bright` | `oklch(0.73 0.13 232)` | Brighter sky-blue for use ON ink (dark bg) |
| `--c-line` | `oklch(0.17 0.014 280 / 0.14)` | Hairlines / borders on paper |
| `--c-paper-line` | `oklch(0.97 0.004 280 / 0.16)` | Hairlines on ink |

Strategy: **Committed.** Ink + paper dominate; azure blue is the single saturated accent used as flat fills (no gradients). Project screenshots supply the rest of the color.

## Typography

Two families on a contrast axis (proportional grotesque vs monospace). Cap is three; we use two.

- **Display + body: Bricolage Grotesque** (Google Fonts, 200-800). Distinctive contemporary grotesque, characterful at heavy weights, readable at text weights. Not on the reflex-reject list. Carries name, headings, and prose.
- **Mono / metadata: Roboto Mono** (already in the project, part of devninja identity). Used for labels, section indices, tech tags, numbers, code-like accents. NOT for long body copy.

Scale (fluid, ratio >=1.25):
- Hero display: `clamp(2.75rem, 9vw, 6rem)`, weight 800, `letter-spacing: -0.03em`, `line-height: 0.92`, `text-wrap: balance`.
- Section H2: `clamp(2rem, 5vw, 3.25rem)`, weight 800, `-0.02em`.
- H3: `clamp(1.35rem, 2.6vw, 2rem)`, weight 700.
- Lead: `clamp(1.15rem, 1.6vw, 1.5rem)`, weight 400, `line-height: 1.5`.
- Body: `1.0625rem`/`1.65`, max width `68ch`.
- Mono label: `0.78rem`, uppercase, `letter-spacing: 0.12em`, weight 500.

## Layout

Single-page immersive scroll: `hero -> about -> stack -> work -> contact`. A persistent 12-col mental grid with deliberate breaks: full-bleed bands, oversized type that runs to the edges, asymmetric splits. Generous vertical rhythm via `clamp()` section padding (`clamp(5rem, 12vh, 9rem)`). Cards are avoided except where a real grid affordance wins (the stack chips, the work index uses full-width rows, not a card grid). Numbered section markers (`01 / WORK`) used as a deliberate brutalist system, sparingly, not an eyebrow on every heading.

## Components

- **Header**: sticky, ink bar; wordmark `NINJADEV`, anchor nav (Work / About / Stack), the polished dino-runner strip, a "Download CV" button. On inner routes (`/tanks`) it becomes a Back control.
- **Hero**: giant name, role line, location, primary CTAs (See work / Download CV), social row; subtle particle web behind.
- **Impact band**: flat bordered grid of measurable outcomes (90+ Lighthouse, 20m→3m releases, etc.), big tabular figures, no gradient/cards-cliché.
- **Experience**: full-width rows from the résumé, each = index + role + company/dates (mono) + achievement bullets + tech tags + product thumbnail (monogram fallback). Non-link, set on the ink stage so screenshots pop.
- **Stack**: brutalist marquee + chip grid using the existing SVG icons.
- **Contact**: blue-drenched band, big "let's talk", channels as large links.
- **Footer**: minimal, social icons.

## Motion

Tokens: `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`; durations 200/450/800ms. Scroll reveals via a reusable `v-reveal` directive (IntersectionObserver) that animates an already-visible default (translate+opacity from a base state) so content never ships blank. Staggered list entrances, a kinetic hero, marquee, magnetic/lift hovers on work rows. All gated by `@media (prefers-reduced-motion: reduce)` -> instant/crossfade. No bounce/elastic; ease-out only.

## Bans honored
No gradient text, no side-stripe borders, no glassmorphism, no hero-metric template, no identical card grids, no per-section uppercase eyebrows, no em dashes in copy, no purple-gradient-on-white.
