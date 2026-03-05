<script setup>
import { inject, computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'

const FADE_ZONE = 200 // px sobre los que el avatar va desapareciendo al bajar

const { t } = inject('i18n')
const avatarSuccessMessage = inject('avatarSuccessMessage', ref(null))
const isHover = ref(false)
const isInHero = ref(true)
const avatarOpacity = ref(1)
const showWelcome = computed(() => isInHero.value || (avatarOpacity.value > 0 && avatarOpacity.value < 1))
const bubbleText = computed(() => {
  if (avatarSuccessMessage?.value) return avatarSuccessMessage.value
  if (showWelcome.value) return t('avatar.welcome')
  return t('avatar.bubble')
})
const showBubble = computed(() => isHover.value || !!avatarSuccessMessage?.value || showWelcome.value)

function updateVisibility() {
  if (avatarSuccessMessage?.value) {
    avatarOpacity.value = 1
    isInHero.value = false
    return
  }
  const gallery = document.getElementById('gallery')
  const contact = document.getElementById('contact')
  const center = window.scrollY + window.innerHeight / 2

  const galleryTop = gallery?.offsetTop ?? 600
  const contactTop = contact?.offsetTop ?? Number.MAX_SAFE_INTEGER

  if (center < galleryTop - 100) {
    isInHero.value = true
    avatarOpacity.value = 1
  } else if (center < galleryTop + FADE_ZONE) {
    isInHero.value = false
    const progress = (center - (galleryTop - 100)) / (FADE_ZONE + 100)
    avatarOpacity.value = Math.max(0, 1 - progress)
  } else if (center <= contactTop + 100) {
    isInHero.value = false
    avatarOpacity.value = 0
  } else {
    isInHero.value = false
    avatarOpacity.value = 1
  }
}

watch(() => avatarSuccessMessage.value, () => updateVisibility())

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

