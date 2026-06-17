---
name: Pull Request - Add mobile-app scaffold and deployment
about: This PR adds an Ionic+Angular mobile app scaffold and a GitHub Actions workflow to build and deploy it to GitHub Pages.
---

## What this PR adds

- Adds `mobile-app/` — an Ionic + Angular scaffold (login, home, detail, settings) with mock data and client-side auth.
- Adds Capacitor configuration to `mobile-app/capacitor.config.json` and npm scripts to produce `www` and initialize/sync Capacitor.
- Adds a GitHub Actions workflow `.github/workflows/deploy-mobile-app.yml` to build the web assets and publish to `gh-pages` for GitHub Pages hosting.
- Adds a `mobile-app/DEPLOYMENT.md` with instructions.

## How to preview
1. Clone the repo and switch to the branch `add/mobile-app`.
2. From `mobile-app/`: `npm install` then `npm run ionic:serve` to preview locally.
3. Or run the GitHub Actions workflow to publish to GitHub Pages; the expected URL is `https://rajeshchinni98.github.io/Rajesh_web/`.

## Notes
- Native Android/iOS projects require running Capacitor commands locally (or in a runner with native SDKs).
- This PR focuses on a minimal scaffold. I can follow up with enhancements (PWA offline, more pages, backend auth).
