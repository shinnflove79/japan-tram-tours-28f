<template>
  <div class="relative">
    <button
      @click="showDropdown = !showDropdown"
      class="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-primary-dark transition-colors"
    >
      <span class="text-lg">🌐</span>
      <span class="hidden sm:inline text-sm font-body">{{ currentLanguageName }}</span>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="showDropdown"
      class="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="setLanguage(lang.code)"
        :class="[
          'block w-full px-4 py-2 text-left text-sm font-body hover:bg-gray-100 transition-colors',
          currentLocale === lang.code ? 'bg-accent/20 text-accent font-semibold' : 'text-gray-700',
        ]"
      >
        {{ lang.name }} {{ lang.flag }}
      </button>
    </div>

    <!-- Close dropdown when clicking outside -->
    <div v-if="showDropdown" class="fixed inset-0 z-40" @click="showDropdown = false" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'

const { locale } = useI18n()
const showDropdown = ref(false)

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
]

const currentLocale = computed(() => locale.value)

const currentLanguageName = computed(() => {
  const current = languages.find((l) => l.code === locale.value)
  return current?.name || 'English'
})

const setLanguage = (code: string) => {
  locale.value = code
  localStorage.setItem('app-language', code)
  showDropdown.value = false
}
</script>

<style scoped></style>
