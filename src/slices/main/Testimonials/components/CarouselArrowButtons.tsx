'use client'

import type { EmblaCarouselType } from 'embla-carousel'

import React, { useCallback, useEffect, useState } from 'react'

import SvgArrowLeft from '@/components/svg/SvgArrowLeft'
import SvgArrowRight from '@/components/svg/SvgArrowRight'
import { cn } from '@/utils/cn'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export function usePrevNextButtons(
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

type PropType = React.ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className={cn(
        'embla__button embla__button--prev',
        'grid h-7.5 w-7.5 place-items-center rounded-md not-disabled:cursor-pointer',
        'border-neutral-000/10 not-disabled:hover:border-neutral-000/24 text-neutral-000 disabled:text-neutral-000/50 border transition'
      )}
      type="button"
      {...restProps}
    >
      <SvgArrowLeft className="embla__button__svg" />
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className={cn(
        'embla__button embla__button--next',
        'grid h-7.5 w-7.5 place-items-center rounded-md not-disabled:cursor-pointer',
        'border-neutral-000/10 not-disabled:hover:border-neutral-000/24 text-neutral-000 disabled:text-neutral-000/50 border transition'
      )}
      type="button"
      {...restProps}
    >
      <SvgArrowRight className="embla__button__svg" />
      {children}
    </button>
  )
}
