"use client";
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import Header from './components/Header';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Footer from './components/Footer';
const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="rtl">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body>
      <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Header/>
        {children}
          <Footer/>
        </QueryClientProvider>
        </SessionProvider>
        </body>
      
    </html>
  )
}
