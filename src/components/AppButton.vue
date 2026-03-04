<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', // primary | secondary | outline
  },
  size: {
    type: String,
    default: 'md', // sm | md | lg
  },
  href: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="[
      'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 ease-out',
      'hover:scale-[1.02] active:scale-[0.98]',
      {
        'bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40': variant === 'primary',
        'bg-surface-600/80 text-slate-100 border border-slate-500/50 hover:border-cyan-400/50 hover:bg-surface-500/80': variant === 'secondary',
        'bg-transparent text-cyan-400 border-2 border-cyan-400/60 hover:bg-cyan-400/10 hover:border-cyan-400': variant === 'outline',
      },
      {
        'px-4 py-2.5 text-sm': size === 'sm',
        'px-6 py-3.5 text-base': size === 'md',
        'px-8 py-4 text-lg': size === 'lg',
      },
    ]"
  >
    <slot />
  </component>
</template>
