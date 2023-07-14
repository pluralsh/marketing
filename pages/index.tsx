import { FooterVariant } from '@src/components/FooterFull'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { Body1, Heading1 } from '@src/components/Typography'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { StandardPageWidth } from '../src/components/layout/LayoutHelpers'

export default function Index() {
  return (
    <StandardPageWidth as={HeaderPad}>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <Heading1>Home page</Heading1>
        <Body1>This is some body text</Body1>
      </div>
    </StandardPageWidth>
  )
}

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    footerVariant: FooterVariant.kitchenSink,
  })
