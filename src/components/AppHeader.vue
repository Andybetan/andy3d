<script setup>
import { inject, ref } from 'vue'

const { t, locale, setLocale } = inject('i18n')
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function changeLocale(lang) {
  setLocale(lang)
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-surface-900/80 backdrop-blur-md border-b border-slate-700/50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#" class="flex items-center gap-1 text-xl font-bold text-white hover:text-cyan-400 transition-colors">
        <span>Andy</span><span class="text-cyan-400">3D</span>
      </a>

      <!-- Navegación escritorio -->
      <nav class="hidden md:flex items-center gap-8 text-sm">
        <a href="#gallery" class="text-slate-400 hover:text-white transition-colors">{{ t('nav.creations') }}</a>
        <a href="#custom" class="text-slate-400 hover:text-white transition-colors">{{ t('nav.custom') }}</a>
        <a href="#contact" class="text-slate-400 hover:text-white transition-colors">{{ t('nav.contact') }}</a>
        <div class="flex items-center gap-1 border-l border-slate-600 pl-4">
          <button
            type="button"
            :class="[
              'px-2 py-1 rounded text-xs font-medium transition-colors',
              locale === 'es' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 hover:text-slate-300',
            ]"
            @click="changeLocale('es')"
          >
            ES
          </button>
          <button
            type="button"
            :class="[
              'px-2 py-1 rounded text-xs font-medium transition-colors',
              locale === 'en' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 hover:text-slate-300',
            ]"
            @click="changeLocale('en')"
          >
            EN
          </button>
        </div>
      </nav>

      <!-- Botón menú móvil -->
      <button
        type="button"
        class="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-700/70 bg-surface-800/80 text-slate-200 hover:border-cyan-500/60 hover:text-white transition-colors w-10 h-10"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        @click="toggleMenu"
      >
        <span class="sr-only">Toggle navigation</span>
        <span
          class="relative block w-5 h-4"
        >
          <span
            class="absolute inset-x-0 top-0 h-0.5 rounded-full bg-current transition-transform duration-200"
            :class="isMenuOpen ? 'translate-y-1.5 rotate-45' : ''"
          />
          <span
            class="absolute inset-x-0 top-1.5 h-0.5 rounded-full bg-current transition-opacity duration-200"
            :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-current transition-transform duration-200"
            :class="isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''"
          />
        </span>
      </button>
    </div>

    <!-- Menú móvil -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="md:hidden border-t border-slate-700/60 bg-surface-900/95 backdrop-blur-md"
      >
        <div class="max-w-6xl mx-auto px-4 py-3 space-y-3 text-sm">
          <nav class="flex flex-col gap-2">
            <a
              href="#gallery"
              class="py-1 text-slate-200 hover:text-white transition-colors"
              @click="closeMenu"
            >
              {{ t('nav.creations') }}
            </a>
            <a
              href="#custom"
              class="py-1 text-slate-200 hover:text-white transition-colors"
              @click="closeMenu"
            >
              {{ t('nav.custom') }}
            </a>
            <a
              href="#contact"
              class="py-1 text-slate-200 hover:text-white transition-colors"
              @click="closeMenu"
            >
              {{ t('nav.contact') }}
            </a>
          </nav>

          <div class="pt-2 border-t border-slate-700/60 flex items-center justify-between">
            <span class="text-xs text-slate-500">Language</span>
            <div class="flex items-center gap-1">
              <button
                type="button"
                :class="[
                  'px-2 py-1 rounded text-xs font-medium transition-colors',
                  locale === 'es' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 hover:text-slate-300',
                ]"
                @click="changeLocale('es'); closeMenu()"
              >
                ES
              </button>
              <button
                type="button"
                :class="[
                  'px-2 py-1 rounded text-xs font-medium transition-colors',
                  locale === 'en' ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-500 hover:text-slate-300',
                ]"
                @click="changeLocale('en'); closeMenu()"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
