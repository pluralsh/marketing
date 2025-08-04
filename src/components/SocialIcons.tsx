import { isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import {
  TbBrandBluesky,
  TbBrandFacebook,
  TbBrandLinkedin,
  TbBrandPinterest,
  TbBrandTiktok,
  TbBrandX,
  TbBrandYoutube,
} from 'react-icons/tb'

import { getSettings } from '@/utils/prismicio'

type SocialIconsProps = {
  containerClassName?: string
  iconClassName?: string
}

export default async function SocialIcons({
  containerClassName = 'flex gap-4 text-3xl',
  iconClassName = 'text-black hover:text-gray-500 transition',
}: SocialIconsProps) {
  const {
    data: {
      social_bluesky,
      social_facebook,
      social_linkedin,
      social_pinterest,
      social_tiktok,
      social_twitter,
      social_youtube,
    },
  } = await getSettings()

  return (
    <div className={containerClassName}>
      {isFilled.link(social_bluesky) && (
        <PrismicNextLink
          field={social_bluesky}
          target="_blank"
          className={iconClassName}
        >
          <TbBrandBluesky />
        </PrismicNextLink>
      )}
      {isFilled.link(social_facebook) && (
        <PrismicNextLink
          field={social_facebook}
          target="_blank"
          className={iconClassName}
        >
          <TbBrandFacebook />
        </PrismicNextLink>
      )}
      {isFilled.link(social_linkedin) && (
        <PrismicNextLink
          field={social_linkedin}
          target="_blank"
          className={iconClassName}
        >
          <TbBrandLinkedin />
        </PrismicNextLink>
      )}
      {isFilled.link(social_pinterest) && (
        <PrismicNextLink
          field={social_pinterest}
          target="_blank"
          className={iconClassName}
        >
          <TbBrandPinterest />
        </PrismicNextLink>
      )}
      {isFilled.link(social_tiktok) && (
        <PrismicNextLink
          field={social_tiktok}
          target="_blank"
          className={iconClassName}
        >
          <TbBrandTiktok />
        </PrismicNextLink>
      )}
      {isFilled.link(social_twitter) && (
        <PrismicNextLink
          field={social_twitter}
          target="_blank"
          className={iconClassName}
        >
          <TbBrandX />
        </PrismicNextLink>
      )}
      {isFilled.link(social_youtube) && (
        <PrismicNextLink
          field={social_youtube}
          target="_blank"
          className={iconClassName}
        >
          <TbBrandYoutube />
        </PrismicNextLink>
      )}
    </div>
  )
}
