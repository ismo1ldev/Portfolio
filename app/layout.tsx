import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Ismoil Asiliddinov | Backend Developer',
  description: 'Junior Backend Developer specializing in Django, PostgreSQL, Docker & AWS. Building scalable, high-performance systems.',
  generator: 'v0.app',
  keywords: ['Backend Developer', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'Python', 'API Development'],
  authors: [{ name: 'Ismoil Asiliddinov' }],
  icons: {
    icon: [
      {
        url: '/apple-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/apple-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/apple-icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f0a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
