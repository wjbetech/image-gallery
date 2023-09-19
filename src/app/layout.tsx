import './globals.css'
import type { Metadata } from 'next'
import NavBar from "./components/NavBar"
import BottomNav from "./components/BottomNav"

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Next.js Image Gallery',
  description: '@wjbetech Image Gallery"',
}

export default function RootLayout( 
  { children, }: { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className='max-w-6xl mx-auto'>
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}

