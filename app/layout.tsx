import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marcial Abasola — Portfolio',
  description:
    'Full Stack Developer building web apps, mobile apps, and AI-powered systems.',
  openGraph: {
    title: 'Marcial Abasola — Portfolio',
    description:
      'Full Stack Developer building web apps, mobile apps, and AI-powered systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
