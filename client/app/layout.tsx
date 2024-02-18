import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Doer room',
  description: 'Doerの管理サイト',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className='font-sans font-semibold'>{children}</body>
    </html>
  )
}
