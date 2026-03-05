<script setup>
import { inject, computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'

const { t } = inject('i18n')
const avatarSuccessMessage = inject('avatarSuccessMessage', ref(null))
const isHover = ref(false)
const avatarOpacity = ref(1)
const isWelcomePhase = ref(true)

const bubbleText = computed(() => {
  if (avatarSuccessMessage?.value) return avatarSuccessMessage.value
  if (isWelcomePhase.value) return t('avatar.welcome')
  return t('avatar.bubble')
})

const showBubble = computed(
  () => isHover.value || !!avatarSuccessMessage?.value || isWelcomePhase.value,
)

function updateVisibility() {
  if (avatarSuccessMessage?.value) {
    avatarOpacity.value = 1
    return
  }

  const gallery = document.getElementById('gallery')
  const contact = document.getElementById('contact')
  const center = window.scrollY + window.innerHeight / 2

  const galleryTop = gallery?.offsetTop ?? 600
  const contactTop = contact?.offsetTop ?? Number.MAX_SAFE_INTEGER

  // Entre galería y contacto: oculto
  if (center >= galleryTop - 100 && center <= contactTop + 100) {
    avatarOpacity.value = 0
    isWelcomePhase.value = false
    return
  }

  // Después de contacto: visible en modo normal
  if (center > contactTop + 100) {
    avatarOpacity.value = 1
    isWelcomePhase.value = false
    return
  }

  // En el hero dejamos que mande la animación de tiempo
}

watch(
  () => avatarSuccessMessage.value,
  () => {
    if (avatarSuccessMessage?.value) {
      avatarOpacity.value = 1
    } else {
      updateVisibility()
    }
  },
)

onMounted(() => {
  // Bienvenida: visible unos segundos y luego se desvanece sin necesidad de hacer scroll
  avatarOpacity.value = 1
  isWelcomePhase.value = true

  const timeoutId = window.setTimeout(() => {
    if (!avatarSuccessMessage?.value) {
      avatarOpacity.value = 0
      isWelcomePhase.value = false
    }
  }, 5000)

  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
  window.addEventListener('resize', updateVisibility)

  onBeforeUnmount(() => {
    window.clearTimeout(timeoutId)
    window.removeEventListener('scroll', updateVisibility)
    window.removeEventListener('resize', updateVisibility)
  })
})
</script>

<template>
  <div
    class="fixed z-40 right-4 bottom-24 sm:right-8 sm:bottom-10 pointer-events-none select-none transition-opacity duration-300 ease-out"
    :style="{ opacity: avatarOpacity }"
  >
    <div
      class="flex flex-col items-end gap-2"
      :class="avatarOpacity > 0 ? 'pointer-events-auto' : 'pointer-events-none'"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <Transition name="avatar-bubble">
        <div
          v-if="showBubble"
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

</style>

