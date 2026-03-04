<script setup>
import { inject } from 'vue'

const { t, locale, setLocale } = inject('i18n')
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-surface-900/80 backdrop-blur-md border-b border-slate-700/50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#" class="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
        Andy<span class="text-cyan-400">3D</span>
      </a>
      <nav class="flex items-center gap-6 text-sm">
        <a href="#gallery" class="text-slate-400 hover:text-white transition-colors">{{ t('nav.creations') }}</a>
        <a href="#custom" class="text-slate-400 hover:text-white transition-colors">{{ t('nav.custom') }}</a>
        <a href="#contact" class="text-slate-400 hover:text-white transition-colors">{{ t('nav.contact') }}</a>
        <div class="flex items-center gap-1 border-l border-slate-600 pl-4">
          <button
            type="button"
            :class="['px-2 py-1 rounded text-xs font-medium transition-colors', locale === 'en' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 hover:text-slate-300']"
            @click="setLocale('en')"
          >
            EN
          </button>
          <button
            type="button"
            :class="['px-2 py-1 rounded text-xs font-medium transition-colors', locale === 'es' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 hover:text-slate-300']"
            @click="setLocale('es')"
          >
            ES
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
