/**
 * vue-i18n plugin configuration.
 *
 * - Composition API mode (`legacy: false`) — required for <script setup>.
 * - Default locale is Arabic (ar) — the primary audience.
 * - Persists the user's language choice to localStorage.
 */

import { createI18n } from 'vue-i18n'
import ar from '@/locales/ar'
import en from '@/locales/en'
import type { Locale } from '@/types'

const STORAGE_KEY = 'telawat-locale'

/** Resolve the locale to use on first load. */
function resolveInitialLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (saved === 'ar' || saved === 'en') return saved

  // Fall back to browser language.
  const browserLang = navigator.language.split('-')[0]
  return browserLang === 'ar' ? 'ar' : 'en'
}

const i18n = createI18n({
  legacy: false,          // Enable Composition API mode.
  locale: resolveInitialLocale(),
  fallbackLocale: 'en',
  messages: { ar, en },
})

export default i18n

/**
 * Persist locale preference and update the document's lang/dir attributes.
 * Call this whenever the locale changes.
 */
export function applyLocale(locale: Locale): void {
  const isRtl = locale === 'ar'
  document.documentElement.setAttribute('lang', locale)
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr')
  localStorage.setItem(STORAGE_KEY, locale)
}
