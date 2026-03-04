<template>
  <div class="flex flex-col bg-background">
    <HeroSection
      :title="$t('home.heroTitle')"
      :subtitle="$t('home.heroSubtitle')"
      imageUrl="/images/hero-home.jpg"
    />

    <section class="border-y border-gray-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <h2 class="font-heading text-3xl font-bold text-primary sm:text-4xl">{{ $t('home.seo.introTitle') }}</h2>
        <p class="mt-4 max-w-4xl font-body text-base leading-relaxed text-gray-700 sm:text-lg">
          {{ $t('home.seo.introBody') }}
        </p>
      </div>
    </section>

    <section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <h2 class="font-heading text-3xl font-bold text-primary sm:text-4xl">{{ $t('home.seo.quickLinksTitle') }}</h2>
        <p class="mt-3 font-body text-gray-600">
          {{ $t('home.seo.quickLinksDesc') }}
        </p>
        <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in quickAccessLinks"
            :key="item.title"
            class="rounded-2xl border border-gray-200 bg-slate-50 p-6 transition-colors hover:border-primary/30 hover:bg-white"
          >
            <h3 class="font-heading text-xl font-semibold text-primary">{{ item.title }}</h3>
            <p class="mt-3 font-body text-sm leading-relaxed text-gray-600">
              {{ item.description }}
            </p>
            <router-link
              v-if="item.path"
              :to="{ path: item.path, query: { lang: locale } }"
              class="mt-5 inline-block font-body text-sm font-semibold text-primary hover:underline"
            >
              {{ $t('home.seo.openSection') }}
            </router-link>
            <a
              v-else
              :href="item.anchor"
              class="mt-5 inline-block font-body text-sm font-semibold text-primary hover:underline"
            >
              {{ $t('home.seo.openSection') }}
            </a>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <h2 class="font-heading text-3xl font-bold text-primary sm:text-4xl">{{ $t('home.seo.regionDirTitle') }}</h2>
        <p class="mt-3 font-body text-gray-600">
          {{ $t('home.seo.regionDirDesc') }}
        </p>
        <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="regionGroup in visibleRegionDirectoryGroups"
            :key="regionGroup.region"
            class="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <h3 class="font-heading text-2xl font-semibold text-primary">
              {{ $t(`regions.${regionGroup.region}`) }}
            </h3>
            <ul class="mt-4 space-y-2">
              <li v-for="tram in regionGroup.trams" :key="tram.id">
                <router-link
                  :to="{ path: `/tram/${tram.id}`, query: { lang: locale } }"
                  class="font-body text-sm text-gray-700 hover:text-primary hover:underline"
                >
                  {{ tram.name }}
                </router-link>
              </li>
            </ul>
          </article>
        </div>
        <div class="mt-6 text-center md:hidden" v-if="regionDirectoryGroups.length > mobileRegionGroupLimit">
          <button
            class="rounded-lg border border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
            @click="showAllRegions = !showAllRegions"
          >
            {{ showAllRegions ? $t('home.seo.showFewerRegions') : $t('home.seo.showMoreRegions') }}
          </button>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">{{ $t('home.featuredTitle') }}</h2>
          <p class="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            {{ $t('home.featuredDescription') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TramCard v-for="tram in visibleFeaturedTrams" :key="tram.id" :tram="tram" />
        </div>
      </div>
    </section>

    <section id="route-explorer" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">{{ $t('home.byLocationTitle') }}</h2>
          <p class="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            {{ $t('home.byLocationDescription') }}
          </p>
        </div>

        <div class="flex justify-center mb-8 space-x-4" role="tablist" :aria-label="$t('home.byLocationTitle')">
          <button
            role="tab"
            :aria-selected="currentView === 'location'"
            :class="[
              'whitespace-nowrap px-6 py-2 transition-colors',
              currentView === 'location'
                ? 'border-b-2 border-primary font-semibold text-primary'
                : 'text-gray-600 hover:text-primary',
            ]"
            @click="currentView = 'location'"
          >
            {{ $t('home.tabLocation') }}
          </button>
          <button
            role="tab"
            :aria-selected="currentView === 'popularity'"
            :class="[
              'whitespace-nowrap px-6 py-2 transition-colors',
              currentView === 'popularity'
                ? 'border-b-2 border-primary font-semibold text-primary'
                : 'text-gray-600 hover:text-primary',
            ]"
            @click="currentView = 'popularity'"
          >
            {{ $t('home.tabPopularity') }}
          </button>
        </div>
        <p class="mb-8 text-center font-body text-sm text-gray-500">
          {{
            currentView === 'location' ? $t('home.tabLocationHint') : $t('home.tabPopularityHint')
          }}
        </p>

        <div class="mb-8 grid grid-cols-1 gap-3 md:grid-cols-4">
          <input
            v-model="searchKeyword"
            type="text"
            :placeholder="$t('home.filters.searchPlaceholder')"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 font-body text-sm outline-none transition-colors focus:border-primary"
          />
          <select
            v-model="selectedRegion"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 font-body text-sm outline-none transition-colors focus:border-primary"
          >
            <option value="all">{{ $t('home.filters.allRegions') }}</option>
            <option v-for="region in regionOptions.filter((r) => r !== 'all')" :key="region" :value="region">
              {{ $t(`regions.${region}`) }}
            </option>
          </select>
          <select
            v-model="selectedCategory"
            class="w-full rounded-lg border border-gray-300 px-4 py-2 font-body text-sm outline-none transition-colors focus:border-primary"
          >
            <option value="all">{{ $t('home.filters.allCategories') }}</option>
            <option v-for="category in categoryOptions" :key="category.value" :value="category.value">
              {{ category.label }}
            </option>
          </select>
          <div class="flex items-center justify-between rounded-lg border border-gray-300 px-4 py-2">
            <label class="inline-flex items-center gap-2 text-sm text-gray-700">
              <input v-model="reservationRequiredOnly" type="checkbox" class="h-4 w-4 accent-primary" />
              {{ $t('home.filters.reservationOnly') }}
            </label>
            <button class="text-xs text-primary hover:underline" @click="resetFilters">
              {{ $t('home.filters.clearFilters') }}
            </button>
          </div>
        </div>

        <div v-if="currentView === 'location'">
          <p v-if="Object.keys(tramsByLocation).length === 0" class="text-center text-gray-500 font-body py-8">
            {{ $t('home.filters.noResults') }}
          </p>
          <div v-for="(list, region) in tramsByLocation" :key="region" class="mb-12">
            <h3 class="font-heading text-2xl font-semibold text-primary mb-6">{{ $t(`regions.${region}`) }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TramCard v-for="tram in list" :key="tram.id" :tram="tram" />
            </div>
          </div>
        </div>
        <div v-else>
          <p v-if="popularTrams.length === 0" class="text-center text-gray-500 font-body py-8">
            {{ $t('home.filters.noResults') }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TramCard v-for="tram in popularTrams" :key="tram.id" :tram="tram" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="flex items-end justify-between gap-4">
          <div>
            <h2 class="font-heading text-3xl font-bold text-primary sm:text-4xl">{{ $t('home.seo.readTitle') }}</h2>
            <p class="mt-3 font-body text-gray-600">
              {{ $t('home.seo.readDesc') }}
            </p>
          </div>
          <router-link
            :to="{ path: '/insights', query: { lang: locale } }"
            class="hidden text-sm font-semibold text-primary hover:underline sm:inline"
          >
            {{ $t('home.seo.viewAllArticles') }}
          </router-link>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article
            v-for="article in visibleInsightsPreview"
            :key="article.slug"
            class="rounded-2xl border border-gray-200 p-6"
          >
            <h3 class="font-heading text-xl font-semibold text-primary">
              {{ article.content.title }}
            </h3>
            <p class="mt-3 font-body text-sm leading-relaxed text-gray-600">
              {{ article.content.excerpt }}
            </p>
            <router-link
              :to="{ path: `/insights/${article.slug}`, query: { lang: locale } }"
              class="mt-5 inline-block text-sm font-semibold text-primary hover:underline"
            >
              {{ $t('home.seo.readArticle') }}
            </router-link>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-5xl">
        <h2 class="font-heading text-3xl font-bold text-primary sm:text-4xl">{{ $t('home.seo.faqTitle') }}</h2>
        <p class="mt-3 font-body text-gray-600">
          {{ $t('home.seo.faqDesc') }}
        </p>
        <div class="mt-8 space-y-4">
          <details
            v-for="item in faqItems"
            :key="item.question"
            class="rounded-xl border border-gray-200 bg-white p-5"
          >
            <summary class="cursor-pointer list-none font-heading text-lg font-semibold text-primary">
              {{ item.question }}
            </summary>
            <p class="mt-3 font-body text-sm leading-relaxed text-gray-600">
              {{ item.answer }}
            </p>
          </details>
        </div>
      </div>
    </section>

    <section class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div class="text-4xl mb-4">🚊</div>
            <h3 class="font-heading text-2xl font-bold text-primary mb-3">{{ $t('home.infoCard1Title') }}</h3>
            <p class="font-body text-gray-600">
              {{ $t('home.infoCard1Desc') }}
            </p>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div class="text-4xl mb-4">🏞️</div>
            <h3 class="font-heading text-2xl font-bold text-primary mb-3">{{ $t('home.infoCard2Title') }}</h3>
            <p class="font-body text-gray-600">
              {{ $t('home.infoCard2Desc') }}
            </p>
          </div>

          <div class="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div class="text-4xl mb-4">🎌</div>
            <h3 class="font-heading text-2xl font-bold text-primary mb-3">{{ $t('home.infoCard3Title') }}</h3>
            <p class="font-body text-gray-600">
              {{ $t('home.infoCard3Desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <button
      v-if="isMobile && showBackToTop"
      type="button"
      aria-label="Back to top"
      class="fixed bottom-5 right-5 z-40 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg transition-opacity hover:bg-primary-dark"
      @click="scrollToTop"
    >
      {{ $t('home.seo.backToTop') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/HeroSection.vue'
import TramCard from '@/components/TramCard.vue'
import type { Tram, TramCategory } from '@/types/tram'
import { getAllTramsWithTranslations } from '@/utils/tramHelper'
import { getInsightsForLocale } from '@/data/insights'

interface QuickAccessItem {
  title: string
  description: string
  path?: string
  anchor?: string
}

const { locale, t } = useI18n()

const allTrams = computed(() => getAllTramsWithTranslations(locale.value))
const currentView = ref<'location' | 'popularity'>('location')
const searchKeyword = ref('')
const selectedRegion = ref<'all' | string>('all')
const selectedCategory = ref<'all' | TramCategory>('all')
const reservationRequiredOnly = ref(false)
const isMobile = ref(false)
const showAllRegions = ref(false)
const showBackToTop = ref(false)
const mobileRegionGroupLimit = 3

const quickAccessLinks = computed<QuickAccessItem[]>(() => [
  {
    title: t('home.seo.quick1Title'),
    description: t('home.seo.quick1Desc'),
    anchor: '#route-explorer',
  },
  {
    title: t('home.seo.quick2Title'),
    description: t('home.seo.quick2Desc'),
    anchor: '#route-explorer',
  },
  {
    title: t('home.seo.quick3Title'),
    description: t('home.seo.quick3Desc'),
    path: '/insights',
  },
  {
    title: t('home.seo.quick4Title'),
    description: t('home.seo.quick4Desc'),
    path: '/about',
  },
])

const regionOptions = computed(() => {
  return ['all', ...new Set(allTrams.value.map((tram) => tram.region || 'Other'))]
})

const categoryOptions = computed(() => {
  const labels: Record<TramCategory, string> = {
    luxury_train: t('home.filters.categories.luxuryTrain'),
    sightseeing_train: t('home.filters.categories.sightseeingTrain'),
    streetcar: t('home.filters.categories.streetcar'),
    themed_train: t('home.filters.categories.themedTrain'),
    limited_express: t('home.filters.categories.limitedExpress'),
  }
  return Object.entries(labels).map(([value, label]) => ({ value: value as TramCategory, label }))
})

const regionOrder = ['Kanto', 'Kansai', 'Kyushu', 'Chugoku', 'Chubu', 'Shikoku', 'Hokuriku', 'Hokkaido', 'Other']

const regionDirectoryGroups = computed(() => {
  const groups: Record<string, Tram[]> = {}

  allTrams.value.forEach((tram) => {
    const region = tram.region || 'Other'
    if (!groups[region]) {
      groups[region] = []
    }
    groups[region].push(tram)
  })

  return regionOrder
    .filter((region) => groups[region]?.length)
    .map((region) => ({
      region,
      trams: [...groups[region]].sort((a, b) => b.yearEstablished - a.yearEstablished).slice(0, 4),
    }))
})

const filteredTrams = computed(() => {
  const keyword = searchKeyword.value.trim().toLowerCase()

  return allTrams.value.filter((tram) => {
    const matchesKeyword =
      !keyword ||
      tram.name.toLowerCase().includes(keyword) ||
      tram.nameJa.toLowerCase().includes(keyword) ||
      tram.location.toLowerCase().includes(keyword) ||
      tram.description.toLowerCase().includes(keyword)

    const matchesRegion = selectedRegion.value === 'all' || tram.region === selectedRegion.value
    const matchesCategory = selectedCategory.value === 'all' || tram.category === selectedCategory.value
    const matchesReservation = !reservationRequiredOnly.value || tram.bookingType !== 'not_required'

    return matchesKeyword && matchesRegion && matchesCategory && matchesReservation
  })
})

const featuredTrams = computed(() => filteredTrams.value.slice(0, 6))
const visibleFeaturedTrams = computed(() => (isMobile.value ? featuredTrams.value.slice(0, 3) : featuredTrams.value))
const popularTrams = computed(() => filteredTrams.value)

const tramsByLocation = computed(() => {
  const groups: Record<string, Tram[]> = {}
  filteredTrams.value.forEach((tram) => {
    const region = tram.region || 'Other'
    if (!groups[region]) {
      groups[region] = []
    }
    groups[region].push(tram)
  })
  return groups
})

const insightsPreview = computed(() => getInsightsForLocale(locale.value).slice(0, 3))
const visibleInsightsPreview = computed(() => (isMobile.value ? insightsPreview.value.slice(0, 2) : insightsPreview.value))
const visibleRegionDirectoryGroups = computed(() => {
  if (!isMobile.value || showAllRegions.value) return regionDirectoryGroups.value
  return regionDirectoryGroups.value.slice(0, mobileRegionGroupLimit)
})

const faqItems = computed(() => [
  { question: t('home.seo.faqQ1'), answer: t('home.seo.faqA1') },
  { question: t('home.seo.faqQ2'), answer: t('home.seo.faqA2') },
  { question: t('home.seo.faqQ3'), answer: t('home.seo.faqA3') },
  { question: t('home.seo.faqQ4'), answer: t('home.seo.faqA4') },
  { question: t('home.seo.faqQ5'), answer: t('home.seo.faqA5') },
])

const resetFilters = () => {
  searchKeyword.value = ''
  selectedRegion.value = 'all'
  selectedCategory.value = 'all'
  reservationRequiredOnly.value = false
}

const updateViewport = () => {
  if (typeof window === 'undefined') return
  isMobile.value = window.innerWidth < 768
}

const updateBackToTopVisibility = () => {
  if (typeof window === 'undefined') return
  showBackToTop.value = window.scrollY > 420
}

const scrollToTop = () => {
  if (typeof window === 'undefined') return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateViewport()
  updateBackToTopVisibility()
  window.addEventListener('resize', updateViewport)
  window.addEventListener('scroll', updateBackToTopVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport)
  window.removeEventListener('scroll', updateBackToTopVisibility)
})
</script>
