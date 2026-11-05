# Ronak Shah portfolio project

- This is a static HTML/CSS/JavaScript portfolio. No build tooling or dependencies required.
- `index.html` owns the cinematic entry overlay and main portfolio.
- `achievements.html`, `work.html`, and `events.html` are separate pages. Use the shared header/footer from `script.js`.
- `data.js` holds project/experience/achievement/event content; do not fabricate credentials or dates.
- `styles.css` includes reduced-motion support and persistent light/dark theme styling.
- `assets/intro/ronak-wordmark.webp` is the photo-filled RONAK title for the entry animation. Keep the title readable and the Enter/Skip controls keyboard accessible.
- Intro should appear once per session on landing `index.html`; `?intro=replay` deliberately replays it. Respect `prefers-reduced-motion`.
- Preserve existing project links and event image paths; visitors can replace image files under `assets/events/`.
- Verify desktop/mobile layout and JS syntax before deploying.