import AnimatedSection from './AnimatedSection'

interface EyeSeeCaseStudyProps {
  onBack: () => void
}

const sections = [
  {
    index: '01',
    title: 'The problem',
    body: `Before EyeSee, the clinic relied on paper forms and manual logs to track patient visits, appointment slots, and clinical progress notes. Student practitioners had no central view of their patient list, records were fragmented across binders, and coordinating overlapping appointments between multiple practitioners required verbal check-ins or physical sign-up sheets. Lost records and scheduling conflicts were a recurring friction point in a clinical environment where accuracy matters.`,
  },
  {
    index: '02',
    title: "Who it's for",
    body: `Student optometry practitioners at a university clinic — a real clinical setting where multiple students see patients concurrently, share physical space, and need to maintain longitudinal records across multiple visits. The app has real users, is used for actual patient encounters, and needed to work reliably on whatever device practitioners had on hand (university-issued laptops, personal phones, clinic desktop).`,
  },
  {
    index: '03',
    title: 'Key decisions',
    body: [
      {
        label: 'PWA over native app',
        detail: "Installing a native app on university-managed devices is friction. A PWA installs from the browser, works cross-platform, and can cache data for offline access — important when the clinic's Wi-Fi is unreliable. No app store approval required to push updates.",
      },
      {
        label: 'Supabase for backend',
        detail: 'Supabase provided a real-time Postgres database with row-level security, built-in auth, and a generous free tier. Real-time subscriptions meant that when one practitioner updated a patient record, others could see it without a manual refresh — critical for a shared-space clinical workflow.',
      },
      {
        label: 'React for the frontend',
        detail: "Component-based architecture made it straightforward to build the scheduling calendar, patient detail views, and progress entry forms as composable units. React's ecosystem also meant faster iteration on UI feedback from the practitioners.",
      },
    ],
  },
  {
    index: '04',
    title: 'Challenges',
    body: `[Owner: fill in with specific technical or workflow challenges you encountered. Examples to consider: handling concurrent writes to patient records from multiple practitioners; structuring the data model for clinical progress notes that vary by case type; designing the scheduling view to avoid double-booking shared examination rooms; dealing with authentication constraints on university-managed devices; any specific Supabase RLS policy decisions; any UX pivots based on practitioner feedback after initial rollout.]`,
    isPlaceholder: true,
  },
  {
    index: '05',
    title: 'Current state',
    body: `EyeSee is live at eyesee-fawn.vercel.app and actively used by practitioners at the clinic. It was built entirely solo over the course of the project, using an AI-augmented development workflow (Claude Code with MCP integrations) to accelerate iteration. The app is in production, not a prototype — practitioners use it for real patient encounters. Login is required to access patient data, so the live URL isn't publicly browsable.`,
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
            className="flex items-center gap-2 text-[9px] tracking-[2.5px] uppercase text-[#aaa] dark:text-[#484542] hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-150 mb-10"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M7.5 2L3.5 6l4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Work
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc] dark:text-[#302e2b]">Case Study</span>
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
              <span key={tag} className="text-[9px] tracking-[2px] uppercase text-[#aaa] dark:text-[#484542] border-b border-[#e0ddd7] dark:border-[#2c2a27] pb-[3px]">
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
                <p className="text-[9px] tracking-[2px] uppercase text-[#bbb] dark:text-[#3c3a37] mb-1">{label}</p>
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
                  <span className="text-[9px] tracking-[3px] uppercase text-[#ccc] dark:text-[#302e2b]">{s.index}</span>
                  <h2 className="text-[11px] font-bold tracking-[0.5px] text-[#111] dark:text-[#e5e2db] uppercase leading-[1.4]">
                    {s.title}
                  </h2>
                </div>

                {/* Right body */}
                <div>
                  {typeof s.body === 'string' ? (
                    <p className={`text-[13px] leading-[1.85] ${
                      s.isPlaceholder
                        ? 'text-[#aaa] dark:text-[#484542] italic border border-dashed border-[#e0ddd7] dark:border-[#2c2a27] p-4'
                        : 'text-[#666] dark:text-[#888580]'
                    }`}>
                      {s.body}
                    </p>
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
