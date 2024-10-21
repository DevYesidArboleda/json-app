import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '../../contexts/LanguageContext'
import { Toaster } from '@/components/ui/toaster'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JSONPlaceholder Posts',
  description: 'A simple CRUD application using Next.js and JSONPlaceholder API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <Toaster />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}