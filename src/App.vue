<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import GallerySection from './components/GallerySection.vue'
import ProcessSection from './components/ProcessSection.vue'
import CustomOrderSection from './components/CustomOrderSection.vue'
import TikTokSection from './components/TikTokSection.vue'
import CTASection from './components/CTASection.vue'
</script>

<template>
  <div class="min-h-screen">
    <AppHeader />
    <main class="pt-16">
      <HeroSection />
      <GallerySection />
      <ProcessSection />
      <CustomOrderSection />
      <TikTokSection />
      <CTASection />
    </main>
  </div>
</template>
