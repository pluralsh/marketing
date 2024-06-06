import Head from 'next/head'
import Script from 'next/script'

import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

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
        image="/images/gradients/gradient-bg-12.png"
      >
        <ContactHeader
          title="Contact our sales team"
          subtitle="Our pricing is designed to be flexible and transparent, catering to the needs of all customers."
        />
      </HeaderPad>
    </>
  )
}

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    metaTitle: 'Contact sales',
    metaDescription:
      'Plural offers packages to teams of all sizes and flexible and transparent pricing for everyone.',
    footerVariant: FooterVariant.kitchenSink,
  })
