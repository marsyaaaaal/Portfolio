import AnimatedSection from './AnimatedSection'

const skillGroups = [
  {
    category: 'Languages',
    icon: '◈',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C'],
  },
  {
    category: 'Frontend',
    icon: '◉',
    skills: ['React.js', 'Vue.js', 'TailwindCSS', 'HTML / CSS', 'Flutter'],
  },
  {
    category: 'Backend',
    icon: '◎',
    skills: ['Node.js', 'Express', 'Laravel', 'REST API'],
  },
  {
    category: 'Databases & Cloud',
    icon: '◌',
    skills: ['MySQL', 'MongoDB', 'Supabase', 'AWS', 'Azure'],
  },
  {
    category: 'Testing & Tools',
    icon: '◍',
    skills: ['Selenium', 'Playwright', 'Git', 'OpenCV', 'Pandas'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-zinc-50/70">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-xs text-violet-600 font-semibold tracking-[0.2em] uppercase mb-4">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-16 leading-tight">
            Technologies I work with
          </h2>
        </AnimatedSection>

        <div className="space-y-10">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 100}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                {/* Category label */}
                <div className="flex-shrink-0 sm:w-44">
                  <div className="flex items-center gap-2">
                    <span className="text-violet-400 text-base" aria-hidden="true">
                      {group.icon}
                    </span>
                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                      {group.category}
                    </h3>
                  </div>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-white text-zinc-600 border border-zinc-200 rounded-full hover:bg-violet-50 hover:text-violet-700 hover:border-violet-200 transition-all duration-200 cursor-default select-none"
                    >
                      {skill}
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
