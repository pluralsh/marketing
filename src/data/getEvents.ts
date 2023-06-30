import moment from 'moment-timezone'

import { directusClient as client } from '@src/apollo-client'
import {
  EventsDocument,
  type EventsQuery,
  type EventsQueryVariables,
} from '@src/generated/graphqlDirectus'

function normalizeEvents(events: EventsQuery['events']) {
  return events?.map((event) => ({
    ...event,
    ...(event.timezone
      ? {
          start_date: event.start_date
            ? moment.tz(event.start_date, event.timezone).format() ||
              event.start_date
            : event.start_date,
          end_date: event.end_date
            ? moment.tz(event.end_date, event.timezone).format() ||
              event.start_date
            : event.end_date,
        }
      : {}),
  }))
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
