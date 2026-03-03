<template>
  <footer class="bg-secondary text-gray-300 border-t border-accent/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
        <!-- Brand Section -->
        <div>
          <h3 class="font-heading text-lg font-bold text-white mb-2">{{ t('footer.brand') }}</h3>
          <p class="font-body text-sm text-gray-400">
            {{ t('footer.brandDesc') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-heading font-bold text-white mb-4">{{ t('footer.quickLinks') }}</h4>
          <nav :aria-label="t('footer.quickLinks')">
            <ul class="font-body text-sm space-y-2 md:flex md:items-center md:gap-4 md:space-y-0">
              <li>
                <router-link
                  to="/"
                  class="text-gray-400 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm transition-colors"
                >
                  {{ t('nav.home') }}
                </router-link>
              </li>
              <li>
                <router-link
                  to="/about"
                  class="text-gray-400 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm transition-colors"
                >
                  {{ t('nav.about') }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-heading font-bold text-white mb-4">{{ t('footer.followUs') }}</h4>
          <p class="font-body text-sm text-gray-400 break-words">
            <a
              :href="mailtoLink"
              class="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm transition-colors"
            >
              {{ contactEmail }}
            </a>
          </p>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-accent/20 pt-8">
        <p class="font-body text-center text-sm text-gray-500">
          {{ copyrightText }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'AppFooter',
})

const { t } = useI18n()

const contactEmail = computed(() => t('footer.contactEmail'))
const mailtoLink = computed(() => `mailto:${contactEmail.value}`)
const currentYear = new Date().getFullYear()
const copyrightText = computed(() =>
  t('footer.copyright', { year: currentYear }).replace(/\b20\d{2}\b/, String(currentYear)),
)
</script>
