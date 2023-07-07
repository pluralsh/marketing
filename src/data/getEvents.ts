import moment from 'moment-timezone'

import { directusClient as client } from '@src/apollo-client'
import {
  EventsDocument,
  type EventsQuery,
  type EventsQueryVariables,
} from '@src/generated/graphqlDirectus'

export type PluralEvent = Awaited<ReturnType<typeof getEvents>>['data'][number]

function normalizeEvents(events: EventsQuery['events']) {
  return events?.map((event) => {
    let eventProps: typeof event & { timezone_short?: string } = {
      ...event,
    }

    if (event.timezone) {
      if (event.start_date) {
        const startDate = moment.tz(event.start_date, event.timezone)

        eventProps = {
          ...eventProps,
          start_date: startDate.format(),
          timezone_short: startDate.format('z'),
        }
      }
      if (event.end_date) {
        eventProps = {
          ...eventProps,
          end_date: moment.tz(event.end_date, event.timezone).format(),
        }
      }
    }

    return {
      ...eventProps,
    }
  })
}

let cache: EventsQuery['events'] | null = null

export async function getEvents() {
  const { data, error } = await client.query<EventsQuery, EventsQueryVariables>(
    {
      query: EventsDocument,
    }
  )

  const events = normalizeEvents(data?.events)

  if (events) {
    cache = events
  }

  return { data: events || cache, error }
}
