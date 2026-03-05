<script setup>
import { inject } from 'vue'

const { t } = inject('i18n')
const tiktokHandle = '@andy.3d48'
const tiktokUrl = 'https://www.tiktok.com/@andy.3d48'
</script>

<template>
  <section class="section-padding bg-surface-900">
    <div class="max-w-4xl mx-auto">
      <div
        class="rounded-3xl bg-linear-to-br from-surface-700 to-surface-800 border border-slate-600/40 p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 transition-all duration-300 hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/5"
      >
        <div class="shrink-0 w-20 h-20 rounded-2xl bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/tiktok-avatar.png"
            alt="Avatar TikTok Andy3D"
            class="w-full h-full object-contain"
          />
        </div>
        <div class="flex-1 text-center sm:text-left">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">
            {{ t('tiktok.title') }}
          </h2>
          <p class="text-slate-400 mb-4">
            {{ t('tiktok.text') }}
          </p>
          <a
            :href="tiktokUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 font-semibold text-pink-400 hover:text-pink-300 transition-colors"
          >
            <span>{{ tiktokHandle }}</span>
            <span class="text-lg">→</span>
          </a>
        </div>
        <a
          :href="tiktokUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 px-6 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-zinc-800 transition-colors"
        >
          {{ t('tiktok.follow') }}
        </a>
      </div>
    </div>
  </section>
</template>
