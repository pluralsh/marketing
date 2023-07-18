import { Button, ColorModeProvider } from '@pluralsh/design-system'
import Link from 'next/link'

import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { HomePageHero } from '@src/components/PageHeros'
import { Body1, Heading1 } from '@src/components/Typography'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import {
  StandardPageSection,
  StandardPageWidth,
} from '../src/components/layout/LayoutHelpers'

export default function Index() {
  return (
    <HeaderPad
      as={GradientBG}
      image="/images/gradients/gradient-bg-2"
    >
      <HomePageHero
        heading="Secure, self-hosted applications in your cloud with no compromises"
        intro="Build compliant, production-ready, infrastructure faster than ever."
        ctas={
          <>
            <Button
              large
              primary
              as={Link}
              href="https://plural.sh"
            >
              Start deploying
            </Button>
            <Button
              large
              secondary
              as={Link}
              href="/demo-login"
            >
              Explore demo environment
            </Button>
          </>
        }
      />
      <ColorModeProvider mode="light">
        <StandardPageSection className="bg-fill-zero">
          <StandardPageWidth>
            <div className="flex flex-col gap-x-medium gap-y-xlarge ">
              <Heading1>Home page</Heading1>
              <Body1>This is some body text</Body1>
            </div>
          </StandardPageWidth>
        </StandardPageSection>
      </ColorModeProvider>
    </HeaderPad>
  )
}

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    footerVariant: FooterVariant.kitchenSink,
  })
