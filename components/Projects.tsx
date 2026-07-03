import AnimatedSection from './AnimatedSection'

const featured = {
  title: 'EyeSee',
  description:
    'PWA built for and actively used by optometry clinicians at a university clinic — handles patient scheduling, progress tracking, and appointment management for student practitioners in a real clinical setting. Built solo using an AI-augmented development workflow (Claude Code, configured with MCP integrations and custom skill routing) to accelerate iteration speed.',
  tags: ['React', 'PWA', 'Supabase'],
  link: 'https://eyesee-fawn.vercel.app/',
  github: null,
  aside: {
    status: 'Live · In Use',
    year: '2025',
    note: 'Real users. University optometry clinic.',
  },
}

const projects = [
  {
    index: '01',
    title: 'GalaGuide',
    description: 'Travel itinerary platform with AI-powered trip generation. Built and shipped independently — live on Vercel. Built solo using an AI-augmented development workflow (Claude Code, configured with MCP integrations and custom skill routing) to accelerate iteration speed.',
    tags: ['React', 'Node.js', 'Supabase', 'AI'],
    github: 'https://github.com/marsyaaaaal',
    link: 'https://gala-guide.vercel.app/',
  },
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
  {
    index: '06',
    title: 'e-Tiquet',
    description: 'Automated traffic violation ticketing system built for local government use.',
    tags: ['PHP', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/topetope024/etiquet',
    link: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-[60px] px-6 md:px-[52px]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">03</span>
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">Work</span>
          </div>
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111]">
              Selected
              <br />
              <em>projects.</em>
            </h2>
            <a
              href="https://github.com/marsyaaaaal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[2px] uppercase text-[#bbb] hover:text-[#555] transition-colors"
            >
              All on GitHub →
            </a>
          </div>
        </AnimatedSection>

        {/* Featured project */}
        <AnimatedSection delay={0}>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] border border-[#e0ddd7] mb-px">
            {/* Main */}
            <div className="p-9 md:border-r border-[#e0ddd7]">
              {/* SECOND AND FINAL RED USE SITE-WIDE */}
              <p className="text-[9px] tracking-[3px] uppercase text-[#dc2626] mb-4">Featured</p>
              <h3 className="font-serif font-normal text-[32px] text-[#111] mb-4 leading-[1.05]">
                {featured.title}
              </h3>
              <p className="text-[12px] text-[#777] leading-[1.8] mb-5">{featured.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[2px] uppercase text-[#aaa] border-b border-[#e0ddd7] pb-[3px]"
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
                    className="text-[10px] font-bold tracking-[2px] uppercase text-[#111] border-b border-[#111] pb-[2px] hover:text-[#555] hover:border-[#555] transition-colors"
                  >
                    Live ↗
                  </a>
                )}
                {featured.github && (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] tracking-[2px] uppercase text-[#bbb] border-b border-[#ccc] pb-[2px] hover:text-[#777] transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
            {/* Aside */}
            <div className="bg-[#f4f1eb] p-7 flex flex-col gap-0">
              <div className="pb-4">
                <p className="text-[9px] tracking-[2px] uppercase text-[#bbb] mb-1">Status</p>
                <p className="text-[12px] font-semibold text-[#555]">{featured.aside.status}</p>
              </div>
              <div className="border-t border-[#e0ddd7] py-4">
                <div className="font-serif text-[28px] text-[#111] leading-none">{featured.aside.year}</div>
                <div className="text-[9px] tracking-[2px] uppercase text-[#bbb] mt-[3px]">Launched</div>
              </div>
              <div className="border-t border-[#e0ddd7] py-4">
                <div className="font-serif text-[28px] text-[#111] leading-none">Solo</div>
                <div className="text-[9px] tracking-[2px] uppercase text-[#bbb] mt-[3px]">Builder</div>
              </div>
              <div className="border-t border-[#e0ddd7] pt-4">
                <p className="text-[10px] text-[#aaa] leading-[1.6]">{featured.aside.note}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Project grid — border-top and border-right per cell.
            Last cell in each row AND the last item overall get no right border. */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {projects.map((project, i) => {
            const isLastInRow = (i % 3) === 2
            const isLastItem = i === projects.length - 1
            return (
            <AnimatedSection key={project.title} delay={(i + 1) * 60}>
              <div
                className={`p-[26px] border-t border-[#e0ddd7] h-full ${
                  !isLastInRow && !isLastItem ? 'md:border-r md:border-[#e0ddd7]' : ''
                }`}
              >
                <p className="text-[9px] tracking-[3px] uppercase text-[#ccc] mb-4">{project.index}</p>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-[14px] font-bold text-[#111] tracking-[-0.2px] leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 flex-shrink-0 text-[#bbb]">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="text-[11px] hover:text-[#555] transition-colors" aria-label="Live demo">
                        ↗
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-[9px] tracking-[1px] uppercase hover:text-[#555] transition-colors">
                        GH
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[11px] text-[#888] leading-[1.7] mb-4">{project.description}</p>
                <p className="text-[9px] text-[#bbb] tracking-[1px]">{project.tags.join(' · ')}</p>
              </div>
            </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
