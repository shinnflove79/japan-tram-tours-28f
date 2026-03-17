const LOCALE_QUERY_TO_PATH = {
  en: '',
  ja: 'ja',
  'zh-TW': 'zh-tw',
}

const normalizePath = (pathname) => {
  if (!pathname || pathname === '/') return '/'
  return pathname.endsWith('/') ? pathname.slice(0, -1) || '/' : pathname
}

const stripLocalePrefix = (pathname) => {
  const normalized = normalizePath(pathname)
  const match = normalized.match(/^\/(?:en|ja|zh-tw)(\/.*)?$/i)

  if (!match) return normalized
  return match[1] || '/'
}

const buildLocalizedPath = (pathname, locale) => {
  const basePath = stripLocalePrefix(pathname)
  const segment = LOCALE_QUERY_TO_PATH[locale] || ''

  if (!segment) return basePath
  if (basePath === '/') return `/${segment}`
  return `/${segment}${basePath}`
}

export async function onRequest(context) {
  const url = new URL(context.request.url)
  const queryLocale = url.searchParams.get('lang')

  if (queryLocale && Object.hasOwn(LOCALE_QUERY_TO_PATH, queryLocale)) {
    url.pathname = buildLocalizedPath(url.pathname, queryLocale)
    url.searchParams.delete('lang')
    return Response.redirect(url.toString(), 301)
  }

  if (/^\/en(?:\/|$)/i.test(url.pathname)) {
    url.pathname = stripLocalePrefix(url.pathname)
    return Response.redirect(url.toString(), 301)
  }

  return context.next()
}
