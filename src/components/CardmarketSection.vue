<script setup>
import { computed, inject } from 'vue'
import { cardmarketStock } from '../data/cardmarketStock'

const { t, locale } = inject('i18n')

const cardmarketUrl = computed(
  () =>
    `https://www.cardmarket.com/${locale.value === 'es' ? 'es' : 'en'}/Pokemon/Users/AndyBetan`,
)

function pick(obj) {
  if (!obj || typeof obj !== 'object') return ''
  const v = obj[locale.value] ?? obj.en ?? ''
  return typeof v === 'string' ? v.trim() : ''
}

function tcgName(item) {
  const n = pick(item.name)
  if (n) return n
  const num = item.number?.trim()
  const set = pick(item.setName)
  if (num && set) return `${num} · ${set}`
  return t('cardmarket.cardFallbackTitle')
}

function tcgHref(item) {
  if (item.href && item.href.trim()) return item.href.trim()
  return cardmarketUrl.value
}

function stockBadge(item) {
  const s = item.status
  if (s === 'in_stock') return t('cardmarket.stockStatus.in_stock')
  if (s === 'sold') return t('cardmarket.stockStatus.sold')
  if (s === 'coming_soon') return t('cardmarket.stockStatus.coming_soon')
  return ''
}

function badgeClassTcg(item) {
  if (item.status === 'in_stock')
    return 'bg-emerald-500/90 text-slate-950 shadow-md shadow-emerald-900/25'
  if (item.status === 'sold') return 'bg-slate-600/95 text-slate-100'
  return 'bg-amber-500/25 text-amber-200 border border-amber-400/40'
}

function tcgAspect(kind) {
  return kind === 'etb' ? 'aspect-5/4' : 'aspect-63/88'
}

function tcgCardOpacity(raw) {
  return raw.status === 'sold' ? 'opacity-[0.88]' : ''
}
</script>

<template>
  <section id="cardmarket-shop" class="section-padding scroll-mt-20 relative overflow-hidden border-t border-slate-700/40">
    <div class="relative max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">
        <div class="lg:w-[min(100%,22rem)] shrink-0">
          <p class="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-amber-400/90 mb-3">
            {{ t('cardmarket.badge') }}
          </p>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
            {{ t('cardmarket.title') }}
          </h2>
          <p class="text-slate-400 text-base leading-relaxed mb-6">
            {{ t('cardmarket.text') }}
          </p>
          <p class="text-xs text-slate-500 mb-6">
            {{ t('cardmarket.hint') }}
          </p>
          <a
            :href="cardmarketUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-linear-to-r from-amber-500 to-amber-600 text-slate-950 text-sm font-semibold shadow-lg shadow-amber-500/25 hover:brightness-105 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            {{ t('cardmarket.cta') }}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div class="flex-1 min-w-0">
          <div class="mb-6">
            <p class="text-lg font-semibold text-white">{{ t('cardmarket.stockTitle') }}</p>
            <p class="text-sm text-slate-400 mt-1">{{ t('cardmarket.stockSubtitle') }}</p>
          </div>

          <div
            class="mx-auto max-w-104 grid gap-3 sm:gap-4 grid-cols-[repeat(auto-fill,minmax(142px,168px))] sm:grid-cols-[repeat(auto-fill,minmax(152px,178px))] justify-center sm:justify-start"
          >
            <a
              v-for="(item, i) in cardmarketStock"
              :key="i"
              :href="tcgHref(item)"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'group flex flex-col rounded-2xl overflow-hidden bg-surface-900/90 border border-amber-500/18 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/15 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ring-1 ring-white/4',
                tcgCardOpacity(item),
              ]"
            >
              <div
                class="relative w-full bg-linear-to-br from-surface-800 to-surface-950 overflow-hidden"
                :class="tcgAspect(item.kind)"
              >
                <span
                  class="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
                  :class="badgeClassTcg(item)"
                >
                  {{ stockBadge(item) }}
                </span>
                <span
                  class="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-amber-500/85 text-slate-950"
                >
                  {{ t('fusion.badgeTcg') }}
                </span>
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="tcgName(item)"
                  class="absolute inset-0 w-full h-full object-contain object-center p-1.5 transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div
                  class="absolute inset-x-0 bottom-0 pt-10 pb-1.5 px-2 bg-linear-to-t from-black/90 via-black/45 to-transparent"
                >
                  <p
                    class="text-right text-sm font-bold tabular-nums text-amber-300 drop-shadow-md"
                    :class="{ 'line-through opacity-70': item.status === 'sold' }"
                  >
                    {{ item.price }}
                  </p>
                </div>
              </div>
              <div class="p-3 flex flex-col flex-1 border-t border-white/6">
                <p class="text-xs font-semibold text-white leading-snug line-clamp-2">
                  {{ tcgName(item) }}
                </p>
                <p v-if="pick(item.rarity)" class="text-[10px] text-slate-500 mt-1 line-clamp-1">
                  {{ pick(item.rarity) }}
                </p>
                <span class="text-[10px] font-medium text-amber-400/90 mt-2">
                  {{ t('cardmarket.miniLink') }}
                </span>
              </div>
            </a>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-amber-500/20 bg-surface-800/50 p-4 sm:p-5">
            <div
              class="shrink-0 w-21 h-21 rounded-2xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-400 ring-1 ring-white/4"
              aria-hidden="true"
            >
              <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6h15l-1.5 9h-12z M6 6 5 3H2M9 20a1 1 0 102 0 1 1 0 00-2 0zm8 0a1 1 0 102 0 1 1 0 00-2 0z"
                />
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-white font-semibold text-sm sm:text-base">{{ t('fusion.cardmarketStripTitle') }}</p>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">{{ t('fusion.cardmarketStripText') }}</p>
            </div>
          </div>

          <p class="mt-4 text-[11px] text-slate-600 text-center sm:text-left">
            {{ t('cardmarket.stockDisclaimer') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
