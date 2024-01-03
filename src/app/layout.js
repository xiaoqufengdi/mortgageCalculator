import { Inter } from 'next/font/google'
import Layout from "@/components/layout";
import NestedLayout from "@/components/nested-layout";
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  console.log('RootLayout');
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout>
        {children}
      </Layout>
      </body>
    </html>
  )
}
