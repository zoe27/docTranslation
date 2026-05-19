import type { Locale, Translations } from './types'
import { DEFAULT_LOCALE } from './types'
import zh from './locales/zh'
import en from './locales/en'

export * from './types'

const dictionaries: Record<Locale, Translations> = { zh, en }

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
}

export function isLocale(value: string): value is Locale {
  return value === 'zh' || value === 'en'
}
