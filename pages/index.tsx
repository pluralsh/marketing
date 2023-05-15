import { Item } from '@react-stately/collections'

import { directusClient } from '@src/apollo-client'
import { MenuButton } from '@src/components/menu/MenuButton'
import {
  EventsDocument,
  type EventsQuery,
  type EventsQueryVariables,
} from '@src/generated/graphqlDirectus'

export default function Index({ events }) {
  return (
    <div>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <h1 className="hero1 mb-medium w-full md:w-3/4">Events</h1>
        <p className="text-marketing-white">This is some paragraph textzz</p>
        <div className="my-large">
          <MenuButton label="Menu 1">
            <Item
              key="1"
              textValue="Part 1"
            >
              part 1
            </Item>
            <Item
              key="2"
              textValue="Part 2"
            >
              part 2
            </Item>
            <Item
              key="3"
              textValue="Part 3"
            >
              part 3
            </Item>
          </MenuButton>
        </div>
        <div className="flex flex-col">
          {events.map((event) => {
            const startDate = new Date(event.start_date).toDateString()

            return (
              <div className="rounded-md bg-fill-one p-medium">
                {event.name}, {startDate}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data, error } = await directusClient.query<
    EventsQuery,
    EventsQueryVariables
  >({
    query: EventsDocument,
  })

  if (error) {
    throw new Error(`${error.name}: ${error.message}`)
  }

  return { props: { events: data.events || [] } }
}
