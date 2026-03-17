import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import enMessages from '../src/locales/en.json' with { type: 'json' }
import jaMessages from '../src/locales/ja.json' with { type: 'json' }
import zhTWMessages from '../src/locales/zh-TW.json' with { type: 'json' }

const SITE_NAME = 'Japan Lux Train'
const SITE_URL = 'https://japanluxtrain.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/hero-home.jpg`
const SUPPORTED_LOCALES = ['en', 'ja', 'zh-TW']
const LOCALE_TO_HTML_LANG = {
  en: 'en',
  ja: 'ja',
  'zh-TW': 'zh-Hant',
}
const LOCALE_TO_HREF_LANG = {
  en: 'en',
  ja: 'ja',
  'zh-TW': 'zh-Hant',
}
const LOCALE_TO_PATH_SEGMENT = {
  en: '',
  ja: 'ja',
  'zh-TW': 'zh-tw',
}
const LOCALE_MESSAGES = {
  en: enMessages,
  ja: jaMessages,
  'zh-TW': zhTWMessages,
}

const root = process.cwd()
const distDir = resolve(root, 'dist')
const templatePath = resolve(distDir, 'index.html')
const tramsSourcePath = resolve(root, 'src/data/trams.ts')
const insightsSourcePath = resolve(root, 'src/data/insights.ts')
const tramHelperPath = resolve(root, 'src/utils/tramHelper.ts')

const STATIC_PAGE_META = {
  about: {
    en: {
      title: `About | ${SITE_NAME}`,
      description: "Learn about Japan Lux Train and our mission to showcase Japan's most scenic tram and railway experiences.",
    },
    ja: {
      title: `About | ${SITE_NAME}`,
      description: 'Japan Lux Train の編集方針と、日本各地の路面電車・観光列車を紹介する目的をご案内します。',
    },
    'zh-TW': {
      title: `About | ${SITE_NAME}`,
      description: '了解 Japan Lux Train 的網站定位，以及我們如何整理日本各地觀光列車與路面電車資訊。',
    },
  },
  gallery: {
    en: {
      title: `Gallery | ${SITE_NAME}`,
      description: enMessages.home.galleryDescription,
    },
    ja: {
      title: `Gallery | ${SITE_NAME}`,
      description: '日本各地の観光列車と路面電車の写真ハイライトをまとめたギャラリーページです。',
    },
    'zh-TW': {
      title: `Gallery | ${SITE_NAME}`,
      description: '瀏覽日本各地觀光列車與路面電車的精選影像與風景亮點。',
    },
  },
  insights: {
    en: {
      title: `Rail Insights | ${SITE_NAME}`,
      description:
        "Read practical and historical knowledge about Japan's trams and sightseeing trains, including route context and travel planning tips.",
    },
    ja: {
      title: `Rail Insights | ${SITE_NAME}`,
      description: '日本の路面電車や観光列車に関する実用情報、歴史、旅行計画のヒントをまとめています。',
    },
    'zh-TW': {
      title: `Rail Insights | ${SITE_NAME}`,
      description: '閱讀日本路面電車與觀光列車的實用知識、歷史背景與行程規劃建議。',
    },
  },
  disclaimer: {
    en: {
      title: `Disclaimer | ${SITE_NAME}`,
      description: 'Read the legal and content disclaimer for Japan Lux Train, including information usage limits and policy notes.',
    },
    ja: {
      title: `Disclaimer | ${SITE_NAME}`,
      description: 'Japan Lux Train に掲載する情報の取り扱い、免責事項、著作権ポリシーについてご確認ください。',
    },
    'zh-TW': {
      title: `Disclaimer | ${SITE_NAME}`,
      description: '查看 Japan Lux Train 的免責聲明、內容使用限制與版權說明。',
    },
  },
}

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const extractLiteral = (source, marker, openChar, closeChar) => {
  const markerIndex = source.indexOf(marker)
  if (markerIndex === -1) {
    throw new Error(`Failed to find marker: ${marker}`)
  }

  const assignmentIndex = source.indexOf('=', markerIndex)
  const start = source.indexOf(openChar, assignmentIndex === -1 ? markerIndex : assignmentIndex)
  if (start === -1) {
    throw new Error(`Failed to find opening ${openChar} after marker: ${marker}`)
  }

  let depth = 0
  let quote = null
  let escaped = false

  for (let index = start; index < source.length; index += 1) {
    const character = source[index]

    if (quote) {
      if (escaped) {
        escaped = false
        continue
      }

      if (character === '\\') {
        escaped = true
        continue
      }

      if (character === quote) {
        quote = null
      }
      continue
    }

    if (character === "'" || character === '"' || character === '`') {
      quote = character
      continue
    }

    if (character === openChar) {
      depth += 1
    } else if (character === closeChar) {
      depth -= 1
      if (depth === 0) {
        return source.slice(start, index + 1)
      }
    }
  }

  throw new Error(`Failed to parse literal for marker: ${marker}`)
}

const evaluateLiteral = (literal) => Function(`return (${literal})`)()

const tramsSource = readFileSync(tramsSourcePath, 'utf8')
const insightsSource = readFileSync(insightsSourcePath, 'utf8')
const tramHelperSource = readFileSync(tramHelperPath, 'utf8')
const template = readFileSync(templatePath, 'utf8')

const trams = evaluateLiteral(extractLiteral(tramsSource, 'export const trams:', '[', ']'))
const insights = evaluateLiteral(extractLiteral(insightsSource, 'export const insights:', '[', ']'))
const tramKeyMap = evaluateLiteral(extractLiteral(tramHelperSource, 'const tramKeyMap', '{', '}'))

const buildLocalizedPath = (path, locale) => {
  const normalizedPath = path === '/' ? '/' : path
  const segment = LOCALE_TO_PATH_SEGMENT[locale]

  const localizedPath =
    !segment ? normalizedPath : normalizedPath === '/' ? `/${segment}` : `/${segment}${normalizedPath}`

  if (localizedPath === '/') return localizedPath
  return `${localizedPath}/`
}

const buildAbsoluteUrl = (path, locale) => new URL(buildLocalizedPath(path, locale), SITE_URL).toString()

const humanizeSlug = (value) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const getTramMeta = (tramId, locale) => {
  const messages = LOCALE_MESSAGES[locale]
  const tramKey = tramKeyMap[tramId]
  const tramCopy = tramKey ? messages.trams[tramKey] : null
  const tram = trams.find((entry) => entry.id === tramId)

  if (!tramCopy || !tram) {
    return {
      title: `${humanizeSlug(tramId)} | ${SITE_NAME}`,
      description: "Explore Japan's iconic sightseeing trams, routes, and travel highlights across regions like Kanto, Kansai, and Kyushu.",
      image: DEFAULT_IMAGE,
    }
  }

  return {
    title: `${tramCopy.name} | ${SITE_NAME}`,
    description: tramCopy.description,
    image: `${SITE_URL}${tram.imageUrl}`,
  }
}

const getInsightMeta = (slug, locale) => {
  const article = insights.find((entry) => entry.slug === slug)
  const localized = article?.content?.[locale]

  if (!localized) {
    const fallback = STATIC_PAGE_META.insights[locale]
    return {
      title: `${humanizeSlug(slug)} | ${SITE_NAME}`,
      description: fallback.description,
      image: DEFAULT_IMAGE,
    }
  }

  return {
    title: `${localized.title} | ${SITE_NAME}`,
    description: localized.excerpt,
    image: DEFAULT_IMAGE,
  }
}

const getPageMeta = (path, locale) => {
  if (path === '/') {
    return {
      title: `${LOCALE_MESSAGES[locale].home.heroTitle} | ${SITE_NAME}`,
      description: LOCALE_MESSAGES[locale].home.heroSubtitle,
      image: DEFAULT_IMAGE,
    }
  }

  if (path === '/about') return { ...STATIC_PAGE_META.about[locale], image: DEFAULT_IMAGE }
  if (path === '/gallery') return { ...STATIC_PAGE_META.gallery[locale], image: DEFAULT_IMAGE }
  if (path === '/insights') return { ...STATIC_PAGE_META.insights[locale], image: DEFAULT_IMAGE }
  if (path === '/disclaimer') return { ...STATIC_PAGE_META.disclaimer[locale], image: DEFAULT_IMAGE }

  if (path.startsWith('/tram/')) {
    return getTramMeta(path.replace('/tram/', ''), locale)
  }

  if (path.startsWith('/insights/')) {
    return getInsightMeta(path.replace('/insights/', ''), locale)
  }

  return {
    title: `${SITE_NAME} | Discover Scenic Trams in Japan`,
    description:
      "Explore Japan's iconic sightseeing trams, routes, and travel highlights across regions like Kanto, Kansai, and Kyushu.",
    image: DEFAULT_IMAGE,
  }
}

const buildHeadMarkup = (path, locale) => {
  const pageUrl = buildAbsoluteUrl(path, locale)
  const { title, description, image } = getPageMeta(path, locale)
  const alternateLinks = SUPPORTED_LOCALES.map(
    (supportedLocale) =>
      `<link rel="alternate" hreflang="${LOCALE_TO_HREF_LANG[supportedLocale]}" href="${buildAbsoluteUrl(path, supportedLocale)}" />`,
  ).join('\n    ')

  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    '<meta name="robots" content="index, follow" />',
    `<link rel="canonical" href="${pageUrl}" />`,
    alternateLinks,
    `<link rel="alternate" hreflang="x-default" href="${buildAbsoluteUrl(path, 'en')}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${pageUrl}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ].join('\n    ')
}

const writePrerenderedPage = (path, locale) => {
  const localizedPath = buildLocalizedPath(path, locale)
  const outputPath =
    localizedPath === '/' ? resolve(distDir, 'index.html') : resolve(distDir, localizedPath.slice(1), 'index.html')
  const headMarkup = buildHeadMarkup(path, locale)
  const htmlLang = LOCALE_TO_HTML_LANG[locale]

  const rendered = template
    .replace(/<html lang="[^"]+">/, `<html lang="${htmlLang}">`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+name="robots"[\s\S]*?\/>\s*/gi, '')
    .replace(/<link\s+rel="canonical"[\s\S]*?\/>\s*/gi, '')
    .replace(/<link\s+rel="alternate"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+property="og:[^"]+"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[^"]+"[\s\S]*?\/>\s*/gi, '')
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, '')
    .replace('</head>', `    ${headMarkup}\n  </head>`)

  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, rendered, 'utf8')
}

const staticPaths = ['/', '/about', '/gallery', '/insights', '/disclaimer']
const tramPaths = trams.map((tram) => `/tram/${tram.id}`)
const insightPaths = insights.map((article) => `/insights/${article.slug}`)
const allPaths = [...staticPaths, ...insightPaths, ...tramPaths]

for (const path of allPaths) {
  for (const locale of SUPPORTED_LOCALES) {
    writePrerenderedPage(path, locale)
  }
}

console.log(`Prerendered ${allPaths.length * SUPPORTED_LOCALES.length} localized HTML pages`)
