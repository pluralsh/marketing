import { type ComponentProps, type JSXElementConstructor } from 'react'

import { isNil } from 'lodash-es'
import { type ConditionalExcept } from 'type-fest'

export function isDefined<T>(argument: T | undefined): argument is T {
  return argument !== undefined
}

export function notNull<T>(argument: T | null): argument is T {
  return argument !== null
}

export function exists<T>(argument: T | null | undefined): argument is T {
  return argument !== null && argument !== undefined
}

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// Functions to use in Array.filter() that will inform the type checker that
// null and undefined values are guaranteed filtered out

export function notNil<T>(value: T | null | undefined): value is T {
  return !isNil(value)
}

export function notNilAnd<T>(filterFunc: (value: T) => boolean) {
  return function combinedFilter(value: T | null | undefined): value is T {
    return notNil(value) && filterFunc(value)
  }
}

export type Omit$Props<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
> = ConditionalExcept<ComponentProps<T>, `${string}`>
