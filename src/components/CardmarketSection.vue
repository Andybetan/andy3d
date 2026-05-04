<script setup>
import { computed, inject } from 'vue'
import { cardmarketStock } from '../data/cardmarketStock'

const { t, locale } = inject('i18n')

const cardmarketUrl = computed(
  () =>
    `https://www.cardmarket.com/${locale.value === 'es' ? 'es' : 'en'}/Pokemon/Users/AndyBetan`,
)

function itemHref(item) {
  if (item.href && item.href.trim()) return item.href.trim()
  return cardmarketUrl.value
}

function pick(obj) {
  if (!obj || typeof obj !== 'object') return ''
  const v = obj[locale.value] ?? obj.en ?? ''
  return typeof v === 'string' ? v.trim() : ''
}

function cardName(item) {
  const n = pick(item.name)
  if (n) return n
  const num = item.number?.trim()
  const set = pick(item.setName)
  if (num && set) return `${num} · ${set}`
  if (num) return num
  return t('cardmarket.cardFallbackTitle')
}

function stockBadge(item) {
  const s = item.status
  if (s === 'in_stock') return t('cardmarket.stockStatus.in_stock')
  if (s === 'sold') return t('cardmarket.stockStatus.sold')
  if (s === 'coming_soon') return t('cardmarket.stockStatus.coming_soon')
  return ''
}

function badgeClass(item) {
  if (item.status === 'in_stock')
    return 'bg-emerald-500/90 text-slate-950 shadow-lg shadow-emerald-900/30'
  if (item.status === 'sold') return 'bg-slate-600/95 text-slate-100'
  return 'bg-amber-500/25 text-amber-200 border border-amber-400/40'
}

function cardOpacity(item) {
  return item.status === 'sold' ? 'opacity-[0.88]' : ''
}

function imgAlt(item) {
  return `${cardName(item)} · ${pick(item.setName)}`
}

function mediaAspectClass(item) {
  return item.kind === 'etb' ? 'aspect-[5/4]' : 'aspect-[63/88]'
}

function placeholderCaption(item) {
  return item.kind === 'etb' ? t('cardmarket.imagePlaceholderEtb') : t('cardmarket.imagePlaceholder')
}
</script>

<template>
  <section id="cardmarket" class="section-padding bg-surface-800/40 scroll-mt-20">
    <div class="max-w-6xl mx-auto">
      <div
        class="rounded-3xl bg-linear-to-br from-surface-700 via-surface-800 to-surface-900 border border-amber-500/20 p-6 sm:p-10 lg:p-11 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 transition-all duration-300 hover:border-amber-400/35 hover:shadow-xl hover:shadow-amber-500/10 ring-1 ring-white/[0.04]"
      >
        <div
          class="shrink-0 w-[5.25rem] h-[5.25rem] sm:w-24 sm:h-24 rounded-2xl bg-linear-to-br from-amber-500/20 to-slate-900 border border-amber-500/25 flex items-center justify-center shadow-inner shadow-black/20"
          aria-hidden="true"
        >
          <svg
            class="w-14 h-14 text-amber-400/90"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="12"
              width="26"
              height="34"
              rx="3"
              stroke="currentColor"
              stroke-width="2"
              class="opacity-90"
            />
            <rect
              x="14"
              y="8"
              width="26"
              height="34"
              rx="3"
              stroke="currentColor"
              stroke-width="2"
              class="opacity-60"
            />
            <path
              d="M20 18h12M20 24h10M20 30h8"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              class="opacity-50"
            />
          </svg>
        </div>

        <div class="flex-1 text-center sm:text-left">
          <p class="text-xs font-semibold uppercase tracking-widest text-amber-400/80 mb-2">
            {{ t('cardmarket.badge') }}
          </p>
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
            {{ t('cardmarket.title') }}
          </h2>
          <p class="text-slate-400 text-sm sm:text-base mb-3 leading-relaxed">
            {{ t('cardmarket.text') }}
          </p>
          <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
            {{ t('cardmarket.hint') }}
          </p>
        </div>

        <div class="flex flex-col gap-2.5 shrink-0 w-full sm:w-auto sm:min-w-[200px]">
          <a
            :href="cardmarketUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-linear-to-r from-amber-500 to-amber-600 text-slate-950 text-sm sm:text-base font-semibold shadow-lg shadow-amber-500/25 hover:brightness-105 transition-all text-center"
          >
            {{ t('cardmarket.cta') }}
            <span aria-hidden="true">→</span>
          </a>
          <span class="text-center text-xs text-slate-500 font-mono truncate max-w-[240px] mx-auto">
            AndyBetan · Cardmarket
          </span>
        </div>
      </div>

      <div class="mt-10 sm:mt-12">
        <div class="mb-5 sm:mb-6 text-center sm:text-left">
          <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">
            {{ t('cardmarket.stockTitle') }}
          </h3>
          <p class="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto sm:mx-0">
            {{ t('cardmarket.stockSubtitle') }}
          </p>
        </div>

        <!-- Columnas de ancho acotado: tarjetas más compactas y centradas -->
        <div
          class="mx-auto w-full max-w-[26rem] sm:max-w-none grid justify-center gap-3 sm:gap-4 [grid-template-columns:repeat(auto-fill,minmax(142px,168px))] sm:[grid-template-columns:repeat(auto-fill,minmax(152px,178px))]"
        >
          <a
            v-for="(item, index) in cardmarketStock"
            :key="index"
            :href="itemHref(item)"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'group flex flex-col rounded-xl bg-surface-900/85 border border-amber-500/12 hover:border-amber-400/45 hover:shadow-lg hover:shadow-amber-500/15 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ring-1 ring-black/30',
              cardOpacity(item),
            ]"
          >
            <div
              class="relative w-full bg-linear-to-br from-surface-700 to-surface-900 overflow-hidden"
              :class="mediaAspectClass(item)"
            >
              <span
                class="absolute top-1.5 left-1.5 z-10 px-1.5 py-px rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wide"
                :class="badgeClass(item)"
              >
                {{ stockBadge(item) }}
              </span>
              <img
                v-if="item.image"
                :src="item.image"
                :alt="imgAlt(item)"
                class="absolute inset-0 w-full h-full object-contain object-center p-1 sm:p-1.5 bg-surface-950 transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div
                v-else
                class="absolute inset-0 flex flex-col items-center justify-center p-4 bg-linear-to-br from-amber-950/40 via-surface-900 to-slate-950"
              >
                <span
                  class="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-500/50 mb-1 text-center px-2"
                >
                  {{ placeholderCaption(item) }}
                </span>
                <span
                  v-if="item.kind === 'etb'"
                  class="text-xs font-black uppercase tracking-widest text-amber-400/35 select-none"
                  aria-hidden="true"
                >
                  ETB
                </span>
                <span
                  v-else
                  class="text-2xl sm:text-3xl font-black text-amber-400/25 select-none"
                  aria-hidden="true"
                >
                  ★
                </span>
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 pt-8 pb-1.5 px-2 sm:px-2.5 bg-linear-to-t from-black/92 via-black/50 to-transparent"
              >
                <p
                  class="text-right text-sm sm:text-base font-bold tabular-nums text-amber-300 drop-shadow-md"
                  :class="{ 'line-through opacity-70': item.status === 'sold' }"
                >
                  {{ item.price }}
                </p>
              </div>
            </div>
            <div class="p-2.5 sm:p-3 flex flex-col flex-1 gap-1 text-left border-t border-white/[0.06]">
              <p class="text-[11px] sm:text-xs font-semibold text-white leading-snug line-clamp-2">
                {{ cardName(item) }}
              </p>
              <p v-if="pick(item.rarity)" class="text-[10px] sm:text-[11px] text-slate-400 leading-snug line-clamp-2">
                <span class="text-slate-500">{{ t('cardmarket.labelRarity') }}</span>
                {{ pick(item.rarity) }}
              </p>
              <p v-if="item.number?.trim()" class="text-[10px] sm:text-[11px] text-slate-400 leading-snug">
                <span class="text-slate-500">{{ t('cardmarket.labelNumber') }}</span>
                {{ item.number.trim() }}
              </p>
              <p v-if="pick(item.setName)" class="text-[10px] sm:text-[11px] text-slate-500 leading-snug line-clamp-2">
                <span class="text-slate-600">{{ t('cardmarket.labelSet') }}</span>
                {{ pick(item.setName) }}
              </p>
              <p v-if="pick(item.condition)" class="text-[10px] text-slate-600 leading-snug">
                <span class="text-slate-600">{{ t('cardmarket.labelCondition') }}</span>
                {{ pick(item.condition) }}
              </p>
              <span
                class="text-[10px] sm:text-[11px] font-medium text-amber-400/85 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity"
              >
                {{ t('cardmarket.miniLink') }}
              </span>
            </div>
          </a>
        </div>

        <p class="mt-5 sm:mt-6 text-[11px] sm:text-xs text-slate-500 text-center sm:text-left max-w-2xl leading-relaxed">
          {{ t('cardmarket.stockDisclaimer') }}
        </p>
      </div>
    </div>
  </section>
</template>
