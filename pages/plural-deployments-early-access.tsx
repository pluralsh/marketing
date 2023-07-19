import { ColorModeProvider } from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'

import { FooterVariant } from '@src/components/FooterFull'
import { HubspotForm } from '@src/components/HubspotForm'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { GradientBG } from '@src/components/layout/GradientBG'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
// import { HomePageHero } from '@src/components/PageHeros'
import { SubsectionHead } from '@src/components/SectionHeads'
import { Body1 } from '@src/components/Typography'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HeaderPad } from '../src/components/layout/HeaderPad'

function SignUpSection({ containerId }: { containerId: string }) {
  return (
    <ColorModeProvider
      mode="light"
      className="bg-fill-zero"
    >
      <StandardPageSection className="">
        <StandardPageWidth>
          <Columns>
            <EqualColumn className="flex flex-col gap-y-large">
              <SubsectionHead
                heading="Sign up for continuous deployment early access"
                headingProps={{ as: 'h1' }}
              />
              <Body1 className="[text-wrap:balance]">
                An end-to-end solution for managing Kubernetes clusters and
                application deployment. Join our early access community today.
              </Body1>
            </EqualColumn>
            <EqualColumn>
              <HubspotForm
                uniqueKey={containerId}
                formId="48ee95b2-8ce1-41cb-86bd-b9ae7a9f7fb6"
              />
            </EqualColumn>
          </Columns>
        </StandardPageWidth>
      </StandardPageSection>
    </ColorModeProvider>
  )
}

export default function Legal(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        position="top middle"
        image="/images/gradients/gradient-bg-1.jpg"
      >
        {/* <HomePageHero
          padBottom={false}
          heading={metaTitle}
          description={
            <div className="[text-wrap:balance]">
              An end-to-end solution for managing Kubernetes clusters and
              application deployment. Join our early access community today.
            </div>
          }
        /> */}
        <img
          className=" "
          src="/images/early-access/early-access-hero.png"
          alt=""
        />
      </HeaderPad>
      <SignUpSection containerId="1" />
      <StandardPageSection className="bg-fill-zero" />
      <SignUpSection containerId="2" />
    </>
  )
}

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    metaTitle: 'Continuous deployment early access',
    metaDescription:
      'An end-to-end solution for managing Kubernetes clusters and application deployment. Join our early access community today.',
    footerVariant: FooterVariant.kitchenSink,
  })
