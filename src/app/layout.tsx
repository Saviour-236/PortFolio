import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './largeComponents/header'
import Footer from './largeComponents/footer'
import { FaHome } from "react-icons/fa";
import Link from 'next/link'
import { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className="font-serif antialiased bg-[url('https://images.pexels.com/photos/18495/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  bg-cover bg-center bg-fixed  bg-no-repeat p-[1%] pt-[0rem]">
        <Header  />
        <Link href='.' ><FaHome className='text-white border text-[1.5rem] mt-[1rem] rounded absolute bg-[#86a3d1] h-fit '/></Link>
        {children}
        <Footer />
      </body>
    </html>
  )
}
