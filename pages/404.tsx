import Link from '@pluralsh/design-system/dist/markdoc/components/Link'

import { HeaderPad } from '@src/components/layout/HeaderPad'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { Body1, Heading1 } from '@src/components/Typography'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Plural404() {
  return (
    <StandardPageWidth as={HeaderPad}>
      <div className="flex flex-col gap-y-medium ">
        <Heading1>Page not found</Heading1>
        <Body1>
          Sorry, this page doesn't appear to exist. Would you like to vist the{' '}
          <Link href="/">home page</Link>?
        </Body1>
      </div>
    </StandardPageWidth>
  )
}

export async function getStaticProps() {
  return propsWithGlobalSettings({
    metaTitle: 'Page not Found',
  })
}
