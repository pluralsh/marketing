import { type LogoStripComponentFragment } from '@src/generated/graphqlDirectus'

import { CompanyLogosSection } from '../CompanyLogos'

import { getSpacingClassName } from './common'

export function LogoStrip({
  spacing,
  logo_list: logoList,
}: LogoStripComponentFragment) {
  return (
    <section className={getSpacingClassName(spacing)}>
      <CompanyLogosSection logos={logoList?.logos} />
    </section>
  )
}
