"use client";

import React from 'react';
import Header from '@/components/header';
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body 
      className={`${inter.className} 
      bg-gray-50 text-gray-950 relative pt-28
      sm:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}> 
        <div className="bg-[#b5d7ff] absolute top-[-6rem] -z-10 right-[5rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-black"></div>
        <div className="bg-[rgb(211,243,255)] absolute top-[-1rem] -z-10 left-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-20rem] 
        lg:left-[-15rem] xl:left-[10rem] 2xl:left-[-5rem] dark:bg-black"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <Toaster position="top-right" />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}