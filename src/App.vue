<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getTramWithTranslations } from '@/utils/tramHelper'

const SITE_NAME = 'Japan Lux Train'
const SITE_URL = 'https://japanluxtrain.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/hero-home.jpg`

const route = useRoute()
const { locale, t } = useI18n()

const localeToHtmlLang: Record<string, string> = {
  en: 'en',
  'zh-TW': 'zh-Hant',
  ja: 'ja',
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

const toAbsoluteUrl = (value: string) => {
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value
  }
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`
}

watchEffect(() => {
  const currentPath = route.path || '/'
  const pageUrl = `${SITE_URL}${currentPath}`

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
  }

  document.title = title
  document.documentElement.lang = localeToHtmlLang[locale.value] || 'en'

  ensureCanonical(pageUrl)

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
