import Image from 'next/image'

import { certificates } from '@/content/site'

export function Certificates() {
  return (
    <section
      aria-labelledby="certificates-heading"
      className="rule-top"
    >
      <h2
        id="certificates-heading"
        className="text-label px-gutter pt-8 pb-5 font-normal"
      >
        Our certificates
      </h2>
      <div className="ruled-grid border-line grid-cols-[repeat(auto-fit,minmax(200px,1fr))] border-t">
        {certificates.map((cert) => (
          <div
            key={cert.label}
            className="flex flex-col items-center gap-4 px-6 py-10 text-center"
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={112}
              height={112}
              className="size-28 rounded-full"
            />
            <span className="text-label">{cert.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
