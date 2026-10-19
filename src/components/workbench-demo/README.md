# Workbench interactive demo tour

The standalone demo is served from `public/workbench-demo` at `/workbench-demo`.

## Single source of truth

All walkthrough copy (bar line, screen-reader narration, pill labels) lives in one file:

**`workbenchDemoTour.json`**

| Consumer | How it loads the config |
|----------|-------------------------|
| Iframe demo (`demo-tour.jsx`, hints) | `public/workbench-demo/tour-config.js` (generated) |

Do **not** edit `tour-config.js` by hand.

## After changing copy

```bash
cd marketing && npm run sync:workbench-tour
```

`dev:next` and `build` run this automatically via npm lifecycle hooks.

## Files

- `workbenchDemoTour.json` — edit here
- `scripts/sync-workbench-tour-config.mjs` — JSON → `tour-config.js`
- `public/workbench-demo/tour-config.js` — generated (committed so static hosting works)
