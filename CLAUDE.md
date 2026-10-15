# AI SDLC POC — Acme Cloud demo site

Static multi-page React app (Vite + React Router) deployed to GitHub Pages.
Used to demo Claude making changes requested from Slack.

## Commands
- `npm install` — install deps
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/` (must pass before opening a PR)

## Structure
- `src/pages/` — one component per route (Home, Features, Pricing, About, Contact, NotFound)
- `src/components/` — shared layout (Navbar, Footer, Layout)
- `src/data/` — **all page content lives here** (site info, nav links, features, pricing plans, team). Prefer editing data files over hard-coding copy in JSX.
- `src/styles.css` — single global stylesheet; theme colors are CSS variables on `:root`.
- `src/App.jsx` — routes. Adding a page = new file in `src/pages/`, a `<Route>` in `App.jsx`, and an entry in `navLinks` in `src/data/site.js`.

## Conventions
- Uses `HashRouter` (URLs look like `/#/pricing`) so GitHub Pages deep links work. Don't switch to BrowserRouter.
- Plain CSS, no UI framework. Keep components small and functional.
- Work on a branch and open a PR against `main`; merging to `main` auto-deploys via `.github/workflows/deploy.yml`.
