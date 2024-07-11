import { type ComponentProps } from 'react'

import { useRouter } from 'next/router'

import { isEmpty, isNil } from 'lodash-es'
import styled from 'styled-components'

import { type PluralEvent } from '@src/data/getEvents'

import { CardCta } from '../CardCta'
import { TextLimiter } from '../layout/TextLimiter'
import { ResponsiveText } from '../Typography'

const DATE_FORMAT = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
} as const

const TIME_FORMAT = {
  hour: 'numeric',
  minute: '2-digit',
} as const

function formatTime(
  date: Date | null | undefined,
  {
    locale,
    timeZone,
    timeZoneShort,
    showTimeZone = true,
  }: {
    locale: string
    timeZone?: string | null
    timeZoneShort?: string | null
    showTimeZone?: boolean
  }
) {
  return `${
    date?.toLocaleTimeString(locale, {
      ...TIME_FORMAT,
      ...(timeZone ? { timeZone } : {}),
    }) || ''
  }${showTimeZone && timeZoneShort ? ` ${timeZoneShort}` : ''}`
}

export function formatDateTime(
  date: Date | null | undefined,
  {
    locale,
    showTime,
    timeZone,
    timeZoneShort,
  }: {
    locale: string
    showTime
    timeZone?: string | null
    timeZoneShort?: string | null
  }
) {
  if (!date) {
    return ''
  }
  let dateString = date.toLocaleDateString(locale, {
    ...DATE_FORMAT,
    ...(timeZone ? { timeZone } : {}),
  })

  if (showTime) {
    dateString += `, ${formatTime(date, { locale, timeZone, timeZoneShort })}`
  }

  return dateString
}

function formatDates(
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
  {
    locale,
    timeZone,
    showStartTime,
    showEndTime,
    timeZoneShort,
  }: {
    locale: string
    showStartTime?: boolean
    showEndTime?: boolean
    timeZone?: string
    timeZoneShort?: string
  }
) {
  const sameYear =
    startDate?.getUTCFullYear() === endDate?.getUTCFullYear() || !endDate
  const sameMonth =
    (sameYear && startDate?.getUTCMonth() === endDate?.getUTCMonth()) ||
    !endDate
  const sameDay =
    (sameMonth && startDate?.getUTCDate() === endDate?.getUTCDate()) || !endDate

  let dateString = ''

  if (startDate && sameDay) {
    dateString = `${startDate.toLocaleDateString(locale, {
      ...DATE_FORMAT,
      timeZone,
    })}`

    if (showStartTime) {
      dateString += `, ${formatTime(startDate, {
        locale,
        timeZone,
        timeZoneShort,
        showTimeZone: !(showEndTime && endDate),
      })}`
      if (showEndTime && endDate) {
        dateString += ` – ${formatTime(endDate, {
          locale,
          timeZone,
          timeZoneShort,
        })}`
      }
    }

    return dateString
  }

  dateString = formatDateTime(startDate, {
    locale,
    showTime: showStartTime,
    timeZone,
    timeZoneShort,
  })

  if (endDate) {
    dateString += ` – ${formatDateTime(endDate, {
      locale,
      showTime: showEndTime,
      timeZone,
      timeZoneShort,
    })}`
  }

  return dateString
}

const FieldContent = styled.span(({ theme }) => ({
  '&:any-link': {
    ...theme.partials.text.inlineLink,
    textDecoration: 'none',
    // color: theme.colors['action-link-inline'],
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

const EventCardSC = styled.div(({ theme }) => ({
  background: theme.colors['fill-one'],
  border: theme.borders['fill-one'],
  borderRadius: theme.borderRadiuses.large,
  padding: theme.spacing.large,
  '.eventName': {
    ...theme.partials.marketingText.subtitle2,
    marginBottom: theme.spacing.xsmall,
  },
  '.details': {
    ...theme.partials.marketingText.label,
    color: theme.colors['text-light'],
    display: 'flex',
    flexWrap: 'wrap',
    li: {
      '&:not(:last-child)::after': {
        content: '"|"',
        marginRight: theme.spacing.xsmall,
        marginLeft: theme.spacing.xsmall,
      },
    },
  },
  '.description': {
    ...theme.partials.marketingText.body2,
    marginTop: theme.spacing.small,
    color: theme.colors['text-xlight'],
  },
  '.ctas': {
    marginTop: theme.spacing.medium,
  },
}))

function EventCard({
  event,
  ...props
}: { event: PluralEvent } & ComponentProps<typeof EventCardSC>) {
  const locale = useRouter().locale || 'en-us'

  const startDate = !isNil(event.start_date) ? new Date(event.start_date) : null
  const endDate = event.end_date ? new Date(event.end_date) : null

  const dateString = formatDates(startDate, endDate, {
    locale,
    timeZone: event.timezone ?? undefined,
    timeZoneShort: event.timezone_short ?? undefined,
    showStartTime: !!event.show_start_time,
    showEndTime: !!event.show_end_time,
  })

  return (
    <EventCardSC {...props}>
      <TextLimiter>
        <div className="eventName">{event.name}</div>
        <ul className="details">
          {dateString && <li>{dateString}</li>}
          {event?.fields?.map(
            (field: { url?: string; label?: string; content?: string }) => (
              <li>
                {field.label && <>{field.label}: </>}
                <FieldContent
                  {...(field.url
                    ? { as: 'a', target: '_blank', href: field.url }
                    : {})}
                >
                  {field.content && field.content}
                </FieldContent>
              </li>
            )
          )}
        </ul>
        {event.description && (
          <div className="description">{event.description}</div>
        )}
        {!isEmpty(event?.ctas) && (
          <div className="ctas">
            {event?.ctas?.map(
              (cta) =>
                !!cta?.url && (
                  <CardCta
                    key={`${cta.url}-${cta.label}`}
                    target="_blank"
                    href={cta.url}
                  >
                    {cta.label || cta.url}
                  </CardCta>
                )
            )}
          </div>
        )}
      </TextLimiter>
    </EventCardSC>
  )
}

export default function EventsSection({ events }: { events: PluralEvent[] }) {
  if (isEmpty(events)) {
    return null
  }
  const sortedEvents = (events || []).sort(
    (a, b) =>
      new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
  )

  return (
    <div>
      <ResponsiveText
        as="h3"
        textStyles={{ '': 'mLabel' }}
        className="mb-medium"
      >
        Upcoming Events
      </ResponsiveText>
      <div className="flex flex-col gap-medium">
        {sortedEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </div>
  )
}
