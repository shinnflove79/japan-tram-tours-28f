import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import TramDetailsPage from '@/pages/TramDetailsPage.vue'
import PlaceholderPage from '@/pages/PlaceholderPage.vue'
import DisclaimerPage from '@/pages/DisclaimerPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import InsightsPage from '@/pages/InsightsPage.vue'
import InsightDetailPage from '@/pages/InsightDetailPage.vue'

const SUPPORTED_LOCALES = ['en', 'ja', 'zh-TW'] as const
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

const asLocale = (value: unknown): SupportedLocale | null => {
  if (typeof value !== 'string') return null
  return (SUPPORTED_LOCALES as readonly string[]).includes(value) ? (value as SupportedLocale) : null
}

const getStoredLocale = (): SupportedLocale => {
  if (typeof window === 'undefined') return 'en'
  return asLocale(localStorage.getItem('app-language')) || 'en'
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/tram/:id',
    name: 'TramDetails',
    component: TramDetailsPage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: PlaceholderPage,
    props: { title: 'Gallery', description: 'Explore our complete photo collection' },
  },
  {
    path: '/insights',
    name: 'Insights',
    component: InsightsPage,
  },
  {
    path: '/insights/:slug',
    name: 'InsightDetail',
    component: InsightDetailPage,
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: DisclaimerPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, left: 0, behavior: 'auto' }
  },
})

router.beforeEach((to, from) => {
  if (asLocale(to.query.lang)) return true

  const fallbackLocale =
    asLocale(Array.isArray(from.query.lang) ? from.query.lang[0] : from.query.lang) || getStoredLocale()

  return {
    path: to.path,
    query: {
      ...to.query,
      lang: fallbackLocale,
    },
    hash: to.hash,
    replace: true,
  }
})

router.afterEach((to) => {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
  if (!gtag) return

  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: to.fullPath,
  })
})

export default router
