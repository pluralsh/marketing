# Workbench interactive demo tour

## Prismic

Use Hero variation **`exclusiveDemo`** (Exclusive interactive demo) on the **home** page only. Other pages should keep **`exclusive`** (full-bleed images, no iframe).

After adding the variation in Slice Machine, push the slice model to Prismic and switch the home Hero slice in the Page Builder.

## Single source of truth

All walkthrough copy (bar line, screen-reader narration, pill labels) lives in one file:

**`workbenchDemoTour.json`**

| Consumer | How it loads the config |
|----------|-------------------------|
| Next.js frame (`WorkbenchDemoFrame.tsx`) | `workbenchDemoTour.ts` imports the JSON at build time |
| Iframe demo (`demo-tour.jsx`, hints) | `public/workbench-demo/tour-config.js` (generated) |

Do **not** edit `tour-config.js` by hand.

## After changing copy

```bash
cd marketing && npm run sync:workbench-tour
```

`dev:next` and `build` run this automatically via npm lifecycle hooks.

## Files

- `workbenchDemoTour.json` — edit here
- `workbenchDemoTour.ts` — typed helpers for the frame
- `scripts/sync-workbench-tour-config.mjs` — JSON → `tour-config.js`
- `public/workbench-demo/tour-config.js` — generated (committed so static hosting works)
