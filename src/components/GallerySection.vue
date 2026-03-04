<script setup>
import { inject, computed, ref } from 'vue'
import GalleryCard from './GalleryCard.vue'

const { t, locale } = inject('i18n')
const creations = computed(() => {
  locale.value
  return t('gallery.items')
})

const selectedItem = ref(null)

function openLightbox(item) {
  if (item?.image) selectedItem.value = item
}

function closeLightbox() {
  selectedItem.value = null
}
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
        <div
          v-for="(item, i) in creations"
          :key="i"
          @click="openLightbox(item)"
        >
          <GalleryCard
            :title="item.title"
            :description="item.description"
            :image-alt="item.title"
            :image="item.image"
            :clickable="!!item.image"
          />
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="selectedItem"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-900/95 backdrop-blur-sm"
          @click.self="closeLightbox"
        >
          <div
            class="relative rounded-3xl bg-surface-800 border border-slate-600/50 shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            @click.stop
          >
            <button
              type="button"
              class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-2xl bg-surface-700/90 hover:bg-surface-600 border border-slate-600/50 text-slate-300 hover:text-white transition-colors"
              aria-label="Cerrar"
              @click="closeLightbox"
            >
              <span class="text-xl font-bold leading-none">×</span>
            </button>
            <div class="flex-1 flex items-center justify-center min-h-0 p-4 pt-14">
              <img
                :src="selectedItem.image"
                :alt="selectedItem.title"
                class="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-2xl"
              />
            </div>
            <div class="px-5 py-4 border-t border-slate-600/40 text-center">
              <p class="text-lg font-semibold text-slate-100">{{ selectedItem.title }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
.lightbox-enter-active .relative,
.lightbox-leave-active .relative {
  transition: transform 0.2s ease;
}
.lightbox-enter-from .relative,
.lightbox-leave-to .relative {
  transform: scale(0.95);
}
</style>
