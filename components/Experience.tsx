import AnimatedSection from './AnimatedSection'

const experiences = [
  {
    company: 'Cambridge University Press & Assessment',
    role: 'Full Stack Developer — Identity Team',
    type: 'Full time · Makati City',
    period: 'Apr 2025 – Present',
    current: true,
    bullets: [
      'Drove end-to-end development as part of the Identity Team, contributing to core service design and implementation.',
      'Optimized dev workflow by integrating AWS SAM CLI — enabling local development across all services.',
      'Resolved a major scalability issue by migrating AWS Lambda environment variable storage.',
    ],
  },
  {
    company: 'TAP Series, LLC',
    role: 'Software Engineer',
    type: 'Part time · Remote',
    period: 'Oct 2024 – Dec 2025',
    current: false,
    bullets: [
      'Improved web data extraction systems for efficiency and reliability; maintained a customer ticketing system.',
      'Developed a Python script to automate credit card statement categorization.',
      'Contributed front-end and back-end feature implementations from specification documents.',
    ],
  },
  {
    company: 'Net Real Estate, LLC',
    role: 'Automation Software Engineer',
    type: 'Contract · Remote',
    period: 'Sep 2024 – Dec 2024',
    current: false,
    bullets: [
      'Automated weekly real estate data extraction — 90% improvement in accuracy and speed.',
      'Implemented AWS pipeline (EC2, S3, SSM, CloudWatch, EventBridge, Lambda) with Python & Selenium.',
      'Integrated paid proxy services and Google Sheets for real-time data handling.',
    ],
  },
  {
    company: 'Denso Techno Philippines Inc.',
    role: 'Software Engineer — Embedded Systems',
    type: 'Full time · Makati City',
    period: 'Aug 2022 – Apr 2025',
    current: false,
    bullets: [
      'Developed Python & MATLAB automation scripts — 60% productivity boost and 90% quality improvement.',
      'Ensured output quality through code reviews, MISRA C standards, and secure coding practices.',
      'Ranked Top 1 out of 50 trainees in Technical C training; trained junior engineers.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-[60px] px-6 md:px-[52px] bg-[#f4f1eb]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">02</span>
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">Experience</span>
          </div>
          <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111]">
            Where I&apos;ve
            <br />
            <em>worked.</em>
          </h2>
        </AnimatedSection>

        <div className="mt-9">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 80}>
              <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-9 py-[22px] border-t border-[#e0ddd7]">
                {/* Left */}
                <div>
                  <p className="text-[11px] font-semibold text-[#111] leading-[1.5]">{exp.period}</p>
                  <p className="text-[10px] text-[#bbb] tracking-[1px] mt-[3px]">{exp.type}</p>
                  {exp.current && (
                    <span className="inline-block mt-2 text-[8px] tracking-[2px] uppercase text-[#111] border border-[#111] px-[7px] py-[2px]">
                      Current
                    </span>
                  )}
                </div>
                {/* Right */}
                <div>
                  <p className="text-[13px] font-bold text-[#111] tracking-[-0.2px]">{exp.company}</p>
                  <p className="text-[11px] text-[#888] mt-[3px] mb-3 tracking-[0.3px]">{exp.role}</p>
                  <ul className="space-y-1">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="relative text-[11px] text-[#666] leading-[1.75] pl-[18px]">
                        <span className="absolute left-0 text-[#ccc]">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
