import { ColorModeProvider } from '@pluralsh/design-system'
import Head from 'next/head'
import Script from 'next/script'

import classNames from 'classnames'

import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { ResponsiveText } from '@src/components/Typography'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HubspotForm } from '../src/components/HubspotForm'
import { StandardPageWidth } from '../src/components/layout/LayoutHelpers'

export function ContactHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <StandardPageWidth>
      <div
        className={classNames(
          'pt-xxxxlarge',
          'pb-xxxxxlarge',
          'lg:pt-xxxxxlarge',
          'lg:pb-xxxxxxlarge'
        )}
      >
        <Columns className="columns:items-center gap-y-medium">
          <EqualColumn className="justify-start">
            <TextLimiter>
              <ResponsiveText
                className="[text-wrap:balance]"
                as="h2"
                textStyles={{
                  '': 'mHero1',
                  md: 'mBigHeader',
                }}
              >
                {title}
              </ResponsiveText>
            </TextLimiter>
          </EqualColumn>
          <EqualColumn>
            <TextLimiter>
              <ResponsiveText
                as="p"
                textStyles={{ '': 'mBody1' }}
                color="text-light"
                className="[text-wrap:balance] "
              >
                {subtitle}
              </ResponsiveText>
            </TextLimiter>
          </EqualColumn>
        </Columns>
      </div>
    </StandardPageWidth>
  )
}

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
          title="Drop us a note"
          subtitle="We’re here to help with support available for teams of all
                    sizes."
        />
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div className="bg-fill-zero py-xxxxlarge">
          <StandardPageWidth>
            <HubspotForm formId="4381b90a-ac28-4e54-842e-0319c16cf882" />
          </StandardPageWidth>
        </div>
      </ColorModeProvider>
    </>
  )
}

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    metaTitle: 'Contact us',
    metaDescription:
      'Plural offers support to teams of all sizes. We’re here to support our developers through our docs, Discord channel, or Twitter.',
    footerVariant: FooterVariant.kitchenSink,
  })
