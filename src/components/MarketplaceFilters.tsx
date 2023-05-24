import { useCallback, useMemo, useState } from 'react'

import { Card, Checkbox, CloseIcon, Input } from '@pluralsh/design-system'
import { A } from 'honorable'

import Fuse from 'fuse.js'
import capitalize from 'lodash/capitalize'
import styled from 'styled-components'

import { clearToken } from '@pages/marketplace'
import { useSearchParams } from '@src/components/hooks/useSearchParams'
import { Categories } from '@src/data/getSearchMetadata'
import { type CategoryFragment } from '@src/generated/graphqlPlural'

import { type AccordionProps, SingleAccordion } from './SingleAccordion'

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

      if (existing.includes(formattedValue)) {
        clearToken({ key, value, setSearchParams })
      } else {
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

const FilterSection = styled.div(({ theme }) => ({
  paddingLeft: theme.spacing.xsmall,
  paddingRight: theme.spacing.xsmall,
  paddingBottom: theme.spacing.small,
  overflow: 'hidden',
}))

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
    <FilterAccordion
      defaultOpen
      label={`Categories (${sortedCategories.length})`}
    >
      {(expanded) => (
        <FilterSection>
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
        </FilterSection>
      )}
    </FilterAccordion>
  )
}

const FilterAccordion = styled((props: AccordionProps) => {
  console.log('filter accordion props', props)

  return (
    <SingleAccordion
      unstyled
      {...props}
    />
  )
})(({ theme }) => ({
  borderBottom: theme.borders.default,
  '&:last-of-type': {
    borderBottom: 'none',
  },
}))

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
    <FilterAccordion
      defaultOpen
      label={`Tags (${sortedTags.length}${
        nDisplayedTags < tags.length ? '+' : ''
      })`}
    >
      {(expanded) => (
        <FilterSection>
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
        </FilterSection>
      )}
    </FilterAccordion>
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
      <Categories categories={filteredCategories} />
      <Tags
        tags={tags}
        search={search}
        setSearch={setSearch}
      />
    </Card>
  )
}

export default MarketplaceFilters
