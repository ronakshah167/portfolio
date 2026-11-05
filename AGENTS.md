# Portfolio contributor / Codex brief

This is Ronak Shah's comic-book portfolio. Edit, test and improve it as a static site; no npm setup or API key is required.

## Non-negotiable
- Preserve the bold ink outlines, lime/violet/coral comic palette, halftone texture and editorial hierarchy.
- Preserve the sticky desktop project gallery and mobile swipe fallback.
- Respect `prefers-reduced-motion`, semantic HTML, focus visibility, and mobile keyboard navigation.
- Keep content editable via `data.js`, without hardcoding projects/roles/events in multiple places.
- Event photos are intentionally placeholders. Images in `assets/events/` named in its README should automatically replace them.
- Do not invent employment facts or dates; `DATE TO CONFIRM` is intentional.
- Do not expose private GitHub repository URLs or secrets in the public site.

## Verification
- `node --check data.js && node --check script.js`
- Serve with `python3 -m http.server 8000` and test index, work, and events pages at desktop and mobile widths.
- Validate the experience filter (9 total, 4 industry) and 5 featured + 5 archived projects.
