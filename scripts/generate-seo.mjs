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

const now = new Date().toISOString()
const sitemapEntries = allPaths
  .map((path) => {
    const url = `${SITE_URL}${path === '/' ? '' : path}`
    const priority = path === '/' ? '1.0' : path.startsWith('/tram/') ? '0.8' : '0.6'

    return [
      '  <url>',
      `    <loc>${url}</loc>`,
      `    <lastmod>${now}</lastmod>`,
      '    <changefreq>weekly</changefreq>',
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n')
  })
  .join('\n')

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  sitemapEntries,
  '</urlset>',
  '',
].join('\n')

const robots = ['User-agent: *', 'Allow: /', `Sitemap: ${SITE_URL}/sitemap.xml`, ''].join('\n')

mkdirSync(publicDir, { recursive: true })
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap, 'utf8')
writeFileSync(resolve(publicDir, 'robots.txt'), robots, 'utf8')

console.log(`Generated sitemap.xml (${allPaths.length} URLs) and robots.txt`)
