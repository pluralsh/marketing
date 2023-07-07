import { ColorModeProvider } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'

import { collectHeadings } from '@pluralsh/design-system/dist/markdoc'
import classNames from 'classnames'

import { FooterVariant } from '@src/components/FooterFull'
import { StandardPage } from '@src/components/layout/FullPage'
import { GradientBG } from '@src/components/layout/GradientBG'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { MarkdocLegalPage } from '@src/components/MarkdocLegalPage'
import { TableOfContents } from '@src/components/TableOfContents'
import { ResponsiveText } from '@src/components/Typography'
import { getLegalPageData, getLegalPageSlugs } from '@src/data/getLegalPageData'
import { type MarkdownPageFragment } from '@src/generated/graphqlDirectus'
import { readMdPage } from '@src/markdoc/mdParser'
import { type MarkdocPage } from '@src/markdoc/mdSchema'
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
  const toc = markdoc?.content ? collectHeadings(markdoc?.content as any) : null

  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        position="top middle"
        image="/images/gradients/gradient-bg-4.jpg"
      >
        <StandardPage>
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
                  as="p"
                  textStyles={{ '': 'mBody1' }}
                  color="text-light"
                >
                  <TextLimiter>{subtitle}</TextLimiter>
                </ResponsiveText>
              )}
            </div>
          </div>
        </StandardPage>
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div
          id="resources-section"
          className={classNames(
            'bg-fill-zero',
            'flex flex-col',
            'py-xxxxlarge gap-y-xxxxlarge',
            'md:py-xxxxxlarge md:gap-y-xxxxxlarge',
            'xxl:py-xxxxxxlarge xxl:gap-y-xxxxxxlarge',
            'text-text'
          )}
        >
          {markdoc && (
            <StandardPage className="mb-xxxxxlarge max:mb-xxxxxxlarge">
              <div className="flex gap-xlarge justify-between">
                <MarkdocLegalPage markdoc={markdoc} />
                {toc && (
                  <div className="hidden relative basis-[200px] flex-grow flex-shrink-0 columns:block">
                    <TableOfContents toc={toc} />
                  </div>
                )}
              </div>
            </StandardPage>
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
    metaTitle: page.title,
    title: page.title,
    subittle: page.subtitle,
    markdoc,
    errors: [...(pageDataError ? [pageDataError] : [])],
  })
}
