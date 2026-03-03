import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import StatCard from './StatCard'

const stats = [
  { value: '3+', label: 'Years Professional Experience', delay: 0 },
  { value: '16+', label: 'Projects Built', delay: 100 },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-xs text-violet-600 font-semibold tracking-[0.2em] uppercase mb-4">
            About
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <AnimatedSection delay={80}>
            <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight mb-8">
              A developer who
              <br />
              <span className="text-zinc-400">loves challenges</span>
            </h2>
            <div className="space-y-5 text-zinc-500 leading-relaxed text-[15px]">
              <p>
                I&apos;m Marcial, a Software Engineer currently at{' '}
                <span className="text-zinc-700 font-medium">Cambridge University Press & Assessment</span>,
                where I work as a Full Stack Developer on the Identity Team — contributing to
                core service design, AWS Lambda scalability, and end-to-end development initiatives.
              </p>
              <p>
                My background spans embedded systems engineering at Denso Techno Philippines
                and real estate automation with Python & AWS at Net Real Estate LLC. I got
                hooked on coding in high school and never stopped — I ranked{' '}
                <span className="text-zinc-700 font-medium">Top 1 out of 50</span> in
                Technical C training and placed second at a University Computer Programming Competition.
              </p>
              <p>
                From PyTorch-based AI systems to full-stack web platforms and cloud automation
                pipelines — I enjoy the full spectrum of the stack and the challenge of building
                things that genuinely work well.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['Full Stack', 'Automation', 'Cloud (AWS)', 'AI / ML', 'Embedded Systems'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-600 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimatedSection>

          {/* Right: Photo + Stats */}
          <AnimatedSection delay={180}>
            <div className="flex flex-col gap-5">
              {/* Profile photo — asymmetric frame + grayscale hover */}
              <div className="relative w-fit mx-auto lg:mx-0">
                {/* Offset violet backing frame */}
                <div className="absolute inset-0 rounded-2xl bg-violet-100 border border-violet-200 rotate-3 translate-x-4 translate-y-4" />
                {/* Dot pattern accent — bottom-right corner */}
                <div
                  className="absolute -bottom-5 -right-5 w-20 h-20 opacity-40 pointer-events-none z-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #7C3AED 1.5px, transparent 1.5px)',
                    backgroundSize: '10px 10px',
                  }}
                />
                {/* Photo */}
                <div className="relative w-[240px] sm:w-[280px] aspect-[3/4] rounded-2xl overflow-hidden group shadow-md z-10">
                  <Image
                    src="/photo.png"
                    alt="Marcial Abasola"
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <StatCard
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    delay={stat.delay}
                  />
                ))}
              </div>

              {/* Current status */}
              <div className="p-5 rounded-2xl border border-zinc-100 bg-white">
                <p className="text-xs text-zinc-400 font-medium mb-3 uppercase tracking-wider">
                  Currently
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-zinc-600">
                      Full Stack Developer @ Cambridge University Press & Assessment
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" />
                    <span className="text-sm text-zinc-600">
                      Open to exciting side projects and opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
