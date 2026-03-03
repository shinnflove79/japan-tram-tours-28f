<template>
  <section class="relative h-96 w-full overflow-hidden bg-cover bg-center sm:h-500 lg:h-600" :style="heroBackgroundStyle">
    <div class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
      <h1 class="mb-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="mb-8 max-w-2xl font-body text-lg text-gray-200 sm:text-xl">
        {{ subtitle }}
      </p>
      <button
        v-if="ctaText && ctaLink"
        @click="navigateTo"
        class="rounded-lg bg-accent px-6 py-3 font-heading text-sm font-bold text-primary-dark transition-colors duration-200 hover:bg-accent-light sm:px-8 sm:py-4 sm:text-base"
      >
        {{ ctaText }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  title: string
  subtitle?: string
  imageUrl: string
  ctaText?: string
  ctaLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  subtitle: undefined,
  ctaText: undefined,
  ctaLink: undefined,
})

const fallbackHeroImage = '/images/hero-placeholder.svg'

const heroBackgroundStyle = computed(() => ({
  backgroundImage:
    `linear-gradient(rgba(15, 15, 15, 0.5), rgba(15, 15, 15, 0.6)), ` +
    `url('${props.imageUrl}'), ` +
    `url('${fallbackHeroImage}')`,
}))

const router = useRouter()

const navigateTo = () => {
  if (props.ctaLink) {
    router.push(props.ctaLink)
  }
}
</script>
