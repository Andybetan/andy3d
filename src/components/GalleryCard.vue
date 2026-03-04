<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageAlt: { type: String, default: '' },
})
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-3xl bg-surface-700/60 border border-slate-600/40 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
  >
    <div class="aspect-[4/3] bg-gradient-to-br from-surface-600 to-surface-800 flex items-center justify-center overflow-hidden">
      <div class="w-20 h-20 rounded-2xl bg-surface-500/50 flex items-center justify-center text-4xl opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-transform duration-500">
        <span class="text-cyan-400/80">◈</span>
      </div>
    </div>
    <div class="p-5 sm:p-6">
      <h3 class="text-lg font-semibold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
        {{ title }}
      </h3>
      <p class="text-slate-400 text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
  </article>
</template>
