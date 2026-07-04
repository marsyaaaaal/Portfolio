import AnimatedSection from './AnimatedSection'

const experiences = [
  {
    company: 'Cambridge University Press & Assessment',
    role: 'Full Stack Developer — Identity Team',
    type: 'Full time · Makati City',
    period: 'Apr 2025 – Present',
    current: true,
    bullets: [
      'Built and maintained authentication/SSO systems (SAP CDC/Gigya, SAML, OAuth/OIDC) supporting myCambridge, a platform serving hundreds of thousands of global users, including resolving complex federation issues with Okta such as provider ID mismatches and session handling bugs.',
      'Designed an end-to-end bulk user role management dataflow — S3 ingestion, org lookup, automated role updates, and audit logging — to support account administration at scale.',
      'Resolved a major scalability issue by migrating AWS Lambda environment variable storage.',
      'Modernized dependencies across microservices — upgraded Node.js (v14→22) and remediated npm vulnerabilities across multiple production repos, operating across a SAP CDC dataset of 10+ million records, reducing technical debt and security risk.',
    ],
  },
  {
    company: 'TAP Series, LLC',
    role: 'Software Engineer',
    type: 'Part time · Remote',
    period: 'Oct 2024 – Dec 2025',
    current: false,
    bullets: [
      'Led migration of the customer ticketing system from Jinja templates + React to a unified React front-end, and migrated course lesson pages (quizzes, lessons, activities) from PHP to React.',
      "Built and maintained an input validation tool used externally by TAP's subscriber base as part of their product offering.",
      'Automated credit card statement categorization with a Python script, reducing manual processing time.',
      'Automated email classification pipeline (n8n + AWS EC2) — built an AI-powered workflow using Claude API to classify incoming emails via IMAP, with real-time Slack alerts and automated Excel reporting for a client stakeholder.',
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
    <section id="experience" className="py-[60px] px-6 md:px-[52px] bg-[#f4f1eb] dark:bg-[#191917]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57]">02</span>
            <div className="flex-1 h-px bg-[#e0ddd7] dark:bg-[#2c2a27]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57]">Experience</span>
          </div>
          <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111] dark:text-[#e5e2db]">
            Where I&apos;ve
            <br />
            <em>worked.</em>
          </h2>
        </AnimatedSection>

        <div className="mt-9">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.company} delay={i * 80}>
              <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-9 py-[22px] border-t border-[#e0ddd7] dark:border-[#2c2a27]">
                <div>
                  <p className="text-[11px] font-semibold text-[#111] dark:text-[#e5e2db] leading-[1.5]">{exp.period}</p>
                  <p className="text-[10px] text-[#888] dark:text-[#767270] tracking-[1px] mt-[3px]">{exp.type}</p>
                  {exp.current && (
                    <span className="inline-block mt-2 text-[8px] tracking-[2px] uppercase text-[#111] dark:text-[#e5e2db] border border-[#111] dark:border-[#e5e2db] px-[7px] py-[2px]">
                      Current
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#111] dark:text-[#e5e2db] tracking-[-0.2px]">{exp.company}</p>
                  <p className="text-[11px] text-[#888] dark:text-[#666360] mt-[3px] mb-3 tracking-[0.3px]">{exp.role}</p>
                  <ul className="space-y-1">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="relative text-[11px] text-[#666] dark:text-[#888580] leading-[1.75] pl-[18px]">
                        <span className="absolute left-0 text-[#909090] dark:text-[#5c5a57]">—</span>
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
