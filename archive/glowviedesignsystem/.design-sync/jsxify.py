"""HTML -> JSX conversion for the Glowvie prompt-file examples.

The kit is authored as HTML; the Claude Design agent writes React. Converting
here (rather than telling the agent to convert) keeps the examples directly
pasteable. Every snippet this produces is syntax-checked with esbuild by
build-ds-bundle.py, so a conversion bug fails the build instead of shipping.
"""
import re

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr"}

# HTML attribute -> JSX prop. data-* and aria-* pass through unchanged.
ATTR_MAP = {
    "class": "className", "for": "htmlFor", "tabindex": "tabIndex",
    "colspan": "colSpan", "rowspan": "rowSpan", "maxlength": "maxLength",
    "minlength": "minLength", "readonly": "readOnly", "autocomplete": "autoComplete",
    "autofocus": "autoFocus", "spellcheck": "spellCheck", "contenteditable": "contentEditable",
    "crossorigin": "crossOrigin", "datetime": "dateTime", "enctype": "encType",
    "formaction": "formAction", "novalidate": "noValidate", "srcset": "srcSet",
    "usemap": "useMap", "accesskey": "accessKey", "playsinline": "playsInline",
}
# Attributes that are booleans in HTML but need {true} in JSX when valueless.
BOOLEAN_ATTRS = {"disabled", "checked", "selected", "readonly", "required",
                 "autofocus", "multiple", "muted", "loop", "autoplay",
                 "controls", "open", "hidden", "playsinline", "novalidate"}

TAG_RE = re.compile(r"<(/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s+[^<>]*?)?)(/?)>", re.S)
ATTR_RE = re.compile(r"""([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*(?:=\s*(".*?"|'.*?'|[^\s"'<>`]+))?""", re.S)
COMMENT_RE = re.compile(r"<!--(.*?)-->", re.S)


def _css_prop_to_jsx(prop):
    prop = prop.strip()
    if prop.startswith("--"):          # custom properties keep their literal name
        return f"'{prop}'"
    parts = prop.split("-")
    return parts[0] + "".join(p.capitalize() for p in parts[1:])


def _style_to_object(value):
    """`display:grid;gap:var(--sp-3)` -> `{{ display: 'grid', gap: 'var(--sp-3)' }}`"""
    decls = []
    for chunk in value.split(";"):
        if ":" not in chunk:
            continue
        prop, _, val = chunk.partition(":")
        if not prop.strip():
            continue
        key = _css_prop_to_jsx(prop)
        decls.append(f"{key}: {_js_string(val.strip())}")
    return "{{ " + ", ".join(decls) + " }}" if decls else "{{}}"


def _js_string(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"


def _convert_attrs(raw):
    out = []
    for m in ATTR_RE.finditer(raw):
        name, value = m.group(1), m.group(2)
        if value is not None and value[:1] in "\"'":
            value = value[1:-1]

        if name.lower() == "style" and value is not None:
            out.append(f"style={_style_to_object(value)}")
            continue

        low = name.lower()
        if low.startswith("data-") or low.startswith("aria-"):
            jsx_name = low
        else:
            jsx_name = ATTR_MAP.get(low, low)

        if value is None:
            out.append(f"{jsx_name}={{true}}" if low in BOOLEAN_ATTRS else f"{jsx_name}")
        else:
            # Braces inside a JSX string literal would open an expression.
            if "{" in value or "}" in value:
                out.append(f"{jsx_name}={{{_js_string(value)}}}")
            else:
                out.append(f'{jsx_name}="{value}"')
    return out


def _escape_text(text):
    """In JSX a bare brace opens an expression, so text braces must escape."""
    return text.replace("{", "&#123;").replace("}", "&#125;")


def html_to_jsx(html):
    """Convert a kit HTML fragment to a JSX fragment.

    Deliberately narrow: it handles the constructs the Glowvie parts actually
    use (elements, attributes, inline styles, comments, entities). It is not a
    general HTML parser and does not need to be. Callers syntax-check the
    result with esbuild, so a gap here fails the build rather than shipping.
    """
    # Comments become JSX expression comments. Park them behind a placeholder
    # so the text-brace escaping below cannot corrupt the braces they need.
    parked = []

    def park(m):
        parked.append("{/*" + m.group(1).replace("*/", "* /") + "*/}")
        return f"\x00{len(parked) - 1}\x00"

    html = COMMENT_RE.sub(park, html)

    out, pos = [], 0
    for m in TAG_RE.finditer(html):
        out.append(_escape_text(html[pos:m.start()]))
        closing, tag, attrs, self_close = m.groups()
        if closing:
            out.append(f"</{tag}>")
        else:
            converted = _convert_attrs(attrs) if attrs and attrs.strip() else []
            joined = (" " + " ".join(converted)) if converted else ""
            if tag.lower() in VOID or self_close:
                out.append(f"<{tag}{joined} />")
            else:
                out.append(f"<{tag}{joined}>")
        pos = m.end()
    out.append(_escape_text(html[pos:]))

    return re.sub(r"\x00(\d+)\x00", lambda m: parked[int(m.group(1))], "".join(out))
