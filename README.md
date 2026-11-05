# Ronak Shah — The Creative Universe

A comic-book-inspired, multi-page developer portfolio with a kinetic hero, sticky scroll storytelling, project gallery, career timeline, and event photo slots.

## Start locally

No npm install or build step is necessary. From this directory run:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000 . You can also open `index.html` directly; a local server is recommended for consistent behavior.

## Pages

- `index.html`: Intro, origin story, featured projects, archive and contact.
- `work.html`: Work experience, internships, ambassador roles and leadership with interactive filters.
- `events.html`: Organized/promoted events with automatic image placeholders.

## Content and sources

Edit `data.js` for all project descriptions, tech stacks, GitHub links, roles, event captions and image paths. Project details were adapted from the authenticated GitHub account's public repositories and your supplied resume. The AquaMind entry uses the resume description and intentionally has no public GitHub link because the corresponding repository is private.

For `Corizo Edutech` and `Freelance Work`, the dates and details are marked as pending because they weren't in the resume; the same applies to exact dates for some leadership and ambassador roles. Replace those placeholders with verified information before final publication. The attached resume is copied as `Ronak_s_Resume.pdf` in the local deliverable.

### Add event photos

Place your images in `assets/events/` with the names listed in `assets/events/README.md`. Missing images retain designed comic placeholders automatically. No source-code changes are necessary when you use those names.

## Animation and accessibility

Uses native browser APIs, CSS transforms, IntersectionObserver, and scroll progress tracking instead of external animation packages. Featured projects use a desktop sticky horizontal scroll stage, degrading to a swipeable carousel on mobile. `prefers-reduced-motion` is respected. Navigational controls are semantic and keyboard accessible.

## Deployment

This is a static site. Host it on GitHub Pages, Netlify, Cloudflare Pages, or Vercel without a build step. On GitHub Pages, point the site at the root of the chosen branch or the `/` root of the default branch after merging the portfolio PR.

## Project structure

```
index.html                Homepage
work.html                 Career + leadership
 events.html              Event archive
styles.css                Comic design system and responsive layouts
script.js                 Rendering, filtering and scroll interactions
data.js                   Editable content database
assets/favicon.svg        Illustrated monogram
assets/events/            Your future event photos
Ronak_s_Resume.pdf        Downloadable resume
```

## Handoff for Codex

The project can be opened with Codex or your preferred editor. All content is in `data.js`. For a future React/Next.js conversion, preserve the accessibility, reduced-motion support, readable content and no-external-key deployment. Do not expose API credentials in the frontend.


## Cinematic opening (RONAK)

- `index.html` now opens with a photo-filled, cinematic RONAK title on a black background, red light sweep, and animated reveal.
- Visitors can **Skip Intro** immediately or click **Enter My Universe** when the animation finishes.
- Intro plays once per browser tab/session. To replay it, use **Replay Intro** in the footer or open `index.html?intro=replay`.
- The title artwork is located at `assets/intro/ronak-wordmark.webp`, composed from supplied photo references, with a real HTML Enter button for accessibility.
- `prefers-reduced-motion` bypasses animation; theme light/dark persists independently.
- To change the montage, replace the WebP (1672×453 recommended) and keep its file path.
### Original-photo cinematic intro

`index.html` uses `assets/intro/ronak-original-paris-20261105.webp` with a unique filename to avoid stale Vercel/CDN/browser caches. The photo in the red sweater is composited from the original uploaded photograph at uniform scale; no facial retouching or generated facial features are used.
