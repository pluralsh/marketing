import type { PolymorphicPropsWithRef } from '@/types/polymorphic'

const SliceContainerDefaultComponent = 'section' satisfies React.ElementType

type BaseSliceContainerProps = React.PropsWithChildren<{
  slice: {
    slice_type: string
    variation: string
  }
}>

type SliceContainerProps<
  T extends React.ElementType = typeof SliceContainerDefaultComponent,
> = PolymorphicPropsWithRef<BaseSliceContainerProps, T>

/**
 * Slice container that contains metadata such as `data-slice-type` and `data-slice-variation`.
 */
export default function SliceContainer<
  T extends React.ElementType = typeof SliceContainerDefaultComponent,
>({ as, slice, children, ...props }: SliceContainerProps<T>) {
  const Component = as || SliceContainerDefaultComponent

  return (
    <Component
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      {...props}
    >
      {children}
    </Component>
  )
}
