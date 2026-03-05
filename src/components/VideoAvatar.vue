<script setup>
import { inject, computed, ref, onMounted, onBeforeUnmount } from 'vue'

const { t } = inject('i18n')
const isHover = ref(false)
const isVisible = ref(true)
const bubbleText = computed(() => t('avatar.bubble'))

function updateVisibility() {
  const gallery = document.getElementById('gallery')
  const contact = document.getElementById('contact')
  const center = window.scrollY + window.innerHeight / 2

  const galleryTop = gallery?.offsetTop ?? 600
  const contactTop = contact?.offsetTop ?? Number.MAX_SAFE_INTEGER

  // Mostramos el avatar en hero (antes de la galería) y al final (después de contacto).
  // Cuando el centro de la pantalla está entre galería y contacto, lo ocultamos.
  if (center < galleryTop - 100 || center > contactTop + 100) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
  window.addEventListener('resize', updateVisibility)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
  window.removeEventListener('resize', updateVisibility)
})
</script>

<template>
  <Transition name="avatar-fade">
    <div
      v-if="isVisible"
      class="fixed z-40 right-4 bottom-24 sm:right-8 sm:bottom-10 pointer-events-none select-none"
    >
      <div
        class="pointer-events-auto flex flex-col items-end gap-2"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
      >
        <Transition name="avatar-bubble">
          <div
            v-if="isHover"
            class="max-w-xs bg-surface-800/95 border border-slate-600/60 rounded-2xl px-3.5 py-2 text-xs sm:text-sm text-slate-100 shadow-lg shadow-cyan-500/20"
          >
            {{ bubbleText }}
          </div>
        </Transition>

        <div
          class="relative w-18 h-18 sm:w-24 sm:h-24 rounded-full bg-surface-800 border border-cyan-400/60 shadow-lg shadow-cyan-500/30 overflow-hidden flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110"
          :aria-label="t('avatar.label')"
        >
          <div
            class="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl pointer-events-none"
          />
          <video
            class="relative z-10 w-full h-full object-cover scale-125 translate-y-1 rounded-full"
            src="/andy3d-avatar-circle.mp4"
            autoplay
            loop
            muted
            playsinline
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.avatar-bubble-enter-active,
.avatar-bubble-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.avatar-bubble-enter-from,
.avatar-bubble-leave-to {
  opacity: 0;
  transform: translateY(4px);
}

.avatar-fade-enter-active,
.avatar-fade-leave-active {
  transition: opacity 0.2s ease;
}
.avatar-fade-enter-from,
.avatar-fade-leave-to {
  opacity: 0;
}
</style>

