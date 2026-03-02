<template>
  <header class="bg-primary-dark text-white shadow-lg">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="flex items-center gap-2 group">
          <span class="text-2xl font-heading font-bold text-accent group-hover:text-accent-light transition-colors">
            🚊
          </span>
          <span class="hidden sm:block text-xl font-heading font-semibold text-white group-hover:text-accent-light transition-colors">
            Japan Trams
          </span>
        </router-link>

        <ul class="flex gap-4 sm:gap-8 items-center">
          <li>
            <router-link
              :to="localizedPath('/')"
              class="font-body text-sm sm:text-base hover:text-accent transition-colors duration-200"
              :class="{ 'text-accent': isActive('/') }"
            >
              {{ $t('nav.home') }}
            </router-link>
          </li>
          <li>
            <router-link
              :to="localizedPath('/about')"
              class="font-body text-sm sm:text-base hover:text-accent transition-colors duration-200"
              :class="{ 'text-accent': isActive('/about') }"
            >
              {{ $t('nav.about') }}
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
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}

const localizedPath = (path: string) => {
  return path
}
</script>

<style scoped></style>
