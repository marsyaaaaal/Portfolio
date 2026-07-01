import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

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
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
