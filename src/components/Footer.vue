<template>
  <footer class="border-t border-accent/20 bg-secondary text-gray-300">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="mb-8 grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
        <div>
          <h3 class="mb-2 font-heading text-lg font-bold text-white">{{ brandText }}</h3>
          <p class="font-body text-sm text-gray-400">{{ brandDescText }}</p>
        </div>

        <div>
          <h4 class="mb-4 font-heading font-bold text-white">{{ quickLinksText }}</h4>
          <nav :aria-label="quickLinksText">
            <ul class="space-y-2 font-body text-sm md:flex md:items-center md:gap-4 md:space-y-0">
              <li>
                <router-link
                  to="/"
                  class="rounded-sm text-gray-400 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  {{ homeText }}
                </router-link>
              </li>
              <li>
                <router-link
                  to="/about"
                  class="rounded-sm text-gray-400 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  {{ aboutText }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h4 class="mb-4 font-heading font-bold text-white">{{ contactTitleText }}</h4>
          <p class="break-words font-body text-sm text-gray-400">
            <a
              :href="mailtoLink"
              class="rounded-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              {{ contactEmailText }}
            </a>
          </p>
        </div>
      </div>

      <div class="border-t border-accent/20 pt-8">
        <p class="text-center font-body text-sm text-gray-500">{{ copyrightText }}</p>
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
const currentYear = new Date().getFullYear()

const asText = (value: unknown, fallback = ''): string => {
  if (typeof value === 'string') return value
  if (value == null) return fallback
  return String(value)
}

const brandText = computed(() => asText(t('footer.brand'), 'Japan Trams'))
const brandDescText = computed(() => asText(t('footer.brandDesc')))
const quickLinksText = computed(() => asText(t('footer.quickLinks'), 'Quick Links'))
const contactTitleText = computed(() => asText(t('footer.followUs'), 'Contact Us'))
const homeText = computed(() => asText(t('nav.home'), 'Home'))
const aboutText = computed(() => asText(t('nav.about'), 'About'))

const contactEmailText = computed(() => asText(t('footer.contactEmail'), 'shinnflove79@gmail.com'))
const mailtoLink = computed(() => `mailto:${contactEmailText.value}`)

const copyrightText = computed(() => {
  const raw = asText(t('footer.copyright'), `© ${currentYear} Japan Trams. All rights reserved.`)

  if (raw.includes('{year}')) {
    return raw.replace('{year}', String(currentYear))
  }

  const replaced = raw.replace(/\b20\d{2}\b/, String(currentYear))
  return replaced || `© ${currentYear} Japan Trams. All rights reserved.`
})
</script>
