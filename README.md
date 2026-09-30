# Proof

A brutalist print-style design system for React: paper, ink and one loud colour. 28 components, about 120 glyphs, 13 patterns, light and dark themes.

## Quick start

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Martian+Mono:wdth,wght@75..112,100..800&display=swap">
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<script>
  const { Button } = window.Proof;
  ReactDOM.createRoot(document.getElementById('root'))
    .render(React.createElement(Button, { variant: 'accent' }, 'Get started'));
</script>
```

Set `data-theme="dark"` on the root element for the dark theme. TypeScript types are in `components/index.d.ts`.

## What is here

| Path | Contents |
| --- | --- |
| `tokens.json` | Source of truth for colour, spacing, type, radius and opacity tokens |
| `tokens.css` | The same tokens as CSS variables |
| `components/bundle.js`, `bundle.css` | All components, exposed as `window.Proof` |
| `components/<Name>/README.md` | Usage notes for each component |
| `components/<Name>/preview.html` | Example fragments for each component (fragments; view them all in `index.html`) |
| `index.html` | Standalone gallery of every preview; open it in a browser. Regenerate with `python3 scripts/build-gallery.py` |
| `USAGE.md` | Load order summary |

## Brand guidelines

Proof is a general-purpose design system in a brutalist print style: paper and ink, hard 2px rules, square corners, mono labels, tight grotesk headlines, and one loud colour. Build anything in it (sites, docs, dashboards, decks, tools) as a printed sheet, not a glossy app: flat, ruled, dense and confident.

## Principles

- **Flat and ruled.** Structure comes from 2px lines (`border-structural`, colour `rule`) and 1px hairlines (`hair`). No shadows, blurs, gradients or translucency except the faint `opacity-grain` overlay.
- **Square.** Everything uses `radius-none`. The only rounded object is the paper `plate` on a band (`radius-plate`); radios and status dots are circles.
- **One loud colour.** `lime` (`accent`) means "do this" or "this is what you are pointing at": primary button, checked controls, hover fills, the band, selection. Everything else is paper, ink and gray. Put `on-accent` text on lime, never on anything else.
- **Type does the work.** Archivo in tight, heavy, negatively tracked sizes for headlines; Martian Mono in 11px uppercase for every label, control and piece of metadata.
- **Invert on hover.** Interactive rows and tiles flip to `accent` (with `on-accent`) or `inv-bg` (with `inv-fg`). No transitions.
- **Words beside colour.** Status is a glyph plus a word plus a colour, never colour alone.

## Content fundamentals

- Plain, declarative sentences. Say what a thing is and what it is not; state limits before promises. Use the imperative for steps ("Install once.").
- Sentence case for headings and buttons in source; the mono styles (`micro`, buttons, tags, nav, band copy) uppercase with CSS, never in the text. Wordmarks are uppercase by CSS too.
- Commands and identifiers go in `code`, lowercase. Section lead-ins are one short sentence. No emoji, no exclamation marks, no filler adjectives.

## Colour

Use semantic tokens, not raw ones: `bg` ground, `surface` for raised panels and inputs, `fg` text, `muted` secondary text, `rule` lines, `hair` row dividers, `link` links, `focus` ring, `inv-bg`/`inv-fg` inverted blocks, `code-bg`/`code-fg`/`code-dim` code. Light is the default theme; dark is a full remap (black ground, paper text, lime links and focus): set `data-theme="dark"` on the root. Raw `paper`, `ink`, `lime`, `violet`, `gray` stay fixed across themes and are for brand art only.

Signals `success` (teal-blue), `warning` (amber), `danger` (red-orange) are for status text, glyphs, Tag fills and error borders. They are chosen to be told apart by lightness and hue, and always appear with a word and a glyph. Use `violet`/`link` for info. Never add another hue.

## Typography

Headlines: `section-title` 56px, `heading-1` 28px, `heading-2` 20px, weight 700, tracking −0.02 to −0.035em, width axis 100. One `display` wordmark per page, uppercase, width 112, fitted to its container. Body: `body` 16px and `body-small` 13px. Labels: `micro` (mono, 11px, uppercase). Code: `code` 12.5px; inline code is 0.78em with a 1px currentColor border. Load both faces from Google Fonts (Archivo with the wdth and wght axes, Martian Mono).

## Spacing and layout

Use `space-1` … `space-7` (4, 8, 16, 24, 40, 64, 96px). Panels get `space-4`, cells `space-3`, sections `space-6`. Pages are a stack of full-width bands separated by 2px rules: Topbar, Hero, StatusBar, Banner, Sections, Footer. A Section is a narrow head column plus a body 2.6× wider; collapse to one column under 900px. Content text caps at 64ch.

## Glyphs and patterns

The `Glyph` component is the only icon source: about 120 symbols on a 24px grid, 2px stroke, square caps, mitred joins, `currentColor`. Use outline glyphs for interface, `*-fill` solids (carets, play, record, bolt) for indicators, and the registration set (`crosshair`, `registration`, `target`, `starburst`, `asterisk`, `sparkle`, `cross-box`) as ornament and brand marks. Sizes: 14 in controls, 16 in icon buttons, 20 by headings, 28–32 as features. Keep one stroke weight per view; do not rotate, skew or recolour to lime on paper.

The `Pattern` component gives thirteen page-furniture fills: barcode, halftone, dots, ticks, stripes, hatch, checker, grid, crosses, ruler, steps, waves, chevrons. Use them for dividers, band footers, status strips and empty states, one or two kinds per page, always decorative and `aria-hidden`.

Other furniture: registration crosshairs at the corners of a hero, a 7% paper-grain overlay, a fading halftone under a call to action, a lime tick rule in a band footer.

## Components

`window.Proof` holds: Glyph, Pattern (symbols); Button, IconButton (actions); Tag, Status, Progress (status); Input, Select, Checkbox, Switch (forms); Card, Stat, Tabs, Disclosure, Callout, Banner (containers); CodeBlock, DataTable, RowList, Steps, TileGrid (content); Band, Topbar, Hero, Section, StatusBar, Footer (layout). Read a component's README before using it, and compose from these before inventing new patterns. If you must invent, use only tokens, 2px rules, square corners, and inversion on hover.

## Usage rules

- One accent Button per view; one Banner per page; one Hero per page; one display wordmark per page.
- Text on `lime` is `on-accent`; on `inv-bg` is `inv-fg`; on `code-bg` is `code-fg` or `code-dim`.
- `gray` is never body text on paper. Use `muted` for secondary text.
- Focus is always the 3px `focus` ring with 2px offset; never remove it.
- Labels above inputs always; placeholders are hints only.
- Tables have two to four columns, with the subject first.
