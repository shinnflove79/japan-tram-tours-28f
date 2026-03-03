import { createI18n } from 'vue-i18n'
import enMessages from '@/locales/en.json'
import zhTWMessages from '@/locales/zh-TW.json'
import jaMessages from '@/locales/ja.json'

export type MessageSchema = typeof enMessages
type Locale = 'en' | 'zh-TW' | 'ja'

// message records use language codes we support (not forced to en-US)
const messages: Record<Locale, MessageSchema> = {
  en: enMessages,
  'zh-TW': zhTWMessages,
  ja: jaMessages,
}

// Get saved language from localStorage or default to English
const getSavedLanguage = (): Locale => {
  const saved = localStorage.getItem('app-language')
  return saved === 'en' || saved === 'zh-TW' || saved === 'ja' ? saved : 'en'
}

const i18n = createI18n<[MessageSchema], Locale>({
  legacy: false,
  locale: getSavedLanguage(),
  fallbackLocale: 'en',
  messages,
})

export default i18n
