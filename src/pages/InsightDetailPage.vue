<template>
  <main class="bg-background px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-4xl">
      <template v-if="article">
        <header class="mb-10">
          <router-link
            :to="buildLocalizedRoute('/insights', locale)"
            class="mb-4 inline-block font-body text-sm text-accent hover:text-accent-dark"
          >
            {{ pageText.backToList }}
          </router-link>
          <h1 class="mb-4 font-heading text-4xl font-bold text-primary">{{ article.content.title }}</h1>
          <p class="font-body text-lg leading-8 text-gray-700">{{ article.content.intro }}</p>
        </header>

        <article class="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <section class="mb-8">
            <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ article.content.sec1Title }}</h2>
            <p class="font-body leading-8 text-gray-700">{{ article.content.sec1Body }}</p>
          </section>

          <section class="mb-8">
            <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ article.content.sec2Title }}</h2>
            <ul class="list-disc space-y-2 pl-5 font-body text-gray-700">
              <li v-for="item in article.content.sec2Items" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section>
            <h2 class="mb-3 font-heading text-2xl font-bold text-primary">{{ article.content.sec3Title }}</h2>
            <p class="font-body leading-8 text-gray-700">{{ article.content.sec3Body }}</p>
          </section>
        </article>
      </template>

      <template v-else>
        <section class="rounded-2xl border border-gray-200 bg-white p-8 text-center">
          <h1 class="mb-3 font-heading text-3xl font-bold text-primary">{{ pageText.notFoundTitle }}</h1>
          <p class="mb-6 font-body text-gray-700">{{ pageText.notFoundDesc }}</p>
          <router-link
            :to="buildLocalizedRoute('/insights', locale)"
            class="font-body font-semibold text-accent hover:text-accent-dark"
          >
            {{ pageText.backToList }}
          </router-link>
        </section>
      </template>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getInsightBySlug } from '@/data/insights'
import { buildLocalizedRoute } from '@/utils/localeRouting'

const route = useRoute()
const { locale } = useI18n()

const pageText = computed(() => {
  if (locale.value === 'ja') {
    return {
      backToList: '記事一覧へ戻る',
      notFoundTitle: '記事が見つかりません',
      notFoundDesc: '指定された記事は存在しないか、削除された可能性があります。',
    }
  }

  if (locale.value === 'zh-TW') {
    return {
      backToList: '返回文章列表',
      notFoundTitle: '找不到文章',
      notFoundDesc: '你要查看的文章不存在，或可能已被移除。',
    }
  }

  return {
    backToList: 'Back to Insights',
    notFoundTitle: 'Article Not Found',
    notFoundDesc: 'The requested article does not exist or may have been removed.',
  }
})

const slug = computed(() => (typeof route.params.slug === 'string' ? route.params.slug : ''))
const article = computed(() => (slug.value ? getInsightBySlug(slug.value, locale.value) : undefined))
</script>
