export const SUPPORTED_LOCALES = ['en', 'ja', 'zh-TW'] as const

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

const toSingleValue = (value: unknown) => {
  if (Array.isArray(value)) return value[0]
  return value
}

export const asSupportedLocale = (value: unknown): SupportedLocale | null => {
  const raw = toSingleValue(value)
  if (typeof raw !== 'string') return null

  return (SUPPORTED_LOCALES as readonly string[]).includes(raw) ? (raw as SupportedLocale) : null
}

export const buildLocalizedRoute = (path: string, locale: unknown) => ({
  path,
  query: {
    lang: asSupportedLocale(locale) || 'en',
  },
})
