<script setup>
import { inject } from 'vue'
import AppButton from './AppButton.vue'

const { t } = inject('i18n')
</script>

<template>
  <section id="custom" class="section-padding bg-surface-800/50">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
        {{ t('custom.title') }}
      </h2>
      <p class="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
        {{ t('custom.text') }}
      </p>
      <AppButton variant="primary" size="lg" href="#contact">
        {{ t('custom.button') }}
      </AppButton>
    </div>
  </section>
</template>
