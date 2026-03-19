<template>
  <main class="bg-background px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl">
      <header class="mb-10">
        <h1 class="mb-4 font-heading text-4xl font-bold text-primary">{{ pageText.title }}</h1>
        <p class="font-body text-lg text-gray-700">{{ pageText.subtitle }}</p>
      </header>

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="article in localizedInsights"
          :key="article.slug"
          class="rounded-2xl border border-gray-200 bg-white p-6"
        >
          <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ article.content.title }}</h2>
          <p class="mb-5 font-body leading-7 text-gray-700">{{ article.content.excerpt }}</p>
          <router-link
            :to="buildLocalizedRoute(`/insights/${article.slug}`, locale)"
            class="inline-flex items-center font-body font-semibold text-accent transition-colors hover:text-accent-dark"
          >
            {{ pageText.readMore }}
          </router-link>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getInsightsForLocale, type InsightsLocale } from '@/data/insights'
import { buildLocalizedRoute } from '@/utils/localeRouting'

const { locale } = useI18n()

const pageText = computed(() => {
  if (locale.value === 'ja') {
    return {
      title: 'Rail Insights',
      subtitle: '日本の路面電車、観光列車、鉄道文化に関する実用記事と基礎ガイドをまとめています。',
      readMore: '記事を読む',
    }
  }

  if (locale.value === 'zh-TW') {
    return {
      title: 'Rail Insights',
      subtitle: '整理日本路面電車、觀光列車與鐵道文化的實用文章與入門指南。',
      readMore: '閱讀文章',
    }
  }

  return {
    title: 'Rail Insights',
    subtitle: 'Knowledge articles about Japan trams, rail culture, and route history.',
    readMore: 'Read Article',
  }
})

const localizedInsights = computed(() => getInsightsForLocale(locale.value as InsightsLocale))
</script>
