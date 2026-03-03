<template>
  <router-link :to="`/tram/${tram.id}`" class="group block h-full">
    <div
      class="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div class="relative h-64 overflow-hidden bg-gray-200">
        <img
          :src="tram.imageUrl"
          :alt="tram.name"
          @error="handleImageError"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <p class="text-sm font-body text-white">{{ t('tramCard.learnMore') }}</p>
        </div>
      </div>

      <div class="flex flex-grow flex-col p-6">
        <h3 class="mb-1 font-heading text-xl font-bold text-primary transition-colors group-hover:text-accent">
          {{ tram.name }}
        </h3>
        <p class="mb-3 text-sm font-body font-semibold text-accent">{{ tram.nameJa }}</p>
        <p class="mb-2 text-xs font-body text-primary/80">{{ categoryLabel }}</p>
        <p class="mb-4 text-sm font-body text-gray-600">Location: {{ tram.location }}</p>
        <p class="mb-4 flex-grow line-clamp-3 text-sm font-body text-gray-700">
          {{ tram.description }}
        </p>
        <div class="flex items-center justify-between border-t border-gray-200 pt-4">
          <span class="text-xs font-body text-gray-500">
            {{ t('tramDetails.established') }} {{ tram.yearEstablished }}
          </span>
          <span class="text-sm font-heading font-bold text-accent transition-colors group-hover:text-accent-light">
            {{ t('tramCard.learnMore') }}
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Tram } from '@/types/tram'

interface Props {
  tram: Tram
}

const props = defineProps<Props>()
const { t } = useI18n()

const fallbackCardImage = '/images/tram-placeholder.svg'

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  if (img.dataset.fallbackApplied === 'true') {
    return
  }

  img.dataset.fallbackApplied = 'true'
  img.src = fallbackCardImage
}

const categoryKeyMap: Record<Tram['category'], string> = {
  luxury_train: 'home.filters.categories.luxuryTrain',
  sightseeing_train: 'home.filters.categories.sightseeingTrain',
  streetcar: 'home.filters.categories.streetcar',
  themed_train: 'home.filters.categories.themedTrain',
  limited_express: 'home.filters.categories.limitedExpress',
}

const categoryLabel = computed(() => t(categoryKeyMap[props.tram.category]))
</script>
