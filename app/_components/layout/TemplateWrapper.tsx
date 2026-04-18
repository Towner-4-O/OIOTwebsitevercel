'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function TemplateWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isUserspace = pathname?.startsWith('/userspace')

  return (
    <>
      {children}
      {!isUserspace && <Footer />}
    </>
  )
}