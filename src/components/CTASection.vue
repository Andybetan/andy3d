<script setup>
import { inject } from 'vue'
import AppButton from './AppButton.vue'

const { t } = inject('i18n')
</script>

<template>
  <section id="contact" class="section-padding bg-linear-to-b from-surface-800 to-surface-900">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
        {{ t('cta.title') }}
      </h2>
      <p class="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
        {{ t('cta.subtitle') }}
      </p>
      <AppButton variant="primary" size="lg">
        {{ t('cta.button') }}
      </AppButton>
    </div>
  </section>
</template>
