import Image from 'next/image'

interface ScreenFrameProps {
  src: string
  alt: string
  className?: string
}

export default function ScreenFrame({ src, alt, className = '' }: ScreenFrameProps) {
  return (
    <div
      className={`screen-frame relative aspect-[9/19.5] rounded-[14px] overflow-hidden border border-[#e0ddd7] dark:border-[#2c2a27] bg-[#f4f1eb] dark:bg-[#191917] flex-shrink-0 z-0 transition-[transform,opacity] duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.2] hover:z-10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="240px"
      />
    </div>
  )
}
