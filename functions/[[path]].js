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
  const collapsed = pathname.replace(/\/{2,}/g, '/')
  return collapsed.endsWith('/') ? collapsed.slice(0, -1) || '/' : collapsed
}

const hasFileExtension = (pathname) => /\/[^/]+\.[^/]+$/.test(pathname)

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

  return localizedPath
}

export async function onRequest(context) {
  const request = context.request
  const url = new URL(request.url)
  const normalizedPath = normalizePath(url.pathname)
  const queryLocale = normalizeLocaleQuery(url.searchParams.get('lang'))

  if (queryLocale) {
    url.pathname = buildLocalizedPath(normalizedPath, queryLocale)
    url.searchParams.delete('lang')
    return Response.redirect(url.toString(), 301)
  }

  if (/^\/en(?:\/|$)/i.test(normalizedPath)) {
    url.pathname = stripLocalePrefix(normalizedPath)
    return Response.redirect(url.toString(), 301)
  }

  if (!hasFileExtension(normalizedPath) && normalizedPath !== '/' && url.pathname.endsWith('/')) {
    url.pathname = normalizedPath
    return Response.redirect(url.toString(), 308)
  }

  if ((request.method === 'GET' || request.method === 'HEAD') && !hasFileExtension(normalizedPath) && normalizedPath !== '/') {
    const assetUrl = new URL(request.url)
    assetUrl.pathname = `${normalizedPath}.html`

    const assetResponse = await context.env.ASSETS.fetch(new Request(assetUrl.toString(), request))

    if (assetResponse.ok) {
      return assetResponse
    }
  }

  return context.next()
}
