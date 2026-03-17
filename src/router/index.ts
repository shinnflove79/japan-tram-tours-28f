import { createRouter, createWebHistory, type RouteRecordRaw, type RouteRecordSingleView } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import TramDetailsPage from '@/pages/TramDetailsPage.vue'
import PlaceholderPage from '@/pages/PlaceholderPage.vue'
import DisclaimerPage from '@/pages/DisclaimerPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import InsightsPage from '@/pages/InsightsPage.vue'
import InsightDetailPage from '@/pages/InsightDetailPage.vue'
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  asSupportedLocale,
  buildLocalizedPath,
  stripLocalePrefix,
  type SupportedLocale,
} from '@/utils/localeRouting'

type RouteDefinition = {
  path: string
  name: string
  component: RouteRecordSingleView['component']
  props?: RouteRecordSingleView['props']
}

const routeDefinitions: RouteDefinition[] = [
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

const buildLocalizedRoutes = (locale: SupportedLocale) => {
  const pathPrefix = locale === DEFAULT_LOCALE ? '' : `/${locale === 'zh-TW' ? 'zh-tw' : locale}`

  return routeDefinitions.map<RouteRecordSingleView>((definition) => ({
    path: `${pathPrefix}${definition.path === '/' ? '' : definition.path}` || '/',
    name: locale === DEFAULT_LOCALE ? definition.name : `${definition.name}-${locale}`,
    component: definition.component,
    props: definition.props,
    meta: {
      pageName: definition.name,
      locale,
    },
  }))
}

const routes: RouteRecordRaw[] = [
  ...buildLocalizedRoutes(DEFAULT_LOCALE),
  ...buildLocalizedRoutes('ja'),
  ...buildLocalizedRoutes('zh-TW'),
  {
    path: '/en/:pathMatch(.*)*',
    redirect: (to) => {
      const suffix = Array.isArray(to.params.pathMatch) ? to.params.pathMatch.join('/') : to.params.pathMatch || ''
      const basePath = suffix ? `/${suffix}` : '/'
      return {
        path: basePath,
        query: to.query,
        hash: to.hash,
        replace: true,
      }
    },
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

router.beforeEach((to) => {
  const queryLocale = asSupportedLocale(to.query.lang)

  if (queryLocale) {
    const nextQuery = { ...to.query }
    delete nextQuery.lang

    return {
      path: buildLocalizedPath(stripLocalePrefix(to.path).basePath, queryLocale),
      query: nextQuery,
      hash: to.hash,
      replace: true,
    }
  }

  return true
})

router.afterEach((to) => {
  const locale = (to.meta.locale as SupportedLocale | undefined) || stripLocalePrefix(to.path).locale
  if ((SUPPORTED_LOCALES as readonly string[]).includes(locale) && typeof window !== 'undefined') {
    localStorage.setItem('app-language', locale)
  }

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
  if (!gtag) return

  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: to.fullPath,
  })
})

export default router
