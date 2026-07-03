import AnimatedSection from './AnimatedSection'

const skillGroups = [
  { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'C'] },
  { category: 'Frontend', skills: ['React.js', 'Vue.js', 'TailwindCSS', 'Flutter', 'HTML / CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'Laravel', 'REST API'] },
  { category: 'Databases & Cloud', skills: ['MySQL', 'MongoDB', 'Supabase', 'PostgreSQL', 'AWS', 'Azure'] },
  { category: 'Testing & Tools', skills: ['Playwright', 'Selenium', 'Git', 'OpenCV', 'Pandas', 'n8n', 'ETL'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-[60px] px-6 md:px-[52px] bg-[#f4f1eb]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">04</span>
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">Skills</span>
          </div>
          <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111]">
            Technologies
            <br />
            <em>I work with.</em>
          </h2>
        </AnimatedSection>

        <div className="mt-9">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 60}>
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-8 py-5 border-t border-[#e0ddd7] items-start">
                <span className="text-[9px] tracking-[3px] uppercase text-[#bbb] pt-[5px]">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] tracking-[2px] uppercase text-[#999] border border-[#ddd] px-[10px] py-[5px]"
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
