'use client'

import type { Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import * as React from 'react'
import { useMemo, useState } from 'react'

import type { SliceVariationProps } from '@/types/prismicio'

import FilterButtonGroup from '@/components/FilterButtonGroup'
import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

const VIEW_ALL = 'View All'
type Team = Content.TeamSliceDefaultPrimaryPeopleItem['team'] | typeof VIEW_ALL

export type TeamDefaultProps = SliceVariationProps<Content.TeamSlice, 'default'>

export default function TeamDefault({ slice }: TeamDefaultProps) {
  const { eyebrow, title, description, people } = slice.primary

  const [selectedTeam, setSelectedTeam] = useState<Team>(VIEW_ALL)

  const teams = useMemo(
    (): Team[] => [VIEW_ALL, ...new Set(people?.map(({ team }) => team))],
    [people]
  )

  const onTeamButtonClick = (team: Team) => () => setSelectedTeam(team)

  const filteredPeople = useMemo(
    () =>
      selectedTeam === VIEW_ALL
        ? people
        : people.filter(({ team }) => team === selectedTeam),
    [people, selectedTeam]
  )

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content my-8 md:mx-4 md:mt-16 md:mb-40">
        <div className="grid grid-cols-1 justify-start gap-x-9 gap-y-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <Eyebrow field={eyebrow} />
          </div>
          <PrismicRichText
            field={title}
            components={{
              heading3: ({ children }) => (
                <h2 className="text-heading-small md:max-w-[592px]">
                  {children}
                </h2>
              ),
            }}
          />
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <p className="self-end md:max-w-lg">{children}</p>
              ),
            }}
          />
        </div>
        <FilterButtonGroup<Team>
          buttons={teams}
          onButtonClick={onTeamButtonClick}
          selectedButtons={selectedTeam}
        />
        <div className="mt-10 grid grid-cols-2 gap-5 gap-y-8 md:grid-cols-3 lg:mt-20 lg:grid-cols-4 lg:gap-y-12 xl:gap-y-22">
          {filteredPeople?.map(
            ({ name, role, image }, i) =>
              name && (
                <div
                  key={name + i}
                  className="flex flex-col"
                >
                  <PrismicNextImage
                    field={image}
                    className="h-full max-h-[208px] w-full rounded-sm object-cover sm:aspect-[65/84] sm:max-h-none"
                    fallbackAlt=""
                  />
                  <div className="text-body-medium md:text-title-medium mt-4 text-white">
                    {name}
                  </div>
                  <div className="md:text-body-medium text-neutral-000/80 text-caption">
                    {role}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </SliceContainer>
  )
}
