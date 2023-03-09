"use client";
import 'app/globals.css'
import { SessionProvider } from 'next-auth/react'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

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
       
        {children}
          
        </QueryClientProvider>
        </SessionProvider>
        </body>
      
    </html>
  )
}
