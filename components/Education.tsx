import AnimatedSection from './AnimatedSection'

const certifications = [
  {
    name: 'PhilNits ITPEC-IP Passer',
    category: 'General IT Knowledge',
    id: 'IP2500068',
    link: null,
    highlight: true,
  },
  {
    name: 'Frontend Development Libraries',
    category: 'FreeCodeCamp',
    id: null,
    link: 'https://www.freecodecamp.org/certification/fcc36581fa7-10ee-4a6e-b693-1787fd043aa9/front-end-development-libraries',
    highlight: false,
  },
  {
    name: 'Back End Development & APIs',
    category: 'FreeCodeCamp',
    id: null,
    link: 'https://www.freecodecamp.org/certification/fcc36581fa7-10ee-4a6e-b693-1787fd043aa9/back-end-development-and-apis',
    highlight: false,
  },
  {
    name: 'Philippine Android Weekend 2020',
    category: 'Android Development',
    id: '47F74D86',
    link: null,
    highlight: false,
  },
  {
    name: 'Python for Data Science',
    category: 'Python',
    id: null,
    link: 'https://www.sololearn.com/en/certificates/CT-7VDAGT22',
    highlight: false,
  },
  {
    name: 'Intermediate Python',
    category: 'Python',
    id: null,
    link: 'https://www.sololearn.com/Certificate/CT-F6LKIAYO/png',
    highlight: false,
  },
]

const courses = [
  'Algorithms', 'Data Structures', 'OOP',
  'Artificial Intelligence', 'Software Engineering',
  'Computer Vision', 'Application Development',
]

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-zinc-50/70">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-xs text-violet-600 font-semibold tracking-[0.2em] uppercase mb-4">
            Education & Certifications
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-16 leading-tight">
            Academic background
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── Education card ── */}
          <AnimatedSection delay={80}>
            <div className="h-full p-8 rounded-2xl border border-zinc-200 bg-white flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 text-base">Bicol University</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">Bachelor of Science in Computer Science</p>
                  <p className="text-xs text-zinc-400 mt-1">August 2018 – July 2022 · Legazpi City, Albay</p>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-3">
                  Achievements
                </p>
                <ul className="space-y-2">
                  {[
                    { icon: '🏆', text: "Dean's Lister" },
                    { icon: '🥈', text: 'Second placer — Computer Programming Competition (Team)' },
                    { icon: '📊', text: 'GWA: 1.9 / 90%' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-2.5 text-sm text-zinc-600">
                      <span className="text-base leading-tight flex-shrink-0">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevant courses */}
              <div>
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-3">
                  Relevant Courses
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {courses.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 text-xs font-medium bg-zinc-50 text-zinc-500 border border-zinc-200 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Certifications ── */}
          <AnimatedSection delay={160}>
            <div className="h-full p-8 rounded-2xl border border-zinc-200 bg-white flex flex-col gap-4">
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-1">
                Certifications
              </p>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${
                      cert.highlight
                        ? 'border-violet-100 bg-violet-50/60'
                        : 'border-zinc-100 bg-zinc-50/40 hover:border-zinc-200'
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        cert.highlight ? 'bg-violet-100' : 'bg-white border border-zinc-200'
                      }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={cert.highlight ? '#7C3AED' : '#71717A'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p
                          className={`text-sm font-medium leading-snug ${
                            cert.highlight ? 'text-violet-700' : 'text-zinc-700'
                          }`}
                        >
                          {cert.name}
                        </p>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-[10px] font-medium text-zinc-400 hover:text-violet-600 transition-colors border border-zinc-200 hover:border-violet-200 rounded px-1.5 py-0.5"
                          >
                            View ↗
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5 flex items-center gap-1.5">
                        {cert.category}
                        {cert.id && (
                          <>
                            <span className="text-zinc-300">·</span>
                            <span className="font-mono text-[10px] text-zinc-400">
                              ID: {cert.id}
                            </span>
                          </>
                        )}
                      </p>
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
