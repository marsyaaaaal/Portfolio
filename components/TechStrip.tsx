const items = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'AWS', 'Supabase', 'PostgreSQL', 'Flutter',
]

export default function TechStrip() {
  return (
    // On mobile: top+bottom border frames the strip; no vertical separators between items
    // On desktop (sm+): bottom border only; vertical separators between items
    <div className="border-t border-b sm:border-t-0 border-[#e0ddd7]">
      <div className="max-w-content mx-auto px-6 md:px-[52px]">
        <div className="flex flex-wrap items-center py-[14px]">
          {items.map((item, i) => (
            <span
              key={item}
              className={`text-[9px] tracking-[3px] uppercase text-[#bbb] py-1 ${
                i === 0 ? 'pr-3 sm:pr-5' : 'px-3 sm:px-5'
              } ${i < items.length - 1 ? 'sm:border-r sm:border-[#e0ddd7]' : ''}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
