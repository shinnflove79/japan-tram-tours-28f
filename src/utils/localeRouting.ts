export const SUPPORTED_LOCALES = ['en', 'ja', 'zh-TW'] as const
export const DEFAULT_LOCALE = 'en'

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

const PATH_SEGMENT_TO_LOCALE: Record<string, SupportedLocale> = {
  en: 'en',
  ja: 'ja',
  'zh-tw': 'zh-TW',
}

const LOCALE_TO_PATH_SEGMENT: Record<SupportedLocale, string | null> = {
  en: null,
  ja: 'ja',
  'zh-TW': 'zh-tw',
}

const toSingleValue = (value: unknown) => {
  if (Array.isArray(value)) return value[0]
  return value
}

export const asSupportedLocale = (value: unknown): SupportedLocale | null => {
  const raw = toSingleValue(value)
  if (typeof raw !== 'string') return null

  return (SUPPORTED_LOCALES as readonly string[]).includes(raw) ? (raw as SupportedLocale) : null
}

export const localeToPathSegment = (locale: unknown) => {
  const supportedLocale = asSupportedLocale(locale) || DEFAULT_LOCALE
  return LOCALE_TO_PATH_SEGMENT[supportedLocale]
}

export const pathSegmentToLocale = (value: unknown): SupportedLocale | null => {
  const raw = toSingleValue(value)
  if (typeof raw !== 'string') return null
  return PATH_SEGMENT_TO_LOCALE[raw.toLowerCase()] || null
}

const normalizeBasePath = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return normalized
  return normalized.replace(/\/+$/, '')
}

export const stripLocalePrefix = (path: string) => {
  const normalized = normalizeBasePath(path)
  const match = normalized.match(/^\/(?<locale>en|ja|zh-tw)(?<rest>\/.*)?$/i)

  if (!match?.groups) {
    return {
      locale: DEFAULT_LOCALE as SupportedLocale,
      basePath: normalized,
      hasLocalePrefix: false,
    }
  }

  const locale = pathSegmentToLocale(match.groups.locale) || DEFAULT_LOCALE
  const rest = match.groups.rest || '/'

  return {
    locale,
    basePath: normalizeBasePath(rest),
    hasLocalePrefix: true,
  }
}

export const buildLocalizedPath = (path: string, locale: unknown) => {
  const normalizedPath = normalizeBasePath(path)
  const supportedLocale = asSupportedLocale(locale) || DEFAULT_LOCALE
  const segment = localeToPathSegment(supportedLocale)

  if (!segment) return normalizedPath
  if (normalizedPath === '/') return `/${segment}`
  return `/${segment}${normalizedPath}`
}

export const buildLocalizedRoute = (path: string, locale: unknown) => ({
  path: buildLocalizedPath(path, locale),
})
