import { type ComponentPropsWithRef } from 'react'

import styled from 'styled-components'

import { getImageUrl } from '@src/consts/routes'
import {
  type FormFragment,
  type ImageFileFragment,
} from '@src/generated/graphqlDirectus'

import { ImageAspectRatio } from '../AspectRatio'
import Embed from '../Embed'
import { HubspotForm } from '../HubspotForm'

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
  form: Nullable<FormFragment>
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
        <HubspotForm
          formId={form?.form_id ?? ''}
          portalId={form?.portal_id ?? '22363579'}
          region={form?.region ?? 'na1'}
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
