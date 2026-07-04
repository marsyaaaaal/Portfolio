import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeContext'

export const metadata: Metadata = {
  title: 'Marcial Abasola — Portfolio',
  description: 'Full Stack Developer building web apps, mobile apps, and AI-powered systems.',
  openGraph: {
    title: 'Marcial Abasola — Portfolio',
    description: 'Full Stack Developer building web apps, mobile apps, and AI-powered systems.',
    type: 'website',
  },
}

// Runs before React hydrates to avoid flash of wrong theme
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t !== 'light') {
    document.documentElement.classList.add('dark');
    document.documentElement.dataset.theme = 'dark';
  }
} catch(e) {}
`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
