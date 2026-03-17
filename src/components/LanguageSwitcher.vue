<template>
  <div class="relative">
    <button
      type="button"
      aria-haspopup="menu"
      :aria-expanded="showDropdown"
      aria-label="Select language"
      @click="showDropdown = !showDropdown"
      class="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 transition-colors hover:bg-primary-dark"
    >
      <span class="text-sm font-semibold">🌐</span>
      <span class="hidden text-sm font-body sm:inline">{{ currentLanguageName }}</span>
    </button>

    <div
      v-if="showDropdown"
      role="menu"
      class="absolute right-0 z-50 mt-2 rounded-lg border border-gray-200 bg-white shadow-lg"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        type="button"
        role="menuitemradio"
        :aria-checked="currentLocale === lang.code"
        @click="setLanguage(lang.code)"
        :class="[
          'block w-full px-4 py-2 text-left text-sm font-body transition-colors hover:bg-gray-100',
          currentLocale === lang.code ? 'bg-accent/20 font-semibold text-accent' : 'text-gray-700',
        ]"
      >
        {{ lang.name }}
      </button>
    </div>

    <div v-if="showDropdown" class="fixed inset-0 z-40" @click="showDropdown = false" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import {
  buildLocalizedPath,
  stripLocalePrefix,
  type SupportedLocale,
} from '@/utils/localeRouting'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()
const showDropdown = ref(false)

const languages: Array<{ code: SupportedLocale; name: string }> = [
  { code: 'en', name: 'English' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'ja', name: '日本語' },
]

const currentLocale = computed(() => locale.value as SupportedLocale)

const currentLanguageName = computed(() => {
  const current = languages.find((entry) => entry.code === currentLocale.value)
  return current?.name ?? 'English'
})

const setLanguage = (code: SupportedLocale) => {
  localStorage.setItem('app-language', code)
  void router.push({
    path: buildLocalizedPath(stripLocalePrefix(route.path).basePath, code),
    query: route.query,
    hash: route.hash,
  })
  showDropdown.value = false
}
</script>
