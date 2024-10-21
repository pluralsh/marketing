import { type ComponentProps } from 'react'

import { Code } from '@pluralsh/design-system'

import { getImageUrl } from '@src/consts/routes'
import { type ImageFileFragment } from '@src/generated/graphqlDirectus'

import { ImageAspectRatio } from '../AspectRatio'
import Embed from '../Embed'

export function Multimedia({
  mediaType,
  image,
  videoUrl,
  form,
  aspectRatio = '16 / 10',
  ...props
}: {
  mediaType: Nullable<string>
  image: Nullable<ImageFileFragment>
  videoUrl: Nullable<string>
  form: Nullable<string>
  aspectRatio?: string
} & ComponentProps<'div'>) {
  const imageUrl = getImageUrl(image)

  return (
    <div
      className="m-auto flex-1"
      {...props}
    >
      {mediaType === 'image' ? (
        imageUrl && (
          <ImageAspectRatio
            $aspectRatio={aspectRatio}
            $url={imageUrl}
          />
        )
      ) : mediaType === 'video' ? (
        <Embed
          aspectRatio={aspectRatio}
          url={videoUrl ?? ''}
        />
      ) : mediaType === 'form' ? (
        <Code css={{ overflow: 'auto', maxHeight: '500px' }}>{form ?? ''}</Code>
      ) : null}
    </div>
  )
}
