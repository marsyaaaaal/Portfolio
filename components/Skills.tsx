import AnimatedSection from './AnimatedSection'

const skillGroups = [
  { category: 'Languages', primary: 'JavaScript, TypeScript, Python, C', secondary: '' },
  { category: 'Frontend', primary: 'React.js, Vue.js, TailwindCSS, Flutter', secondary: '· HTML / CSS' },
  { category: 'Backend', primary: 'Node.js, Express, Laravel, REST API', secondary: '' },
  { category: 'Databases & Cloud', primary: 'MySQL, MongoDB, Supabase, PostgreSQL', secondary: '· AWS, Azure' },
  { category: 'Testing & Tools', primary: 'Playwright, Selenium, Git, OpenCV, Pandas, n8n, ETL', secondary: '' },
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
              <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-8 py-4 border-t border-[#e0ddd7] items-baseline">
                <span className="text-[9px] tracking-[3px] uppercase text-[#bbb]">
                  {group.category}
                </span>
                <span className="text-[13px] text-[#555]">
                  {group.primary}
                  {group.secondary && (
                    <span className="text-[#aaa] italic"> {group.secondary}</span>
                  )}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
