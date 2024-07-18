import { Button } from 'honorable'
import { type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { directusClient } from '@src/apollo-client'
import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import ArticleSection from '@src/components/page-sections/articleSection'
import { ProductFeaturesSection } from '@src/components/page-sections/ProductFeatureSection'
import { QuoteSection } from '@src/components/page-sections/QuoteSection'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { ResponsiveText } from '@src/components/Typography'
import {
  PageHomepageDocument,
  type PageHomepageQuery,
  type PageHomepageQueryVariables,
} from '@src/generated/graphqlDirectus'
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
          </div>
        </StandardPageWidth>
      </StandardPageSection>
      <ProductFeaturesSection />
      <QuoteSection
        title="Delivering value to DevOps and platform engineering teams"
        quote={`By adopting Plural for our Kubernetes fleet management solution, we
        reduced our k8s upgrade cycle from 3 months to 1 day, enabling us to
        delegate responsibilities more effectively from principal engineers to a single mid-level engineer.`}
        attribution="Director DevOps, Leading Global Cybersecurity Provider"
      />
      <ArticleSection articleCards={_props.articleCards} />
    </>
  )
}

export const getStaticProps = async () => {
  const { data } = await directusClient.query<
    PageHomepageQuery,
    PageHomepageQueryVariables
  >({
    query: PageHomepageDocument,
  })

  return propsWithGlobalSettings({
    metaTitle: 'Kubernetes fleet management',
    metaDescription:
      'An end-to-end solution for managing Kubernetes clusters and application deployment.',
    footerVariant: FooterVariant.kitchenSink,
    articleCards: data.page_homepage?.article_cards || null,
  })
}
