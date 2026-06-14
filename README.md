# ESAS Homes V3 — Luxury Real Estate Istanbul

Static marketing site for ESAS Homes. Built as a React single-page site, **pre-compiled to plain JavaScript** so it loads fast and hosts anywhere with no build server.

## Why this version exists

This is a cleaned, host-ready rebuild of the original Claude Design export. The visual
design is unchanged — only the delivery was fixed and optimized.

### What was fixed / optimized

| Area | Before (original export) | After (this repo) |
| --- | --- | --- |
| JSX | Compiled in the browser with Babel on every visit (~1.5 MB + CPU cost) | Pre-compiled once to a single 40 KB minified `assets/app.js` |
| React | Development builds (react-dom ~1.05 MB) loaded from a CDN | Production builds, **self-hosted** in `assets/vendor/` |
| Hero video | 2.17 MB, audio track, no `faststart`, no poster | 668 KB, audio stripped, `+faststart` (streams progressively), poster frame for instant paint |
| Autoplay | `muted` set as a React prop — browser could block autoplay (blank hero) | Callback ref forces `muted` + `play()` on mount, so it plays reliably when hosted |
| Entry file | `ESAS HOMES.html` (space in name) | `index.html` |
| Asset paths | `uploads/Basic Model-….mp4` (space in name) | `assets/hero-video.mp4` |
| Dead weight | Unused 4.8 MB image + duplicate videos + 28 KB editor panel | Removed |
| Favicon | None | The existing ESAS logo |

**Result:** ~5 MB + in-browser compile  →  **~1 MB, production React, zero compile.**

## Project structure

```
index.html              Production page (CSS inlined, exactly as designed)
assets/
  app.js                Compiled + minified site (all components)
  vendor/               Self-hosted React production builds
  hero-video.mp4        Optimized hero background (faststart)
  hero-poster.jpg       First frame, shown instantly while the video streams
  esas-logo.png         Brand logo
  favicon.png           Favicon (the logo)
src/                    Editable JSX source (compiled into assets/app.js)
  utils.jsx hero.jsx sections.jsx more-sections.jsx app.jsx
  tweaks-stub.jsx       Production stub for the Claude Design editor panel
```

Property and project photos load from `https://esashomes.com` (the live CMS), so they
are not stored in this repo.

## Run locally

```bash
# from the project root
python3 -m http.server 8080
# then open http://localhost:8080
```

## Rebuild after editing `src/`

```bash
npx esbuild src/utils.jsx src/hero.jsx src/sections.jsx src/more-sections.jsx src/tweaks-stub.jsx src/app.jsx \
  --jsx=transform --minify --target=es2018 --outfile=assets/app.js
```

(Concatenate in that order — `tweaks-stub.jsx` must come before `app.jsx`.)

## Deploy

It's a plain static site. Point any static host at the repository root:
GitHub Pages, Netlify, Cloudflare Pages, or Vercel — no build command needed.
