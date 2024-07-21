import React from 'react';
import Header from '@/components/header';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Johnny Leyva | Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} 
      bg-gray-50 text-gray-950 relative h-[5000px] pt-28
      sm:pt-36`}>
<div className="bg-[#b5d7ff] absolute top-[-6rem] -z-10 right-[5rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
<div className="bg-[rgb(211,243,255)] absolute top-[-1rem] -z-10 left-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-20rem] 
        lg:left-[-15rem] xl:left-[10rem] 2xl:left-[-5rem]"></div>
        
        <Header />
       {children}
      </body>
    </html>
  )
}
