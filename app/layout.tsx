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

export const metadata: Metadata = {
  title: 'Manos que Conectan',
  description:
    'Somos el nexo entre personas con ganas de ayudar y chicos que viven en hogares convivenciales en Argentina.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${lora.variable} ${inter.variable}`}>
      <body className="font-inter bg-off-white text-text-main antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
