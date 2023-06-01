import { propsWithGlobalSettings } from '@src/components/getGlobalProps'
import { Body1, Heading1 } from '@src/components/Typography'

import { Page } from './_app'

export default function Index({ globalProps, ...pageProps }) {
  console.log({ pageProps, globalProps })

  return (
    <Page>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <Heading1>Home page</Heading1>
        <Body1>This is some body text</Body1>
      </div>
    </Page>
  )
}

export const getStaticProps = async () => propsWithGlobalSettings({})
