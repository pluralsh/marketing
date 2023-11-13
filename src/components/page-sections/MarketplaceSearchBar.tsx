import {
  type ComponentProps,
  type Dispatch,
  type MutableRefObject,
  type SetStateAction,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  BrowseAppsIcon,
  Button,
  FiltersIcon,
  Input,
  SubTab,
  TabList,
} from '@pluralsh/design-system'
import { type ReadonlyURLSearchParams } from 'next/navigation'

import { useDebounce } from 'rooks'
import styled from 'styled-components'

import { mqMarketTwoCol } from '@pages/marketplace'
import { mqs } from '@src/breakpoints'
import { BareModal } from '@src/components/BareModal'
import { useSearchParams } from '@src/components/hooks/useSearchParams'

import MarketplaceFilters from './MarketplaceFilters'

const mqMoveTabs = mqs.md

const SearchBarWrap = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.small,
  backgroundColor: theme.colors['fill-zero'],
  marginBottom: theme.spacing.small,
  flexWrap: 'wrap',
  '& > *:first-child': { flexGrow: 1 },
  [mqs.xs]: {
    gap: theme.spacing.medium,
  },
  [mqMoveTabs]: {
    flexWrap: 'nowrap',
  },
  [mqs.lg]: {
    columnGap: theme.spacing.large,
  },
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

function hasValidTypeParam(
  searchParams: ReadonlyURLSearchParams | URLSearchParams
) {
  return (
    !searchParams.has('type') ||
    tabs.slice(1).some((t) => t.key === searchParams.get('type'))
  )
}

export function useSearchTabKey(): [
  MarketSearchTabKey,
  (k: MarketSearchTabKey) => void,
] {
  const [searchParams, setSearchParams] = useSearchParams()

  // If 'type' is 'all' or not a known tab key, delete 'type' search param as irrelevant
  useEffect(() => {
    if (!hasValidTypeParam(searchParams)) {
      setSearchParams((p) => {
        p.delete(TAB_PARAM)

        return p
      })
    }
  }, [searchParams, setSearchParams])

  const setTabKey = useCallback(
    (tabKey: MarketSearchTabKey) => {
      setSearchParams((p) => {
        if (!hasValidTypeParam(p)) {
          p.delete(TAB_PARAM)
        } else {
          p.set(TAB_PARAM, tabKey)
        }

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

const MarketTabs = styled(({ ...props }: ComponentProps<typeof TabList>) => (
  <TabList {...props}>
    {tabs.map(({ key, label }) => (
      <SubTab key={key}>{label}</SubTab>
    ))}
  </TabList>
))(({ theme: _ }) => ({
  order: 3,
  width: '100%',
  justifyContent: 'stretch',
  '& > *': {
    flexGrow: 1,
    textAlign: 'center',
  },
  [mqMoveTabs]: {
    width: 'auto',
    order: 'initial',
  },
}))

const MarketFilterBtn = styled(
  ({ ...props }: ComponentProps<typeof Button>) => (
    <Button
      secondary
      startIcon={<FiltersIcon />}
      {...props}
    >
      <span className="text">Filter</span>
    </Button>
  )
)(({ theme }) => ({
  '& > span:first-child': {
    marginRight: `0 !important`,
  },
  width: '40px',
  '.text': {
    display: 'none',
  },
  [mqs.md]: {
    width: 'auto',
    '& > span:first-child': {
      marginRight: `${theme.spacing.small}px !important`,
    },
    '.text': {
      display: 'inline',
    },
  },
  [mqMarketTwoCol]: {
    '&&': {
      display: 'none',
    },
  },
}))

const ModalFilters = styled(MarketplaceFilters)(({ theme: _ }) => ({
  maxHeight: '100%',
  flexShrink: 1,
}))

const SearchBarLabel = styled.span(({ theme }) => ({
  display: 'none',
  [mqs.md]: {
    display: 'inline',
    marginLeft: theme.spacing.small,
  },
}))

const SearchTitleContent = styled.div(({ theme }) => ({
  display: 'flex',
  flexAlign: 'center',
  marginLeft: -theme.spacing.xxsmall,
  marginRight: -theme.spacing.xxsmall,
  [mqs.xs]: {
    marginLeft: 0,
    marginRight: 0,
  },
}))

const SearchInput = styled(
  forwardRef<HTMLInputElement, ComponentProps<typeof Input>>((props, ref) => (
    <Input
      ref={ref}
      titleContent={
        <SearchTitleContent>
          <BrowseAppsIcon />
          <SearchBarLabel>Marketplace</SearchBarLabel>
        </SearchTitleContent>
      }
      showClearButton
      placeholder="Search"
      caption
      {...props}
    />
  ))
)(({ theme }) => ({
  '& > *:first-child > *:last-child': {
    marginLeft: -theme.spacing.xxsmall,
    marginRight: -theme.spacing.xxxsmall,
    [mqs.xs]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  '&&': {
    paddingRight: theme.spacing.xsmall,
    [mqs.xs]: {
      marginRight: 0,
    },
  },
}))

export function SearchBar({
  search: searchProp,
  setSearch: setSearchProp,
  filterProps,
  tabStateRef,
}: {
  search: string
  filterProps: any
  setSearch: Dispatch<SetStateAction<string>>
  tabStateRef: MutableRefObject<any>
}) {
  const [search, setSearch] = useState(searchProp)
  const debouncedSetSearch = useDebounce(setSearchProp, 300)
  const [tabKey, setTabKey] = useSearchTabKey()
  const [filtersOpen, setFiltersOpen] = useState(false)

  const tabs = (
    <MarketTabs
      stateRef={tabStateRef}
      stateProps={{
        orientation: 'horizontal',
        selectedKey: tabKey,
        onSelectionChange: (key) => setTabKey(key as MarketSearchTabKey),
      }}
    />
  )

  return (
    <SearchBarWrap>
      <SearchInput
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
          debouncedSetSearch(event.target.value)
        }}
      />
      {tabs}
      <MarketFilterBtn
        onClick={() => {
          setFiltersOpen(!filtersOpen)
        }}
      />

      <BareModal
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        closeButton
      >
        <ModalFilters {...filterProps} />
      </BareModal>
    </SearchBarWrap>
  )
}
