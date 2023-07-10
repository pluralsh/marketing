import { ColorModeProvider } from '@pluralsh/design-system'
import Head from 'next/head'
import Script from 'next/script'

import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HubspotForm } from '../src/components/HubspotForm'
import { StandardPage } from '../src/components/layout/FullPage'

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
          title="Contact our sales team"
          subtitle="Our pricing is designed to be flexible and transparent, catering to the needs of all customers."
        />
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div className="bg-fill-zero py-xxxxlarge">
          <StandardPage>
            <HubspotForm formId="5c21c2a5-0e6b-462e-be7e-11bb53209dfc" />
          </StandardPage>
        </div>
      </ColorModeProvider>
    </>
  )
}

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    footerVariant: FooterVariant.kitchenSink,
  })
