import type { Metadata } from 'next'
import '../../../frontend/styles/globals.css'
import Footer from '@/frontend/components/global/Footer'
import Header from '@/frontend/components/global/Header'
import { helvetica } from 'public/fonts/helvetica'
import { helveticaStd } from 'public/fonts/helvetica-std'
import { Locale } from '@/i18n/i18n.config'

export const metadata: Metadata = {
  title: 'Zvezde Oriona',
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}>) {
  return (
    <html className="dark" lang="sl">
      <body className={`${helveticaStd.variable} ${helvetica.variable} antialiased`}>
        <Header locale={params} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
