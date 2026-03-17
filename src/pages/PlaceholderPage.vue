<template>
  <div class="min-h-screen flex flex-col bg-background">
    <!-- Placeholder Hero -->
    <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="font-heading text-5xl font-bold text-primary mb-4">{{ title }}</h1>
        <p class="font-body text-xl text-gray-600">{{ description }}</p>
      </div>
    </section>

    <!-- Placeholder Content -->
    <section class="flex-grow py-24 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-8">
          <span class="text-7xl">🚧</span>
        </div>

        <h2 class="font-heading text-3xl font-bold text-primary mb-4">{{ $t('placeholder.comingSoon') }}</h2>

        <p class="font-body text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {{ $t('placeholder.comingSoonDesc') }}
        </p>

        <div class="bg-accent/10 border-2 border-accent rounded-2xl p-8 inline-block mb-8">
          <p class="font-body text-gray-700">
            <span class="font-bold text-accent">{{ $t('placeholder.suggestion') }}</span><br />
            {{ $t('placeholder.suggestionText') }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            :to="buildLocalizedRoute('/', locale)"
            class="px-8 py-3 bg-accent text-primary-dark font-heading font-bold rounded-lg hover:bg-accent-light transition-colors inline-block"
          >
            {{ $t('placeholder.backToHome') }}
          </router-link>

          <router-link
            :to="buildLocalizedRoute('/gallery', locale)"
            class="px-8 py-3 bg-primary text-white font-heading font-bold rounded-lg hover:bg-secondary transition-colors inline-block"
          >
            {{ $t('placeholder.exploreTrams') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { buildLocalizedRoute } from '@/utils/localeRouting'

interface Props {
  title?: string
  description?: string
}

const { locale } = useI18n()

withDefaults(defineProps<Props>(), {
  title: 'Coming Soon',
  description: 'This page is being developed. Check back soon!',
})
</script>
