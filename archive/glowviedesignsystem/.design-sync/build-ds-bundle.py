#!/usr/bin/env python3
"""Off-script converter: Glowvie (Python/static-CSS kit) -> Claude Design layout.

This repo is outside package-build.mjs's envelope: there is no npm package, no
React and no Storybook, so the JS-bundle discovery path has nothing to find.
The upload FORMAT is the contract, though, and it is reachable from this repo's
own sources. This script produces it deterministically from src/, exactly as
build.py produces dist/ -- same parts, same tokens, same kit, same runtime.

What the design agent receives:
  styles.css  -> the @import closure (fonts + tokens + kit). Rendered designs
                 get ONLY this closure, so the real component CSS lives here.
  _ds_bundle.js -> window.Glowvie.mountMotion(): the repo's own motion runtime,
                 re-scoped so it can run after React mounts. Without it every
                 `.reveal` element stays at opacity 0 (kit.css:268) -- i.e.
                 invisible -- in every design built with this system.
  components/<Group>/<Name>/ -> the 21 specimens as cards + prompt files.

Run: python3 .design-sync/build-ds-bundle.py [--out ds-bundle]
"""
import argparse
import hashlib
import html as html_mod
import json
import pathlib
import re
import shutil
import subprocess
import sys
from html.parser import HTMLParser

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from jsxify import html_to_jsx  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
CFG_PATH = ROOT / ".design-sync" / "config.json"

META_RE = re.compile(r"^<!--meta\s*(\{.*?\})\s*-->\s*", re.S)
STYLE_RE = re.compile(r"<style>(.*?)</style>", re.S)

FONT_IMPORT = (
    "https://fonts.googleapis.com/css2?family=Playfair+Display:"
    "ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@400;500;700&display=swap"
)

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr"}


# ---------------------------------------------------------------- utilities

def sha256(data):
    if isinstance(data, str):
        data = data.encode()
    return hashlib.sha256(data).hexdigest()


def pascal(name):
    """'Space, Shape & Elevation' -> 'SpaceShapeElevation'; 'FAQ' stays 'FAQ'."""
    parts = [p for p in re.split(r"[^A-Za-z0-9]+", name) if p]
    return "".join(p if p.isupper() else p[:1].upper() + p[1:] for p in parts)


def kit_classes(css):
    """Every class selector kit.css defines -- the system's real vocabulary."""
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    return set(re.findall(r"\.([a-zA-Z][a-zA-Z0-9_-]*)", css))


def token_names(css):
    return sorted(set(re.findall(r"^\s*(--[a-z0-9-]+)\s*:", css, re.M)))


def tokens_json(css):
    values = dict(re.findall(r"--([a-z0-9-]+):\s*([^;]+);", css))
    groups = {
        "color":  r"g-|bg|text|accent|border|focus|surface",
        "type":   r"font-|fs-|fw-|lh-|ls-",
        "space":  r"sp-|section-y|gutter|maxw|measure",
        "radius": r"r-",
        "shadow": r"sh-",
        "motion": r"ease-|dur-|stagger|float-dur|marquee-dur",
    }
    return {g: {k: v.strip() for k, v in values.items() if re.match(p, k)}
            for g, p in groups.items()}


# ------------------------------------------------------- specimen-chrome DOM
# The parts wrap real kit markup in specimen chrome (.row / .row__label /
# .row__demo) that exists only in the preview shell. The prompt-file examples
# must show the kit markup alone, so the chrome is unwrapped and the
# commentary paragraphs are lifted out as design notes.

class Node:
    def __init__(self, tag=None, attrs=None):
        self.tag, self.attrs, self.children = tag, dict(attrs or {}), []
        self.text = None

    @property
    def classes(self):
        return set((self.attrs.get("class") or "").split())


class Tree(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.root = Node("#root")
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs)
        self.stack[-1].children.append(n)
        if tag not in VOID:
            self.stack.append(n)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, attrs))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return

    def _text(self, data):
        n = Node()
        n.text = data
        self.stack[-1].children.append(n)

    handle_data = _text
    handle_entityref = lambda self, name: self._text(f"&{name};")
    handle_charref = lambda self, name: self._text(f"&#{name};")

    def handle_comment(self, data):
        self._text(f"<!--{data}-->")


def serialize(node):
    if node.text is not None:
        return node.text
    inner = "".join(serialize(c) for c in node.children)
    if node.tag == "#root":
        return inner
    attrs = "".join(
        f' {k}="{html_mod.escape(v, quote=True)}"' if v is not None else f" {k}"
        for k, v in node.attrs.items()
    )
    if node.tag in VOID:
        return f"<{node.tag}{attrs}>"
    return f"<{node.tag}{attrs}>{inner}</{node.tag}>"


def node_text(node):
    if node.text is not None:
        return re.sub(r"<!--.*?-->", "", node.text, flags=re.S)
    return "".join(node_text(c) for c in node.children)


def strip_chrome(node, kit, notes):
    """Unwrap specimen-chrome containers; lift their commentary into `notes`."""
    keep = []
    for child in node.children:
        if child.text is not None:
            keep.append(child)
            continue
        # <style> and <script> in a part drive the specimen itself (replay
        # buttons, demo-only layout). They are never kit markup to copy.
        if child.tag in ("style", "script"):
            continue
        cls = child.classes
        # Commentary paragraphs: prose about the design, not markup to copy.
        if "row__label" in cls or (child.tag == "p" and "meta" in cls):
            txt = " ".join(html_mod.unescape(node_text(child)).split())
            if txt:
                notes.append(txt)
            continue
        strip_chrome(child, kit, notes)
        # Containers that exist only in the specimen shell get unwrapped.
        if cls and cls.isdisjoint(kit) and (cls & {"row", "row__demo"} or
                                            any(c.startswith("row__demo--") for c in cls)):
            keep.extend(child.children)
        else:
            keep.append(child)
    node.children = keep


def example_markup(body, kit):
    t = Tree()
    t.feed(body)
    notes = []
    strip_chrome(t.root, kit, notes)
    # Drop the part-local <style> block: it styles the specimen, not the kit.
    t.root.children = [c for c in t.root.children if c.tag != "style"]
    markup = serialize(t.root)
    markup = re.sub(r"\n\s*\n+", "\n", markup).strip()
    return markup, notes


def used_kit_classes(body, kit):
    used = set()
    for m in re.finditer(r'class="([^"]*)"', body):
        used |= set(m.group(1).split())
    return sorted(used & kit)


# ----------------------------------------------------------------- emitters

def build_bundle_js(motion_src, source_hashes):
    """Wrap the repo's own motion runtime as a callable, re-runnable mount.

    src/motion.js is a self-invoking IIFE that scans the DOM at parse time.
    That works for a static page but not for a rendered design, where React
    mounts after the bundle loads -- the scan would find nothing and every
    `.reveal` would stay invisible. The ALGORITHM below is the repo's own,
    unchanged; only the invocation is rewritten:
      - the IIFE becomes `mountMotion(root)`, root-scoped,
      - window-level listeners bind once rather than per call,
      - it auto-runs on DOMContentLoaded so static cards need no glue.
    """
    body = motion_src
    # Strip the leading banner comment and the IIFE wrapper.
    body = re.sub(r"^\s*/\*.*?\*/\s*", "", body, count=1, flags=re.S)
    m = re.match(r"\s*\(function\s*\(\)\s*\{(.*)\}\)\(\);\s*$", body, re.S)
    if not m:
        raise SystemExit("motion.js: unexpected wrapper -- expected a bare IIFE")
    inner = m.group(1)

    # Re-scope the DOM scans to the mount root.
    scans = inner.count("document.querySelectorAll")
    if scans != 5:
        raise SystemExit(f"motion.js: expected 5 document.querySelectorAll scans, found {scans}")
    inner = inner.replace("document.querySelectorAll", "root.querySelectorAll")

    # Bind the window listeners once, however many times mountMotion runs.
    binds = inner.count("window.addEventListener")
    if binds != 2:
        raise SystemExit(f"motion.js: expected 2 window.addEventListener binds, found {binds}")
    inner = inner.replace("window.addEventListener", "bindOnce")

    header = {
        "namespace": "Glowvie",
        # This design system ships no JS components -- it is a CSS kit. The
        # bundle carries the motion runtime only, so the component list is
        # honestly empty; the vocabulary is CSS classes (see README).
        "components": [],
        "sourceHashes": source_hashes,
        "inlinedExternals": [],
    }
    return (
        "/* @ds-bundle: " + json.dumps(header, separators=(",", ":")) + " */\n"
        "/* Glowvie motion runtime. Algorithm verbatim from src/motion.js;\n"
        "   re-scoped so it can run after a React mount. See README.md. */\n"
        "(function () {\n"
        "  var G = (window.Glowvie = window.Glowvie || {});\n"
        "  var bound = {};\n"
        "  function bindOnce(evt, fn, opts) {\n"
        "    if (bound[evt]) return;\n"
        "    bound[evt] = true;\n"
        "    window.addEventListener(evt, fn, opts);\n"
        "  }\n"
        "  function mountMotion(root) {\n"
        "    root = root || document;\n"
        + inner +
        "  }\n"
        "  G.mountMotion = mountMotion;\n"
        "  if (document.readyState === 'loading') {\n"
        "    document.addEventListener('DOMContentLoaded', function () { mountMotion(); });\n"
        "  } else {\n"
        "    mountMotion();\n"
        "  }\n"
        "})();\n"
    )


CARD_TMPL = """<!-- @dsCard group="{group}" viewport="{w}x{h}" -->
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · Glowvie Design System</title>
<link rel="stylesheet" href="../../../styles.css">
<link rel="stylesheet" href="../../../_preview/spec-chrome.css">
{part_style}</head>
<body class="spec">
<header class="spec__head">
  <p class="eyebrow">{group}</p>
  <h1 class="h3">{title}</h1>
  <p class="meta">{subtitle}</p>
</header>
<main class="spec__body">
{body}
</main>
<script src="../../../_ds_bundle.js"></script>
<script src="../../../_preview/preview-boot.js"></script>
</body>
</html>
"""

SPEC_CHROME = """/* Specimen chrome -- the preview card's own frame.
   Deliberately NOT in the styles.css @import closure: rendered designs must
   never inherit `.row` / `.spec` as if they were kit vocabulary. */
.spec { padding: var(--sp-7) var(--sp-6) var(--sp-9); background: var(--bg); }
.spec__head { max-width: var(--maxw); margin: 0 auto var(--sp-7); }
.spec__head .h3 { margin: var(--sp-3) 0 var(--sp-2); }
.spec__body { max-width: var(--maxw); margin: 0 auto; display: grid; gap: var(--sp-8); }
.row { display: grid; gap: var(--sp-4); }
.row__label { font-size: var(--fs-2xs); text-transform: uppercase; letter-spacing: var(--ls-eyebrow);
  color: var(--text-faint); padding-bottom: var(--sp-3); border-bottom: 1px solid var(--border); }
.row__demo { display: flex; flex-wrap: wrap; gap: var(--sp-4); align-items: center; }
.row__demo--stack { display: grid; gap: var(--sp-5); }
.frame { border: 1px solid var(--border); border-radius: var(--r-lg); overflow: hidden; }
code, .code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: var(--fs-xs); color: var(--accent-action); }
"""

PREVIEW_BOOT = """/* Preview-only settler -- NOT part of the kit, never loaded into a design.

   A specimen card must show the component's RESTING state. Two things fight
   that. kit.css sets `.reveal { opacity: 0 }` and the runtime only clears it
   for elements currently in the viewport, so anything below the fold of a tall
   card stays invisible. And the counters animate from 0 over 1400ms, so a
   screenshot taken at `networkidle` catches them reading "0".

   Both are fixed by snapping to the end state immediately, with transitions
   suppressed for one frame so nothing is ever captured mid-fade. The
   suppression is then lifted, so hover states and the Motion card's replay
   buttons still animate normally for anyone actually looking at the card. */
(function () {
  function settle() {
    var freeze = document.createElement('style');
    freeze.textContent =
      '.reveal, .stagger > * { transition: none !important; animation: none !important; }';
    document.head.appendChild(freeze);

    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-in');
    });
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var dec = (el.dataset.count.split('.')[1] || '').length;
      el.textContent = parseFloat(el.dataset.count).toFixed(dec)
        .replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',') + (el.dataset.suffix || '');
    });

    void document.body.offsetHeight;          // flush the frozen state
    requestAnimationFrame(function () {
      freeze.remove();                        // hand motion back for interaction
      document.documentElement.setAttribute('data-preview-settled', '1');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', settle);
  } else {
    settle();
  }
  // Late-arriving content (webfont reflow, images) gets a second pass.
  window.addEventListener('load', settle);
})();
"""


def prompt_md(meta, name, group, classes, notes, jsx):
    lines = [f"{meta['title']} — {meta.get('subtitle', '').rstrip('.')}.", ""]
    lines += [
        f"Part of the Glowvie design system ({group}). Glowvie is a **CSS kit**: "
        "there are no JS components to import — you compose plain elements and "
        "apply the kit's class names. Every value comes from a token in "
        "`tokens/tokens.css`.",
        "",
    ]
    if classes:
        lines += ["## Classes this uses", "",
                  ", ".join(f"`{c}`" for c in classes), ""]
    if notes:
        lines += ["## Design notes", ""]
        lines += [f"- {n}" for n in notes]
        lines += [""]
    lines += ["## Example", "", "```jsx", jsx, "```", ""]
    lines += [
        "## Rules",
        "",
        "- Style with the classes above and with `var(--token)` values; never "
        "hard-code a colour, radius, duration or font size.",
        "- `.reveal` starts at `opacity: 0`. It only becomes visible once "
        "`window.Glowvie.mountMotion()` has run (the bundle auto-runs it on load). "
        "Call it again after mounting content dynamically, or omit `.reveal`.",
        "- Specimen-only classes (`.spec`, `.row`, `.row__label`, `.frame`) belong "
        "to the preview card, not to the kit. Do not use them in a design.",
        "",
    ]
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="ds-bundle")
    args = ap.parse_args()

    out = (ROOT / args.out).resolve()
    cfg = json.loads(CFG_PATH.read_text()) if CFG_PATH.exists() else {}

    tokens_css = (SRC / "tokens.css").read_text()
    kit_css = (SRC / "kit.css").read_text()
    motion_js = (SRC / "motion.js").read_text()
    kit = kit_classes(kit_css)

    if out.exists():
        shutil.rmtree(out)
    (out / "components").mkdir(parents=True)
    (out / "tokens").mkdir()
    (out / "fonts").mkdir()
    (out / "_preview").mkdir()

    # ---- shared layer ----------------------------------------------------
    (out / "tokens" / "tokens.css").write_text(tokens_css)
    (out / "tokens" / "tokens.json").write_text(json.dumps(tokens_json(tokens_css), indent=2))
    (out / "_ds_bundle.css").write_text(kit_css)
    (out / "fonts" / "fonts.css").write_text(
        "/* Glowvie brand faces. The kit has always loaded these from Google\n"
        "   Fonts; they resolve at runtime rather than shipping as woff2. */\n"
        f'@import url("{FONT_IMPORT}");\n'
    )
    (out / "styles.css").write_text(
        "/* Glowvie — the styles entry point.\n"
        "   Rendered designs receive ONLY this file's @import closure, so every\n"
        "   layer the kit needs is reachable from here. Order matters: fonts and\n"
        "   tokens must land before the component layer that consumes them. */\n"
        '@import "./fonts/fonts.css";\n'
        '@import "./tokens/tokens.css";\n'
        '@import "./_ds_bundle.css";\n'
    )
    source_hashes = {
        "src/tokens.css": sha256(tokens_css)[:12],
        "src/kit.css": sha256(kit_css)[:12],
        "src/motion.js": sha256(motion_js)[:12],
    }
    (out / "_ds_bundle.js").write_text(build_bundle_js(motion_js, source_hashes))
    (out / "_preview" / "spec-chrome.css").write_text(SPEC_CHROME)
    (out / "_preview" / "preview-boot.js").write_text(PREVIEW_BOOT)

    # ---- components ------------------------------------------------------
    cards, jsx_snippets = [], {}
    for part in sorted(SRC.glob("parts/*.html")):
        raw = part.read_text()
        m = META_RE.match(raw)
        if not m:
            raise SystemExit(f"{part.name}: missing leading <!--meta {{...}} --> block")
        meta = json.loads(m.group(1))
        body = raw[m.end():].rstrip() + "\n"

        name, group = pascal(meta["title"]), meta["group"]
        w, h = meta.get("width", 1280), meta.get("height", 900)
        cdir = out / "components" / group / name
        cdir.mkdir(parents=True)

        part_style = ""
        sm = STYLE_RE.search(body)
        if sm:
            part_style = f"<style>{sm.group(1)}</style>\n"

        cdir.joinpath(f"{name}.html").write_text(CARD_TMPL.format(
            group=html_mod.escape(group), w=w, h=h,
            title=html_mod.escape(meta["title"]),
            subtitle=html_mod.escape(meta.get("subtitle", "")),
            part_style=part_style,
            body=STYLE_RE.sub("", body).strip(),
        ))

        markup, notes = example_markup(body, kit)
        jsx = html_to_jsx(markup)
        jsx_snippets[name] = jsx
        cdir.joinpath(f"{name}.prompt.md").write_text(
            prompt_md(meta, name, group, used_kit_classes(body, kit), notes, jsx))

        cards.append({"name": name, "title": meta["title"], "group": group,
                      "subtitle": meta.get("subtitle", ""),
                      "viewport": {"width": w, "height": h}})

    # ---- README ----------------------------------------------------------
    header = ""
    if cfg.get("readmeHeader"):
        hp = ROOT / cfg["readmeHeader"]
        if hp.exists():
            header = hp.read_text().rstrip() + "\n\n---\n\n"

    by_group = {}
    for c in cards:
        by_group.setdefault(c["group"], []).append(c)
    index = []
    for g, items in by_group.items():
        index.append(f"\n### {g}\n")
        for c in items:
            index.append(f"- **{c['title']}** (`{c['name']}`) — {c['subtitle']}")
    (out / "README.md").write_text(
        header
        + "# Glowvie — Design System\n\n"
        "A CSS kit: warm coral on blush and cream, Playfair Display over DM Sans,\n"
        "arch-cropped photography, and a motion layer that makes sections arrive.\n\n"
        "## Layout\n\n"
        "| Path | What it is |\n| --- | --- |\n"
        "| `styles.css` | The styles entry point. Imports fonts, tokens, then the kit. |\n"
        "| `tokens/tokens.css` | "
        f"{len(token_names(tokens_css))} custom properties — every design decision. |\n"
        "| `tokens/tokens.json` | The same tokens grouped as data. |\n"
        "| `_ds_bundle.css` | The component layer (buttons, arch cards, chips, forms…). |\n"
        "| `_ds_bundle.js` | `window.Glowvie.mountMotion()` — reveals, counters, parallax. |\n"
        "| `components/<Group>/<Name>/` | One specimen card + prompt file per component. |\n\n"
        f"## Components ({len(cards)})\n" + "\n".join(index) + "\n"
    )

    # ---- local build metadata (not uploaded) ------------------------------
    (out / ".ds-build-meta.json").write_text(json.dumps({
        "shape": "package", "componentCount": len(cards),
        "generator": ".design-sync/build-ds-bundle.py",
    }, indent=2))
    (out / ".cards.json").write_text(json.dumps({"cards": cards}, indent=2))

    # ---- JSX syntax gate --------------------------------------------------
    verify_jsx(jsx_snippets)

    print(f"built {len(cards)} components -> {out}")


def verify_jsx(snippets):
    """Every prompt example must be syntactically valid JSX, or the build fails."""
    esbuild = ROOT / "node_modules" / ".bin" / "esbuild"
    if not esbuild.exists():
        print("! esbuild not installed — JSX examples NOT syntax-checked", file=sys.stderr)
        return
    bad = []
    for name, jsx in snippets.items():
        src = "const _ = <>\n" + jsx + "\n</>;\n"
        p = subprocess.run([str(esbuild), "--loader=jsx", "--log-level=error"],
                           input=src.encode(), capture_output=True)
        if p.returncode != 0:
            bad.append((name, p.stderr.decode().strip().split("\n")[0]))
    if bad:
        for name, err in bad:
            print(f"[JSX_INVALID] {name}: {err}", file=sys.stderr)
        raise SystemExit(f"{len(bad)} prompt example(s) are not valid JSX")
    print(f"  jsx: {len(snippets)} examples parse cleanly")


if __name__ == "__main__":
    main()
