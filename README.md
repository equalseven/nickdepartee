# nickdepartee.com

Personal brand hub for Nick de Partee — Creative Director & Brand Consultant.
Built with Next.js (App Router). Deploys on Vercel with zero config.

## Run locally
```bash
npm install
npm run dev
```

## Structure
- `app/layout.js` — metadata + Person JSON-LD schema (name variants + sameAs)
- `app/page.js` — the page (hero, thesis, venture router, three-act résumé, contact)
- `app/globals.css` — design tokens + styles
- `lib/data.js` — venture + résumé data (single source of truth; add ventures here)
- `components/Logos.js` — brand wordmarks as inline SVG (inherit currentColor)
- `components/Reveal.js` — scroll-reveal client component
- `public/nick.jpg` — hero photo

## Notes
- Contact email is nick@equalseven.com (swap in lib/data.js when a branded address exists).
- Open Gideon / Wandering Man titles are placeholders pending confirmation.
