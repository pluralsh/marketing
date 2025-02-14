import { ColorModeProvider } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'

import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { MarkdocMarketingPage } from '@src/components/MarkdocMarketingPage'
import { ResponsiveText } from '@src/components/Typography'
import { getLegalPageData, getLegalPageSlugs } from '@src/data/getLegalPageData'
import { type MarkdownPageFragment } from '@src/generated/graphqlDirectus'
import { readMdPage } from '@src/markdoc/mdParser'
import { type MarkdocPage } from '@src/markdoc/mdSchema'
import { cn as classNames } from '@src/utils/cn'
import { combineErrors } from '@src/utils/combineErrors'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HeaderPad } from '../../src/components/layout/HeaderPad'

const PAGE_PARAM_NAME = 'legal' as const

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking' as const,
    }
  }

  const { data: slugs } = await getLegalPageSlugs()

  return {
    paths: (slugs || []).map((slug) => ({
      params: { [PAGE_PARAM_NAME]: slug },
    })),
    fallback: false as const,
  }
}

export default function Legal({
  title,
  subtitle,
  markdoc,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        position="top middle"
        image="/images/gradients/gradient-bg-4.jpg"
      >
        <StandardPageWidth>
          <div
            className={classNames(
              'flex flex-col gap-xxlarge',
              'py-xxxlarge',
              'xl:py-xxxxlarge'
            )}
          >
            <div>
              <ResponsiveText
                className="mb-xlarge [text-wrap:balance]"
                as="h2"
                textStyles={{
                  '': 'mHero1',
                  md: 'mBigHeader',
                }}
              >
                <TextLimiter>{title}</TextLimiter>
              </ResponsiveText>
              {subtitle && (
                <ResponsiveText
                  as="div"
                  textStyles={{ '': 'mBody1' }}
                  color="text-light"
                >
                  <TextLimiter as="p">{subtitle}</TextLimiter>
                </ResponsiveText>
              )}
            </div>
          </div>
        </StandardPageWidth>
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div
          id="resources-section"
          className={classNames(
            'bg-fill-zero',
            'flex flex-col',
            'gap-y-xxxxlarge py-xxxxlarge',
            'md:gap-y-xxxxxlarge md:py-xxxxxlarge',
            'xxl:gap-y-xxxxxxlarge xxl:py-xxxxxxlarge',
            'text-text'
          )}
        >
          {markdoc && (
            <StandardPageWidth className="mb-xxxxxlarge max:mb-xxxxxxlarge">
              <MarkdocMarketingPage markdoc={markdoc} />
            </StandardPageWidth>
          )}
        </div>
      </ColorModeProvider>
    </>
  )
}

export type CommunityPageProps = Pick<
  MarkdownPageFragment,
  'title' | 'subtitle'
> & {
  markdoc: MarkdocPage
}

export const getStaticProps: GetStaticProps<CommunityPageProps> = async (
  context
) => {
  const { data: pageData, error: pageDataError } = await getLegalPageData()
  const page = pageData?.pages?.find((p) => p?.slug === context?.params?.legal)
  const markdoc = page ? await readMdPage(page) : false

  if (!page || !markdoc) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    footerVariant: FooterVariant.kitchenSink,
    metaTitle: page.meta_title,
    metaDescription: page.meta_description,
    metaImage: page.meta_image,
    title: page.title,
    subtitle: page.subtitle,
    markdoc,
    errors: combineErrors([pageDataError]),
  })
}
