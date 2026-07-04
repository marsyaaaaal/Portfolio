import AnimatedSection from './AnimatedSection'

interface EyeSeeCaseStudyProps {
  onBack: () => void
}

const sections = [
  {
    index: '01',
    title: 'The problem',
    body: `Before EyeSee, optometry practitioners at the clinic were tracking everything through their phone's Notes app — who was scheduled, who should be in clinic that day, and progress across each patient. The clinic runs a real patient load: Clinic 2 handles 24 general patients plus 7 more split across specialty categories (myopia, ametropia, presbyopia), and Clinic 1 handles 14. At that volume, a notes app breaks down fast — practitioners were losing track of who was assigned where, and double-booking or scheduling conflicts became a recurring problem.`,
  },
  {
    index: '02',
    title: "Who it's for",
    body: `Student optometry practitioners at a university clinic, working across two clinic sessions with distinct patient categories. It started with one user — my partner, an optometry student — and spread organically to her classmates once they saw it in use.`,
  },
  {
    index: '03',
    title: 'Key decisions',
    body: [
      {
        label: 'PWA over native',
        detail: "I initially built EyeSee in React Native, manually installing updates on her phone through Xcode every week — slow, and any bug meant a full reinstall. There was no budget for an App Store release either, and that path would've added real turnaround time I didn't want. Migrating to a PWA solved both problems: instant updates, no install friction, and it meant her classmates could start using it too without any setup. The clinic also has unreliable wifi/signal, which made offline-capable access a real requirement, not a nice-to-have.",
      },
      {
        label: 'Supabase for the backend',
        detail: 'Chosen for setup speed — good documentation, straightforward auth integration, and fast to get running without spending time on backend plumbing I didn\'t need to build from scratch.',
      },
    ],
  },
  {
    index: '04',
    title: 'Challenges',
    body: `The hardest technical problem was sync — EyeSee stores data locally on-device, and reconciling that with the cloud reliably (without conflicts or data loss when connectivity dropped) was the trickiest part of the build.\n\nThe more interesting challenge wasn't technical — it was a wrong assumption about how the app would actually be used. I initially assumed practitioners would use EyeSee during clinic sessions, so I built features like a live "current patient" indicator, similar to an order-tracking screen from a food delivery app. After the first round of real feedback, my partner told me that wasn't just unnecessary — it was actively unhelpful. During clinic hours, practitioners are focused entirely on the patient in front of them; what they actually needed was a simple way to log progress, not a real-time tracker competing for their attention. I cut the feature. It was a useful early lesson in not building for an imagined workflow when I could just ask the person who'd actually be using it.`,
  },
  {
    index: '05',
    title: 'Tradeoffs',
    body: `EyeSee currently runs on Supabase's free tier, which cold-starts after inactivity — this occasionally makes the app feel slow to the people using it. I know that's not a production-grade setup, but with the time and budget constraints of a solo side project, I shipped it as-is rather than delaying launch to fix something not yet critical.`,
  },
  {
    index: '06',
    title: 'Adoption',
    body: `My partner used it first, then shared it with classmates, who picked it up from there — no formal rollout. Some practitioners were hesitant at first; their existing informal system worked well enough for them that EyeSee felt like overkill. Others adopted it anyway. Since launch, real usage feedback has continued to shape it — one classmate flagged a date-related UX issue that's since informed further changes.`,
  },
  {
    index: '07',
    title: 'Current state',
    body: `Live and in active use at the clinic — real practitioners, real patients, ongoing usage-driven iteration.`,
  },
]

export default function EyeSeeCaseStudy({ onBack }: EyeSeeCaseStudyProps) {
  return (
    <div className="py-[60px] px-6 md:px-[52px]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          {/* Back button */}
          <button
            onClick={onBack}
            className="cursor-pointer flex items-center gap-2 text-[9px] tracking-[2.5px] uppercase text-[#717171] dark:text-[#7e7b78] hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-[200ms] focus-visible:outline-none focus-visible:text-[#555] dark:focus-visible:text-[#888580] mb-10"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M7.5 2L3.5 6l4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Work
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57]">Case Study</span>
            <div className="flex-1 h-px bg-[#e0ddd7] dark:bg-[#2c2a27]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#dc2626]">EyeSee</span>
          </div>

          <h1 className="font-serif font-normal text-[42px] leading-[1.0] tracking-[-0.5px] text-[#111] dark:text-[#e5e2db] mb-3">
            Patient management
            <br />
            <em>for the clinic floor.</em>
          </h1>

          <div className="flex flex-wrap gap-4 mt-6 mb-1">
            {['React', 'PWA', 'Supabase'].map((tag) => (
              <span key={tag} className="text-[9px] tracking-[2px] uppercase text-[#717171] dark:text-[#7e7b78] border-b border-[#e0ddd7] dark:border-[#2c2a27] pb-[3px]">
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Meta strip */}
        <AnimatedSection delay={80}>
          <div className="grid grid-cols-3 border-t border-b border-[#e0ddd7] dark:border-[#2c2a27] mt-10 mb-12">
            {[
              { label: 'Status', value: 'Live · In Use' },
              { label: 'Launched', value: '2025' },
              { label: 'Builder', value: 'Solo' },
            ].map(({ label, value }) => (
              <div key={label} className="py-4 pr-6">
                <p className="text-[9px] tracking-[2px] uppercase text-[#888] dark:text-[#767270] mb-1">{label}</p>
                <p className="text-[12px] font-semibold text-[#555] dark:text-[#888580]">{value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Case study sections */}
        <div>
          {sections.map((s, i) => (
            <AnimatedSection key={s.index} delay={i * 60}>
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-10 py-9 border-t border-[#e0ddd7] dark:border-[#2c2a27]">
                {/* Left index */}
                <div className="flex md:flex-col gap-3 md:gap-1">
                  <span className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57]">{s.index}</span>
                  <h2 className="text-[11px] font-bold tracking-[0.5px] text-[#111] dark:text-[#e5e2db] uppercase leading-[1.4]">
                    {s.title}
                  </h2>
                </div>

                {/* Right body */}
                <div>
                  {typeof s.body === 'string' ? (
                    <div className="flex flex-col gap-4">
                      {s.body.split('\n\n').map((para, pi) => (
                        <p key={pi} className="text-[13px] leading-[1.85] text-[#666] dark:text-[#888580]">
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-5">
                      {(s.body as { label: string; detail: string }[]).map(({ label, detail }) => (
                        <div key={label}>
                          <p className="text-[11px] font-bold text-[#111] dark:text-[#e5e2db] mb-[6px] tracking-[0.3px]">
                            {label}
                          </p>
                          <p className="text-[13px] text-[#666] dark:text-[#888580] leading-[1.85]">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
