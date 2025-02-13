import { ColorModeProvider } from '@pluralsh/design-system'
import { Button } from 'honorable'
import Link from 'next/link'

import { type PageHomepageQuery } from '@src/generated/graphqlDirectus'
import { cn as classNames } from '@src/utils/cn'

import { MediaCardNoBorder } from '../custom-page/MediaCard'
import { GradientBG } from '../layout/GradientBG'
import { StandardPageSection, StandardPageWidth } from '../layout/LayoutHelpers'
import { CenteredSectionHead } from '../SectionHeads'

type PageHomepageType = PageHomepageQuery['page_homepage']

type ArticleCardsType = NonNullable<PageHomepageType>['article_cards']

const CARD_LAYOUTS = [
  [{ size: 'medium', reverse: false }],
  [
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: false },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: false },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'medium', reverse: true },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: true },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'medium', reverse: false },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: true },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'medium', reverse: false },
    { size: 'medium', reverse: true },
  ],
  [
    { size: 'medium', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'small', reverse: false },
    { size: 'medium', reverse: true },
  ],
] as const

function ArticleSection({ articleCards }: { articleCards?: ArticleCardsType }) {
  if (!articleCards || !articleCards.length) return null

  return (
    <GradientBG
      size="cover"
      position="bottom middle"
      image="/images/gradients/article-section-background.jpg"
    >
      <StandardPageSection
        style={{
          background:
            'linear-gradient(180deg, rgba(14, 16, 21, 0.00) 70%, rgba(0,0,0,0.3) 100%)',
        }}
      >
        <StandardPageWidth className="relative z-[1]">
          <CenteredSectionHead
            heading={<div>Accelerate your K8s operations</div>}
            intro={
              <>
                <p className="max-w-[565px]">
                  Our lightweight, easy-to-install solution supports any K8s
                  distribution. Schedule a 1:1 demo with our team.
                </p>
                <Button
                  large
                  primary
                  as={Link}
                  href="/contact"
                  className="mx-auto w-fit"
                >
                  Book now
                </Button>
              </>
            }
            className="mb-xxxxlarge text-center"
          />
          <ColorModeProvider mode="light">
            <div className="grid grid-cols-1 items-stretch gap-xlarge columns:grid-cols-3">
              {articleCards?.map((c, i) => {
                const size =
                  CARD_LAYOUTS[articleCards.length]?.[i]?.size || 'medium'
                const reverse =
                  CARD_LAYOUTS[articleCards.length]?.[i]?.reverse || false

                return (
                  c && (
                    <MediaCardNoBorder
                      key={c.id}
                      className={classNames({
                        'columns:col-span-3': size === 'medium',
                      })}
                      size={size}
                      reverse={reverse}
                      {...{
                        author: c.author,
                        ctas: c.ctas,
                        date: c.date,
                        description: c.description,
                        heading: c.heading,
                        thumbnail: c.thumbnail,
                        url: c.url,
                        videoUrl: c.videoUrl,
                      }}
                    />
                  )
                )
              })}
            </div>
          </ColorModeProvider>
        </StandardPageWidth>
      </StandardPageSection>
    </GradientBG>
  )
}

export default ArticleSection
