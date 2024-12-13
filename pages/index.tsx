import { useState } from 'react'

import { Button, CloseIcon } from '@pluralsh/design-system'
import { type InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { directusClient } from '@src/apollo-client'
import { BareModal } from '@src/components/BareModal'
import { CustomComponents } from '@src/components/custom-page/common'
import { FooterVariant } from '@src/components/FooterFull'
import { CircleEmbellishment } from '@src/components/layout/CircleEmbellishment'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { HomePageHero } from '@src/components/PageHeros'
import { getImageUrl } from '@src/consts/routes'
import {
  PageHomepageDocument,
  type PageHomepageFragment,
  type PageHomepageQuery,
  type PageHomepageQueryVariables,
} from '@src/generated/graphqlDirectus'
import { combineErrors } from '@src/utils/combineErrors'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Homepage({
  pageQueryData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [showVideo, setShowVideo] = useState(false)
  const pageData = pageQueryData ?? pageDataDefaults
  const announcementChip = {
    visible: pageData.announcement_visible,
    text: pageData.announcement_text,
    url: pageData.announcement_url,
  }
  const heroImageUrl = getImageUrl(pageData.hero_image)

  return (
    <>
      <HeaderPad
        as={GradientBG}
        image={homepageGradient}
        imageType="custom"
        className="pb-xxlarge"
        bgChildren={
          <>
            <CircleEmbellishment
              width="100%"
              height="40%"
              position={{ bottom: '21%', left: '-45%' }}
            />
            <CircleEmbellishment
              width="80%"
              height="32%"
              rotate={-125}
              position={{ bottom: '-1%', right: '-42%' }}
            />
          </>
        }
      >
        <HomePageHero
          heading={pageData.hero_title}
          description={
            <div className="[text-wrap:pretty]">
              {pageData.hero_description}
            </div>
          }
          announcementChip={announcementChip}
          ctas={
            <div className="mx-auto flex w-full max-w-[480px] justify-center gap-large">
              <Button
                style={{ flex: 1 }}
                large
                as={Link}
                href={pageData.hero_cta_url}
              >
                {pageData.hero_cta_text}
              </Button>
              <Button
                style={{ flex: 1 }}
                floating
                large
                onClick={() => setShowVideo(true)}
              >
                <div className="flex items-center gap-xsmall px-large text-text">
                  {playButtonSVG}
                  {pageData.hero_video_cta_text}
                </div>
              </Button>
            </div>
          }
        />
        <StandardPageWidth>
          {heroImageUrl && (
            <img
              className="mx-auto"
              src={heroImageUrl}
              width={1248}
            />
          )}
        </StandardPageWidth>
      </HeaderPad>
      <CustomComponents components={pageData.custom_components ?? []} />
      <BareModal
        open={showVideo}
        onClose={() => setShowVideo(false)}
        closeButton={false}
        className="mx-auto flex w-[90%] items-center justify-center"
        style={{ height: 'fit-content', overflow: 'visible' }}
      >
        <div
          className="relative h-0 w-full self-center pb-[56.25%]" /* 16:9 aspect ratio */
        >
          {pageData.hero_video_cta_url && (
            <iframe
              className="absolute left-0 top-0 h-full w-full rounded-large border border-fill-three"
              src={pageData.hero_video_cta_url}
              title="YouTube video player"
              allow="autoplay"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
          <Button
            className="left-1/2 top-full z-10 mt-large -translate-x-1/2"
            large
            floating
            startIcon={<CloseIcon />}
            onClick={() => setShowVideo(false)}
            style={{ position: 'absolute' }}
          >
            Close
          </Button>
        </div>
      </BareModal>
    </>
  )
}

export const getStaticProps = async () => {
  const { data, error } = await directusClient.query<
    PageHomepageQuery,
    PageHomepageQueryVariables
  >({
    query: PageHomepageDocument,
  })
  const page = data.page_homepage

  return propsWithGlobalSettings(
    {
      pageQueryData: page,
      footerVariant: FooterVariant.kitchenSink,
      errors: combineErrors([error]),
    },
    { revalidate: 60 }
  )
}

const pageDataDefaults: PageHomepageFragment = {
  hero_title: 'Managing Kubernetes can be a cluster—',
  hero_description:
    'Plural reduces cluster upgrade cycles from months to hours at enterprise scale with streamlined dependency management.',
  hero_cta_text: 'Book a demo',
  hero_cta_url: '/contact-sales',
  hero_image: null,
  hero_video_cta_text: 'Watch demo video',
  hero_video_cta_url:
    'https://www.youtube.com/embed/W8KCaiZRV3M?si=co3ld2bFbqH6RpZb',
}

const homepageGradient = `
  radial-gradient(ellipse 50% 100% at 100% 100px, rgba(16, 35, 86, 0.25) 1px, transparent 75% 25%),
  radial-gradient(circle, #102356 0%, transparent 70%),
  linear-gradient(180deg, rgba(16, 35, 86, 0.1) 0%, rgba(14, 16, 21, 1.00) 71.51%),
  linear-gradient(180deg, #0B0C10 5.32%, #0B0C10 100%)
`

const playButtonSVG = (
  <svg
    height="24"
    width="24"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-fill-primary"
    aria-hidden
  >
    <rect
      x="0.726562"
      width="41.0404"
      height="41.0404"
      rx="20.5202"
      fill="currentColor"
    />
    <g clipPath="url(#clip0_490_2681)">
      <path
        d="M27.6062 21.297L16.7291 28.0793C16.2897 28.3531 15.793 27.9073 15.793 27.2387V13.8015C15.793 13.1328 16.2897 12.687 16.7291 12.9609L27.6062 19.6158C28.1348 19.9406 28.1348 20.9722 27.6062 21.297V21.297Z"
        fill="#DFE2E7"
      />
    </g>
    <defs>
      <clipPath id="clip0_490_2681">
        <rect
          width="16.4162"
          height="16.4162"
          fill="white"
          transform="translate(13.0391 12.3125)"
        />
      </clipPath>
    </defs>
  </svg>
)
