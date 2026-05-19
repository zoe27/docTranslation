import type { ReactNode } from 'react'
import Header from '../Header'
import Footer from './Footer'

type SiteLayoutProps = {
  children: ReactNode
  variant?: 'gradient' | 'plain'
}

export default function SiteLayout({
  children,
  variant = 'gradient',
}: SiteLayoutProps) {
  const mainClass =
    variant === 'gradient'
      ? 'min-h-screen pt-28 md:pt-32 bg-gradient-to-br from-white via-blue-50 to-blue-100'
      : 'min-h-screen pt-28 md:pt-32 bg-white'

  return (
    <>
      <Header />
      <main className={mainClass}>{children}</main>
      <Footer />
    </>
  )
}
