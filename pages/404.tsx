import Link from '@pluralsh/design-system/dist/markdoc/components/Link'

import { StandardPage } from '@src/components/layout/FullPage'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { Body1, Heading1 } from '@src/components/Typography'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Plural404() {
  return (
    <StandardPage as={HeaderPad}>
      <div className="flex flex-col gap-y-medium ">
        <Heading1>Page not found</Heading1>
        <Body1>
          Sorry, this page doesn't appear to exist. Would you like to vist the{' '}
          <Link href="/">home page</Link>?
        </Body1>
      </div>
    </StandardPage>
  )
}

export async function getStaticProps() {
  return propsWithGlobalSettings({
    metaTitle: 'Page not Found',
  })
}
