<script setup>
import AppButton from './AppButton.vue'
</script>

<template>
  <section class="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden hero-gradient">
    <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
    <div class="section-padding relative z-10 w-full">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div class="flex-1 text-center lg:text-left min-w-0">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          <span class="bg-gradient-to-r from-white via-slate-200 to-cyan-200 bg-clip-text text-transparent">
            Unique 3D Printed
          </span>
          <br />
          <span class="text-cyan-400">Creations</span>
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0">
          Design, creativity and 3D printing by Andy
        </p>
        <div class="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
          <AppButton variant="primary" size="lg" href="#gallery">
            View creations
          </AppButton>
          <AppButton variant="outline" size="lg" href="#custom">
            Request custom figure
          </AppButton>
        </div>
      </div>
      <div class="flex-1 w-full max-w-xl lg:max-w-none flex justify-center min-w-0">
        <div
            class="relative w-full aspect-square max-w-md rounded-3xl bg-gradient-to-br from-surface-700 to-surface-800 border border-slate-600/50 flex items-center justify-center overflow-hidden animate-float shadow-2xl shadow-cyan-500/10"
          >
            <div class="absolute inset-4 rounded-2xl bg-surface-600/50 flex items-center justify-center">
              <span class="text-8xl sm:text-9xl text-cyan-500/20 select-none">3D</span>
            </div>
          <div class="absolute bottom-4 left-4 right-4 h-24 rounded-xl bg-surface-900/60 backdrop-blur-sm border border-slate-600/30" />
        </div>
      </div>
    </div>
  </div>
  </section>
</template>
