<script setup>
import { inject, onMounted, onUnmounted, ref } from 'vue'
import AppButton from './AppButton.vue'

const { t } = inject('i18n')

const printDetailOpen = ref(false)

function openPrintDetail() {
  printDetailOpen.value = true
}

function closePrintDetail() {
  printDetailOpen.value = false
}

function onKeydown(e) {
  if (e.key === 'Escape') closePrintDetail()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
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

          <!-- Mesa coleccionista (móvil): dos columnas iguales — mismo tamaño que Mimikyu -->
          <div class="lg:hidden mt-10 grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto items-start">
            <div class="relative w-full min-w-0 flex flex-col">
              <div class="relative w-full aspect-square rounded-2xl overflow-hidden border border-cyan-500/25 shadow-xl shadow-cyan-500/10 ring-1 ring-white/10 bg-surface-800">
                <img
                  src="/mimikyu-hero.png"
                  :alt="t('hero.cardTitle')"
                  class="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <button
                  type="button"
                  class="absolute inset-0 z-10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded-2xl"
                  :aria-expanded="printDetailOpen"
                  aria-controls="hero-print-detail-mobile"
                  @click="openPrintDetail"
                >
                  <span class="sr-only">{{ t('hero.printTapHint') }}</span>
                </button>
                <Transition name="hero-overlay">
                  <div
                    v-if="printDetailOpen"
                    id="hero-print-detail-mobile"
                    class="absolute inset-0 z-20 flex items-center justify-center p-3 bg-black/75 backdrop-blur-sm rounded-2xl"
                    role="dialog"
                    aria-modal="true"
                    @click.self="closePrintDetail"
                  >
                    <div
                      class="relative max-h-[min(72vh,24rem)] overflow-y-auto rounded-xl bg-surface-900/95 border border-slate-600/50 px-4 py-5 pt-10 text-center shadow-xl w-full max-w-[17rem]"
                      @click.stop
                    >
                      <button
                        type="button"
                        class="absolute top-2 right-2 z-10 w-9 h-9 flex items-center justify-center rounded-xl bg-surface-700/95 hover:bg-surface-600 border border-slate-600/50 text-slate-200 hover:text-white text-lg leading-none font-bold transition-colors"
                        :aria-label="t('hero.closePrintDetail')"
                        @click="closePrintDetail"
                      >
                        ×
                      </button>
                      <p class="text-base font-semibold text-slate-100">
                        {{ t('hero.cardTitle') }}
                      </p>
                      <p class="text-xs text-slate-400 mt-1 leading-snug">
                        {{ t('hero.cardSubtitle') }}
                      </p>
                      <div class="mt-3 space-y-1.5 text-[10px] sm:text-[11px] text-slate-400 text-left">
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
                </Transition>
              </div>
              <p class="mt-2 text-[10px] uppercase tracking-wider text-cyan-500/90 font-semibold text-center">
                {{ t('fusion.badgePrint') }}
              </p>
              <p class="mt-1 text-[10px] text-slate-500 text-center leading-tight px-1">
                {{ t('hero.printTapHint') }}
              </p>
            </div>

            <div class="relative w-full min-w-0 flex flex-col">
              <Transition name="hero-tcg">
                <div v-show="!printDetailOpen" class="flex flex-col">
                  <div
                    class="relative w-full aspect-square rounded-2xl overflow-visible ring-1 ring-amber-500/15 bg-surface-900/40"
                  >
                    <!-- Abanico contenido en el mismo cuadrado que Mimikyu -->
                    <div class="absolute inset-x-1.5 inset-y-2 bottom-8 flex items-end justify-center">
                      <div class="relative w-full h-[92%]">
                        <div
                          class="absolute bottom-0 left-[2%] w-[54%] rounded-lg overflow-hidden border border-amber-400/40 shadow-lg shadow-black/45 rotate-[11deg] opacity-[0.97] bg-surface-950 origin-bottom-left z-0"
                        >
                          <img
                            src="/cardmarket/fezandipiti-ex-sir.png"
                            :alt="t('hero.collageCardAlt2')"
                            class="w-full aspect-[63/88] object-cover"
                          />
                        </div>
                        <div
                          class="absolute bottom-0 right-[0%] w-[58%] rounded-xl overflow-hidden border-2 border-amber-400/45 shadow-xl shadow-black/45 -rotate-[8deg] bg-surface-950 z-10"
                        >
                          <img
                            src="/cardmarket/piplup-098-094.png"
                            :alt="t('hero.collageCardAlt')"
                            class="w-full aspect-[63/88] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="mt-2 text-[10px] uppercase tracking-wider text-cyan-500/90 font-semibold text-center">
                    {{ t('fusion.badgeTcg') }}
                  </p>
                  <p class="mt-1 text-[10px] text-slate-500 text-center leading-tight px-1">
                    {{ t('hero.tcgColumnHint') }}
                  </p>
                </div>
              </Transition>
              <!-- Hueco cuando el panel Mimikyu oculta las cartas: mantiene alineación con la columna izquierda -->
              <div v-if="printDetailOpen" class="w-full aspect-square rounded-2xl opacity-0 pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div class="hidden lg:flex flex-col flex-1 w-full max-w-xl lg:max-w-none justify-center items-center min-w-0">
          <div class="relative w-full aspect-square max-w-md mx-auto">
            <div
              class="absolute inset-0 rounded-3xl bg-linear-to-br from-surface-700 to-surface-800 border border-slate-600/50 overflow-hidden animate-float shadow-2xl shadow-cyan-500/10 ring-1 ring-amber-500/10"
            >
              <img
                src="/mimikyu-hero.png"
                :alt="t('hero.cardTitle')"
                class="absolute inset-0 w-full h-full object-cover rounded-3xl pointer-events-none"
              />
              <button
                type="button"
                class="absolute inset-0 z-10 cursor-pointer rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                :aria-expanded="printDetailOpen"
                aria-controls="hero-print-detail-desktop"
                @click="openPrintDetail"
              >
                <span class="sr-only">{{ t('hero.printTapHint') }}</span>
              </button>
              <Transition name="hero-overlay">
                <div
                  v-if="printDetailOpen"
                  id="hero-print-detail-desktop"
                  class="absolute inset-0 z-30 flex items-center justify-center p-5 rounded-3xl bg-black/72 backdrop-blur-md"
                  role="dialog"
                  aria-modal="true"
                  @click.self="closePrintDetail"
                >
                  <div
                    class="relative rounded-2xl bg-surface-900/96 border border-slate-600/45 px-6 py-6 pt-12 max-w-sm w-full text-center shadow-2xl"
                    @click.stop
                  >
                    <button
                      type="button"
                      class="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-2xl bg-surface-700/95 hover:bg-surface-600 border border-slate-600/50 text-slate-200 hover:text-white text-xl leading-none font-bold transition-colors"
                      :aria-label="t('hero.closePrintDetail')"
                      @click="closePrintDetail"
                    >
                      ×
                    </button>
                    <p class="text-lg font-semibold text-slate-100">
                      {{ t('hero.cardTitle') }}
                    </p>
                    <p class="text-sm text-slate-400 mt-1">
                      {{ t('hero.cardSubtitle') }}
                    </p>
                    <div class="mt-3 space-y-1 text-[11px] sm:text-xs text-slate-400 text-center">
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
              </Transition>
            </div>

            <!-- Dos cartas TCG (se ocultan al abrir detalle Mimikyu) -->
            <Transition name="hero-tcg">
              <div
                v-show="!printDetailOpen"
                class="absolute z-10 w-[min(42%,9.75rem)] translate-y-5 xl:translate-y-6 -bottom-1 right-2 xl:right-4 origin-bottom-right scale-[0.88] xl:scale-[0.9] drop-shadow-2xl pointer-events-none"
              >
                <div class="relative pb-2">
                  <div
                    class="absolute bottom-2 right-5 xl:right-6 w-[68%] rounded-lg overflow-hidden border border-amber-400/40 bg-surface-950 rotate-[12deg] scale-[0.92] opacity-[0.96] shadow-lg shadow-black/50 origin-bottom-right"
                  >
                    <img
                      src="/cardmarket/fezandipiti-ex-sir.png"
                      :alt="t('hero.collageCardAlt2')"
                      class="w-full aspect-[63/88] object-cover"
                    />
                  </div>
                  <div
                    class="relative rounded-lg overflow-hidden border-2 border-amber-400/50 bg-surface-950 -rotate-11 shadow-xl shadow-black/50 translate-y-1"
                  >
                    <img
                      src="/cardmarket/piplup-098-094.png"
                      :alt="t('hero.collageCardAlt')"
                      class="w-full aspect-[63/88] object-cover"
                    />
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          <div
            v-show="!printDetailOpen"
            class="mt-2 text-center space-y-1 max-w-xs mx-auto"
          >
            <p class="text-[10px] uppercase tracking-wider text-cyan-500/90 font-semibold">
              {{ t('fusion.badgeTcg') }}
            </p>
            <p class="text-[11px] text-slate-500 px-2 leading-snug">
              {{ t('hero.tcgColumnHint') }}
            </p>
          </div>
          <p
            v-show="!printDetailOpen"
            class="mt-3 text-center text-[11px] text-slate-500 max-w-xs px-2 mx-auto"
          >
            {{ t('hero.printTapHint') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-overlay-enter-active,
.hero-overlay-leave-active {
  transition: opacity 0.22s ease;
}
.hero-overlay-enter-from,
.hero-overlay-leave-to {
  opacity: 0;
}

.hero-tcg-enter-active,
.hero-tcg-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}
.hero-tcg-enter-from,
.hero-tcg-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
