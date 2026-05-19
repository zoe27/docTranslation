import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { EXPERIENCE_URL } from '@/lib/site'
import { useLocale } from '@/contexts/LocaleContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const { t } = useLocale()

  const navLink =
    'text-gray-700 hover:text-blue-600 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded'

  return (
    <header className="w-full bg-white fixed top-0 z-50 shadow">
      <div className="px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
        <Link href="/" onClick={close} className="flex items-center shrink-0">
          <Image
            src="/logo_v2.png"
            alt="Yibelin logo"
            width={160}
            height={48}
            className="h-9 md:h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          <Link href="/#features" className={navLink}>
            {t.nav.features}
          </Link>
          <Link href="/#how-it-works" className={navLink}>
            {t.nav.howItWorks}
          </Link>
          <Link href="/contact" className={navLink}>
            {t.nav.contact}
          </Link>
          <LanguageSwitcher />
          <a
            href={EXPERIENCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {t.nav.tryOnline}
          </a>
        </nav>

        <div className="flex lg:hidden items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{t.nav.openMenu}</span>
            {!open ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[36rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 border-t bg-white">
          <nav className="flex flex-col space-y-1 py-2 text-gray-800">
            <Link href="/#features" onClick={close} className={`py-2 ${navLink}`}>
              {t.nav.features}
            </Link>
            <Link href="/#how-it-works" onClick={close} className={`py-2 ${navLink}`}>
              {t.nav.howItWorks}
            </Link>
            <Link href="/contact" onClick={close} className={`py-2 ${navLink}`}>
              {t.nav.contact}
            </Link>
            <LanguageSwitcher variant="menu" onSelect={close} />
            <a
              href={EXPERIENCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-2 inline-flex justify-center px-4 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700"
            >
              {t.nav.tryOnline}
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
