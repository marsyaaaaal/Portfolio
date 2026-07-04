import Image from 'next/image'
import AnimatedSection from './AnimatedSection'

const tags = ['Full Stack', 'Cloud (AWS)', 'Automation']

export default function About() {
  return (
    <section id="about" className="pt-[36px] pb-[60px] px-6 md:px-[52px]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57]">01</span>
            <div className="flex-1 h-px bg-[#e0ddd7] dark:bg-[#2c2a27]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57]">About</span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[52px] items-start">
          {/* Left: Heading + Bio */}
          <AnimatedSection delay={80}>
            <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111] dark:text-[#e5e2db] mb-5">
              A developer who
              <br />
              <em>loves the craft.</em>
            </h2>
            <p className="text-[13px] text-[#666] dark:text-[#888580] leading-[1.85]">
              I&apos;m Marcial, a Full Stack Developer currently at{' '}
              <strong className="text-[#111] dark:text-[#e5e2db] font-semibold">
                Cambridge University Press &amp; Assessment
              </strong>
              , working on the Identity Team. I build and maintain authentication systems — SAML
              federation, OAuth/OIDC, SSO integration with Okta — alongside serverless
              microservices on AWS Lambda, handling everything from debugging tricky auth edge
              cases to scaling infrastructure for production.
            </p>
            <p className="text-[13px] text-[#666] dark:text-[#888580] leading-[1.85] mt-5">
              My background spans embedded systems at Denso Techno Philippines and real estate
              automation with Python &amp; AWS. I got hooked on coding in high school and ranked{' '}
              <strong className="text-[#111] dark:text-[#e5e2db] font-semibold">Top 1 of 50</strong> in Technical C
              training.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] tracking-[2px] uppercase text-[#717171] dark:text-[#7e7b78] border border-[#c9c4bc] dark:border-[#3a3835] px-[10px] py-[5px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Photo + stats */}
          <AnimatedSection delay={160}>
            <div className="flex flex-col">
              <div className="relative w-[85%] aspect-[3/4] grayscale overflow-hidden">
                <Image
                  src="/photo.png"
                  alt="Marcial Abasola"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="w-[85%] h-[2px] bg-[#111] dark:bg-[#e5e2db]" />
              <div className="grid grid-cols-2 pt-5 w-[85%]">
                <div className="pr-5 border-r border-[#e0ddd7] dark:border-[#2c2a27]">
                  <p className="font-serif text-[34px] text-[#111] dark:text-[#e5e2db] leading-none">3+</p>
                  <p className="text-[9px] tracking-[2px] uppercase text-[#888] dark:text-[#767270] mt-[6px]">Years Professional</p>
                </div>
                <div className="pl-5">
                  <p className="font-serif text-[34px] text-[#111] dark:text-[#e5e2db] leading-none">5</p>
                  <p className="text-[9px] tracking-[2px] uppercase text-[#888] dark:text-[#767270] mt-[6px]">Projects Shipped</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
