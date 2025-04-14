import type { Metadata } from 'next'
import { Inter, Dancing_Script, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: ['400', '700']
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Welcome Little Princess',
  description: 'A celebration of our precious little princess',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dancingScript.variable} ${playfair.variable} bg-gradient-to-b from-pink-50 to-pink-100 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}