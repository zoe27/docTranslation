import { useEffect, useId, useRef, useState } from 'react'
import { useLocale } from '@/contexts/LocaleContext'
import type { Locale } from '@/lib/i18n'

type Option = { value: Locale; label: string }

function GlobeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

type LanguageSwitcherProps = {
  className?: string
  /** full-width list for mobile drawer */
  variant?: 'header' | 'menu'
  onSelect?: () => void
}

export default function LanguageSwitcher({
  className = '',
  variant = 'header',
  onSelect,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const options: Option[] = [
    { value: 'zh', label: t.lang.zhFull },
    { value: 'en', label: t.lang.enFull },
  ]

  const triggerLabel = locale === 'zh' ? t.lang.zh : t.lang.en

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const select = (value: Locale) => {
    setLocale(value)
    setOpen(false)
    onSelect?.()
  }

  if (variant === 'menu') {
    return (
      <div className={`pt-3 mt-2 border-t border-gray-100 ${className}`}>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 px-1">
          {t.lang.switchLabel}
        </p>
        <div className="flex flex-col gap-1" role="radiogroup" aria-label={t.lang.switchLabel}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={locale === opt.value}
              onClick={() => select(opt.value)}
              className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                locale === opt.value
                  ? 'bg-blue-50 text-blue-800'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="flex items-center gap-2">
                <GlobeIcon className="w-4 h-4 opacity-70" />
                {opt.label}
              </span>
              {locale === opt.value && <CheckIcon />}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <GlobeIcon />
        <span>{triggerLabel}</span>
        <svg
          className={`w-3.5 h-3.5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 z-50 mt-2 w-44 py-1 bg-white rounded-xl shadow-lg border border-gray-100 ring-1 ring-black/5"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="menuitemradio"
              aria-checked={locale === opt.value}
              onClick={() => select(opt.value)}
              className={`flex w-full items-center justify-between gap-2 px-3 py-2.5 text-sm text-left transition ${
                locale === opt.value
                  ? 'bg-blue-50/80 text-blue-800'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span>{opt.label}</span>
              {locale === opt.value && <CheckIcon />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
