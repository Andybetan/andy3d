<script setup>
import { ref, provide } from 'vue'
import { getStoredLocale, setStoredLocale, t as translate } from './i18n'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import GallerySection from './components/GallerySection.vue'
import ProcessSection from './components/ProcessSection.vue'
import CustomOrderSection from './components/CustomOrderSection.vue'
import TikTokSection from './components/TikTokSection.vue'
import CTASection from './components/CTASection.vue'

const locale = ref(getStoredLocale())
const setLocale = (l) => {
  locale.value = l
  setStoredLocale(l)
}
const t = (key) => translate(locale.value, key)
provide('i18n', { locale, t, setLocale })
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
