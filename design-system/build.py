#!/usr/bin/env python3
"""Build the Glowvie design system.

src/parts/*.html hold body fragments with a leading JSON meta comment.
The build produces:
  dist/components/*.html  standalone preview per component (what Claude Design's
                          Design System pane renders as a card)
  dist/index.html         the whole system on one scrollable page
  dist/tokens.css|json    the design tokens, for use in a real project
  dist/kit.css            the component layer
  dist/motion.js          the motion runtime
  dist/_ds_manifest.json  card index (name, path, group, viewport)
"""
import html as html_mod
import json, pathlib, re, shutil

ROOT = pathlib.Path(__file__).parent
SRC, DIST = ROOT / "src", ROOT / "dist"
META_RE = re.compile(r"^<!--meta\s*(\{.*?\})\s*-->\s*", re.S)
STYLE_RE = re.compile(r"<style>(.*?)</style>", re.S)

tokens = (SRC / "tokens.css").read_text()
kit = (SRC / "kit.css").read_text()
motion = (SRC / "motion.js").read_text()
shell = (SRC / "shell.html").read_text()


def scope_css(css: str, prefix: str) -> str:
    """Prefix every selector in a part's local <style> so the one-page build
    cannot leak styles between components. Handles @media, leaves @keyframes."""
    out, i, n = [], 0, len(css)
    while i < n:
        brace = css.find("{", i)
        if brace == -1:
            out.append(css[i:])
            break
        selector = css[i:brace].strip()
        depth, j = 1, brace + 1
        while j < n and depth:
            if css[j] == "{":
                depth += 1
            elif css[j] == "}":
                depth -= 1
            j += 1
        body = css[brace + 1:j - 1]
        if selector.startswith("@keyframes") or selector.startswith("@font-face"):
            out.append(f"{selector}{{{body}}}")
        elif selector.startswith("@"):
            out.append(f"{selector}{{{scope_css(body, prefix)}}}")
        else:
            sels = ", ".join(f"{prefix} {s.strip()}" for s in selector.split(",") if s.strip())
            out.append(f"{sels}{{{body}}}")
        i = j
    return "\n".join(out)


def tokens_json(css: str) -> dict:
    values = dict(re.findall(r"--([a-z0-9-]+):\s*([^;]+);", css))
    groups = {
        "color":  r"g-|bg|text|accent|border|focus|surface",
        "type":   r"font-|fs-|fw-|lh-|ls-",
        "space":  r"sp-|section-y|gutter|maxw|measure",
        "radius": r"r-",
        "shadow": r"sh-",
        "motion": r"ease-|dur-|stagger|float-dur|marquee-dur",
    }
    return {g: {k: v.strip() for k, v in values.items() if re.match(p, k)} for g, p in groups.items()}


if DIST.exists():
    shutil.rmtree(DIST)
(DIST / "components").mkdir(parents=True)

cards, page_sections, nav_groups = [], [], {}

for part in sorted(SRC.glob("parts/*.html")):
    raw = part.read_text()
    m = META_RE.match(raw)
    if not m:
        raise SystemExit(f"{part.name}: missing leading <!--meta {{...}} --> block")
    meta = json.loads(m.group(1))
    body = raw[m.end():].rstrip() + "\n"

    page = (shell.replace("__TOKENS__", tokens).replace("__KIT__", kit)
                 .replace("__MOTION__", motion).replace("__BODY__", body)
                 .replace("__GROUP__", meta["group"]).replace("__TITLE__", meta["title"])
                 .replace("__SUBTITLE__", meta.get("subtitle", "")))
    (DIST / "components" / part.name).write_text(page)

    cards.append({
        "name": meta["title"], "path": f"components/{part.name}",
        "subtitle": meta.get("subtitle", ""), "group": meta["group"],
        "viewport": {"width": meta.get("width", 1280), "height": meta.get("height", 900)},
    })

    slug = part.stem
    scoped = STYLE_RE.sub(lambda mm: f"<style>{scope_css(mm.group(1), f'#p-{slug}')}</style>", body)
    page_sections.append(
        f'<section class="pv" id="p-{slug}">\n'
        f'  <header class="pv__head">\n'
        f'    <p class="eyebrow">{html_mod.escape(meta["group"])}</p>\n'
        f'    <h2 class="h2">{html_mod.escape(meta["title"])}</h2>\n'
        f'    <p class="meta">{html_mod.escape(meta.get("subtitle", ""))}</p>\n'
        f'  </header>\n{scoped}\n</section>'
    )
    nav_groups.setdefault(meta["group"], []).append((f"p-{slug}", meta["title"]))

nav = "".join(
    f'<p class="side__group">{html_mod.escape(g)}</p>' +
    "".join(f'<a href="#{i}">{html_mod.escape(t)}</a>' for i, t in items)
    for g, items in nav_groups.items()
)

index = (SRC / "index-shell.html").read_text()
(DIST / "index.html").write_text(
    index.replace("__TOKENS__", tokens).replace("__KIT__", kit)
         .replace("__MOTION__", motion).replace("__NAV__", nav)
         .replace("__SECTIONS__", "\n\n".join(page_sections))
)

artifact = (SRC / "artifact-shell.html").read_text()
(DIST / "artifact.html").write_text(
    artifact.replace("__TOKENS__", tokens).replace("__KIT__", kit)
            .replace("__MOTION__", motion).replace("__NAV__", nav)
            .replace("__SECTIONS__", "\n\n".join(page_sections))
)

for f in ("tokens.css", "kit.css", "motion.js"):
    shutil.copy(SRC / f, DIST / f)
(DIST / "tokens.json").write_text(json.dumps(tokens_json(tokens), indent=2))
(DIST / "_ds_manifest.json").write_text(json.dumps({"cards": cards}, indent=2))
print(f"built {len(cards)} cards + index.html -> {DIST}")
