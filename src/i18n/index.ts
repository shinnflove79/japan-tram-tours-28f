import { createI18n } from 'vue-i18n'
import enMessages from '@/locales/en.json'
import zhTWMessages from '@/locales/zh-TW.json'
import jaMessages from '@/locales/ja.json'

export type MessageSchema = typeof enMessages

// message records use language codes we support (not forced to en-US)
const messages: Record<string, MessageSchema> = {
  en: enMessages,
  'zh-TW': zhTWMessages,
  ja: jaMessages,
}

// Get saved language from localStorage or default to English
const getSavedLanguage = (): string => {
  const saved = localStorage.getItem('app-language')
  return saved || 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getSavedLanguage(),
  fallbackLocale: 'en',
  // cast to any to satisfy vue-i18n's overly strict default key requirement
  messages: messages as any,
})

export default i18n
