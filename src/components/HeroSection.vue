<template>
  <section
    class="relative w-full h-96 sm:h-500 lg:h-600 bg-cover bg-center overflow-hidden"
    :style="{
      backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.5), rgba(15, 15, 15, 0.6)), url('${imageUrl}')`,
    }"
  >
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="font-body text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
        {{ subtitle }}
      </p>
      <button
        v-if="ctaText && ctaLink"
        @click="navigateTo"
        class="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-primary-dark font-heading font-bold rounded-lg hover:bg-accent-light transition-colors duration-200 text-sm sm:text-base"
      >
        {{ ctaText }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
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

const router = useRouter()

const navigateTo = () => {
  if (props.ctaLink) {
    router.push(props.ctaLink)
  }
}
</script>

<style scoped></style>
