import { Button } from '@pluralsh/design-system'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import { clsx } from 'clsx'

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
        className={clsx(
          'pt-xxxxlarge',
          'pb-xxxxxlarge',
          'lg:pt-xxxxxlarge',
          'lg:pb-xxxxxxlarge'
        )}
      >
        <Columns className="gap-y-medium columns:items-center">
          <EqualColumn className="mb-xxlarge justify-start lg:mb-0">
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
              <ResponsiveText
                as="p"
                textStyles={{ '': 'mTitle2' }}
                color="text-light"
                className="mt-xlarge [text-wrap:balance]"
              >
                {subtitle}
              </ResponsiveText>
              <ResponsiveText
                as="p"
                textStyles={{ '': 'mBody1Bold' }}
                color="text-light"
                className="mt-xlarge [text-wrap:balance]"
              >
                Want to learn more about pricing?
              </ResponsiveText>
              <Button
                large
                secondary
                outline
                as={Link}
                href="/pricing"
                className="mt-medium w-fit"
              >
                Go to pricing
              </Button>
            </TextLimiter>
          </EqualColumn>
          <EqualColumn>
            <HubspotForm formId="234b5476-6ee0-4a32-a677-aa1f0d318e9c" />
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
        image="/images/gradients/gradient-bg-12.png"
      >
        <ContactHeader
          title="Contact sales"
          subtitle="Reach out to our sales and support teams for demos, assistance with onboarding, or any inquiries about our products."
        />
      </HeaderPad>
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
