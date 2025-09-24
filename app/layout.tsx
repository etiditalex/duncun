import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookiesBanner from '@/components/CookiesBanner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Duncun Motanya - Dynamic Leader, Coach & Catalyst | People-Centered Growth',
  description: 'Dynamic leader and collaborator who thrives at the intersection of motivation, learning, and people-centered growth. Coach, Empath, Self-Believer, Philomath, and Catalyst empowering communities through healthcare and fintech.',
  keywords: 'Duncun Motanya, Dynamic Leader, Coach, Empathy, Self-Believer, Philomath, Catalyst, People-Centered Growth, Motivator, Lifelong Learner, Healthcare Leader, Fintech Pioneer, Kenya',
  authors: [{ name: 'Duncun Motanya' }],
  creator: 'Duncun Motanya',
  publisher: 'Duncun Motanya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://iamduncun.co.ke'),
  openGraph: {
    title: 'Duncun Motanya - Dynamic Leader, Coach & Catalyst | People-Centered Growth',
    description: 'Dynamic leader and collaborator who thrives at the intersection of motivation, learning, and people-centered growth. Coach, Empath, Self-Believer, Philomath, and Catalyst.',
    url: 'https://iamduncun.co.ke',
    siteName: 'Duncun Motanya',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1756953563/Duncun-motanya_u3ulci.png',
        width: 1200,
        height: 630,
        alt: 'Duncun Motanya - Healthcare and Fintech Leader',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duncun Motanya - Dynamic Leader, Coach & Catalyst | People-Centered Growth',
    description: 'Dynamic leader and collaborator who thrives at the intersection of motivation, learning, and people-centered growth. Coach, Empath, Self-Believer, Philomath, and Catalyst.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1756953563/Duncun-motanya_u3ulci.png'],
    creator: '@duncunmotanya',
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://iamduncun.co.ke',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookiesBanner />
      </body>
    </html>
  )
}

