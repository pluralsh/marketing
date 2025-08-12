# Plural

## How to use this project

To edit the content of this project, go to [prismic.io/dashboard](https://prismic.io/dashboard), click on the repository for this website, and start editing.

### Create a page

To create a page, click on the green pencil icon, then select **Page**.

Pages are made of Slices. You can add and rearrange Slices to your pages.

Your new page will be accessible by its URL, but it won't appear on the website automatically. To let users discover it, add it to the navigation.

Remember to create these unique pages in the Prismic dashboard:

- **Home** (UID: `home`)

### Customize this website

This website is preconfigured with Prismic. It has three Prismic packages installed:

- `@prismicio/client` provides helpers for fetching content from Prismic
- `@prismicio/react` provides React components for rendering content from Prismic
- `@prismicio/next` provides a wrapper component to configure Prismic previews

These packages are already integrated and employed in this app. Take a look at the code to see how they're used.

### Edit the code

There are two steps to rendering content from Prismic in your Next.js project:

1. Fetch content from the Prismic API using `@prismicio/client`.
2. Template the content using components from `@prismicio/react`.

Here are some of the files in the project that you can edit:

- `prismicio.ts` - This file includes configuration for `@prismicio/client` and exports useful API helpers.
- `app/[locale]/layout.tsx` - This is your layout component, which includes configuration for `@prismicio/react` and `@prismicio/next`.
- `app/[locale]/page.tsx` - This is the app homepage. It queries and renders a page document with the UID (unique identifier) "home" (or whatever has been set as the required page UID in `constants.ts` file) from the Prismic API.
- `app/[locale]/[...slug]/page.tsx` - This is the page component, which queries and renders a page document from your Prismic repository based on the UID.
- `slices/*/index.tsx` - Each Slice in your project has an index.tsx file that renders the Slice component. Edit this file to customize your Slices.

These are important files that you should leave as-is:

- `app/api/exit-preview/route.ts` - Do not edit or delete this file. This is the API endpoint to close a Prismic preview session.
- `app/api/preview/route.ts` - Do not edit or delete this file. This is the API endpoint to launch a Prismic preview session.
- `app/slice-simulator/page.tsx` - Do not edit or delete this file. This file simulates your Slice components in development.
- `slices/` - This directory contains Slice components, which are generated programmatically by Slice Machine. To customize a Slice template, you can edit the Slice's index.tsx file. To add Slices, delete Slices, or edit Slice models, use Slice Machine (more info below).

Learn more about how to edit your components with [Fetch Data in Next.js](https://prismic.io/docs/technologies/fetch-data-nextjs) and [Template Content in Next.js](https://prismic.io/docs/technologies/template-content-nextjs).

Learn more about how to use [TypeScript with Prismic](https://prismic.io/docs/typescript-nextjs).

### Edit content models with Slice Machine

This project includes an application called Slice Machine, which generates models for your Custom Types and Slices. Slice Machine stores the models locally in your codebase, so you can save and version them. It also syncs your models to Prismic. To learn how to use Slice Machine, read [Model Content in Next.js](https://prismic.io/docs/technologies/model-content-nextjs).

Slices are automatically generated based on the models in Slice Machine. However, this starter provides components and snippets for easier integration of Slices into your pages. Snippets automatically include these components (`SliceVariations` and `SliceContainer`) and the snippets are:

- `prsl` – Creates a default Prismic slice component structure. Used for slices with only one default variation.
- `prslvar` – Creates a default Prismic slice variation component structure. Used for slices with multiple variations.
- `prslvars` – Creates a Prismic slice index component for grouping variations.

If you change or add to your Custom Types, you'll need to update your route handling to match. To learn how to do that, read [Define Paths in Next.js](https://prismic.io/docs/technologies/define-paths-nextjs).

### Internationalization

This project has been configured to support multiple languages that come from Prismic. It was achieved by following [the documentation of next-intl][next-intl-docs]. It doesn't implement messages based on the language of the user, but it can be easily added by looking at [Getting started](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing) section of next-intl's documentation (consider steps 1, 5 and 6).

Browser locale detection and [default locale prefix](https://next-intl.dev/docs/routing#locale-prefix-as-needed) can be configured in `src/middleware.ts`. By default, the locale detection is disabled and the default locale prefix is hidden via `as-needed` value.

### Pushing changes

`husky` is configured to run linting on `pre-commit`. If encountering errors, running `yarn lint:fix` usually does the job. If the command returns any errors, make sure to investigate those before committing.

### Going to production

1. Remember to have up-to-date environmental variables.
2. Remember to set live previews in Prismic to the new website URL.
3. Remember to set up webhooks in Prismic for document publish/unpublish revalidation. Make sure `PRISMIC_WEBHOOK_SECRET` environmental variable and the secret key in webhook configuration are matching.

## Documentation

For the official Prismic documentation, see [Prismic's guide for Next.js][prismic-docs] or the [technical references for the installed Prismic packages](https://prismic.io/docs/technologies/technical-references).

For more info on the approach taken with i18n, see [the documentation][next-intl-docs].

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/nextjs
[prismic-sign-up]: https://prismic.io/dashboard/signup
[nextjs]: https://nextjs.org/
[live-demo]: https://nextjs-starter-prismic-minimal.vercel.app/
[next-intl-docs]: https://next-intl.dev/docs/getting-started
