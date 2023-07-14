import { ColorModeProvider } from '@pluralsh/design-system'
import Head from 'next/head'
import Script from 'next/script'

import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HubspotForm } from '../src/components/HubspotForm'
import { StandardPageWidth } from '../src/components/layout/LayoutHelpers'

import { ContactHeader } from './contact'

export default function Index() {
  return (
    <>
      <Head>
        <Script
          type="text/javascript"
          src="//js.hsforms.net/forms/embed/v2.js"
        />
      </Head>
      <HeaderPad
        as={GradientBG}
        size="cover"
        position="top middle"
        image="/images/gradients/gradient-bg-4.jpg"
      >
        <ContactHeader
          title="Live demo environment"
          subtitle="Enter your email for access to a running instance of Plural Console."
        />
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div className="bg-fill-zero py-xxxxlarge">
          <StandardPageWidth>
            <div className="max-w-[400px] mx-auto">
              <HubspotForm formId="b7de5718-a2a1-4bbd-b062-e34457c82635" />
            </div>
          </StandardPageWidth>
        </div>
      </ColorModeProvider>
    </>
  )
}

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    footerVariant: FooterVariant.kitchenSink,
  })
