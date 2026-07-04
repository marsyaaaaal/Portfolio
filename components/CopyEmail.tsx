'use client'

import { useState } from 'react'

const EMAIL = 'marcial.abasolajr18@gmail.com'

export default function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="cursor-pointer text-left w-full group focus-visible:outline-none"
      aria-label="Copy email address"
    >
      <span className="block text-[14px] font-semibold text-[#111] dark:text-[#e5e2db] tracking-[0.5px] border-b border-[#e0ddd7] dark:border-[#2c2a27] pb-3 group-hover:border-[#bbb] dark:group-hover:border-[#484542] group-focus-visible:border-[#bbb] dark:group-focus-visible:border-[#484542] transition-colors duration-[200ms]">
        {copied ? '✓ Copied!' : `${EMAIL} ↗`}
      </span>
    </button>
  )
}
