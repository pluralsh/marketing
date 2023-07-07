import { FooterVariant } from '@src/components/FooterFull'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { Body1, Heading1 } from '@src/components/Typography'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { StandardPage } from '../src/components/layout/FullPage'

export default function Index() {
  return (
    <StandardPage as={HeaderPad}>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <Heading1>Success</Heading1>
        <Body1>Thank you for signing up for our newsletter.</Body1>
      </div>
    </StandardPage>
  )
}

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    footerVariant: FooterVariant.kitchenSink,
  })
