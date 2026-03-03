<template>
  <header class="bg-primary-dark text-white shadow-lg">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="flex items-center gap-2 group">
          <span class="text-2xl font-heading font-bold text-accent group-hover:text-accent-light transition-colors">
            🚊
          </span>
          <span class="hidden sm:block text-xl font-heading font-semibold text-white group-hover:text-accent-light transition-colors">
            {{ t('footer.brand') }}
          </span>
        </router-link>

        <ul class="flex gap-4 sm:gap-8 items-center">
          <li>
            <router-link
              to="/"
              class="font-body text-sm sm:text-base hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark rounded-sm transition-colors duration-200"
              :class="{ 'text-accent': isActive('/') }"
            >
              {{ $t('nav.home') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="font-body text-sm sm:text-base hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark rounded-sm transition-colors duration-200"
              :class="{ 'text-accent': isActive('/about') }"
            >
              {{ $t('nav.about') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/insights"
              class="font-body text-sm sm:text-base hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark rounded-sm transition-colors duration-200"
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
  return route.path === path
}

</script>
