<script setup lang="ts">
import { watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getTramWithTranslations } from '@/utils/tramHelper'
import { getInsightBySlug } from '@/data/insights'

const SITE_NAME = 'Japan Lux Train'
const SITE_URL = 'https://japanluxtrain.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/hero-home.jpg`
const SUPPORTED_LOCALES = ['en', 'ja', 'zh-TW'] as const
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

const route = useRoute()
const router = useRouter()
const { locale, t } = useI18n()

const localeToHtmlLang: Record<string, string> = {
  en: 'en',
  'zh-TW': 'zh-Hant',
  ja: 'ja',
}

const localeToHrefLang: Record<SupportedLocale, string> = {
  en: 'en',
  ja: 'ja',
  'zh-TW': 'zh-Hant',
}

const ensureMeta = (key: 'name' | 'property', value: string, content: string) => {
  let element = document.head.querySelector(`meta[${key}="${value}"]`) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(key, value)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

const ensureCanonical = (href: string) => {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

const ensureAltLink = (hreflang: string, href: string) => {
  let element = document.head.querySelector(
    `link[rel="alternate"][hreflang="${hreflang}"][data-managed="hreflang"]`,
  ) as HTMLLinkElement | null

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'alternate')
    element.setAttribute('data-managed', 'hreflang')
    element.setAttribute('hreflang', hreflang)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const toSingleQueryValue = (value: unknown) => {
  if (Array.isArray(value)) return value[0]
  return value
}

const toSupportedLocale = (value: unknown): SupportedLocale | null => {
  const raw = toSingleQueryValue(value)
  if (typeof raw !== 'string') return null
  return (SUPPORTED_LOCALES as readonly string[]).includes(raw) ? (raw as SupportedLocale) : null
}

const buildLocalizedUrl = (path: string, lang: SupportedLocale) => {
  const url = new URL(path, SITE_URL)
  url.searchParams.set('lang', lang)
  return url.toString()
}

const toAbsoluteUrl = (value: string) => {
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value
  }
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`
}

watchEffect(() => {
  const queryLocale = toSupportedLocale(route.query.lang)
  if (queryLocale && locale.value !== queryLocale) {
    locale.value = queryLocale
  }
})

watch(
  () => locale.value,
  (nextLocale) => {
    if (!(SUPPORTED_LOCALES as readonly string[]).includes(nextLocale)) return
    const queryLocale = toSupportedLocale(route.query.lang)
    if (queryLocale === nextLocale) return

    void router.replace({
      path: route.path,
      query: { ...route.query, lang: nextLocale },
      hash: route.hash,
    })
  },
  { immediate: true },
)

watchEffect(() => {
  const currentPath = route.path || '/'
  const currentLocale = toSupportedLocale(locale.value) || 'en'
  const pageUrl = buildLocalizedUrl(currentPath, currentLocale)

  let title = `${SITE_NAME} | Discover Scenic Trams in Japan`
  let description =
    "Explore Japan's iconic sightseeing trams, routes, and travel highlights across regions like Kanto, Kansai, and Kyushu."
  let image = DEFAULT_IMAGE

  if (route.name === 'Home') {
    title = `${t('home.heroTitle')} | ${SITE_NAME}`
    description = t('home.heroSubtitle')
  } else if (route.name === 'TramDetails') {
    const tramId = typeof route.params.id === 'string' ? route.params.id : ''
    const tram = tramId ? getTramWithTranslations(tramId, locale.value) : undefined

    if (tram) {
      title = `${tram.name} | ${SITE_NAME}`
      description = tram.description
      image = toAbsoluteUrl(tram.imageUrl)
    } else {
      title = `${t('tramDetails.notFound')} | ${SITE_NAME}`
      description = t('tramDetails.notFoundDesc')
    }
  } else if (route.name === 'About') {
    title = `${t('nav.about')} | ${SITE_NAME}`
    description = "Learn about Japan Lux Train and our mission to showcase Japan's most scenic tram and railway experiences."
  } else if (route.name === 'Gallery') {
    title = `${t('nav.gallery')} | ${SITE_NAME}`
    description = t('home.galleryDescription')
  } else if (route.name === 'Insights') {
    title = `Rail Insights | ${SITE_NAME}`
    description =
      "Read practical and historical knowledge about Japan's trams and sightseeing trains, including route context and travel planning tips."
  } else if (route.name === 'Disclaimer') {
    title = `Disclaimer | ${SITE_NAME}`
    description =
      'Read the legal and content disclaimer for Japan Lux Train, including information usage limits and policy notes.'
  } else if (route.name === 'InsightDetail') {
    const slug = typeof route.params.slug === 'string' ? route.params.slug : ''
    const article = slug ? getInsightBySlug(slug, locale.value) : undefined

    if (article) {
      title = `${article.content.title} | ${SITE_NAME}`
      description = article.content.excerpt
    } else {
      title = `Rail Insights | ${SITE_NAME}`
      description =
        "Read practical and historical knowledge about Japan's trams and sightseeing trains, including route context and travel planning tips."
    }
  }

  document.title = title
  document.documentElement.lang = localeToHtmlLang[locale.value] || 'en'

  ensureCanonical(pageUrl)
  ;(SUPPORTED_LOCALES as readonly SupportedLocale[]).forEach((lang) => {
    ensureAltLink(localeToHrefLang[lang], buildLocalizedUrl(currentPath, lang))
  })
  ensureAltLink('x-default', buildLocalizedUrl(currentPath, 'en'))

  ensureMeta('name', 'description', description)
  ensureMeta('name', 'robots', 'index, follow')

  ensureMeta('property', 'og:type', 'website')
  ensureMeta('property', 'og:site_name', SITE_NAME)
  ensureMeta('property', 'og:title', title)
  ensureMeta('property', 'og:description', description)
  ensureMeta('property', 'og:url', pageUrl)
  ensureMeta('property', 'og:image', image)

  ensureMeta('name', 'twitter:card', 'summary_large_image')
  ensureMeta('name', 'twitter:title', title)
  ensureMeta('name', 'twitter:description', description)
  ensureMeta('name', 'twitter:image', image)
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
