<script setup>
import { ref, inject } from 'vue'
import AppButton from './AppButton.vue'

const { t } = inject('i18n')
const showContactForm = ref(false)
const formSent = ref(false)
const form = ref({ name: '', email: '', message: '' })

function openForm() {
  showContactForm.value = true
  formSent.value = false
  form.value = { name: '', email: '', message: '' }
}

function closeForm() {
  showContactForm.value = false
}

function onSubmit(e) {
  e.preventDefault()
  formSent.value = true
  setTimeout(() => {
    closeForm()
  }, 2000)
}
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
      <AppButton variant="primary" size="lg" @click="openForm">
        {{ t('cta.button') }}
      </AppButton>
    </div>

    <!-- Modal formulario de contacto -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showContactForm"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-900/95 backdrop-blur-sm"
          @click.self="closeForm"
        >
          <div
            class="relative rounded-3xl bg-surface-800 border border-slate-600/50 shadow-2xl overflow-hidden w-full max-w-md"
            @click.stop
          >
            <button
              type="button"
              class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-2xl bg-surface-700/90 hover:bg-surface-600 border border-slate-600/50 text-slate-300 hover:text-white transition-colors"
              :aria-label="t('contactForm.close')"
              @click="closeForm"
            >
              <span class="text-xl font-bold leading-none">×</span>
            </button>

            <div class="p-6 pt-14">
              <h3 class="text-2xl font-bold text-white mb-6">
                {{ t('contactForm.title') }}
              </h3>

              <div v-if="formSent" class="py-8 text-center">
                <p class="text-cyan-400 font-medium">{{ t('contactForm.success') }}</p>
              </div>

              <form v-else class="space-y-4" @submit="onSubmit">
                <div>
                  <label :for="'contact-name'" class="block text-sm font-medium text-slate-300 mb-1.5">
                    {{ t('contactForm.name') }}
                  </label>
                  <input
                    :id="'contact-name'"
                    v-model="form.name"
                    type="text"
                    :placeholder="t('contactForm.namePlaceholder')"
                    required
                    class="w-full rounded-xl bg-surface-700/80 border border-slate-600/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                  />
                </div>
                <div>
                  <label :for="'contact-email'" class="block text-sm font-medium text-slate-300 mb-1.5">
                    {{ t('contactForm.email') }}
                  </label>
                  <input
                    :id="'contact-email'"
                    v-model="form.email"
                    type="email"
                    :placeholder="t('contactForm.emailPlaceholder')"
                    required
                    class="w-full rounded-xl bg-surface-700/80 border border-slate-600/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                  />
                </div>
                <div>
                  <label :for="'contact-message'" class="block text-sm font-medium text-slate-300 mb-1.5">
                    {{ t('contactForm.message') }}
                  </label>
                  <textarea
                    :id="'contact-message'"
                    v-model="form.message"
                    rows="4"
                    :placeholder="t('contactForm.messagePlaceholder')"
                    required
                    class="w-full rounded-xl bg-surface-700/80 border border-slate-600/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  class="w-full rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3.5 hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
                >
                  {{ t('contactForm.send') }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.2s ease;
}
.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95);
}
</style>
