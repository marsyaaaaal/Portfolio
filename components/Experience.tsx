import AnimatedSection from './AnimatedSection'

const experiences = [
  {
    company: 'Cambridge University Press & Assessment',
    role: 'Full Stack Developer',
    type: 'Full time',
    period: 'April 2025 – Present',
    location: 'Makati City, Metro Manila',
    current: true,
    bullets: [
      'Drove end-to-end development as part of the Identity Team, contributing to core service design and implementation.',
      'Optimized dev workflow by integrating AWS SAM CLI — enabling local development across all services.',
      'Resolved a major scalability issue by migrating AWS Lambda environment variable storage to a robust solution.',
    ],
  },
  {
    company: 'TAP Series, LLC',
    role: 'Software Engineer',
    type: 'Part time · Remote',
    period: 'October 2024 – December 2025',
    location: 'Makati City, Metro Manila',
    current: false,
    bullets: [
      'Improved web data extraction systems for efficiency and reliability; maintained a customer ticketing system.',
      'Developed a Python script to automate credit card statement categorization, eliminating manual work.',
      'Contributed front-end and back-end feature implementations from specification documents.',
    ],
  },
  {
    company: 'Net Real Estate, LLC',
    role: 'Automation Software Engineer',
    type: 'Contract · Remote',
    period: 'September 2024 – December 2024',
    location: 'Makati City, Metro Manila',
    current: false,
    bullets: [
      'Automated weekly real estate data extraction — achieved 90% improvement in accuracy and processing speed.',
      'Implemented AWS pipeline (EC2, S3, SSM, CloudWatch, EventBridge, Lambda) with Python & Selenium.',
      'Integrated paid proxy services and Google Sheets for real-time data handling.',
    ],
  },
  {
    company: 'Denso Techno Philippines Inc.',
    role: 'Software Engineer',
    type: 'Full time',
    period: 'August 2022 – April 2025',
    location: 'Makati City, Metro Manila',
    current: false,
    bullets: [
      'Developed Python & MATLAB automation scripts — drove 60% productivity boost and 90% quality improvement.',
      'Ensured output quality through code reviews, MISRA C standards, and secure coding practices.',
      'Ranked Top 1 out of 50 trainees in Technical C training; trained junior engineers on specialized processes.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-xs text-violet-600 font-semibold tracking-[0.2em] uppercase mb-4">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-16 leading-tight">
            Where I&apos;ve worked
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-zinc-100 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.company} delay={i * 100}>
                <div className="relative sm:pl-10">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-zinc-200 bg-white items-center justify-center">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        exp.current ? 'bg-emerald-400' : 'bg-zinc-300'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-zinc-900 text-[15px]">{exp.company}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-500 mt-0.5">
                        {exp.role}
                        <span className="mx-1.5 text-zinc-300">·</span>
                        <span className="text-zinc-400">{exp.type}</span>
                      </p>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                      <p className="text-xs font-medium text-zinc-400">{exp.period}</p>
                      <p className="text-xs text-zinc-300 mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-3">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-sm text-zinc-500 leading-relaxed">
                        <span className="text-violet-300 mt-[5px] flex-shrink-0 text-xs">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
