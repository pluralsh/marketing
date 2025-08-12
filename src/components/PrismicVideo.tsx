import type { LinkToMediaField } from '@prismicio/client'

import { isVideo } from '@/utils/prismicio'

type PrismicVideoProps = {
  field: LinkToMediaField
} & React.ComponentPropsWithRef<'video'>

/**
 * Component for rendering a video from Prismic.
 *
 * @deprecated **NOT RECOMMENDED!** Prismic videos will drain CDN bandwidth and cause high costs.
 */
export default function PrismicVideo({ field, ...props }: PrismicVideoProps) {
  if (!isVideo(field)) return null

  const videoFormat = field.name.split('.').pop()

  return (
    <video {...props}>
      <source
        src={field.url}
        type={`video/${videoFormat}`}
      />
    </video>
  )
}
