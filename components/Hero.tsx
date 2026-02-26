export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid px-6">
      {/* Gradient fade over dot grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Availability badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-600 text-sm font-medium mb-10 shadow-sm anim-fade-in"
          style={{ animationDelay: '0ms' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
          Available for freelance &amp; side projects
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl sm:text-7xl lg:text-[88px] font-black tracking-tight text-zinc-900 leading-[1.04] mb-5 anim-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          Hi, I&apos;m{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Marcial Abasola</span>
            {/* Wavy underline accent */}
            <svg
              className="absolute -bottom-3 left-0 w-full overflow-visible"
              height="14"
              viewBox="0 0 300 14"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 9 C40 2, 90 14, 150 7 C210 0, 260 12, 300 7"
                stroke="#7C3AED"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="draw-line"
              />
            </svg>
          </span>
        </h1>

        {/* Role */}
        <p
          className="text-xl sm:text-2xl text-zinc-400 font-medium mt-8 mb-5 anim-fade-up"
          style={{ animationDelay: '380ms' }}
        >
          Full Stack Developer · Software Engineer
        </p>

        {/* Tagline */}
        <p
          className="max-w-xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed mb-12 anim-fade-up"
          style={{ animationDelay: '500ms' }}
        >
          From embedded C at an automotive firm to full-stack web at Cambridge University Press & Assessment —
          I build across the stack and ship things that genuinely work.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 anim-fade-up"
          style={{ animationDelay: '680ms' }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-violet-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-200/60 w-full sm:w-auto text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-zinc-200 text-zinc-600 text-sm font-semibold rounded-full hover:border-zinc-400 hover:text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center bg-white/60 backdrop-blur-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Current tech stack pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mt-10 anim-fade-in"
          style={{ animationDelay: '900ms' }}
        >
          <span className="text-xs text-zinc-300 mr-1 tracking-wider uppercase">Stack</span>
          {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Supabase'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-white/70 text-zinc-500 rounded-full border border-zinc-200 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade-in"
        style={{ animationDelay: '1100ms' }}
      >
        <span className="text-xs tracking-[0.2em] uppercase text-zinc-300">Scroll</span>
        <svg
          className="animate-bounce text-zinc-300"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
