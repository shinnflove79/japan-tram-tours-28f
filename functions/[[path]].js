const LOCALE_QUERY_TO_PATH = {
  en: '',
  ja: 'ja',
  'zh-TW': 'zh-tw',
}

const normalizeLocaleQuery = (value) => {
  if (typeof value !== 'string') return null

  const normalized = value.trim().toLowerCase()
  if (normalized === 'en') return 'en'
  if (normalized === 'ja') return 'ja'
  if (normalized === 'zh-tw') return 'zh-TW'

  return null
}

const normalizePath = (pathname) => {
  if (!pathname || pathname === '/') return '/'
  return pathname.endsWith('/') ? pathname.slice(0, -1) || '/' : pathname
}

const shouldAddTrailingSlash = (pathname) => pathname !== '/' && !pathname.endsWith('/') && !/\/[^/]+\.[^/]+$/.test(pathname)

const stripLocalePrefix = (pathname) => {
  const normalized = normalizePath(pathname)
  const match = normalized.match(/^\/(?:en|ja|zh-tw)(\/.*)?$/i)

  if (!match) return normalized
  return match[1] || '/'
}

const buildLocalizedPath = (pathname, locale) => {
  const basePath = stripLocalePrefix(pathname)
  const segment = LOCALE_QUERY_TO_PATH[locale] || ''

  const localizedPath = !segment ? basePath : basePath === '/' ? `/${segment}` : `/${segment}${basePath}`

  if (localizedPath === '/') return localizedPath
  return `${localizedPath}/`
}

export async function onRequest(context) {
  const url = new URL(context.request.url)
  const queryLocale = normalizeLocaleQuery(url.searchParams.get('lang'))

  if (queryLocale) {
    url.pathname = buildLocalizedPath(url.pathname, queryLocale)
    url.searchParams.delete('lang')
    return Response.redirect(url.toString(), 301)
  }

  if (/^\/en(?:\/|$)/i.test(url.pathname)) {
    url.pathname = stripLocalePrefix(url.pathname)
    return Response.redirect(url.toString(), 301)
  }

  if (shouldAddTrailingSlash(url.pathname)) {
    url.pathname = `${url.pathname}/`
    return Response.redirect(url.toString(), 301)
  }

  return context.next()
}
