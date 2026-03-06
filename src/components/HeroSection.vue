<script setup>
import { inject } from 'vue'
import AppButton from './AppButton.vue'

const { t } = inject('i18n')
</script>

<template>
  <section class="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden hero-gradient">
    <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
    <div class="section-padding relative z-10 w-full">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div class="flex-1 text-center lg:text-left min-w-0">
        <h1 class="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          <span class="bg-linear-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent">
            {{ t('hero.title1') }}
          </span>
          <br />
          <span class="text-cyan-400">{{ t('hero.title2') }}</span>
        </h1>
        <p class="mt-6 text-base sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0">
          {{ t('hero.subtitle') }}
        </p>
        <div class="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
          <AppButton variant="primary" size="md" href="#gallery">
            {{ t('hero.viewCreations') }}
          </AppButton>
          <AppButton variant="outline" size="md" href="#custom">
            {{ t('hero.requestFigure') }}
          </AppButton>
        </div>
      </div>
      <div class="hidden lg:flex flex-1 w-full max-w-xl lg:max-w-none justify-center min-w-0">
        <div
            class="group relative w-full aspect-square max-w-md rounded-3xl bg-linear-to-br from-surface-700 to-surface-800 border border-slate-600/50 flex items-center justify-center overflow-hidden animate-float shadow-2xl shadow-cyan-500/10"
          >
            <img
              src="/mimikyu-hero.png"
              alt="Mimikyu 3D"
              class="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />
            <div class="absolute bottom-4 left-4 right-4 rounded-xl bg-surface-900/80 backdrop-blur-sm border border-slate-600/30 px-4 py-3 flex flex-col items-center justify-center text-center min-h-22 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <p class="text-lg font-semibold text-slate-100">
                {{ t('hero.cardTitle') }}
              </p>
              <p class="text-sm text-slate-400 mt-1">
                {{ t('hero.cardSubtitle') }}
              </p>
              <div class="mt-2 space-y-1 text-[11px] sm:text-xs text-slate-400 text-center">
                <div>
                  <span class="font-semibold text-slate-300 tracking-[0.12em] uppercase mr-1">Filamento</span>
                  <span class="font-mono text-slate-200">PDGE amarillo · PEDGE negro</span>
                </div>
                <div>
                  <span class="font-semibold text-slate-300 tracking-[0.12em] uppercase mr-1">Cuerpo</span>
                  <span class="font-mono text-slate-200">2:56:54 min</span>
                </div>
                <div>
                  <span class="font-semibold text-slate-300 tracking-[0.12em] uppercase mr-1">Base y cola</span>
                  <span class="font-mono text-slate-200">1:13:51 min</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  </section>
</template>
