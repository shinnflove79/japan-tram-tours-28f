<template>
  <router-link :to="`/tram/${tram.id}`" class="group block h-full">
    <div class="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      <!-- Image Container -->
      <div class="relative h-64 overflow-hidden bg-gray-200">
        <img
          :src="tram.imageUrl"
          :alt="tram.name"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p class="text-white text-sm font-body">Explore →</p>
        </div>
      </div>

      <!-- Content Container -->
      <div class="p-6 flex flex-col flex-grow">
        <h3 class="font-heading text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
          {{ tram.name }}
        </h3>
        <p class="text-accent text-sm font-body font-semibold mb-3">{{ tram.nameJa }}</p>
        <p class="text-xs font-body text-primary/80 mb-2">{{ categoryLabel }}</p>
        <p class="text-gray-600 text-sm font-body mb-4">📍 {{ tram.location }}</p>
        <p class="text-gray-700 font-body text-sm flex-grow mb-4 line-clamp-3">
          {{ tram.description }}
        </p>
        <div class="flex items-center justify-between pt-4 border-t border-gray-200">
          <span class="text-xs font-body text-gray-500">{{ $t('tramDetails.established') }} {{ tram.yearEstablished }}</span>
          <span class="text-accent text-sm font-heading font-bold group-hover:text-accent-light transition-colors">
            {{ $t('tramCard.learnMore') }}
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { Tram } from '@/types/tram'

interface Props {
  tram: Tram
}

const props = defineProps<Props>()
useI18n()

const categoryLabelMap: Record<Tram['category'], string> = {
  luxury_train: '豪华观光列车',
  sightseeing_train: '观光列车',
  streetcar: '路面电车',
  themed_train: '主题列车',
  limited_express: '特急列车',
}

const categoryLabel = computed(() => categoryLabelMap[props.tram.category])
</script>

<style scoped></style>
