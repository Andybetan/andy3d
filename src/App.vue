<script setup>
import { ref, provide, onMounted } from 'vue'
import { getStoredLocale, setStoredLocale, t as translate } from './i18n'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import GallerySection from './components/GallerySection.vue'
import ProcessSection from './components/ProcessSection.vue'
import CustomOrderSection from './components/CustomOrderSection.vue'
import TikTokSection from './components/TikTokSection.vue'
import CTASection from './components/CTASection.vue'
import VideoAvatar from './components/VideoAvatar.vue'

const locale = ref(getStoredLocale())
const setLocale = (l) => {
  locale.value = l
  setStoredLocale(l)
}
const t = (key) => translate(locale.value, key)
provide('i18n', { locale, t, setLocale })

const avatarSuccessMessage = ref(null)
provide('avatarSuccessMessage', avatarSuccessMessage)

const cookiesAccepted = ref(false)
const cookiesDismissed = ref(false)
const COOKIE_KEY = 'andy3d-cookies-accepted'

const legalModal = ref(null) // 'cookies' | 'legal' | 'privacy' | null

onMounted(() => {
  try {
    cookiesAccepted.value = localStorage.getItem(COOKIE_KEY) === 'true'
  } catch (_) {
    cookiesAccepted.value = false
  }
})

function acceptCookies() {
  cookiesAccepted.value = true
  try {
    localStorage.setItem(COOKIE_KEY, 'true')
  } catch (_) {}
}

function rejectCookies() {
  // Solo ocultamos el banner en esta sesión, sin guardar consentimiento
  cookiesDismissed.value = true
}

function openLegal(type) {
  legalModal.value = type
}

function closeLegal() {
  legalModal.value = null
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface-900">
    <AppHeader />
    <main class="pt-16 flex-1">
      <HeroSection />
      <GallerySection />
      <ProcessSection />
      <CustomOrderSection />
      <TikTokSection />
      <CTASection />
    </main>

    <VideoAvatar />

    <footer class="mt-8 border-t border-slate-700/60 bg-surface-900">
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs sm:text-sm text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left"
      >
        <p>
          © 2026 Andrés Beltrán Betancourt. Todos los derechos reservados.
        </p>
        <nav class="flex flex-wrap items-center gap-3 text-slate-400 justify-center sm:justify-end">
          <button
            type="button"
            class="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            @click="openLegal('cookies')"
          >
            {{ t('legal.cookiesTitle') }}
          </button>
          <span class="text-slate-600">•</span>
          <button
            type="button"
            class="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            @click="openLegal('legal')"
          >
            {{ t('legal.legalTitle') }}
          </button>
          <span class="text-slate-600">•</span>
          <button
            type="button"
            class="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            @click="openLegal('privacy')"
          >
            {{ t('legal.privacyTitle') }}
          </button>
        </nav>
      </div>
    </footer>

    <Transition name="cookie">
      <div
        v-if="!cookiesAccepted && !cookiesDismissed"
        class="fixed inset-x-0 bottom-0 z-40"
      >
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div
            class="rounded-2xl bg-surface-800/95 border border-slate-600/60 shadow-xl backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          >
            <p class="text-xs sm:text-sm text-slate-200">
              {{ t('cookies.bannerMessage') }}
            </p>
            <div class="flex items-center gap-3 self-end sm:self-auto">
              <button
                type="button"
                class="text-xs sm:text-sm text-slate-400 hover:text-slate-200 underline decoration-slate-500/60"
                @click="openLegal('cookies')"
              >
                {{ t('cookies.moreInfo') }}
              </button>
              <button
                type="button"
                class="px-4 py-2 rounded-xl border border-slate-500/70 text-slate-100 text-xs sm:text-sm font-semibold hover:bg-surface-700/80 transition-colors"
                @click="rejectCookies"
              >
                {{ t('cookies.onlyNecessary') }}
              </button>
              <button
                type="button"
                class="px-4 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-cyan-500/30 hover:opacity-90 transition-opacity"
                @click="acceptCookies"
              >
                {{ t('cookies.acceptAll') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Modales legales -->
    <Teleport to="body">
      <Transition name="legal">
        <div
          v-if="legalModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-900/95 backdrop-blur-sm"
          @click.self="closeLegal"
        >
          <div
            class="relative rounded-3xl bg-surface-800 border border-slate-600/60 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            @click.stop
          >
            <button
              type="button"
              class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-2xl bg-surface-700/90 hover:bg-surface-600 border border-slate-600/50 text-slate-300 hover:text-white transition-colors"
              :aria-label="t('legal.close')"
              @click="closeLegal"
            >
              <span class="text-xl font-bold leading-none">×</span>
            </button>

            <div class="px-6 pt-14 pb-4 border-b border-slate-600/40">
              <h2 class="text-2xl font-bold text-white">
                <span v-if="legalModal === 'cookies'">{{ t('legal.cookiesTitle') }}</span>
                <span v-else-if="legalModal === 'legal'">{{ t('legal.legalTitle') }}</span>
                <span v-else-if="legalModal === 'privacy'">{{ t('legal.privacyTitle') }}</span>
              </h2>
            </div>

            <div class="px-6 py-4 overflow-y-auto text-sm text-slate-300 space-y-4">
              <section v-if="legalModal === 'cookies'" class="space-y-3">
                <p>{{ t('cookies.intro1') }}</p>
                <p>{{ t('cookies.intro2') }}</p>
                <p class="font-semibold text-slate-100">{{ t('cookies.typesTitle') }}</p>
                <ul class="list-disc list-inside space-y-1">
                  <li>{{ t('cookies.technical') }}</li>
                  <li>{{ t('cookies.analytics') }}</li>
                </ul>
                <p>{{ t('cookies.manage') }}</p>
              </section>

              <section v-else-if="legalModal === 'legal'" class="space-y-3">
                <p>{{ t('legalNotice.intro1') }}<span class="font-semibold">Andres Beltran Betancourt</span>.</p>
                <p>{{ t('legalNotice.intro2') }}</p>
                <p>{{ t('legalNotice.intro3') }}</p>
                <p>
                  {{ t('legalNotice.contact') }}
                  <span class="font-mono text-slate-100">info@andy3d.es</span>.
                </p>
              </section>

              <section v-else-if="legalModal === 'privacy'" class="space-y-3">
                <p>{{ t('privacy.intro1') }}</p>
                <p>{{ t('privacy.intro2') }}</p>
                <p>
                  {{ t('privacy.intro3') }}
                  <span class="font-mono text-slate-100">info@andy3d.es</span>.
                </p>
                <p>{{ t('privacy.review') }}</p>
              </section>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.cookie-enter-active,
.cookie-leave-active {
  transition: opacity 0.2s ease;
}
.cookie-enter-from,
.cookie-leave-to {
  opacity: 0;
}

.legal-enter-active,
.legal-leave-active {
  transition: opacity 0.2s ease;
}
.legal-enter-from,
.legal-leave-to {
  opacity: 0;
}
</style>
