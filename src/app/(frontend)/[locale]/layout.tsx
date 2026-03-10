import type { Metadata } from 'next'
import '../../../frontend/styles/globals.css'
import Footer from '@/frontend/components/global/Footer'
import Header from '@/frontend/components/global/Header'
import { helvetica } from 'public/fonts/helvetica'
import { helveticaStd } from 'public/fonts/helvetica-std'

export const metadata: Metadata = {
  title: 'Zvezde Oriona',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="sl">
      <body className={`${helveticaStd.variable} ${helvetica.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
