import AnimatedSection from './AnimatedSection'

const featured = {
  title: 'GalaGuide',
  description:
    'A travel itinerary sharing platform where users can discover, create, and share trip plans with the community. Includes AI-powered itinerary generation to help travelers plan their next adventure — live on Vercel.',
  tags: ['React', 'Node.js', 'Supabase', 'AI'],
  link: 'https://gala-guide.vercel.app/',
  github: 'https://github.com/marsyaaaaal',
}

const projects = [
  {
    title: 'DetectCore',
    description:
      'Thesis project — real-time illegal parking detection using YOLOv5, centroid-tracking, and image-hashing. Multi-layer confirmation logic minimizes false positives in live video feeds.',
    tags: ['Python', 'PyTorch', 'YOLOv5', 'PyQT', 'MongoDB'],
    link: null,
    github: 'https://github.com/lordsiinbal/Thesis101',
    gradient: 'from-sky-50 to-cyan-50',
    accent: 'text-sky-500',
  },
  {
    title: 'Real Estate Automation',
    description:
      'Reduced manual data collection from hours to minutes — 90% improvement in accuracy and speed. Full AWS pipeline: EC2, S3, Lambda, CloudWatch, and EventBridge with live Google Sheets output.',
    tags: ['Python', 'Selenium', 'AWS', 'Google Sheets'],
    link: null,
    github: null,
    gradient: 'from-emerald-50 to-teal-50',
    accent: 'text-emerald-500',
  },
  {
    title: 'pasaBUY',
    description:
      'Marketplace where users can request purchases on each other\'s behalf. End-to-end platform with real-time messaging, push notifications, and full transaction lifecycle tracking — built solo.',
    tags: ['Laravel', 'Vue.js', 'Vuex', 'MySQL'],
    link: 'https://pasabuy-client.herokuapp.com/',
    github: 'https://github.com/topetope024/pasabuy_SE',
    gradient: 'from-amber-50 to-orange-50',
    accent: 'text-amber-500',
  },
  {
    title: 'e-Tiquet',
    description:
      'End-to-end automated ticketing system for traffic violations — built for local government use. Covers violation issuance, admin dashboard, violator lookup, and printable citations.',
    tags: ['PHP', 'Bootstrap', 'JavaScript', 'MySQL'],
    link: null,
    github: 'https://github.com/topetope024/etiquet',
    gradient: 'from-rose-50 to-pink-50',
    accent: 'text-rose-500',
  },
  {
    title: 'iAssist',
    description:
      "Android educational app covering Newton's Laws of Motion — structured lessons, interactive quizzes, and score tracking. Built solo with Flutter from UI design to APK deployment.",
    tags: ['Flutter', 'Dart'],
    link: 'https://drive.google.com/file/d/1t0yiVO84pzkKp5SYtjhoXbwiEAx4in8x/view',
    github: 'https://github.com/marsyaaaaal/iAssist',
    gradient: 'from-purple-50 to-fuchsia-50',
    accent: 'text-purple-500',
  },
]

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-xs text-violet-600 font-semibold tracking-[0.2em] uppercase mb-4">
            Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
              Selected projects
            </h2>
            <a
              href="https://github.com/marsyaaaaal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-violet-600 transition-colors flex items-center gap-1.5 group"
            >
              View all on GitHub
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </AnimatedSection>

        {/* ── Featured project ── */}
        <AnimatedSection delay={0} className="mb-5">
          <div className="group relative overflow-hidden p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-violet-50 via-indigo-50 to-white border border-violet-100 hover:border-violet-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-100/60 transition-all duration-300">
            {/* Decorative circles */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-violet-100/60 pointer-events-none" />
            <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full border border-violet-100/80 pointer-events-none" />
            <div className="absolute right-10 top-10 w-20 h-20 rounded-full bg-violet-100/40 pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Left: content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-violet-100 text-violet-600 rounded-full">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 mb-3">
                  {featured.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-lg">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white text-zinc-600 border border-violet-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-violet-600 transition-all duration-200 group/btn"
                  >
                    Live Demo
                    <ExternalIcon size={14} />
                  </a>
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    <GithubIcon size={15} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Right: abstract visual */}
              <div className="hidden lg:flex flex-shrink-0 w-52 h-44 items-center justify-center relative">
                <div className="absolute inset-0 rounded-2xl bg-white/50 border border-violet-100" />
                <svg
                  className="relative opacity-40"
                  width="130"
                  height="100"
                  viewBox="0 0 130 100"
                  fill="none"
                >
                  <circle cx="65" cy="50" r="38" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="5 3" />
                  <circle cx="65" cy="50" r="24" stroke="#7C3AED" strokeWidth="1.5" />
                  <circle cx="65" cy="50" r="10" fill="#7C3AED" opacity="0.25" />
                  <circle cx="65" cy="50" r="3" fill="#7C3AED" opacity="0.7" />
                  <line x1="0" y1="50" x2="130" y2="50" stroke="#7C3AED" strokeWidth="0.5" opacity="0.4" />
                  <line x1="65" y1="0" x2="65" y2="100" stroke="#7C3AED" strokeWidth="0.5" opacity="0.4" />
                  <circle cx="103" cy="50" r="3.5" fill="#7C3AED" opacity="0.4" />
                  <circle cx="27" cy="50" r="3.5" fill="#7C3AED" opacity="0.4" />
                  <circle cx="65" cy="12" r="3.5" fill="#7C3AED" opacity="0.4" />
                  <circle cx="65" cy="88" r="3.5" fill="#7C3AED" opacity="0.4" />
                </svg>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Rest of projects grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={(i + 1) * 70}>
              <div
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${project.gradient} border border-zinc-100 hover:border-zinc-200 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 h-full flex flex-col`}
              >
                <div className="flex justify-between items-start mb-5">
                  <div className={`${project.accent} opacity-70 group-hover:opacity-100 transition-opacity`}>
                    <FolderIcon />
                  </div>
                  <div className="flex gap-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-zinc-400 hover:text-zinc-700 transition-colors rounded-lg hover:bg-white/60"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <GithubIcon />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-zinc-400 hover:text-zinc-700 transition-colors rounded-lg hover:bg-white/60"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-base font-bold text-zinc-900 mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium bg-white/70 text-zinc-500 rounded-md border border-zinc-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
