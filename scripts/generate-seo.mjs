import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const SITE_URL = 'https://japanluxtrain.com'
const root = process.cwd()
const tramsFile = resolve(root, 'src/data/trams.ts')
const insightsFile = resolve(root, 'src/data/insights.ts')
const publicDir = resolve(root, 'public')

const source = readFileSync(tramsFile, 'utf8')
const idsBlockMatch = source.match(/export const tramIds = \[(?<ids>[\s\S]*?)\n\]/)

if (!idsBlockMatch?.groups?.ids) {
  throw new Error('Failed to parse tramIds from src/data/trams.ts')
}

const tramIds = Array.from(idsBlockMatch.groups.ids.matchAll(/'([^']+)'/g)).map((match) => match[1])
const insightsSource = readFileSync(insightsFile, 'utf8')
const insightSlugs = Array.from(insightsSource.matchAll(/slug:\s*'([^']+)'/g)).map((match) => match[1])
const staticPaths = ['/', '/about', '/gallery', '/insights', '/disclaimer']
const tramPaths = tramIds.map((id) => `/tram/${id}`)
const insightPaths = insightSlugs.map((slug) => `/insights/${slug}`)
const allPaths = [...staticPaths, ...insightPaths, ...tramPaths]
const supportedLocales = ['en', 'ja', 'zh-TW']
const localeToHrefLang = {
  en: 'en',
  ja: 'ja',
  'zh-TW': 'zh-Hant',
}
const localeToPathSegment = {
  en: '',
  ja: 'ja',
  'zh-TW': 'zh-tw',
}

const now = new Date().toISOString()
const buildLocalizedUrl = (path, lang) => {
  const normalizedPath = path === '/' ? '/' : path
  const segment = localeToPathSegment[lang]
  const localizedPath =
    !segment ? normalizedPath : normalizedPath === '/' ? `/${segment}` : `/${segment}${normalizedPath}`
  const url = new URL(localizedPath, SITE_URL)
  return url.toString()
}

const sitemapEntries = allPaths
  .flatMap((path) => {
    const priority = path === '/' ? '1.0' : path.startsWith('/tram/') ? '0.8' : '0.6'
    const localizedUrls = supportedLocales.map((lang) => ({
      lang,
      hrefLang: localeToHrefLang[lang],
      url: buildLocalizedUrl(path, lang),
    }))

    return localizedUrls.map(({ url }) =>
      [
        '  <url>',
        `    <loc>${url}</loc>`,
        ...localizedUrls.map(
          ({ hrefLang, url: alternateUrl }) =>
            `    <xhtml:link rel="alternate" hreflang="${hrefLang}" href="${alternateUrl}" />`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrls[0].url}" />`,
        `    <lastmod>${now}</lastmod>`,
        '    <changefreq>weekly</changefreq>',
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n'),
    )
  })
  .join('\n')

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  sitemapEntries,
  '</urlset>',
  '',
].join('\n')

const robots = ['User-agent: *', 'Allow: /', `Sitemap: ${SITE_URL}/sitemap.xml`, ''].join('\n')

mkdirSync(publicDir, { recursive: true })
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf8')
writeFileSync(resolve(publicDir, 'robots.txt'), robots, 'utf8')

console.log(`Generated sitemap.xml (${allPaths.length * supportedLocales.length} URLs) and robots.txt`)
