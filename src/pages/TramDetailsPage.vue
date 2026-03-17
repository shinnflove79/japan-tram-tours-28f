<template>
  <div v-if="tram" class="min-h-screen flex flex-col bg-background">
    <HeroSection :title="tram.name" :subtitle="tram.nameJa" :imageUrl="tram.imageUrl" />

    <section class="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="mb-12">
          <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 class="mb-2 font-heading text-4xl font-bold text-primary sm:text-5xl">{{ tram.name }}</h1>
              <p class="text-lg font-body font-semibold text-accent">{{ tram.nameJa }}</p>
            </div>
            <div class="mt-4 text-right sm:mt-0">
              <p class="text-sm font-body text-gray-600">{{ t('tramDetails.established2') }}</p>
              <p class="font-heading text-3xl font-bold text-primary">{{ tram.yearEstablished }}</p>
            </div>
          </div>

          <div class="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent">
            <span class="font-body font-semibold">{{ tram.location }}</span>
          </div>
          <div
            v-if="tram.company"
            class="ml-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent"
          >
            <span class="font-body font-semibold">{{ tram.company }}</span>
          </div>
          <div class="ml-4 mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary sm:mt-0">
            <span class="font-body font-semibold">{{ categoryLabel }}</span>
          </div>
          <div class="ml-4 mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary sm:mt-0">
            <span class="font-body font-semibold">{{ bookingTypeLabel }}</span>
          </div>
          <div v-if="tram.bookingUrl" class="mt-4">
            <a :href="tram.bookingUrl" target="_blank" rel="noopener noreferrer" class="text-sm text-primary underline">
              {{ t('tramDetails.bookingLink') }}
            </a>
          </div>
        </div>

        <div class="mb-12 grid grid-cols-1 gap-8 border-b border-gray-200 pb-12 md:grid-cols-2">
          <div class="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 class="mb-3 font-heading text-xl font-bold text-primary">{{ t('tramDetails.route') }}</h3>
            <p class="font-body text-gray-600">{{ tram.route }}</p>
          </div>
          <div class="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 class="mb-3 font-heading text-xl font-bold text-primary">{{ t('tramDetails.operatingHours') }}</h3>
            <p class="font-body text-gray-600">{{ tram.operatingHours }}</p>
          </div>
        </div>

        <div class="mb-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ safeCopy.noticeTitle }}</h2>
          <p class="mb-3 font-body leading-7 text-gray-700">{{ safeCopy.noticeBody }}</p>
          <p class="font-body leading-7 text-gray-700">{{ safeCopy.noticeBody2 }}</p>
        </div>

        <div v-if="tram.sourceUrl" class="mb-12 text-right">
          <a :href="tram.sourceUrl" target="_blank" rel="noopener noreferrer" class="text-sm text-primary underline">
            {{ t('tramDetails.source') }}
          </a>
        </div>

        <div class="mb-12">
          <h2 class="mb-6 font-heading text-3xl font-bold text-primary">{{ t('tramDetails.relatedTrams') }}</h2>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TramCard v-for="relatedTram in relatedTrams" :key="relatedTram.id" :tram="relatedTram" />
          </div>
        </div>

        <div class="rounded-3xl border border-accent bg-accent/10 p-8 text-center">
          <h3 class="mb-4 font-heading text-2xl font-bold text-primary">{{ t('tramDetails.planYourVisit') }}</h3>
          <p class="mb-6 font-body text-gray-700">
            {{ t('tramDetails.planYourVisitDesc') }}
          </p>
          <router-link
            :to="buildLocalizedRoute('/', locale)"
            class="inline-block rounded-lg bg-accent px-8 py-3 font-heading font-bold text-primary-dark transition-colors hover:bg-accent-light"
          >
            {{ t('tramDetails.exploreMore') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="min-h-screen flex flex-col items-center justify-center bg-background px-4">
    <h1 class="mb-4 font-heading text-4xl font-bold text-primary">{{ t('tramDetails.notFound') }}</h1>
    <p class="mb-8 text-lg font-body text-gray-600">{{ t('tramDetails.notFoundDesc') }}</p>
    <router-link
      :to="buildLocalizedRoute('/', locale)"
      class="rounded-lg bg-accent px-8 py-3 font-heading font-bold text-primary-dark transition-colors hover:bg-accent-light"
    >
      {{ t('tramDetails.backToHome') }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import TramCard from '@/components/TramCard.vue'
import HeroSection from '@/components/HeroSection.vue'
import type { BookingType, TramCategory } from '@/types/tram'
import { getAllTramsWithTranslations, getTramWithTranslations } from '@/utils/tramHelper'
import { buildLocalizedRoute } from '@/utils/localeRouting'

const { locale, t } = useI18n()
const route = useRoute()

const tram = computed(() => {
  const id = route.params.id as string
  return getTramWithTranslations(id, locale.value)
})

const relatedTrams = computed(() =>
  getAllTramsWithTranslations(locale.value)
    .filter((entry) => entry.id !== tram.value?.id)
    .slice(0, 2),
)

const categoryKeyMap: Record<TramCategory, string> = {
  luxury_train: 'home.filters.categories.luxuryTrain',
  sightseeing_train: 'home.filters.categories.sightseeingTrain',
  streetcar: 'home.filters.categories.streetcar',
  themed_train: 'home.filters.categories.themedTrain',
  limited_express: 'home.filters.categories.limitedExpress',
}

const bookingTypeKeyMap: Record<BookingType, string> = {
  official_site: 'tramDetails.bookingTypes.officialSite',
  jr_site: 'tramDetails.bookingTypes.jrSite',
  travel_agency: 'tramDetails.bookingTypes.travelAgency',
  local_operator: 'tramDetails.bookingTypes.localOperator',
  not_required: 'tramDetails.bookingTypes.notRequired',
}

const categoryLabel = computed(() => (tram.value ? t(categoryKeyMap[tram.value.category]) : ''))
const bookingTypeLabel = computed(() => (tram.value ? t(bookingTypeKeyMap[tram.value.bookingType]) : ''))

interface SafeCopy {
  noticeTitle: string
  noticeBody: string
  noticeBody2: string
}

const safeCopyByLocale: Record<'en' | 'ja' | 'zh-TW', SafeCopy> = {
  en: {
    noticeTitle: 'Information Notice',
    noticeBody:
      'This page provides general travel reference information and may not reflect the latest operational changes.',
    noticeBody2:
      'For official and most up-to-date details (schedule, fares, service status, and booking rules), please check the operator website via the source and booking links.',
  },
  ja: {
    noticeTitle: '情報に関するご案内',
    noticeBody:
      '本ページは旅行参考情報をまとめたものであり、最新の運行変更を反映していない場合があります。',
    noticeBody2:
      '時刻・運賃・運休情報・予約条件などの最新情報は、出典リンクおよび予約リンク先の公式情報をご確認ください。',
  },
  'zh-TW': {
    noticeTitle: '資訊聲明',
    noticeBody: '本頁內容僅供旅遊參考，可能無法即時反映最新營運異動。',
    noticeBody2: '時刻、票價、停駛資訊與訂位規則，請以出處連結與訂票連結所指向之官方公告為準。',
  },
}

const safeCopy = computed(() => {
  if (locale.value === 'ja') return safeCopyByLocale.ja
  if (locale.value === 'zh-TW') return safeCopyByLocale['zh-TW']
  return safeCopyByLocale.en
})
</script>
