import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Dynamice Children Academy | Empowering Young Minds',
  description: 'Dynamice Children Academy provides a nurturing environment for children to learn, grow, and express themselves through dance, drama, and digital arts.',
  keywords: ['dance academy', 'children academy', 'kids talent', 'creative learning', 'performance arts'],
  authors: [{ name: 'Dynamice Children Academy' }],
  creator: 'Dynamice Children Academy',
  publisher: 'Dynamice Children Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dynamicechildrenacademy.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dynamicechildrenacademy.com',
    title: 'Dynamice Children Academy | Empowering Young Minds',
    description: 'Transforming lives through creative expression and academic excellence.',
    siteName: 'Dynamice Children Academy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dynamice Children Academy | Empowering Young Minds',
    description: 'Transforming lives through creative expression and academic excellence.',
    creator: '@dynamiceacademy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}