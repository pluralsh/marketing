import React from 'react'

import { cn } from '@/utils/cn'

type FilterButtonGroupProps<T> = {
  buttons: T[]
  onButtonClick: (button: T) => () => void
  selectedButtons: T
}

export default function FilterButtonGroup<T>({
  buttons,
  onButtonClick,
  selectedButtons,
}: FilterButtonGroupProps<T>) {
  return (
    <div className="mt-10 flex max-w-full gap-[0.625rem] overflow-auto lg:mt-20">
      {buttons.map((button, i) => (
        <button
          type="button"
          onClick={onButtonClick(button)}
          key={i}
          className={cn(
            'text-neutral-000 hover:border-neutral-000/20 cursor-pointer rounded-lg border border-neutral-800 bg-neutral-800 px-3 py-2 text-[0.8125rem] whitespace-nowrap transition',
            selectedButtons === button &&
              'border-non bg-neutral-000 cursor-default text-neutral-900'
          )}
        >
          {typeof button === 'string' && button}
        </button>
      ))}
    </div>
  )
}
