import type {
  AbortSignalLike,
  BooleanField,
  ImageField,
  KeyTextField,
  RequestInitLike,
  SharedSlice,
} from '@prismicio/client'

export type FetchParams = {
  fetchOptions?: RequestInitLike
  signal?: AbortSignalLike
}

export type PrismicMetadata = {
  meta_title: KeyTextField
  meta_description: KeyTextField
  meta_keywords: KeyTextField
  meta_image: ImageField<never>
  meta_noindex: BooleanField
}

export type PrismicWebhookData =
  | {
      type: 'api-update'
      masterRef: string
      releases: {
        addition?: {
          id: string
          ref: string
          label: string
          documents: string[]
        }[]
        update?: {
          id: string
          ref: string
          label: string
          scheduledAt: number
          documents: string[]
        }
        deletion?: {
          id: string
          ref: string
          label: string
          scheduledAt: number
          documents: string[]
        }
      }
      masks: Record<any, any>
      tags: {
        addition?: {
          id: string
        }[]
        deletion?: {
          id: string
        }[]
      }
      experiments: Record<any, any>
      documents: string[]
      domain: string
      apiUrl: string
      secret: string | null
    }
  | {
      type: 'test-trigger'
      domain: string
      apiUrl: string
      secret: string | null
    }

export type SliceVariation<
  Slice extends SharedSlice,
  Variation extends Slice['variation'],
> = Slice extends { variation: Variation } ? Slice : never

export type SliceVariationProps<
  Slice extends SharedSlice,
  Variation extends Slice['variation'],
  Context = unknown,
> = {
  slice: SliceVariation<Slice, Variation>
  context?: Context
}
