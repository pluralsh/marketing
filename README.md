# Plural

The marketing site for [plural.sh](https://www.plural.sh), built with Next.js and Tailwind CSS. All copy lives in the repo; there is no CMS. The blog is a separate site.

## Running locally

```bash
npm install
npm run dev # http://localhost:3004
```

## Where things live

| Path                                   | What it is                                                                                                                                                                    |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/content/`                         | Page copy and site-wide data (navigation, footer, testimonials, pricing…) as typed TS modules. Edit text here.                                                                |
| `src/content/pages/`                   | Data-driven landing pages (use cases, industries, products, legal). Each file is one URL, rendered by the catch-all route. Register new ones in `src/content/pages/index.ts`. |
| `src/content/jobs/`                    | Job posts, served at `/careers/hire/<slug>` and listed on `/careers`.                                                                                                         |
| `src/app/[locale]/(light)/`, `(dark)/` | Routes. The route group sets the page theme.                                                                                                                                  |
| `src/components/ui/`                   | Primitives: buttons, links, keyboard hints, icons, inputs.                                                                                                                    |
| `src/components/sections/`             | Reusable page sections (hero, ruled grids, stats, testimonials, FAQ, CTA…) and `ContentSections`, which renders data-driven pages.                                            |
| `src/components/layout/`               | Site shell: announcement bar, header and menus, footer.                                                                                                                       |
| `src/components/interactive/`          | Client-side demos (backlog graph, drain simulator, edge fleet, pricing estimator…).                                                                                           |
| `src/styles/`                          | Custom Tailwind utilities for type (`text-display`, `text-eyebrow`…) and layout (`rails`, `rule-top`, `ruled-grid`).                                                          |

### Adding a landing page

1. Add `src/content/pages/<slug>.ts` exporting a `ContentPage` (see `src/content/types.ts` for the section types).
2. Register its path in `src/content/pages/index.ts`.

It will be statically generated and added to the sitemap automatically.

### Theming

Colors are CSS variables defined in `src/app/globals.css` and exposed as Tailwind colors (`bg-canvas`, `text-ink`, `text-body`, `border-line`, `bg-accent`…). Any subtree with `data-theme="dark"` switches palettes; the `(dark)` route group uses this for the Workbenches page. Use the semantic tokens rather than raw hex values so components work in both themes.

### Keyboard shortcuts

`ButtonLink` accepts a `shortcut` prop that shows a key hint and navigates when that key is pressed outside a form field.

## Pushing changes

`husky` runs linting on `pre-commit`. `npm run lint:fix` fixes most issues.
