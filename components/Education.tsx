import AnimatedSection from './AnimatedSection'

const degrees = [
  {
    year: '2018 – 2022',
    location: 'Legazpi City, Albay',
    institution: 'Bicol University',
    degree: 'Bachelor of Science in Computer Science',
  },
]

const certifications = [
  { year: '2025', category: 'General IT Knowledge', name: 'PhilNits ITPEC-IP Passer', link: null },
  { year: '2023', category: 'FreeCodeCamp', name: 'Frontend Development Libraries', link: 'https://www.freecodecamp.org/certification/fcc36581fa7-10ee-4a6e-b693-1787fd043aa9/front-end-development-libraries' },
  { year: '2023', category: 'FreeCodeCamp', name: 'Back End Development & APIs', link: 'https://www.freecodecamp.org/certification/fcc36581fa7-10ee-4a6e-b693-1787fd043aa9/back-end-development-and-apis' },
  { year: '2020', category: 'Android', name: 'Philippine Android Weekend 2020', link: null },
  { year: '2022', category: 'Python', name: 'Python for Data Science', link: 'https://www.sololearn.com/en/certificates/CT-7VDAGT22' },
]

export default function Education() {
  return (
    <section id="education" className="py-[60px] px-6 md:px-[52px]">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">05</span>
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">Education</span>
          </div>
          <h2 className="font-serif font-normal text-[46px] leading-[1.0] tracking-[-0.5px] text-[#111]">
            Where I
            <br />
            <em>studied.</em>
          </h2>
        </AnimatedSection>

        {/* Degrees */}
        <div className="mt-9">
          {degrees.map((deg, i) => (
            <AnimatedSection key={deg.institution} delay={i * 80}>
              <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-9 py-[22px] border-t border-[#e0ddd7]">
                <div>
                  <p className="text-[11px] font-semibold text-[#111] leading-[1.5]">{deg.year}</p>
                  <p className="text-[10px] text-[#bbb] tracking-[1px] mt-[3px]">{deg.location}</p>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#111] tracking-[-0.2px]">{deg.institution}</p>
                  <p className="text-[11px] text-[#888] mt-[3px]">{deg.degree}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications sub-label */}
        <AnimatedSection delay={120}>
          <div className="flex items-center gap-4 mt-14 mb-2">
            <div className="flex-1 h-px bg-[#e0ddd7]" />
            <span className="text-[9px] tracking-[3px] uppercase text-[#ccc]">Certifications</span>
          </div>
        </AnimatedSection>

        <div>
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert.name} delay={i * 60}>
              <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-9 py-[18px] border-t border-[#e0ddd7] items-baseline">
                <div>
                  <p className="text-[11px] font-semibold text-[#111]">{cert.year}</p>
                  <p className="text-[10px] text-[#bbb] tracking-[1px] mt-[2px]">{cert.category}</p>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[13px] font-bold text-[#111] tracking-[-0.2px]">{cert.name}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] tracking-[1px] text-[#bbb] hover:text-[#555] transition-colors flex-shrink-0"
                    >
                      View ↗
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
