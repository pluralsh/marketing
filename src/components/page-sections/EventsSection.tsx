import { useRouter } from 'next/router'

import { type EventFragment } from '@src/generated/graphqlDirectus'

export default function Events({ events }: { events: EventFragment[] }) {
  const locale = useRouter().locale || 'en-us'

  const sortedEvents = [...events].sort(
    (a, b) =>
      new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
  )

  return (
    <div>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <h1 className="hero1 mb-medium w-full md:w-3/4">Events</h1>
        <div className="flex flex-col gap-medium">
          {sortedEvents.map((event) => {
            const startDate = new Date(event.start_date).toLocaleDateString(
              locale,
              {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                weekday: 'short',
              }
            )

            return (
              <div className="rounded-md bg-fill-one p-medium">
                <div>{event.name}</div>
                <div>{startDate}</div>,
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
