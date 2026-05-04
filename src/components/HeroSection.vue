<script setup>
import { inject } from 'vue'
import AppButton from './AppButton.vue'

const { t } = inject('i18n')
</script>

<template>
  <section class="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden hero-gradient">
    <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
    <div
      class="absolute top-[12%] right-[-5%] w-[min(52vw,28rem)] h-[min(52vw,28rem)] rounded-full bg-amber-500/[0.07] blur-3xl pointer-events-none"
      aria-hidden="true"
    />
    <div class="section-padding relative z-10 w-full pb-8 lg:pb-12">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div class="flex-1 text-center lg:text-left min-w-0">
          <h1 class="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            <span class="bg-linear-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent">
              {{ t('hero.title1') }}
            </span>
            <br />
            <span class="text-cyan-400">{{ t('hero.title2') }}</span>
          </h1>
          <p class="mt-6 text-base sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {{ t('hero.subtitle') }}
          </p>
          <div class="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <AppButton variant="primary" size="md" href="#coleccion">
              {{ t('hero.ctaShowcase') }}
            </AppButton>
            <AppButton variant="outline" size="md" href="#custom">
              {{ t('hero.requestFigure') }}
            </AppButton>
          </div>
          <p class="mt-5 text-sm">
            <a
              href="#gallery"
              class="text-slate-500 hover:text-cyan-400/90 underline underline-offset-4 decoration-slate-600 hover:decoration-cyan-400/60 transition-colors"
            >
              {{ t('hero.archiveLink') }}
            </a>
          </p>

          <!-- Mesa coleccionista (móvil): misma escena 3D + carta -->
          <div class="lg:hidden mt-10 flex justify-center items-end gap-3 sm:gap-5 max-w-md mx-auto">
            <div class="relative w-[46%] shrink-0">
              <div
                class="rounded-2xl overflow-hidden border border-cyan-500/25 shadow-xl shadow-cyan-500/10 ring-1 ring-white/10 bg-surface-800"
              >
                <img
                  src="/mimikyu-hero.png"
                  :alt="t('hero.cardTitle')"
                  class="w-full aspect-square object-cover"
                />
              </div>
              <p class="mt-2 text-[10px] uppercase tracking-wider text-cyan-500/90 font-semibold text-center">
                {{ t('fusion.badgePrint') }}
              </p>
            </div>
            <div class="relative w-[40%] shrink-0 pb-6">
              <div
                class="rounded-xl overflow-hidden border-2 border-amber-400/45 shadow-2xl shadow-black/40 -rotate-[9deg] bg-surface-950"
              >
                <img
                  src="/cardmarket/piplup-098-094.png"
                  :alt="t('hero.collageCardAlt')"
                  class="w-full aspect-[63/88] object-cover"
                />
              </div>
              <p class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-max max-w-[11rem] text-[10px] text-center text-amber-200/95 font-medium leading-tight">
                {{ t('hero.collageCaption') }}
              </p>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex flex-1 w-full max-w-xl lg:max-w-none justify-center min-w-0">
          <div class="relative w-full aspect-square max-w-md">
            <div
              class="group absolute inset-0 rounded-3xl bg-linear-to-br from-surface-700 to-surface-800 border border-slate-600/50 overflow-hidden animate-float shadow-2xl shadow-cyan-500/10 ring-1 ring-amber-500/10"
            >
              <img
                src="/mimikyu-hero.png"
                :alt="t('hero.cardTitle')"
                class="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
              <div
                class="absolute bottom-4 left-4 right-4 rounded-xl bg-surface-900/80 backdrop-blur-sm border border-slate-600/30 px-4 py-3 flex flex-col items-center justify-center text-center min-h-22 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
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
            <!-- Carta TCG superpuesta: mismo escritorio del coleccionista -->
            <div class="absolute bottom-[6%] -right-4 xl:-right-6 w-[min(42%,11rem)] z-10 drop-shadow-2xl">
              <div class="rounded-xl overflow-hidden border-2 border-amber-400/50 bg-surface-950 -rotate-[11deg] hover:-rotate-[8deg] transition-transform duration-300 shadow-2xl shadow-black/50">
                <img
                  src="/cardmarket/piplup-098-094.png"
                  :alt="t('hero.collageCardAlt')"
                  class="w-full aspect-[63/88] object-cover"
                />
              </div>
              <p class="mt-3 text-center text-[11px] font-medium text-amber-200/95 px-1 leading-snug">
                {{ t('hero.collageCaption') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
