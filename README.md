# ai-sdlc-poc

Demo static site ("Acme Cloud") for testing Claude-driven changes from Slack.

**Live site:** https://dotzero-miesam.github.io/ai-sdlc-poc/

## Pages
Home · Features · Pricing · About · Contact (+ 404)

## Develop
```bash
npm install
npm run dev
```

## Deploy
Every push to `main` builds and deploys to GitHub Pages via GitHub Actions.
Pull requests run a build check.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
