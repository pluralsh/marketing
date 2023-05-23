import {
  type Dispatch,
  type MutableRefObject,
  type SetStateAction,
  useCallback,
  useState,
} from 'react'

import {
  BrowseAppsIcon,
  Input,
  MagnifyingGlassIcon,
  SubTab,
  TabList,
} from '@pluralsh/design-system'

import { useDebounce } from 'rooks'
import styled from 'styled-components'

import { useSearchParams } from './hooks/useSearchParams'

const SearchBarWrap = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.medium,
  backgroundColor: theme.colors['fill-zero'],
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 210,
  minWidth: 210,
  marginBottom: theme.spacing.small,
  '& > *:first-child': { flexGrow: 1 },
}))

export enum MarketSearchTabKey {
  all = 'all',
  stacks = 'stacks',
  apps = 'apps',
}
const tabs: {
  key: MarketSearchTabKey
  label: string
}[] = [
  { key: MarketSearchTabKey.all, label: 'View all' },
  { key: MarketSearchTabKey.stacks, label: 'Stacks' },
  { key: MarketSearchTabKey.apps, label: 'Apps' },
]

export const TAB_PARAM = 'type'

export function useSearchTabKey(): [
  MarketSearchTabKey,
  (k: MarketSearchTabKey) => void
] {
  const [searchParams, setSearchParams] = useSearchParams()

  const setTabKey = useCallback(
    (tabKey: MarketSearchTabKey) => {
      setSearchParams((p) => {
        p.set(TAB_PARAM, tabKey)

        return p
      })
    },
    [setSearchParams]
  )

  return [
    (tabs.find(({ key }) => key === searchParams.get(TAB_PARAM)) || tabs[0])
      .key,
    setTabKey,
  ]
}

export function SearchBar({
  search: searchProp,
  setSearch: setSearchProp,
  tabStateRef,
}: {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  tabStateRef: MutableRefObject<any>
}) {
  const [search, setSearch] = useState(searchProp)
  const debouncedSetSearch = useDebounce(setSearchProp, 500)

  const [tabKey, setTabKey] = useSearchTabKey()

  console.log('tabKey', tabKey)

  return (
    <SearchBarWrap>
      <Input
        titleContent={
          <>
            <BrowseAppsIcon marginRight="small" />
            Marketplace
          </>
        }
        startIcon={
          <MagnifyingGlassIcon
            size={16}
            color="icon-light"
          />
        }
        placeholder="Search the marketplace"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
          debouncedSetSearch(event.target.value)
        }}
      />
      <TabList
        stateRef={tabStateRef}
        stateProps={{
          orientation: 'horizontal',
          selectedKey: tabKey,
          onSelectionChange: (key) => setTabKey(key as MarketSearchTabKey),
        }}
      >
        {tabs.map(({ key, label }) => (
          <SubTab key={key}>{label}</SubTab>
        ))}
      </TabList>
    </SearchBarWrap>
  )
}
