import Link from '@pluralsh/design-system/dist/markdoc/components/Link'

import { Body1, Heading1 } from '@src/components/Typography'

import { Page } from './_app'

export default function Docs404() {
  return (
    <Page>
      <div className="flex flex-col gap-y-medium ">
        <Heading1>Page not found</Heading1>
        <Body1>
          Sorry, this page doesn't appear to exist. Would you like to vist the{' '}
          <Link href="/">home page</Link>?
        </Body1>
      </div>
    </Page>
  )
}

export { getStaticProps } from '@src/utils/defaultPageFunctions'
