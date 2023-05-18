import { useCallback, useMemo, useState } from 'react'

import { Card, Checkbox, CloseIcon, Input } from '@pluralsh/design-system'
import { A, Accordion, Div } from 'honorable'

import Fuse from 'fuse.js'
import capitalize from 'lodash/capitalize'
import styled from 'styled-components'

import { clearToken } from '@pages/marketplace'
import { useSearchParams } from '@src/components/hooks/useSearchParams'
import { Categories } from '@src/data/getSearchMetadata'
import { type CategoryFragment } from '@src/generated/graphqlPlural'

function useParamToggle(key: string) {
  const [searchParams, setSearchParams] = useSearchParams()

  const isToggled = useCallback(
    (value: string) => searchParams.getAll(key).includes(value?.toLowerCase()),
    [key, searchParams]
  )
  const handleToggle = useCallback(
    (value) => {
      const existing = searchParams.getAll(key)
      const formattedValue = value.toLowerCase()

      console.log('handleToggle formattted', formattedValue)
      console.log('handleToggle unformatted', value)

      if (existing.includes(formattedValue)) {
        console.log('includes:', formattedValue)
        console.log('clear:', key, value)

        clearToken({ key, value, setSearchParams })
      } else {
        console.log('doesnt includes:', formattedValue)

        setSearchParams((params) => {
          params.append(key, formattedValue)

          return params
        })
      }
    },
    [key, searchParams, setSearchParams]
  )

  return useMemo(
    () => ({
      isToggled,
      handleToggle,
    }),
    [handleToggle, isToggled]
  )
}

function AccordionWithExpanded({ children, ...props }: any) {
  const [expanded, setExpanded] = useState(true)

  return (
    <Accordion
      expanded={expanded}
      onExpand={() => setExpanded(!expanded)}
      {...props}
    >
      {children(expanded)}
    </Accordion>
  )
}

const CheckboxList = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing.xxsmall,
  '*': {
    tabIndex: -1,
  },
}))

const MarketplaceSidebarCheckbox = styled(
  ({ toggled, onClick, label, trapFocus, className }: any) => (
    <Checkbox
      small
      checked={toggled}
      onChange={onClick}
      className={className}
      tabIndex={trapFocus ? undefined : -1}
    >
      {label}
    </Checkbox>
  )
)(({ theme }) => ({
  paddingBottom: theme.spacing.xsmall,
  paddingTop: theme.spacing.xsmall,
  paddingLeft: theme.spacing.xsmall,
  paddingRight: 0,
}))

const searchOptions = {
  keys: ['tag'],
}

function Categories({ categories }: { categories: Categories }) {
  const { isToggled, handleToggle } = useParamToggle('category')
  const sortedCategories = useMemo(
    () => [
      { category: 'Trending' },
      ...categories
        .slice()
        .filter((cat): cat is CategoryFragment => !!cat?.category)
        .sort((a, b) =>
          !(a.category && b.category)
            ? 0
            : a?.category?.localeCompare(b?.category)
        ),
    ],
    [categories]
  )

  return (
    <AccordionWithExpanded
      ghost
      defaultExpanded
      title={`Categories (${sortedCategories.length})`}
      borderBottom="1px solid border !important"
    >
      {(expanded) => (
        <CheckboxList>
          {sortedCategories.map(({ category }) =>
            category ? (
              <MarketplaceSidebarCheckbox
                key={category}
                toggled={isToggled(category)}
                onClick={() => handleToggle(category)}
                label={capitalize(category)}
                trapFocus={expanded}
              />
            ) : null
          )}
        </CheckboxList>
      )}
    </AccordionWithExpanded>
  )
}

function Tags({ tags, fetchMore = () => {}, search, setSearch }) {
  const [nDisplayedTags, setNDisplayedTags] = useState(12)
  const { handleToggle, isToggled } = useParamToggle('tag')
  const sortedTags = tags.slice().sort((a, b) => a?.tag?.localeCompare(b?.tag))
  const fuse = new Fuse(sortedTags, searchOptions)
  const resultTags = search
    ? fuse.search(search).map(({ item }) => item)
    : sortedTags.filter((x, i) => i < nDisplayedTags)

  function handleMoreTagsClick() {
    if (tags.length > nDisplayedTags) setNDisplayedTags((x) => x + 12)
    else fetchMore()
  }

  function handleMoreTagsKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') handleMoreTagsClick()
  }

  return (
    <AccordionWithExpanded
      ghost
      defaultExpanded
      title={`Tags (${sortedTags.length}${
        nDisplayedTags < tags.length ? '+' : ''
      })`}
    >
      {(expanded) => (
        <>
          <Input
            medium
            width="100%"
            placeholder="Filter"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            inputProps={{
              tabIndex: expanded ? 0 : -1,
            }}
            endIcon={
              search ? (
                <CloseIcon
                  size={10}
                  cursor="pointer"
                  onClick={() => setSearch('')}
                />
              ) : null
            }
            marginBottom="xsmall"
          />
          <CheckboxList>
            {resultTags.map(({ tag, count }) => (
              <MarketplaceSidebarCheckbox
                key={tag}
                toggled={isToggled(tag)}
                onClick={() => handleToggle(tag)}
                label={`${tag} (${count})`}
                trapFocus={expanded}
              />
            ))}
          </CheckboxList>
          {nDisplayedTags < tags.length && !search && (
            <A
              marginTop="small"
              marginLeft="xsmall"
              color="text-light"
              onClick={handleMoreTagsClick}
              onKeyDown={handleMoreTagsKeyDown}
              tabIndex={expanded ? 0 : -1}
            >
              See More +
            </A>
          )}
        </>
      )}
    </AccordionWithExpanded>
  )
}

const MarketplaceFilters = styled(MarketplaceFiltersUnstyled)(
  ({ theme: _ }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    overflowY: 'scroll',
    overflowX: 'auto',
    flexShrink: 0,
  })
)

export default MarketplaceFilters

function MarketplaceFiltersUnstyled({
  tags,
  categories,
  className,
}: {
  tags: any[]
  categories: any[]
  className?: string
}) {
  const [search, setSearch] = useState('')
  const filteredCategories = categories?.filter((c) => !!c.category)

  return (
    <Card className={className}>
      <Div>
        <Categories categories={filteredCategories} />
        <Tags
          tags={tags}
          search={search}
          setSearch={setSearch}
        />
      </Div>
    </Card>
  )
}
