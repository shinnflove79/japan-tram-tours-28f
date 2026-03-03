<template>
  <div class="relative mx-auto w-full max-w-3xl">
    <img
      src="/images/japan-map-placeholder.svg"
      alt="Map of Japan"
      class="h-auto w-full"
      @error="handleMapImageError"
    />

    <button
      v-for="tram in trams"
      :key="tram.id"
      type="button"
      :aria-label="tram.name"
      @click="select(tram)"
      :style="markerStyle(tram)"
      class="absolute text-red-500 hover:text-red-700"
    >
      •
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Tram } from '@/types/tram'

defineProps<{ trams: Tram[] }>()
const emits = defineEmits<{ (e: 'select', tram: Tram): void }>()

const regionCoords: Record<string, { x: number; y: number }> = {
  'Kanagawa Prefecture': { x: 60, y: 75 },
  Kyoto: { x: 55, y: 60 },
  'Nagasaki Prefecture': { x: 15, y: 85 },
  'Hiroshima Prefecture': { x: 30, y: 75 },
  'Nagano Prefecture': { x: 50, y: 55 },
}

const handleMapImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  if (img.dataset.fallbackApplied === 'true') {
    return
  }

  img.dataset.fallbackApplied = 'true'
  img.src = '/images/japan-map-placeholder.svg'
}

function markerStyle(tram: Tram) {
  const parts = tram.location.split(',').map((s) => s.trim())
  const region = parts[1] || parts[0]
  const coord = regionCoords[region] || { x: 50, y: 50 }
  return {
    left: coord.x + '%',
    top: coord.y + '%',
    transform: 'translate(-50%, -100%)',
  }
}

function select(tram: Tram) {
  emits('select', tram)
}
</script>

<style scoped>
button {
  font-size: 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
