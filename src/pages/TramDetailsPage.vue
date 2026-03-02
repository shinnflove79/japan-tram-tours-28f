<template>
  <div v-if="tram" class="min-h-screen flex flex-col bg-background">
    <!-- Hero Section -->
    <HeroSection :title="tram.name" :subtitle="tram.nameJa" :imageUrl="tram.imageUrl" />

    <!-- Tram Details -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header Info -->
        <div class="mb-12">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 class="font-heading text-4xl sm:text-5xl font-bold text-primary mb-2">{{ tram.name }}</h1>
              <p class="font-body text-lg text-accent font-semibold">{{ tram.nameJa }}</p>
            </div>
            <div class="mt-4 sm:mt-0 text-right">
              <p class="text-gray-600 font-body text-sm">{{ $t('tramDetails.established2') }}</p>
              <p class="font-heading text-3xl font-bold text-primary">{{ tram.yearEstablished }}</p>
            </div>
          </div>

          <!-- Location Badge -->
          <div class="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
            <span>📍</span>
            <span class="font-body font-semibold">{{ tram.location }}</span>
          </div>
          <!-- Company / Operator -->
          <div v-if="tram.company" class="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full ml-4">
            <span>🏢</span>
            <span class="font-body font-semibold">{{ tram.company }}</span>
          </div>
          <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full ml-4 mt-4 sm:mt-0">
            <span>🚆</span>
            <span class="font-body font-semibold">{{ categoryLabel }}</span>
          </div>
          <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full ml-4 mt-4 sm:mt-0">
            <span>🎫</span>
            <span class="font-body font-semibold">{{ bookingTypeLabel }}</span>
          </div>
          <div v-if="tram.bookingUrl" class="mt-4">
            <a :href="tram.bookingUrl" target="_blank" class="text-sm text-primary underline">
              官方订票入口
            </a>
          </div>
        </div>

        <!-- Description -->
        <div class="mb-12 pb-12 border-b border-gray-200">
          <p class="font-body text-xl text-gray-700 leading-relaxed">{{ tram.description }}</p>
        </div>

        <!-- Key Information Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-200">
          <!-- Route -->
          <div class="bg-white p-6 rounded-2xl border border-gray-100">
            <h3 class="font-heading text-xl font-bold text-primary mb-3">{{ $t('tramDetails.route') }}</h3>
            <p class="font-body text-gray-600">{{ tram.route }}</p>
          </div>

          <!-- Operating Hours -->
          <div class="bg-white p-6 rounded-2xl border border-gray-100">
            <h3 class="font-heading text-xl font-bold text-primary mb-3">{{ $t('tramDetails.operatingHours') }}</h3>
            <p class="font-body text-gray-600">{{ tram.operatingHours }}</p>
          </div>
        </div>

        <!-- History -->
        <div v-if="tram.sourceUrl" class="mb-4 text-right">
          <a :href="tram.sourceUrl" target="_blank" class="text-sm text-primary underline">
            {{ $t('tramDetails.source') }}
          </a>
        </div>
        <div class="mb-12 pb-12 border-b border-gray-200">
          <h2 class="font-heading text-3xl font-bold text-primary mb-6">{{ $t('tramDetails.history') }}</h2>
          <p class="font-body text-lg text-gray-700 leading-relaxed">{{ tram.history }}</p>
        </div>

        <!-- Highlights -->
        <div class="mb-12">
          <h2 class="font-heading text-3xl font-bold text-primary mb-6">{{ $t('tramDetails.highlights') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="(highlight, index) in tram.highlights"
              :key="index"
              class="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100"
            >
              <span class="text-2xl flex-shrink-0">✨</span>
              <p class="font-body text-gray-700">{{ highlight }}</p>
            </div>
          </div>
        </div>


        <!-- Related Trams -->
        <div class="mb-12">
          <h2 class="font-heading text-3xl font-bold text-primary mb-6">{{ $t('tramDetails.relatedTrams') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TramCard v-for="relatedTram in relatedTrams" :key="relatedTram.id" :tram="relatedTram" />
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-accent/10 border border-accent rounded-3xl p-8 text-center">
          <h3 class="font-heading text-2xl font-bold text-primary mb-4">{{ $t('tramDetails.planYourVisit') }}</h3>
          <p class="font-body text-gray-700 mb-6">
            {{ $t('tramDetails.planYourVisitDesc') }}
          </p>
          <router-link
            to="/"
            class="inline-block px-8 py-3 bg-accent text-primary-dark font-heading font-bold rounded-lg hover:bg-accent-light transition-colors"
          >
            {{ $t('tramDetails.exploreMore') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <!-- Not Found State -->
  <div v-else class="min-h-screen flex flex-col items-center justify-center bg-background px-4">
    <h1 class="font-heading text-4xl font-bold text-primary mb-4">{{ $t('tramDetails.notFound') }}</h1>
    <p class="font-body text-lg text-gray-600 mb-8">{{ $t('tramDetails.notFoundDesc') }}</p>
    <router-link to="/" class="px-8 py-3 bg-accent text-primary-dark font-heading font-bold rounded-lg hover:bg-accent-light transition-colors">
      {{ $t('tramDetails.backToHome') }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/HeroSection.vue'
import TramCard from '@/components/TramCard.vue'
import { getTramWithTranslations, getAllTramsWithTranslations } from '@/utils/tramHelper'
import type { BookingType, TramCategory } from '@/types/tram'

const { t, locale } = useI18n()

const route = useRoute()

// Get the tram from params
const tram = computed(() => {
  const id = route.params.id as string
  return getTramWithTranslations(id, locale.value)
})

// Related trams (all except current)
const relatedTrams = computed(() => {
  return getAllTramsWithTranslations(locale.value)
    .filter((t) => t.id !== tram.value?.id)
    .slice(0, 2)
})

const categoryLabelMap: Record<TramCategory, string> = {
  luxury_train: '豪华观光列车',
  sightseeing_train: '观光列车',
  streetcar: '路面电车',
  themed_train: '主题列车',
  limited_express: '特急列车',
}

const bookingTypeLabelMap: Record<BookingType, string> = {
  official_site: '官网订票',
  jr_site: 'JR 订票',
  travel_agency: '旅行社预订',
  local_operator: '运营方预约',
  not_required: '通常无需预约',
}

const categoryLabel = computed(() => {
  if (!tram.value) return ''
  return categoryLabelMap[tram.value.category]
})

const bookingTypeLabel = computed(() => {
  if (!tram.value) return ''
  return bookingTypeLabelMap[tram.value.bookingType]
})

</script>

<style scoped></style>
