'use client'

import { useMemo, useState } from 'react'

import type { AshbyJob } from '@/utils/ashby'

import FilterButtonGroup from '@/components/FilterButtonGroup'
import SvgArrowDownAccordion from '@/components/svg/SvgArrowDownAccordion'
import { Button } from '@/components/ui/Button'

const VIEW_ALL = 'View All'

export type OpenPositionsListProps = {
  jobs: AshbyJob[]
}

export default function OpenPositionsList({ jobs }: OpenPositionsListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(VIEW_ALL)

  const categories = useMemo(
    () => [
      VIEW_ALL,
      ...new Set(jobs.map(({ category }) => category).filter(Boolean)),
    ],
    [jobs]
  )

  const onCategoryButtonClick = (category: string) => () =>
    setSelectedCategory(category)

  const filteredJobs = useMemo(
    () =>
      selectedCategory === VIEW_ALL
        ? jobs
        : jobs.filter(({ category }) => category === selectedCategory),
    [jobs, selectedCategory]
  )

  if (jobs.length === 0) {
    return (
      <p className="text-body-small text-neutral-000/70 mt-6">
        There are no open positions right now — check back soon.
      </p>
    )
  }

  return (
    <>
      <FilterButtonGroup<string>
        buttons={categories}
        onButtonClick={onCategoryButtonClick}
        selectedButtons={selectedCategory}
      />
      <div className="mt-6 flex flex-col">
        {filteredJobs.map(
          ({ id, title, location, category, compensation, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group border-neutral-000/10 grid cursor-pointer grid-cols-[1fr_2.5rem] gap-2 border-b py-5 transition lg:grid-cols-[3.5fr_1.5fr_2fr_2.5rem] lg:items-center lg:px-4 lg:hover:bg-neutral-800">
                <div>
                  <h4 className="text-title-large">{title}</h4>
                  {compensation && (
                    <span className="text-caption text-neutral-000/50 mt-1 block">
                      {compensation}
                    </span>
                  )}
                </div>
                <span className="text-caption text-neutral-000 hidden lg:block">
                  {location}
                </span>
                <span className="text-caption text-neutral-000/70 hidden lg:block">
                  {category}
                </span>
                <Button
                  className="row-span-2 h-10 w-10 self-center justify-self-end p-0 group-hover:border-white/24 lg:row-span-1"
                  variant="secondary"
                >
                  <SvgArrowDownAccordion className="rotate-[-90deg] transform text-white" />
                </Button>
                <div className="flex items-center gap-0.5 lg:hidden">
                  <span className="text-caption text-neutral-000">
                    {location}
                  </span>
                  {category && (
                    <>
                      <span className="text-caption text-neutral-000/70 h-[0.8125rem] w-4">
                        ・
                      </span>
                      <span className="text-caption text-neutral-000/70">
                        {category}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </a>
          )
        )}
      </div>
    </>
  )
}
