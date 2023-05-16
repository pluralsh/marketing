import { Item } from '@react-stately/collections'

import { directusClient } from '@src/apollo-client'
import { MenuButton, MenuItemHeaderLink } from '@src/components/menu/MenuButton'
import {
  EventsDocument,
  type EventsQuery,
  type EventsQueryVariables,
} from '@src/generated/graphqlDirectus'

const items = [
  {
    key: '1',
    textValue: 'label 1',
    content: 'string',
  },
  {
    key: '2',
    textValue: 'label 2',
    content: 'string',
  },
  {
    key: '4',
    textValue: 'label 4',
    content: 'simple ccontent', // <div>complex content</div>,
  },
  {
    key: '5',
    textValue: 'label 4',
    content: 'simple ccontent', // <div>complex content</div>,
    // render: ({ item, state }) => <div>custom render, state</div>,
  },
] as const

export default function Index({ events }) {
  return (
    <div>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <h1 className="hero1 mb-medium w-full md:w-3/4">Events</h1>
        <p className="text-marketing-white">This is some paragraph textzz</p>
        <div className="my-large">
          <MenuButton<(typeof items)[number]>
            label="Menu 1"
            items={items}
            itemRenderer={MenuItemHeaderLink}
          >
            {({ content, ...item }) => (
              <Item
                key={item.key}
                textValue={item.textValue}
              >
                {content}
              </Item>
            )}
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
