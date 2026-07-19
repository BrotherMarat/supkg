import { ky } from './translations/ky'
import { ru } from './translations/ru'
import { en } from './translations/en'
import type { Language, Translations } from './types'

export type { Language, Translations }

export const DEFAULT_LANGUAGE: Language = 'ky'

export const LANGUAGES: Array<{ code: Language; label: string }> = [
  { code: 'ky', label: 'KY' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

export const translations: Record<Language, Translations> = {
  ky,
  ru,
  en,
}

export const LANGUAGE_STORAGE_KEY = 'suprize-language'

export function isLanguage(value: string): value is Language {
  return value === 'ky' || value === 'ru' || value === 'en'
}

export function getHtmlLang(language: Language): string {
  const map: Record<Language, string> = {
    ky: 'ky',
    ru: 'ru',
    en: 'en',
  }
  return map[language]
}
