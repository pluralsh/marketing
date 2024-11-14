import { type LogoStripComponentFragment } from '@src/generated/graphqlDirectus'

import { CompanyLogosSection } from '../CompanyLogos'

export function LogoStrip({ logo_list: logoList }: LogoStripComponentFragment) {
  return (
    <div>
      <CompanyLogosSection logos={logoList?.logos} />
    </div>
  )
}
