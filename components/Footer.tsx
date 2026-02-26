export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800/60 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-600">
        <p>
          © {year}{' '}
          <span className="text-zinc-400 font-medium">Marcial Abasola</span>
        </p>
        <p className="flex items-center gap-1.5">
          Built with{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Next.js
          </a>{' '}
          &{' '}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Tailwind
          </a>
          {' '}· Deployed on{' '}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Vercel
          </a>
        </p>
      </div>
    </footer>
  )
}
