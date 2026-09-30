# Proof design system: how to use this export

Load order in a page:

1. Google Fonts: Archivo (wdth,wght axes) and Martian Mono
2. `tokens.css`  (CSS variables; set `data-theme="dark"` on the root for dark)
3. `components/bundle.css`
4. React 18 + ReactDOM 18 (UMD)
5. `components/bundle.js`  (exposes `window.Proof`)

Then read `README.md` (brand rules) and `components/<Name>/README.md` (per component).
`components/<Name>/preview.html` are live examples. `tokens.json` is the source of truth for tokens.

Dark mode: set `data-theme="dark"` on the root element. It is not automatic; see "Dark mode" in `README.md`.
