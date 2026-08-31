# design-sync notes — Glowvie

## Why this repo is off-script

`package-build.mjs` cannot run here: there is no npm package, no React and no
Storybook, so the bundle-discovery path has nothing to find (`[ZERO_MATCH]`).
The upload **format** is the contract, though, and it is reachable from this
repo's own sources, so `.design-sync/build-ds-bundle.py` produces the layout
directly from `src/` — the same parts, tokens, kit and runtime that `build.py`
compiles into `dist/`.

Run a sync with `./.design-sync/sync.sh` (build → anchor → validate).
`.ds-sync/` holds the skill's staged scripts; only `package-validate.mjs` is
used, and it is the unmodified gate.

## Decisions taken (2026-08-31)

- **Synced as a class-vocabulary CSS kit**, not as React wrappers. Glowvie has
  no component API; inventing one would have been a reimplementation rather
  than shipping what the repo already builds. The design agent composes plain
  elements with kit classes — see `.design-sync/conventions.md`.
- **The user prefers Astro + Tailwind** for the consuming app and asked to defer
  it: this sync is deliberately "as-is" plain CSS. Note that Claude Design
  cannot consume Astro components at all (the contract is a browser JS bundle
  rendered as React), so a future Tailwind move would change the *class
  vocabulary* in the conventions header, not the delivery format. Nothing in
  the repo currently has Tailwind installed.
- **The kit's colour values and type scale remain a reconstruction** of the
  Glowvie demo (per the repo README) — never read from the original CSS. If the
  real values ever arrive, edit `src/tokens.css` and re-sync; nothing else
  needs to change.

## `_ds_bundle.js` — why the runtime is wrapped

`src/motion.js` is a self-invoking IIFE that scans the DOM once at parse time.
That is fine for a static page but wrong for a rendered design, where React
mounts *after* the bundle loads: the scan would find nothing and every
`.reveal` element would stay at `opacity: 0` — i.e. invisible — in every design
built with this system.

The build therefore re-exposes it as `window.Glowvie.mountMotion(root)`. The
**algorithm is the repo's own, unchanged**; only the invocation differs:
the IIFE becomes a root-scoped function, the two window listeners bind once
rather than per call, and it auto-runs on `DOMContentLoaded`. The build asserts
the shape it rewrites (5 `document.querySelectorAll` scans, 2
`window.addEventListener` binds) and fails loudly if `src/motion.js` changes
shape, so this can never silently drift.

## Findings in the design system itself (not sync defects)

1. **`arch-card__title` renders white-on-white inside `section--invert`.**
   `kit.css:19` sets `color: var(--text-invert)`, `kit.css:152` has
   `.arch-card { color: inherit }`, and `kit.css:156` paints the bar
   `var(--g-white)` — so the title inherits white onto a white bar. Visible in
   the HomePage and ServiceCards cards. One-line fix:
   `.arch-card__bar { color: var(--text); }`. **Left unfixed** — the user chose
   to sync as-is; flagged in the conventions header's gotchas so the design
   agent works around it.
2. **Checkboxes are unstyled browser defaults.** The Forms specimen renders a
   blue system checkbox against the coral palette. `.check` styles the row, not
   the control. A gap in the kit, not a conversion problem.

## Validator output that needs no action

- `[FONT_REMOTE]` names **Jost** and **Prata** alongside DM Sans and Playfair
  Display. Jost and Prata are only *fallback* entries inside `--font-body` and
  `--font-display`; the primaries do load from Google Fonts. False positive —
  do not chase it.
- `_ds_bundle.js` header reports **0 components**. Correct and deliberate: this
  DS ships no JS components, only the motion runtime. The vocabulary is CSS
  classes.
- The render-hash recompute is skipped (no `.stories-map.json`) — expected for
  an off-script layout.

## Preview-only chrome

`_preview/spec-chrome.css` (the `.spec` / `.row` specimen frame) is linked by
the cards but deliberately **kept out of the `styles.css` @import closure**, so
rendered designs never inherit `.row` as if it were kit vocabulary.

`_preview/preview-boot.js` snaps `.reveal` elements and `data-count` counters to
their resting state with transitions suppressed for one frame. Without it the
cards screenshot at `networkidle` mid-animation: counters read "0", and
anything below a tall card's fold stays invisible. This cost three classes of
missing content on the first render pass (Hero's buttons and counters, the dark
variant's heading, Colour's neutral row, FAQ's and ChecklistBlock's lower rows).
