import { ColorModeProvider } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'

import classNames from 'classnames'

import { directusClient } from '@src/apollo-client'
import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { StandardPage } from '@src/components/layout/FullPage'
import { GradientBG } from '@src/components/layout/GradientBG'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import ContributorsSection from '@src/components/page-sections/ContributorsSection'
import EventsSection from '@src/components/page-sections/EventsSection'
import { Cta, ResponsiveText } from '@src/components/Typography'
import { getContributors } from '@src/data/getGithubStats'
import {
  EventsDocument,
  type EventsQuery,
  type EventsQueryVariables,
} from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'
import { singlePageStaticPaths } from '@src/utils/staticPaths'

import { HeaderPad } from '../../src/components/layout/HeaderPad'

const DUMMY_PARAM = 'community' as const

export default function About({
  contributors,
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('contributors', contributors)

  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        // position="top middle"
        image="/images/gradients/gradient-bg-1.jpg"
      >
        <div
          className={classNames(
            'pb-xxxlarge',
            'md:pb-xxxxlarge',
            'xxl:pb-xxxxxxlarge'
          )}
        >
          <StandardPage
            className={classNames(
              'flex flex-col gap-xlarge',
              'pt-xxlarge pb-xxxxxlarge',
              'md:pt-xxxxlarge md:pb-xxxxxlarge',
              'xl:pt-xxxxlarge xl:pb-xxxxxxlarge'
            )}
          >
            <ResponsiveText
              className="mb-medium"
              as="h1"
              color="text-xlight"
              textStyles={{
                '': 'mLabel',
              }}
            >
              Our mission
            </ResponsiveText>
            <Columns className="gap-y-xxxxlarge columns:items-center">
              <EqualColumn>
                <TextLimiter>
                  <ResponsiveText
                    className="[text-wrap:balance]"
                    as="h2"
                    textStyles={{
                      '': 'mHero2',
                      md: 'mHero1',
                    }}
                  >
                    We are building a flexible, scalable solution to application
                    delivery.
                  </ResponsiveText>
                </TextLimiter>
              </EqualColumn>
              <EqualColumn>
                <TextLimiter>
                  <ResponsiveText
                    as="p"
                    textStyles={{ '': 'mBody1' }}
                    color="text-light"
                    className="mb-xlarge"
                  >
                    At Plural, we believe that there is a better way to solve
                    the third major constraint—distributed systems operational
                    cost—that benefits OSS developers and DevOps teams alike.
                  </ResponsiveText>
                  <Cta
                    target="_blank"
                    href="/blog/what-is-plural/"
                  >
                    Read more
                  </Cta>
                </TextLimiter>
              </EqualColumn>
            </Columns>
          </StandardPage>
        </div>
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div
          className={classNames(
            'bg-fill-zero',
            'flex flex-col',
            'py-xxxxlarge gap-y-xxxxlarge',
            'md:py-xxxxxlarge md:gap-y-xxxxxlarge',
            'xxl:py-xxxxxxlarge xxl:gap-y-xxxxxxlarge',
            'text-text'
          )}
        >
          <StandardPage className="mb-xxxxxlarge max:mb-xxxxxxlarge">
            <ContributorsSection contributors={contributors} />
          </StandardPage>
          <StandardPage className="mb-xxxxxlarge max:mb-xxxxxxlarge">
            <EventsSection events={events} />
          </StandardPage>
        </div>
      </ColorModeProvider>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ret = singlePageStaticPaths(DUMMY_PARAM)

  console.log('ret', ret)

  return ret
}

export type CommunityPageProps = {
  contributors: any
  events: EventsQuery['events']
}

export const getStaticProps: GetStaticProps<CommunityPageProps> = async (
  _context
) => {
  console.log('COMMUNITY')
  const { data: contributors, error: githubError } = await getContributors()

  if (!contributors) {
    return { notFound: true }
  }

  const { data: events, error: eventsError } = await directusClient.query<
    EventsQuery,
    EventsQueryVariables
  >({
    query: EventsDocument,
  })

  if (eventsError) {
    throw new Error(`${eventsError.name}: ${eventsError.message}`)
  }

  return propsWithGlobalSettings({
    metaTitle: 'Community',
    contributors,
    footerVariant: FooterVariant.kitchenSink,
    events: events.events || [],
    errors: [...(githubError ? [githubError] : [])],
  })
}
