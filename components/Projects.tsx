import AnimatedSection from './AnimatedSection'
import ScreenFrame from './ScreenFrame'

const featured = {
  title: 'EyeSee',
  description:
    'PWA built for and actively used by optometry clinicians at a university clinic — handles patient scheduling, progress tracking, and appointment management for student practitioners in a real clinical setting. Built solo with Claude Code (MCP-integrated workflow) for faster iteration.',
  tags: ['React', 'PWA', 'Supabase'],
  link: 'https://eyesee-fawn.vercel.app/',
  github: null,
  aside: {
    status: 'Live · In Use',
    year: '2025',
    note: 'Real users. University optometry clinic.',
  },
}

const secondary = {
  index: '01',
  title: 'GalaGuide',
  description:
    'Travel itinerary platform with AI-powered trip generation. Built and shipped independently — live on Vercel. Built solo with Claude Code (MCP-integrated workflow) for faster iteration.',
  tags: ['React', 'Node.js', 'Supabase', 'AI'],
  github: 'https://github.com/marsyaaaaal',
  link: 'https://gala-guide.vercel.app/',
}

const smallProjects = [
  {
    index: '02',
    title: 'Real Estate Automation',
    description: 'Reduced manual data collection from hours to minutes — 90% improvement. Full AWS pipeline.',
    tags: ['Python', 'Selenium', 'AWS'],
    github: null,
    link: null,
  },
  {
    index: '03',
    title: 'iAssist',
    description: "Educational Android app covering Newton's Laws — lessons, quizzes, and score tracking. Built solo.",
    tags: ['Flutter', 'Dart'],
    github: 'https://github.com/marsyaaaaal/iAssist',
    link: null,
  },
  {
    index: '04',
    title: 'pasaBUY',
    description: 'Marketplace with real-time messaging, push notifications, and full transaction lifecycle.',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
    github: 'https://github.com/topetope024/pasabuy_SE',
    link: null,
  },
  {
    index: '05',
    title: 'DetectCore',
    description: 'Real-time illegal parking detection — YOLOv5, centroid tracking, image hashing. Thesis project.',
    tags: ['Python', 'PyTorch', 'YOLOv5'],
    github: 'https://github.com/lordsiinbal/Thesis101',
    link: null,
  },
]

interface ProjectsProps {
  onCaseStudy?: () => void
}

export default function Projects({ onCaseStudy }: ProjectsProps = {}) {
  return (
    <section id="projects" className="py-[60px] px-6 md:px-[52px]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57]">03</span>
            <div className="flex-1 h-px bg-[#e0ddd7] dark:bg-[#2c2a27]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57]">Work</span>
          </div>
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111] dark:text-[#e5e2db]">
              Selected
              <br />
              <em>projects.</em>
            </h2>
            <a
              href="https://github.com/marsyaaaaal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[2px] uppercase text-[#888] dark:text-[#767270] hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-[200ms] focus-visible:outline-none focus-visible:text-[#555] dark:focus-visible:text-[#888580]"
            >
              All on GitHub →
            </a>
          </div>
        </AnimatedSection>

        {/* ── EyeSee — featured ─────────────────────── */}
        <AnimatedSection delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_1fr] border border-[#e0ddd7] dark:border-[#2c2a27] mb-px">
            {/* Text */}
            <div className="p-9 md:border-r border-[#e0ddd7] dark:border-[#2c2a27]">
              <p className="text-[9px] tracking-[3px] uppercase text-[#dc2626] mb-4">Featured</p>
              <h3 className="font-serif font-normal text-[32px] text-[#111] dark:text-[#e5e2db] mb-4 leading-[1.05]">
                {featured.title}
              </h3>
              <p className="text-[12px] text-[#777] dark:text-[#777370] leading-[1.8] mb-5">{featured.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[2px] uppercase text-[#717171] dark:text-[#7e7b78] border-b border-[#e0ddd7] dark:border-[#2c2a27] pb-[3px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                {featured.link && (
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold tracking-[2px] uppercase text-[#111] dark:text-[#e5e2db] border-b border-[#111] dark:border-[#e5e2db] pb-[2px] hover:text-[#555] dark:hover:text-[#888580] hover:border-[#555] dark:hover:border-[#888580] transition-colors duration-[200ms] focus-visible:outline-none focus-visible:opacity-70"
                  >
                    Live ↗
                  </a>
                )}
                {onCaseStudy && (
                  <button
                    onClick={onCaseStudy}
                    className="cursor-pointer text-[10px] tracking-[2px] uppercase text-[#888] dark:text-[#767270] border-b border-[#c9c4bc] dark:border-[#2c2a27] pb-[2px] hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-[200ms] focus-visible:outline-none focus-visible:text-[#555] dark:focus-visible:text-[#888580]"
                  >
                    Case Study →
                  </button>
                )}
              </div>
            </div>

            {/* Screenshots — desktop only */}
            <div className="group/shots hidden md:flex items-start gap-2 px-5 py-9 border-r border-[#e0ddd7] dark:border-[#2c2a27]">
              <ScreenFrame
                src="/eyesee-patients.webp"
                alt="EyeSee patients list"
                className="w-[108px] group-hover/shots:opacity-50 hover:!opacity-100"
              />
              <ScreenFrame
                src="/eyesee-schedule.webp"
                alt="EyeSee schedule view"
                className="w-[108px] mt-6 group-hover/shots:opacity-50 hover:!opacity-100"
              />
            </div>

            {/* Aside */}
            <div className="bg-[#f4f1eb] dark:bg-[#191917] p-7 flex flex-col gap-0">
              <div className="pb-4">
                <p className="text-[9px] tracking-[2px] uppercase text-[#888] dark:text-[#767270] mb-1">Status</p>
                <p className="text-[12px] font-semibold text-[#555] dark:text-[#888580]">{featured.aside.status}</p>
              </div>
              <div className="border-t border-[#e0ddd7] dark:border-[#2c2a27] py-4">
                <div className="font-serif text-[28px] text-[#111] dark:text-[#e5e2db] leading-none">{featured.aside.year}</div>
                <div className="text-[9px] tracking-[2px] uppercase text-[#888] dark:text-[#767270] mt-[3px]">Launched</div>
              </div>
              <div className="border-t border-[#e0ddd7] dark:border-[#2c2a27] py-4">
                <div className="font-serif text-[28px] text-[#111] dark:text-[#e5e2db] leading-none">Solo</div>
                <div className="text-[9px] tracking-[2px] uppercase text-[#888] dark:text-[#767270] mt-[3px]">Builder</div>
              </div>
              <div className="border-t border-[#e0ddd7] dark:border-[#2c2a27] pt-4">
                <p className="text-[10px] text-[#717171] dark:text-[#7e7b78] leading-[1.6]">{featured.aside.note}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── GalaGuide — secondary feature ────────── */}
        <AnimatedSection delay={60}>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_auto] border-x border-b border-[#e0ddd7] dark:border-[#2c2a27] mb-px">
            {/* Text */}
            <div className="p-7 md:border-r border-[#e0ddd7] dark:border-[#2c2a27]">
              <p className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57] mb-3">{secondary.index}</p>
              <h3 className="font-serif font-normal text-[24px] text-[#111] dark:text-[#e5e2db] mb-3 leading-[1.05]">
                {secondary.title}
              </h3>
              <p className="text-[12px] text-[#777] dark:text-[#777370] leading-[1.8] mb-5">{secondary.description}</p>
              <div className="flex flex-wrap gap-4 mb-5">
                {secondary.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[2px] uppercase text-[#717171] dark:text-[#7e7b78] border-b border-[#e0ddd7] dark:border-[#2c2a27] pb-[3px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-5 text-[#888] dark:text-[#767270]">
                {secondary.link && (
                  <a
                    href={secondary.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold tracking-[2px] uppercase text-[#111] dark:text-[#e5e2db] border-b border-[#111] dark:border-[#e5e2db] pb-[2px] hover:text-[#555] dark:hover:text-[#888580] hover:border-[#555] dark:hover:border-[#888580] transition-colors duration-[200ms] focus-visible:outline-none focus-visible:opacity-70"
                  >
                    Live ↗
                  </a>
                )}
                {secondary.github && (
                  <a
                    href={secondary.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] tracking-[1.5px] uppercase hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-[200ms] focus-visible:outline-none focus-visible:text-[#555] dark:focus-visible:text-[#888580]"
                  >
                    GH
                  </a>
                )}
              </div>
            </div>

            {/* Screenshots — desktop only */}
            <div className="group/shots hidden md:flex items-start gap-2 px-5 py-7">
              <ScreenFrame
                src="/galaguide-map.webp"
                alt="GalaGuide map view"
                className="w-[108px] group-hover/shots:opacity-50 hover:!opacity-100"
              />
              <ScreenFrame
                src="/galaguide-discover.webp"
                alt="GalaGuide discover screen"
                className="w-[108px] mt-6 group-hover/shots:opacity-50 hover:!opacity-100"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* ── Smaller projects — 2×2 grid ──────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {smallProjects.map((project, i) => (
            <AnimatedSection key={project.title} delay={(i + 2) * 60}>
              <div
                className={`p-[26px] border-t border-[#e0ddd7] dark:border-[#2c2a27] h-full ${
                  i % 2 === 0 ? 'md:border-r md:border-[#e0ddd7] dark:md:border-[#2c2a27]' : ''
                }`}
              >
                <p className="text-[9px] tracking-[3px] uppercase text-[#909090] dark:text-[#5c5a57] mb-4">{project.index}</p>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-[14px] font-bold text-[#111] dark:text-[#e5e2db] tracking-[-0.2px] leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 flex-shrink-0 text-[#888] dark:text-[#767270]">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-[200ms] focus-visible:outline-none focus-visible:text-[#555] dark:focus-visible:text-[#888580]"
                        aria-label="Live demo"
                      >
                        ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[9px] tracking-[1px] uppercase hover:text-[#555] dark:hover:text-[#888580] transition-colors duration-[200ms] focus-visible:outline-none focus-visible:text-[#555] dark:focus-visible:text-[#888580]"
                      >
                        GH
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[11px] text-[#888] dark:text-[#666360] leading-[1.7] mb-4">{project.description}</p>
                <p className="text-[9px] text-[#888] dark:text-[#767270] tracking-[1px]">{project.tags.join(' · ')}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
