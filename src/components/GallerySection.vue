<script setup>
import { ref } from 'vue'
import GalleryCard from './GalleryCard.vue'

const creations = ref([
  { title: 'Mimikyu figure', description: 'Adorable Pokémon figure with fine details and smooth finish. Perfect for collectors.' },
  { title: 'Samurai statue', description: 'Elegant samurai bust with traditional armor details. A striking display piece.' },
  { title: 'Tridix character', description: 'Original character design brought to life in 3D. Custom pose and expression.' },
  { title: 'Diorama scene', description: 'Miniature scene with multiple elements. Ideal for photography and display.' },
  { title: 'Oreo clicker', description: 'Functional fidget toy inspired by the classic cookie. Satisfying click mechanism.' },
  { title: 'Headphone stand', description: 'Sleek desk accessory to keep your headphones safe and within reach.' },
])
</script>

<template>
  <section id="gallery" class="section-padding bg-surface-800/50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Creations
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          A selection of 3D printed pieces: figures, dioramas and useful objects.
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
