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
        class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs sm:text-sm text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
      >
        <p>
          © 2026 Andrés Beltrán Betancourt. Todos los derechos reservados.
        </p>
        <nav class="flex flex-wrap items-center gap-3 text-slate-400">
          <button
            type="button"
            class="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            @click="openLegal('cookies')"
          >
            Política de cookies
          </button>
          <span class="text-slate-600">•</span>
          <button
            type="button"
            class="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            @click="openLegal('legal')"
          >
            Aviso legal
          </button>
          <span class="text-slate-600">•</span>
          <button
            type="button"
            class="hover:text-slate-200 transition-colors underline-offset-4 hover:underline"
            @click="openLegal('privacy')"
          >
            Política de privacidad
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
              Usamos cookies propias y de terceros para mejorar tu experiencia y analizar el uso de la web. Puedes aceptar todas las cookies o continuar solo con las necesarias.
            </p>
            <div class="flex items-center gap-3 self-end sm:self-auto">
              <button
                type="button"
                class="text-xs sm:text-sm text-slate-400 hover:text-slate-200 underline decoration-slate-500/60"
                @click="openLegal('cookies')"
              >
                Más información
              </button>
              <button
                type="button"
                class="px-4 py-2 rounded-xl border border-slate-500/70 text-slate-100 text-xs sm:text-sm font-semibold hover:bg-surface-700/80 transition-colors"
                @click="rejectCookies"
              >
                Solo necesarias
              </button>
              <button
                type="button"
                class="px-4 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white text-xs sm:text-sm font-semibold shadow-md shadow-cyan-500/30 hover:opacity-90 transition-opacity"
                @click="acceptCookies"
              >
                Aceptar todas
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
              aria-label="Cerrar"
              @click="closeLegal"
            >
              <span class="text-xl font-bold leading-none">×</span>
            </button>

            <div class="px-6 pt-14 pb-4 border-b border-slate-600/40">
              <h2 class="text-2xl font-bold text-white">
                <span v-if="legalModal === 'cookies'">Política de cookies</span>
                <span v-else-if="legalModal === 'legal'">Aviso legal</span>
                <span v-else-if="legalModal === 'privacy'">Política de privacidad</span>
              </h2>
            </div>

            <div class="px-6 py-4 overflow-y-auto text-sm text-slate-300 space-y-4">
              <section v-if="legalModal === 'cookies'" class="space-y-3">
                <p>
                  Este sitio web utiliza cookies propias y de terceros con la finalidad de mejorar la experiencia de
                  navegación, analizar el tráfico y, en su caso, mostrar contenidos personalizados relacionados con
                  impresión 3D.
                </p>
                <p>
                  Las cookies son pequeños archivos que se almacenan en tu dispositivo. Puedes configurar tu
                  navegador para bloquearlas o eliminarlas, aunque algunas funcionalidades de la web podrían dejar de
                  estar disponibles.
                </p>
                <p class="font-semibold text-slate-100">Tipos de cookies que podemos utilizar:</p>
                <ul class="list-disc list-inside space-y-1">
                  <li><span class="font-semibold">Técnicas</span>: necesarias para el funcionamiento básico de la web.</li>
                  <li><span class="font-semibold">De análisis</span>: nos ayudan a entender cómo se utiliza la web para mejorarla.</li>
                </ul>
                <p>
                  Puedes gestionar o revocar tu consentimiento desde la configuración de tu navegador en cualquier
                  momento.
                </p>
              </section>

              <section v-else-if="legalModal === 'legal'" class="space-y-3">
                <p>
                  En cumplimiento con lo dispuesto en la normativa española y europea vigente, se informa que el
                  responsable de este sitio web es <span class="font-semibold">Andres Beltran Betancourt</span>.
                </p>
                <p>
                  El contenido de esta web tiene carácter informativo y está orientado a mostrar proyectos y servicios
                  relacionados con impresión 3D personalizados. El uso del sitio web implica la aceptación de estas
                  condiciones legales.
                </p>
                <p>
                  Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa del
                  titular. Los diseños y marcas mencionados pertenecen a sus respectivos propietarios.
                </p>
                <p>
                  Para cualquier consulta relacionada con este aviso legal, puedes escribir a
                  <span class="font-mono text-slate-100">info@andy3d.es</span>.
                </p>
              </section>

              <section v-else-if="legalModal === 'privacy'" class="space-y-3">
                <p>
                  Los datos personales que puedas facilitar a través de los formularios de contacto se tratarán con la
                  finalidad de responder a tus consultas o solicitudes de presupuestos relacionados con proyectos de
                  impresión 3D.
                </p>
                <p>
                  El responsable del tratamiento es <span class="font-semibold">Andres Beltran Betancourt</span>. Tus
                  datos no se cederán a terceros salvo obligación legal. La base jurídica del tratamiento es tu
                  consentimiento, que puedes retirar en cualquier momento.
                </p>
                <p>
                  Tienes derecho a acceder, rectificar y suprimir tus datos, así como otros derechos reconocidos por la
                  normativa de protección de datos. Para ejercerlos puedes escribir a
                  <span class="font-mono text-slate-100">info@andy3d.es</span>.
                </p>
                <p>
                  Esta política se revisa periódicamente para mantenerla actualizada conforme a la normativa aplicable.
                </p>
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
