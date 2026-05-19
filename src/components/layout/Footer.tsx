import Link from 'next/link'
import { EXPERIENCE_URL } from '@/lib/site'
import { useLocale } from '@/contexts/LocaleContext'

export default function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10 text-center text-sm text-gray-600">
        <p className="font-semibold text-gray-900 text-base mb-4">Yibelin</p>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
          <Link href="/#features" className="hover:text-blue-600">
            {t.nav.features}
          </Link>
          <span className="text-gray-300">·</span>
          <Link href="/#how-it-works" className="hover:text-blue-600">
            {t.nav.howItWorks}
          </Link>
          <span className="text-gray-300">·</span>
          <a
            href={EXPERIENCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            {t.nav.tryOnline}
          </a>
          <span className="text-gray-300">·</span>
          <Link href="/contact" className="hover:text-blue-600">
            {t.nav.contact}
          </Link>
        </nav>
        <p className="text-xs text-gray-500 mb-2">{t.footer.tempUrlNote}</p>
        <p className="text-xs text-gray-500 mb-4">{t.footer.mvpNote}</p>
        <p className="text-gray-500">
          © {year} Yibelin. {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
