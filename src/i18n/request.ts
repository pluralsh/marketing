import { getRequestConfig } from 'next-intl/server'

import {
  getPrismicDefaultLanguage,
  getPrismicLanguages,
} from '@/utils/prismicio'

export default getRequestConfig(async ({ requestLocale }) => {
  const languages = await getPrismicLanguages()
  const defaultLanguage = await getPrismicDefaultLanguage()

  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !languages.includes(locale)) {
    locale = defaultLanguage
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
