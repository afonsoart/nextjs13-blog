import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Afonso Blog',
  description: 'Create by Afonso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='dark' lang="en">
      <body className={` dark:bg-slate-800 ${inter.className}`}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
