# Peliggy Launch Site

Lean React + Vite marketing site scaffold for `peliggy-dot-com`.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Netlify-ready contact form

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Deployment Notes

- Netlify build command: `npm run build`
- Netlify publish directory: `dist`
- Static form detection markup lives in [index.html](/Users/sahracton/conductor/workspaces/peliggy-dot-com/lyon/index.html)
- Frontend form UX lives in [src/components/ContactForm.jsx](/Users/sahracton/conductor/workspaces/peliggy-dot-com/lyon/src/components/ContactForm.jsx)
- Veyora waitlist page lives at `/veyora-waiting-list` and uses Netlify Forms via static markup in `public/veyora-waiting-list/index.html`.

## Content Notes

Business-specific content was not provided in the spec, so the site uses clearly labelled `TODO:` placeholder copy where real company messaging is required. Replace those sections before a final public launch.
