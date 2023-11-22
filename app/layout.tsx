import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ['latin'] })
import { AOSInit } from '@/hooks/useAoa'
export const metadata: Metadata = {
  title: 'MHT-CET Counselling',
  description: 'MHT-CET Counselling by MHT-CET Shala',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <AOSInit />
      <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
