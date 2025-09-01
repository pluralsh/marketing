// we were previously fetching these dynamically from Prismic, but it caused our api usage to skyrocket
// these will rarely change, and if we add want to add a new language we can just update it here
export const SUPPORTED_LOCALES = ['en-us'] as const
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]
export const DEFAULT_LOCALE: SupportedLocale = 'en-us'
