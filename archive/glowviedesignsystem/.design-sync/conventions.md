# Building with Glowvie

Glowvie is a **CSS kit**, not a React component library. There is nothing to
import and no provider to wrap: you write ordinary elements and apply the kit's
class names. `window.Glowvie` exposes exactly one function, described below.

## Setup

`styles.css` is the entry point and pulls in the fonts, the tokens and the
component layer in that order. Everything below assumes it is loaded.

**`.reveal` starts at `opacity: 0`.** It becomes visible only when the motion
runtime adds `.is-in`. The bundle runs `Glowvie.mountMotion()` automatically on
load, which covers static markup — but content mounted later (a React effect, a
route change) is invisible until you re-run it:

```jsx
useEffect(() => { window.Glowvie?.mountMotion(); }, []);
```

If you are not going to call it, omit `.reveal` rather than shipping an
invisible element. The same runtime drives `.stagger`, `data-count` counters and
`data-parallax`.

## The styling idiom

Compose kit classes; reach for `var(--token)` for anything the classes do not
cover. Never hard-code a colour, radius, duration or font size — every value in
the system exists as a token in `tokens/tokens.css` (93 of them).

| Family | Classes |
| --- | --- |
| Layout | `container`, `section`, `section--soft`, `section--blush`, `section--quiet`, `section--invert`, `section-head`, `section-head--center`, `grid`, `grid--2`…`grid--5` |
| Type | `display`, `h1`…`h4`, `lead`, `body`, `meta`, `eyebrow`, `italic-accent`, `vertical-text` |
| Buttons | `btn`, `btn--lg`, `btn--sm`, `btn--block`, `btn--dark`, `btn--light`, `btn--ghost`, `btn--outline`, `btn__arrow`, `link-underline`, `plus` |
| Chips | `chip`, `chip--coral`, `chip--dark`, `chip--light`, `chip--gold`, `chip--outline` |
| Surfaces | `card`, `card--blush`, `card--cream`, `card--lemon`, `card--dark`, `card--flat`, `card__icon`, `card__index`, `media`, `media--arch`, `media--blob`, `media--circle`, `media__ph`, `hover-zoom`, `leaf`, `shape-circle` |
| Signature | `arch-card`, `arch-card__bar`, `arch-card__title`, `feature`, `check-row`, `price-row`, `quote`, `stars`, `avatar`, `stat__value`, `stat__label`, `acc`, `float-card` |
| Forms | `field`, `label`, `input`, `input--error`, `select`, `textarea`, `check`, `hint`, `error` |
| Nav | `nav`, `nav__logo`, `nav__links`, `header--sticky`, `topbar`, `footer`, `footer__cols`, `footer__bottom`, `social` |
| Motion | `reveal` + `data-reveal="up\|left\|right\|scale\|clip"`, `stagger`, `float`, `float--sm`, `float--rev`, `marquee`, `spin-slow`, `parallax` |

Token prefixes: `--g-*` raw palette · `--accent*`, `--text*`, `--bg*`, `--surface`,
`--border` semantic colour · `--fs-*`, `--font-*`, `--lh-*`, `--ls-*` type ·
`--sp-1`…`--sp-10`, `--maxw`, `--measure`, `--gutter` space · `--r-*` radius
(incl. `--r-arch`, `--r-blob`, `--r-pill`) · `--sh-1`…`--sh-3`, `--sh-focus`
shadow · `--dur-*`, `--ease-*`, `--stagger` motion.

## Where the truth lives

Read the real files before styling — they beat any summary:
`styles.css` and its imports (`tokens/tokens.css`, `_ds_bundle.css`), plus the
`<Name>.prompt.md` beside each component for its markup and rules.

## Idiomatic example

```jsx
<section className="section section--soft">
  <div className="container">
    <div className="section-head section-head--center">
      <p className="eyebrow">Skincare studio</p>
      <h2 className="h1 reveal" data-reveal="up">
        Refine your radiant beauty <span className="italic-accent">today!</span>
      </h2>
    </div>
    <div className="grid grid--3 stagger">
      {services.map((s) => (
        <a key={s.slug} className="arch-card hover-zoom reveal" data-reveal="up" href={s.href}>
          <div className="media"><img src={s.photo} alt="" /></div>
          <div className="arch-card__bar">
            <span className="arch-card__title">{s.name}</span>
            <span className="plus">+</span>
          </div>
        </a>
      ))}
    </div>
    <a className="btn btn--lg" href="#book">Book now</a>
  </div>
</section>
```

## Gotchas

- Inside `section--invert` the inherited text colour is light, and
  `arch-card__bar` paints a white bar — set `color: var(--text)` on the bar or
  its title there, or the label renders white-on-white.
- `.spec`, `.row`, `.row__label` and `.frame` belong to the specimen preview
  cards, not to the kit. Never use them in a design.
- Sections carry their own background; do not stack `section--soft` inside
  `section--blush` expecting a blend.
