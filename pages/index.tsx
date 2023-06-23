import { HeaderPad } from '@src/components/layout/HeaderPad'
import { Body1, Heading1 } from '@src/components/Typography'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { StandardPage } from '../src/components/layout/FullPage'

export default function Index() {
  return (
    <StandardPage as={HeaderPad}>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <Heading1>Home page</Heading1>
        <Body1>This is some body text</Body1>
      </div>
    </StandardPage>
  )
}

export const getStaticProps = async () => propsWithGlobalSettings({})
