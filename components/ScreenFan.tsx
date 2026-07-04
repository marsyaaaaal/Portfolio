'use client'

import { useState } from 'react'
import ScreenFrame from './ScreenFrame'

// left → center → right: schedule, patients, dashboard
const frames = [
  { src: '/eyesee-schedule.webp',  alt: 'EyeSee schedule view',  baseRotate: -10, baseX: -44 },
  { src: '/eyesee-patients.webp',  alt: 'EyeSee patients list',  baseRotate:   0, baseX:   0 },
  { src: '/eyesee-dashboard.webp', alt: 'EyeSee dashboard',      baseRotate:  10, baseX:  44 },
]

// how much extra rotation each frame gets when it recedes
const recedeExtra = [-5, 0, 5]

// resting z-order: center is in front of the two sides
const baseZ = [1, 2, 1]

export default function ScreenFan() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    // outer wrapper: reserves space and centers the fan on mobile
    <div className="flex justify-center md:justify-end flex-shrink-0">
      {/* fixed-size stage — tall enough for the phone frames + rotation spread */}
      <div className="relative w-[320px] h-[300px]">
        {frames.map((frame, i) => {
          const isHovered  = hovered === i
          const isReceding = hovered !== null && !isHovered

          const rotate = isHovered
            ? 0
            : isReceding
            ? frame.baseRotate + recedeExtra[i]
            : frame.baseRotate

          const scale  = isHovered ? 1.1  : isReceding ? 0.95 : 1
          const x      = isHovered ? 0    : frame.baseX
          const zIndex = isHovered ? 10   : baseZ[i]

          return (
            <div
              key={frame.src}
              className="absolute bottom-0 left-1/2 w-[110px] origin-bottom cursor-default"
              style={{
                transform: `translateX(calc(-50% + ${x}px)) rotate(${rotate}deg) scale(${scale})`,
                zIndex,
                transition: 'transform 280ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <ScreenFrame
                src={frame.src}
                alt={frame.alt}
                className="w-full"
                noHover
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
