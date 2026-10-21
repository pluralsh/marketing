import { getTranslations } from 'next-intl/server'

import { SiteShell } from '@/components/layout/SiteShell'
import { PageHero } from '@/components/sections/PageHero'
import { ButtonLink } from '@/components/ui/Button'

// Rendered in place of the route-group layouts, so it brings its own shell.
export default async function NotFound() {
  const t = await getTranslations('404')

  return (
    <SiteShell>
      <PageHero
        eyebrow="404"
        title={t('pageNotFound')}
        description={t('description')}
        actions={<ButtonLink href="/">{t('returnHome')}</ButtonLink>}
        className="pb-[clamp(64px,9vw,120px)]"
      />
    </SiteShell>
  )
}
