import { createI18n } from 'vue-i18n'
import enMessages from '@/locales/en.json'
import zhTWMessages from '@/locales/zh-TW.json'
import jaMessages from '@/locales/ja.json'
import { DEFAULT_LOCALE, asSupportedLocale, type SupportedLocale } from '@/utils/localeRouting'

export type MessageSchema = typeof enMessages

// message records use language codes we support (not forced to en-US)
const messages: Record<SupportedLocale, MessageSchema> = {
  en: enMessages,
  'zh-TW': zhTWMessages,
  ja: jaMessages,
}

// Get saved language from localStorage or default to English
const getSavedLanguage = (): SupportedLocale => {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  const saved = localStorage.getItem('app-language')
  return asSupportedLocale(saved) || DEFAULT_LOCALE
}

const i18n = createI18n<[MessageSchema], SupportedLocale>({
  legacy: false,
  locale: getSavedLanguage(),
  fallbackLocale: DEFAULT_LOCALE,
  messages,
})

export default i18n
