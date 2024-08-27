[![Netlify Status](https://api.netlify.com/api/v1/badges/6658250a-4325-496d-b360-43da9474f1e5/deploy-status)](https://app.netlify.com/sites/plural-marketing/deploys)

Marketing site for [Plural](https://www.plural.sh/), the open-source, unified, application deployment platform that makes it easy to run open-source software on Kubernetes. Our marketplace has dozens of top tier applications ready to deploy.

Built with [Next.js](https://nextjs.org/) and [Markdoc](https://markdoc.dev/).

## Contributing


### Running the site locally

To start, you'll need to receive an access token from Plural's Directus:
1. Request access to Directus, then login at https://directus.plural.sh
2. Generate an access token at the bottom of Profile > Administrator.
3. Run `export DIRECTUS_ACCESS_TOKEN={your-access-token}`

Then, to run the site locally, you'll need to have yarn and node as prerequisites. Then run the following commands:

```shell
yarn # build the environment
yarn dev # run site locally
```