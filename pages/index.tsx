import { propsWithGlobalSettings } from '@src/components/getGlobalProps'
import { Body1, Heading1 } from '@src/components/Typography'

import { FullPage } from './_app'

export default function Index() {
  return (
    <FullPage>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <Heading1>Home page</Heading1>
        <Body1>This is some body text</Body1>
      </div>
    </FullPage>
  )
}

export const getStaticProps = async () => propsWithGlobalSettings({})
