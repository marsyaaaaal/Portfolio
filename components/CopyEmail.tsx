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
      // Fallback: open mailto
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div className="inline-flex items-center gap-3 group">
      {/* mailto link */}
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-900 font-semibold rounded-full text-base hover:bg-violet-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-violet-500/20"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
          className="group-hover:rotate-12 transition-transform"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        {EMAIL}
      </a>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        aria-label="Copy email address"
        className={`p-3 rounded-full border transition-all duration-200 hover:-translate-y-0.5 ${
          copied
            ? 'border-emerald-400 bg-emerald-50 text-emerald-600'
            : 'border-zinc-700 bg-transparent text-zinc-500 hover:border-zinc-500 hover:text-white'
        }`}
      >
        {copied ? (
          /* Checkmark */
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          /* Copy icon */
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        )}
      </button>
    </div>
  )
}
