import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import TramDetailsPage from '@/pages/TramDetailsPage.vue'
import PlaceholderPage from '@/pages/PlaceholderPage.vue'

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
    component: PlaceholderPage,
    props: { title: 'About Us', description: 'Learn more about Japanese sightseeing trams' },
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: PlaceholderPage,
    props: { title: 'Gallery', description: 'Explore our complete photo collection' },
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
