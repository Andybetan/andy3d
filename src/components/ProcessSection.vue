<script setup>
import { inject, computed } from 'vue'


const { t, locale } = inject('i18n')
const steps = computed(() => {
  locale.value
  return t('process.steps')
})
</script>

<template>
  <section class="section-padding bg-surface-900">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {{ t('process.title') }}
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          {{ t('process.subtitle') }}
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="group relative rounded-3xl bg-surface-700/40 border border-slate-600/30 p-6 lg:p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-surface-700/60 hover:shadow-lg hover:shadow-cyan-500/5"
        >
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl text-cyan-400/70 group-hover:text-cyan-400 transition-colors">{{ step.icon }}</span>
            <span class="text-4xl font-bold text-cyan-500/30 group-hover:text-cyan-500/50 transition-colors">{{ step.num }}</span>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">
            {{ step.title }}
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed">
            {{ step.desc }}
          </p>
          <div
            v-if="i < steps.length - 1"
            class="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-slate-600 group-hover:bg-cyan-500/50 transition-colors -translate-y-1/2"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>
