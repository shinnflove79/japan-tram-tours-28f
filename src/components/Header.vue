<template>
  <header class="bg-primary-dark text-white shadow-lg">
    <nav class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <router-link to="/" class="group flex items-center gap-2">
          <span class="text-2xl font-heading font-bold text-accent transition-colors group-hover:text-accent-light">
            🚊
          </span>
          <span
            class="hidden text-xl font-heading font-semibold text-white transition-colors group-hover:text-accent-light sm:block"
          >
            {{ t('footer.brand') }}
          </span>
        </router-link>

        <ul class="flex items-center gap-4 sm:gap-8">
          <li>
            <router-link
              to="/"
              class="rounded-sm font-body text-sm transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark sm:text-base"
              :class="{ 'text-accent': isActive('/') }"
            >
              {{ $t('nav.home') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="rounded-sm font-body text-sm transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark sm:text-base"
              :class="{ 'text-accent': isActive('/about') }"
            >
              {{ $t('nav.about') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/insights"
              class="rounded-sm font-body text-sm transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark sm:text-base"
              :class="{ 'text-accent': isActive('/insights') }"
            >
              {{ insightsText }}
            </router-link>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

defineOptions({
  name: 'AppHeader',
})

const { t, locale } = useI18n()
const route = useRoute()

const insightsText = computed(() => {
  if (locale.value === 'ja') return '知識'
  if (locale.value === 'zh-TW') return '知識'
  return 'Insights'
})

const isActive = (path: string) => {
  if (path === '/insights') {
    return route.path === '/insights' || route.path.startsWith('/insights/')
  }
  return route.path === path
}
</script>
