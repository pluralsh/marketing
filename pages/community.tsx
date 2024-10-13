import {
  ArrowRightIcon,
  Button,
  Card,
  Chip,
  ColorModeProvider,
  DocumentIcon,
  GitHubLogoIcon,
  IconFrame,
  YouTubeIcon,
} from '@pluralsh/design-system'
import { type GetStaticProps, type InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'

import { useTheme } from 'styled-components'

import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { formatDateTime } from '@src/components/page-sections/EventsSection'
import { BasicPageHero } from '@src/components/PageHeros'
import { ResponsiveText } from '@src/components/Typography'
import { type PluralEvent, getEvents } from '@src/data/getEvents'
import { cn as classNames } from '@src/utils/cn'
import { combineErrors } from '@src/utils/combineErrors'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Community({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        // position="top middle"
        image="/images/gradients/gradient-bg-13.jpg"
      >
        <BasicPageHero
          heading="Plural community"
          description="The Plural community is built to support all Plural users through discussions, educational resources, and events."
        />
      </HeaderPad>
      {/* resources */}
      <StandardPageWidth
        className={classNames(
          'flex flex-col gap-xlarge [text-wrap:balance]',
          'p-xxlarge lg:p-xxxxxxlarge'
        )}
      >
        <ResponsiveText
          className=" mb-xxlarge text-center"
          as="h2"
          textStyles={{
            '': 'mTitle2',
            sm: 'mHero2',
          }}
        >
          Community Resources
        </ResponsiveText>
        <div className="flex flex-col items-stretch justify-between gap-medium md:flex-row md:items-center">
          {kinds.map((key) => (
            <ResourceLink
              key={key}
              kind={key}
            />
          ))}
        </div>
      </StandardPageWidth>
      {/* events */}
      <ColorModeProvider mode="light">
        <div
          className={classNames(
            'bg-fill-zero',
            'p-large py-xxxlarge md:p-xxxxxlarge md:pt-xxxxxlarge'
          )}
        >
          <StandardPageWidth>
            <ResponsiveText
              className=" mb-xxlarge text-center"
              as="h2"
              textStyles={{
                '': 'mTitle2',
                sm: 'mHero2',
              }}
            >
              Plural Events
            </ResponsiveText>
            {events.length ? (
              <EventsGrid events={events} />
            ) : (
              <Card
                fillLevel={1}
                className={classNames(
                  'flex',
                  'justify-center p-large md:p-xxxxlarge'
                )}
              >
                <ResponsiveText
                  as="span"
                  textStyles={{ md: 'mSubtitle1', '': 'mBody2Bold' }}
                  className="m-large md:m-xxxxlarge"
                >
                  No planned events at this time
                </ResponsiveText>
              </Card>
            )}
          </StandardPageWidth>
        </div>
      </ColorModeProvider>
    </>
  )
}

const resources = {
  gitHub: {
    url: 'https://github.com/pluralsh/plural',
    title: 'GitHub',
    icon: <GitHubLogoIcon />,
  },
  youtube: {
    url: 'https://www.youtube.com/channel/UCKpIHwAFwvXhM-RaR1h77Jw',
    title: 'YouTube',
    icon: <YouTubeIcon />,
  },
  docs: {
    url: 'https://docs.plural.sh',
    title: 'Docs',
    icon: <DocumentIcon />,
  },
} as const

const kinds = Object.keys(resources) as Array<keyof typeof resources>

function ResourceLink({ kind }: { kind: keyof typeof resources }) {
  const theme = useTheme()

  return (
    <Button
      secondary
      as="a"
      className="flex grow items-center justify-start gap-medium"
      href={resources[kind].url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ justifyContent: 'flex-start', padding: theme.spacing.large }}
    >
      <IconFrame
        type="floating"
        style={{
          display: 'inline-flex',
          marginRight: theme.spacing.xsmall,
        }}
        icon={resources[kind].icon}
        size="medium"
      />
      <span>{resources[kind].title}</span>
    </Button>
  )
}

function EventsGrid({ events }: { events: PluralEvent[] }) {
  const locale = useRouter().locale || 'en-us'

  return (
    <div
      className="grid grid-cols-1 gap-xxlarge md:grid-cols-2 xl:grid-cols-3"
      style={{ gridAutoRows: '1fr' }}
    >
      {events.map((event) => (
        <a
          key={event.id}
          href="#"
          className=""
        >
          <Card
            fillLevel={1}
            padding="xlarge"
            className={classNames(
              'flex h-full flex-col',
              ' items-start justify-center p-large md:p-xxxxlarge',
              'hover:bg-fill-one-hover'
            )}
          >
            <Chip
              padding="small"
              severity="neutral"
              className="mb-medium w-fit"
            >
              Event
            </Chip>
            <ResponsiveText
              as="span"
              textStyles={{ md: 'mSubtitle1', '': 'mBody2Bold' }}
              className="mb-large overflow-hidden text-ellipsis"
            >
              {event.name}
            </ResponsiveText>
            <ResponsiveText
              as="span"
              textStyles={{ md: 'mBody2', '': 'mBody2' }}
              className="mb-xxlarge"
            >
              {formatDateTime(new Date(event.start_date), {
                timeZone: event.timezone,
                locale,
                timeZoneShort: event.timezone_short,
                showTime: true,
              })}
            </ResponsiveText>
            <IconFrame
              type="floating"
              icon={<ArrowRightIcon />}
              size="large"
              color="text"
              className="mt-auto"
              //   style={{ display: 'inline-flex' }}
            />
          </Card>
        </a>
      ))}
    </div>
  )
}

export type CommunityPageProps = {
  events: PluralEvent[]
}

export const getStaticProps: GetStaticProps<CommunityPageProps> = async (
  _context
) => {
  const { data: events, error: eventsError } = await getEvents()

  return propsWithGlobalSettings({
    metaTitle: 'Community',
    metaDescription: 'Flexible plans for every stage of your business',
    footerVariant: FooterVariant.kitchenSink,
    errors: combineErrors([eventsError]),
    events,
  })
}
