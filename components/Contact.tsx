import AnimatedSection from './AnimatedSection'
import CopyEmail from './CopyEmail'

const socials = [
  { name: 'GitHub', href: 'https://github.com/marsyaaaaal' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/marcial-abasola-a9498b210/' },
]

export default function Contact() {
  return (
    <section id="contact" className="w-full py-[60px] px-6 md:px-[52px]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[52px] items-end">
            {/* Left */}
            <div>
              <p className="text-[9px] tracking-[3px] uppercase text-[#717171] dark:text-[#7e7b78] mb-6">
                06 ── Contact
              </p>
              <h2
                className="font-serif font-normal leading-[1.0] tracking-[-1px] text-[#111] dark:text-[#e5e2db]"
                style={{ fontSize: 'clamp(38px, 6vw, 52px)' }}
              >
                Let&apos;s build
                <br />
                <em className="text-[#999] dark:text-[#555]">something great.</em>
              </h2>
              <p className="text-[12px] text-[#777] dark:text-[#555250] leading-[1.8] mt-5 max-w-[280px]">
                Open to full-time roles, contract work, and collaborations.
                I typically respond within 24 hours.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[9px] tracking-[3px] uppercase text-[#717171] dark:text-[#7e7b78] mb-3">
                  Send a message
                </p>
                <CopyEmail />
              </div>
              <div className="border-t border-[#e0ddd7] dark:border-[#2c2a27]" />
              <div>
                <p className="text-[9px] tracking-[3px] uppercase text-[#717171] dark:text-[#7e7b78] mb-3">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socials.map(({ name, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-[#e0ddd7] dark:border-[#2c2a27] px-4 py-[9px] text-[10px] tracking-[2px] uppercase text-[#717171] dark:text-[#7e7b78] hover:text-[#555] dark:hover:text-[#888580] hover:border-[#bbb] dark:hover:border-[#484542] transition-colors duration-[200ms] focus-visible:outline-none focus-visible:text-[#555] focus-visible:border-[#bbb] dark:focus-visible:text-[#888580] dark:focus-visible:border-[#484542]"
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
