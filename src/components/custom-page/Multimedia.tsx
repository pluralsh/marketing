import { type ComponentPropsWithRef } from 'react'

import styled from 'styled-components'

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
  backgroundColor = 'transparent',
  showBorder = true,
  ...props
}: {
  mediaType: Nullable<string>
  image: Nullable<ImageFileFragment>
  videoUrl: Nullable<string>
  form: Nullable<string>
  aspectRatio?: string
  backgroundColor?: string
  showBorder?: boolean
} & ComponentPropsWithRef<'div'>) {
  const imageUrl = getImageUrl(image)

  return (
    <MultimediaWrapperSC {...props}>
      {mediaType === 'image' ? (
        imageUrl && (
          <ImageAspectRatio
            css={{ borderRadius: 12, backgroundColor }}
            $showBorder={showBorder}
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
        <iframe
          title="Embedded form content"
          css={{
            width: '100%',
            height: '100%',
            minHeight: 550,
          }}
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          srcDoc={`
            <!DOCTYPE html>
            <html>
            <head>
              <!-- HubSpot's required script -->
              <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
            </head>
            <body>
            ${form}
            </body>
            </html>
          `}
        />
      ) : null}
    </MultimediaWrapperSC>
  )
}

const MultimediaWrapperSC = styled.div((_) => ({
  margin: 'auto',
  width: '100%',
  flex: 1,
}))
