import { ky } from './translations/ky'
import { ru } from './translations/ru'
import { en } from './translations/en'
import { kk } from './translations/kk'
import type { Language, Translations } from './types'

export type { Language, Translations }

export const DEFAULT_LANGUAGE: Language = 'ky'

export const LANGUAGES: Array<{ code: Language; label: string }> = [
  { code: 'ky', label: 'KY' },
  { code: 'kk', label: 'KK' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

export const translations: Record<Language, Translations> = {
  ky,
  kk,
  ru,
  en,
}

export const LANGUAGE_STORAGE_KEY = 'suprize-language'

export function isLanguage(value: string): value is Language {
  return value === 'ky' || value === 'kk' || value === 'ru' || value === 'en'
}

export function getHtmlLang(language: Language): string {
  const map: Record<Language, string> = {
    ky: 'ky',
    kk: 'kk',
    ru: 'ru',
    en: 'en',
  }
  return map[language]
}
