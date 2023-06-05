import { type ComponentProps, type Ref, forwardRef } from 'react'

import styled from 'styled-components'

export const StyledElement = styled.div(({ theme: _ }) => ({}))

export const StyledElementWithProps = styled.div<{
  $prop1: unknown
  $prop2: unknown
}>(({ theme: _ }) => ({}))

export const StyledComponent = styled(
  ({ children, ...props }: ComponentProps<'div'>) => (
    <div {...props}>{children}</div>
  )
)(({ theme: _ }) => ({}))

export const StyledComponentWithProps = styled(
  ({
    children,
    ...props
  }: {
    prop1: unknown
    prop2: unknown
  } & ComponentProps<'div'>) => <div {...props}>{children}</div>
)(({ theme: _ }) => ({}))

export const StyledRefComponent = styled(
  forwardRef(({ children, ...props }: ComponentProps<'div'>, ref: Ref<any>) => (
    <div
      ref={ref}
      {...props}
    >
      {children}
    </div>
  ))
)(({ theme: _ }) => ({}))
