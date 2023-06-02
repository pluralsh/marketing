import Link from '@pluralsh/design-system/dist/markdoc/components/Link'

import { propsWithGlobalSettings } from '@src/components/getGlobalProps'
import { Body1, Heading1 } from '@src/components/Typography'

import { FullPage } from './_app'

export default function Plural404() {
  return (
    <FullPage>
      <div className="flex flex-col gap-y-medium ">
        <Heading1>Page not found</Heading1>
        <Body1>
          Sorry, this page doesn't appear to exist. Would you like to vist the{' '}
          <Link href="/">home page</Link>?
        </Body1>
      </div>
    </FullPage>
  )
}

export async function getStaticProps() {
  return propsWithGlobalSettings({
    metaTitle: 'Page not Found',
  })
}
