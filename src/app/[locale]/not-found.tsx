import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'

export default async function NotFound() {
  const t = await getTranslations('404')

  return (
    <main className="min-h-screen-minus-header container flex flex-col items-center justify-center gap-2">
      <h1 className="text-heading-large">404</h1>
      <h2 className="text-title-large">{t('pageNotFound')}</h2>
      <p className="text-body-medium mb-8">{t('description')}</p>
      <Button
        as={Link}
        variant="primary"
        size="small"
        href="/"
      >
        {t('returnHome')}
      </Button>
    </main>
  )
}
