export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[100svh] max-h-[800px] border-b-2 border-[#111]">
      {/* Left column */}
      <div className="flex flex-col justify-between px-6 py-16 md:px-[52px] md:py-[60px] border-b md:border-b-0 md:border-r border-[#e0ddd7]">
        <div>
          {/* Eyebrow — delay 0ms */}
          <div
            className="flex items-center gap-2 mb-5 anim-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-[#dc2626] flex-shrink-0" />
            <span className="text-[9px] tracking-[4px] uppercase text-[#bbb]">
              Available · Cambridge, PH
            </span>
          </div>

          {/* Name — delay 100ms */}
          <h1
            className="font-serif font-normal leading-[0.95] tracking-[-1.5px] text-[#111] anim-fade-up"
            style={{ fontSize: 'clamp(48px, 12vw, 68px)', animationDelay: '100ms' }}
          >
            Marcial
            <br />
            <em>Abasola.</em>
          </h1>

          {/* Divider — delay 200ms */}
          <div
            className="w-10 h-px bg-[#ddd] my-6 anim-fade-in"
            style={{ animationDelay: '200ms' }}
          />

          {/* Tagline — delay 300ms */}
          <p
            className="text-[14px] text-[#777] leading-[1.75] max-w-[300px] anim-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            Full stack developer. I build across the stack and ship things that genuinely work.
          </p>

          {/* CTAs — delay 500ms */}
          <div
            className="flex items-center gap-7 mt-9 anim-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            <a
              href="#projects"
              className="text-[10px] font-bold tracking-[2.5px] uppercase text-white bg-[#111] px-[22px] py-[11px] hover:bg-[#333] transition-colors duration-150"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="text-[10px] tracking-[2.5px] uppercase text-[#999] hover:text-[#555] transition-colors duration-150"
            >
              Get in Touch →
            </a>
          </div>
        </div>

        {/* Footer row — delay 600ms */}
        <p
          className="text-[9px] tracking-[3px] uppercase text-[#ccc] leading-loose anim-fade-in"
          style={{ animationDelay: '600ms' }}
        >
          Full Stack Developer
          <br />
          React · TypeScript · Node.js · AWS
        </p>
      </div>

      {/* Right column — "M" initial, hidden on mobile */}
      <div className="hidden md:flex items-center justify-center bg-[#f0ece4] relative overflow-hidden">
        <span
          className="font-serif font-normal text-[#dedad3] select-none absolute anim-fade-in"
          style={{ fontSize: '340px', lineHeight: 1, bottom: '-20px', right: '-24px', animationDelay: '300ms' }}
        >
          M
        </span>
      </div>
    </section>
  )
}
