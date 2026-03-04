<script setup>
import { inject, computed } from 'vue'
import GalleryCard from './GalleryCard.vue'

const { t, locale } = inject('i18n')
const creations = computed(() => {
  locale.value
  return t('gallery.items')
})
</script>

<template>
  <section id="gallery" class="section-padding bg-surface-800/50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {{ t('gallery.title') }}
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          {{ t('gallery.subtitle') }}
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <GalleryCard
          v-for="(item, i) in creations"
          :key="i"
          :title="item.title"
          :description="item.description"
          :image-alt="item.title"
        />
      </div>
    </div>
  </section>
</template>
