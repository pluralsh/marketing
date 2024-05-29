import { Button } from 'honorable'
import { type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { ArticleCard } from '@src/components/ArticleCard'
import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { ResponsiveText } from '@src/components/Typography'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HeaderPad } from '../src/components/layout/HeaderPad'

export default function Legal(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        position="top middle"
        image="/images/gradients/gradient-bg-11.png"
      >
        <div className="py-xxxxxlarge pl-xxxxxxlarge">
          <TextLimiter>
            <ResponsiveText
              as="h1"
              textStyles={{ '': 'mTitle1', md: 'mHero2' }}
              className="max-w-[500px]"
            >
              Automating Kubernetes management and enhancing security for
              enterprises
            </ResponsiveText>
          </TextLimiter>
          <Button
            large
            as={Link}
            href="/contact-sales"
            className="mt-large w-full sm:w-fit"
          >
            Book now
          </Button>
        </div>
      </HeaderPad>
      <StandardPageSection className="bg-fill-zero">
        <StandardPageWidth>
          <div className="flex flex-col gap-y-xxxxlarge md:gap-y-xxxxxlarge xxl:gap-y-xxxxxxlarge">
            <div className="flex flex-col gap-y-xxlarge">
              <CenteredSectionHead
                heading="How Plural Works"
                intro={
                  <p className="max-w-[450px]">
                    Import manifests and helm charts from Git repositories and
                    deploy services to clusters in a couple of clicks.
                  </p>
                }
              />
              <div>
                <img
                  className="block w-full"
                  src="/images/cont-deploy/architecture-2.png"
                  aria-describedby="cd-diagram-content"
                />
              </div>
            </div>

            <div>
              <ArticleCard
                preHeading="Whitepaper"
                heading="Accelerate Kubernetes adoption with Plural Continuous Deployment"
                ctas={[
                  {
                    label: 'Read the whitepaper',
                    url: '/downloads/Whitepaper%20-%20Accelerate%20Kubernetes%20Adoption%20with%20Plural%20Continuous%20Deployment.pdf',
                    // download: true,
                  },
                ]}
                thumbnail="/images/cont-deploy/whitepaper.png"
              />
            </div>
          </div>
        </StandardPageWidth>
      </StandardPageSection>
    </>
  )
}

export const getStaticProps = async () =>
  propsWithGlobalSettings({
    metaTitle: 'Kubernetes fleet management',
    metaDescription:
      'An end-to-end solution for managing Kubernetes clusters and application deployment.',
    footerVariant: FooterVariant.kitchenSink,
  })
