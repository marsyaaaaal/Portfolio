const items = [
  'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Python',
  'AWS', 'Vue.js', 'Flutter', 'Laravel', 'MongoDB', 'Figma',
  'Full Stack Developer', 'Software Engineer', 'Automation', 'Open Source',
]

export default function Marquee() {
  return (
    <div className="py-4 border-y border-zinc-100 overflow-hidden bg-white relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="marquee-track flex gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm text-zinc-400 font-medium select-none"
          >
            <span
              className="w-1 h-1 rounded-full bg-violet-300 inline-block flex-shrink-0"
              aria-hidden="true"
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
