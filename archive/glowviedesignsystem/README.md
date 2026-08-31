# Glowvie — Design System

A complete, importable design system reconstructed from the **Glowvie** beauty & skincare
template kit: warm coral on blush and cream, Playfair Display over DM Sans, arch-cropped
photography, and a motion layer that makes every section *arrive* rather than appear.

Open **`dist/index.html`** in a browser to see the whole system on one page.

---

## What is in here

| Path | What it is |
| --- | --- |
| `dist/index.html` | The entire system on one scrollable page, with a sidebar index. Start here. |
| `dist/components/*.html` | One standalone specimen per component — self-contained HTML, nothing to install. These are the cards a Claude Design "design system" project renders. |
| `dist/tokens.css` | Every design decision as a CSS custom property. 88 tokens. |
| `dist/tokens.json` | The same tokens as data, grouped (colour / type / space / radius / shadow / motion) — for Figma plugins, Tailwind configs, Style Dictionary. |
| `dist/kit.css` | The component layer: buttons, cards, arch cards, chips, forms, accordion, nav, footer, plus the motion utilities. Built only on tokens. |
| `dist/motion.js` | 2 KB runtime: scroll reveals, staggered children, counters, parallax. No dependencies. |
| `dist/_ds_manifest.json` | Card index (name, path, group, viewport). |
| `src/` | Sources. `parts/*.html` are body fragments with a JSON meta header; `build.py` inlines the tokens, kit and runtime into every output file. |

### Contents of the system

**Foundations** — Colour · Typography · Space, Shape & Elevation · Motion
**Components** — Buttons & Plus Tabs · Chips & Tags · Forms · Service Cards · Feature Strip ·
Checklist Block · Testimonials · Stats · FAQ · Story & Results · Gallery · Packages & Pricing
**Patterns** — Header · Hero · Booking CTA · Footer
**Compositions** — the full home page, every block in its intended order

---

## Importing it into Claude Design

Claude Design reads a *design-system project*: a folder of standalone preview files, each
starting with a `<!-- @dsCard group="…" -->` marker. Everything in `dist/` is already in that
shape, so there is nothing to convert.

**From an interactive Claude Code session** (the DesignSync tool needs a browser login, which
a cloud session cannot do):

```bash
/design-login          # once per machine — authorises design-system access
/design-sync ./design-system/dist
```

That creates (or updates) a design-system project on claude.ai and uploads each file in
`dist/components/` as a card, grouped by the `group` in its `@dsCard` marker.

**By hand:** upload the contents of `dist/` to a Claude Design project of type
*design system*. Keep the folder structure — the pane builds its card index from the
`@dsCard` comment on the first line of each preview.

---

## Using it in a real project

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;700&display=swap">
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="kit.css">
<script src="motion.js" defer></script>
```

Then write markup against the kit:

```html
<section class="section section--soft">
  <div class="container">
    <p class="eyebrow">Skincare studio</p>
    <h1 class="display reveal" data-reveal="up">Refine your radiant beauty <span class="italic-accent">today!</span></h1>
    <a class="btn btn--lg" href="#book">Book now</a>
    <p class="stat__value" data-count="3000" data-suffix="+">3,000+</p>
  </div>
</section>
```

Motion is opt-in per element: add `.reveal` with `data-reveal="up|left|right|scale|clip"`,
wrap a grid in `.stagger` to offset its children, add `data-count` to a number, and
`data-parallax="0.15"–"0.4"` to a decorative layer. All of it collapses to nothing under
`prefers-reduced-motion`, and the page is fully readable with JavaScript off.

## Re-skinning

Every value the system uses lives in `tokens.css`. Change the palette block at the top and the
whole kit follows — buttons, chips, focus rings, shadows, the arch, the gallery band. Nothing
in `kit.css` contains a literal colour, size or duration.

## Rebuilding after an edit

```bash
python3 design-system/build.py
```

Edit `src/tokens.css`, `src/kit.css`, `src/motion.js` or a fragment in `src/parts/`, then
rebuild. Each part's first line is its card metadata:

```html
<!--meta {"title":"Service Cards","group":"Components","subtitle":"…","width":1280,"height":1080} -->
```

## A note on fidelity

The colour values, type scale and motion timings are a careful reconstruction from the Glowvie
demo — the live demo site was not reachable from the environment this was built in, so the
CSS was never read directly. Everything is tokenised precisely so that swapping in the kit's
exact hexes and fonts, if you have them, is a single-file edit.
