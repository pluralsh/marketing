import styled from 'styled-components'

import { TextLabel } from '@src/components/Typography'

import { StandardPage } from './layout/FullPage'

const partnerLogos = [
  {
    logoUrl: 'logo-poplar.svg',
    name: 'Poplar',
    width: 53,
  },
  {
    logoUrl: 'logo-digitas.png',
    name: 'Digitas',
    width: 60,
  },
  {
    logoUrl: 'logo-justos.png',
    name: 'Justos',
    width: 70,
  },
  {
    logoUrl: 'logo-apex-clean-energy.png',
    name: 'Apex Clean Energy',
    width: 60,
  },
  {
    logoUrl: 'logo-fsn.png',
    name: 'FSN Capital',
    width: 50,
  },
  {
    logoUrl: 'logo-coachhub.png',
    name: 'CoachHub',
    width: 60,
  },
  {
    logoUrl: 'logo-aboitiz.png',
    name: 'Aboitiz',
    width: 65,
  },
]

export const CompanyLogosSection = styled(({ ...props }) => (
  <StandardPage>
    <div {...props}>
      <TextLabel className="mb-large md:mb-xxlarge text-center ">
        Companies using Plural
      </TextLabel>
      <ul className="flex flex-wrap gap-xxlarge items-center justify-center">
        {partnerLogos.map((logo) => (
          <div key={logo.logoUrl}>
            <img
              src={`/images/partner-logos/${logo.logoUrl}`}
              alt={logo.name}
              style={{ width: `${logo.width}px` }}
            />
          </div>
        ))}
      </ul>
    </div>
  </StandardPage>
))(({ theme: _ }) => ({
  ul: {},
  img: {
    width: 100,
  },
}))
