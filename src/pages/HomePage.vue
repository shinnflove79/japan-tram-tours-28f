<template>
  <div class="min-h-screen flex flex-col bg-background">
    <!-- Hero Section -->
    <HeroSection
      :title="$t('home.heroTitle')"
      :subtitle="$t('home.heroSubtitle')"
      imageUrl="/images/hero-home.jpg"
      :ctaText="$t('home.heroButton')"
      ctaLink="/gallery"
    />

    <!-- Featured Trams Section -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">{{ $t('home.featuredTitle') }}</h2>
          <p class="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            {{ $t('home.featuredDescription') }}
          </p>
        </div>

        <!-- Featured Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TramCard v-for="tram in featuredTrams" :key="tram.id" :tram="tram" />
        </div>
      </div>
    </section>


    <!-- Trams By Location Section -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">{{ $t('home.byLocationTitle') }}</h2>
          <p class="font-body text-lg text-gray-600 max-w-2xl mx-auto">
            {{ $t('home.byLocationDescription') }}
          </p>
        </div>

        <!-- tabs -->
        <div class="flex justify-center mb-8 space-x-4" role="tablist" :aria-label="$t('home.byLocationTitle')">
          <button
            role="tab"
            :aria-selected="currentView === 'location'"
            :class="[
              'whitespace-nowrap px-6 py-2 transition-colors',
              currentView === 'location'
                ? 'border-b-2 border-primary font-semibold text-primary'
                : 'text-gray-600 hover:text-primary'
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
                : 'text-gray-600 hover:text-primary'
            ]"
            @click="currentView = 'popularity'"
          >
            {{ $t('home.tabPopularity') }}
          </button>
        </div>

        <!-- Search + Filters -->
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

        <!-- content depending on tab -->
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

    <!-- Info Section -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div class="text-4xl mb-4">🚊</div>
            <h3 class="font-heading text-2xl font-bold text-primary mb-3">{{ $t('home.infoCard1Title') }}</h3>
            <p class="font-body text-gray-600">
              {{ $t('home.infoCard1Desc') }}
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div class="text-4xl mb-4">🏞️</div>
            <h3 class="font-heading text-2xl font-bold text-primary mb-3">{{ $t('home.infoCard2Title') }}</h3>
            <p class="font-body text-gray-600">
              {{ $t('home.infoCard2Desc') }}
            </p>
          </div>

          <!-- Card 3 -->
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
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/HeroSection.vue'
import TramCard from '@/components/TramCard.vue'
import type { Tram, TramCategory } from '@/types/tram'
import { getAllTramsWithTranslations } from '@/utils/tramHelper'

const { locale, t } = useI18n()

// All trams with translations
const allTrams = computed(() => getAllTramsWithTranslations(locale.value))

// Tab state for viewing mode
const currentView = ref<'location' | 'popularity'>('location')

// Filter state
const searchKeyword = ref('')
const selectedRegion = ref<'all' | string>('all')
const selectedCategory = ref<'all' | TramCategory>('all')
const reservationRequiredOnly = ref(false)

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

// Featured trams (first 3 in current filtered set)
const featuredTrams = computed(() => filteredTrams.value.slice(0, 3))

// Popularity list - in absence of real metric we just use the current order
const popularTrams = computed(() => filteredTrams.value)

// Group trams using the explicit region field (codes like 'Kanto')
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

const resetFilters = () => {
  searchKeyword.value = ''
  selectedRegion.value = 'all'
  selectedCategory.value = 'all'
  reservationRequiredOnly.value = false
}

</script>



