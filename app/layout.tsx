import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  title: 'Duncun Motanya - Empowering Communities through Health & Fintech',
  description: 'Diabetes Educator, Marketer & Life Student. Founder & MD – Diabetes Management Resource Center (Kenya). Chairperson – Fintech Association of Kenya. Empowering communities through healthcare and financial technology.',
  keywords: 'Duncun Motanya, Fintech, Healthcare, Diabetes Education, Kenya, FINTAK, DMMC Online Pharmacy, Executive Funeral Services',
  authors: [{ name: 'Duncun Motanya' }],
  creator: 'Duncun Motanya',
  publisher: 'Duncun Motanya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://duncunmotanya.com'),
  openGraph: {
    title: 'Duncun Motanya - Empowering Communities through Health & Fintech',
    description: 'Diabetes Educator, Marketer & Life Student. Founder & MD – Diabetes Management Resource Center (Kenya). Chairperson – Fintech Association of Kenya.',
    url: 'https://duncunmotanya.com',
    siteName: 'Duncun Motanya',
    images: [
      {
        url: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1756953563/Duncun-motanya_u3ulci.png',
        width: 1200,
        height: 630,
        alt: 'Duncun Motanya',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duncun Motanya - Empowering Communities through Health & Fintech',
    description: 'Diabetes Educator, Marketer & Life Student. Founder & MD – Diabetes Management Resource Center (Kenya). Chairperson – Fintech Association of Kenya.',
    images: ['https://res.cloudinary.com/dyfnobo9r/image/upload/v1756953563/Duncun-motanya_u3ulci.png'],
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
      </body>
    </html>
  )
}

