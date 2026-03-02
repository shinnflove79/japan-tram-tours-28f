<template>
  <div class="relative w-full max-w-3xl mx-auto">
    <!-- use an SVG map of Japan as background -->
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Japan_blank_map.svg"
      alt="Map of Japan"
      class="w-full h-auto"
    />

    <!-- markers positioned by percentage coords -->
    <button
      v-for="tram in trams"
      :key="tram.id"
      @click="select(tram)"
      :style="markerStyle(tram)"
      class="absolute text-red-500 hover:text-red-700"
    >
      📍
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Tram } from '@/types/tram'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ trams: Tram[] }>()
const emits = defineEmits<{ (e: 'select', tram: Tram): void }>()

// approximate coordinates (percentages) for each region/prefecture
const regionCoords: Record<string, { x: number; y: number }> = {
  'Kanagawa Prefecture': { x: 60, y: 75 },
  Kyoto: { x: 55, y: 60 },
  'Nagasaki Prefecture': { x: 15, y: 85 },
  'Hiroshima Prefecture': { x: 30, y: 75 },
  'Nagano Prefecture': { x: 50, y: 55 },
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