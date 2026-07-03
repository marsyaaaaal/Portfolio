import Image from 'next/image'
import AnimatedSection from './AnimatedSection'

const tags = ['Full Stack', 'Cloud (AWS)', 'Automation']

export default function About() {
  return (
    <section id="about" className="py-[60px] px-6 md:px-[52px]">
      <div className="max-w-content mx-auto">
        {/* Section header */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">01</span>
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">About</span>
          </div>
          <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111]">
            A developer who
            <br />
            <em>loves the craft.</em>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[52px] mt-9 items-start">
          {/* Left: Bio */}
          <AnimatedSection delay={80}>
            <p className="text-[13px] text-[#666] leading-[1.85]">
              I&apos;m Marcial, a Full Stack Developer currently at{' '}
              <strong className="text-[#111] font-semibold">
                Cambridge University Press &amp; Assessment
              </strong>
              , working on the Identity Team. I build and maintain authentication systems — SAML
              federation, OAuth/OIDC, SSO integration with Okta — alongside serverless
              microservices on AWS Lambda, handling everything from debugging tricky auth edge
              cases to scaling infrastructure for production.
            </p>
            <p className="text-[13px] text-[#666] leading-[1.85] mt-5">
              My background spans embedded systems at Denso Techno Philippines and real estate
              automation with Python &amp; AWS. I got hooked on coding in high school and ranked{' '}
              <strong className="text-[#111] font-semibold">Top 1 of 50</strong> in Technical C
              training.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[2px] uppercase text-[#999] border border-[#ddd] px-[10px] py-[5px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Photo + Stats */}
          <AnimatedSection delay={160}>
            <div className="flex flex-col items-start">
              {/* Photo — permanent grayscale, no hover */}
              <div className="relative w-[220px] aspect-[3/4] grayscale overflow-hidden">
                <Image
                  src="/photo.png"
                  alt="Marcial Abasola"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* 2px rule spanning full column width */}
              <div className="w-full h-[2px] bg-[#111]" />
              {/* Stats */}
              <div className="flex gap-6 mt-5">
                {[
                  { value: '3+', label: 'Years\nProfessional' },
                  { value: '16+', label: 'Projects\nBuilt' },
                ].map(({ value, label }) => (
                  <div key={label} className="border-t-2 border-[#111] pt-[10px]">
                    <div className="font-serif text-[34px] text-[#111] leading-none">{value}</div>
                    <div className="text-[9px] tracking-[2px] uppercase text-[#bbb] mt-[5px] whitespace-pre-line leading-[1.5]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
