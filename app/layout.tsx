import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

// Actualizar con el dominio real una vez deployado en producción
const SITE_URL = 'https://manosqueconectan.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Manos que Conectan | Voluntariado con niños en hogares · Argentina',
    template: '%s | Manos que Conectan',
  },
  description:
    'Conectamos personas con ganas de ayudar con niños y adolescentes que viven en hogares de Argentina. Organizamos visitas, donaciones y actividades solidarias.',
  keywords: [
    'voluntariado Argentina',
    'niños en hogares',
    'hogares convivenciales',
    'donaciones',
    'actividades solidarias',
    'Manos que Conectan',
  ],
  openGraph: {
    title: 'Manos que Conectan | Voluntariado con niños en hogares',
    description:
      'Conectamos personas con ganas de ayudar con niños y adolescentes en hogares de Argentina. Organizamos visitas, donaciones y actividades solidarias.',
    url: SITE_URL,
    siteName: 'Manos que Conectan',
    images: [
      {
        url: '/hero-principal.jpg',
        width: 1200,
        height: 630,
        alt: 'Manos que Conectan — voluntarios compartiendo actividades con niños en un hogar',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manos que Conectan | Voluntariado con niños en hogares',
    description:
      'Conectamos personas con ganas de ayudar con niños y adolescentes en hogares de Argentina.',
    images: ['/hero-principal.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Manos que Conectan',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Conectamos personas con ganas de ayudar con niños y adolescentes que viven en hogares de Argentina. Organizamos visitas, donaciones y actividades solidarias.',
  sameAs: ['https://instagram.com/manosqueconectan.ar'],
  email: 'manosqueconectan.ar@gmail.com',
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'manosqueconectan.ar@gmail.com',
    contactType: 'volunteer',
    availableLanguage: 'Spanish',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${lora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter bg-off-white text-text-main antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
