<template>
  <div class="w-full px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="`group relative overflow-hidden rounded-2xl bg-gray-200 shadow-md hover:shadow-xl transition-all duration-300 ${getGridClass(index)}`"
      >
        <img
          :src="image.url"
          :alt="image.alt"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div v-if="image.title" class="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p class="text-white font-heading text-lg font-bold">{{ image.title }}</p>
          <p v-if="image.description" class="text-gray-300 font-body text-sm mt-1">{{ image.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Image {
  url: string
  alt: string
  title?: string
  description?: string
}

interface Props {
  images: Image[]
}

withDefaults(defineProps<Props>(), {})

const getGridClass = (index: number) => {
  const classes = ['h-64', 'h-72', 'h-60', 'h-72', 'h-64', 'h-60', 'h-68', 'h-64', 'h-72']
  return classes[index % classes.length]
}
</script>

<style scoped></style>
